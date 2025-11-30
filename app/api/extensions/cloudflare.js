// This is the Cloudflare Worker script.

export default {
  async fetch(request, _env, _ctx) {
    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return handleOptions(request);
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const page = Number.parseInt(searchParams.get("page") || "1", 10);
    const limit = Number.parseInt(searchParams.get("limit") || "30", 10);

    try {
      // VSCode Marketplace API endpoint
      const apiUrl =
        "https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery";

      // Build filters
      const criteria = [
        { filterType: 8, value: "Microsoft.VisualStudio.Code" },
        { filterType: 12, value: "37888" },
      ];

      if (category && category !== "all") {
        criteria.push({ filterType: 5, value: category });
      }

      if (search) {
        criteria.push({ filterType: 10, value: search });
      }

      const filters = [
        {
          criteria,
          pageNumber: page,
          pageSize: Math.max(50, limit), // Use at least 50 to ensure we have enough data
          sortBy: 4, // 4 = InstallCount
          sortOrder: 2, // 2 = Descending (high to low)
        },
      ];

      const requestBody = {
        filters,
        assetTypes: [],
        flags: 914, // Flags to get all necessary data
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json;api-version=3.0-preview.1",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      // Get total count from the response
      const totalCount = data.results[0]?.resultMetadata?.[0]?.count || 0;

      // Transform the data to our format
      const allExtensions =
        data.results[0]?.extensions.map((ext) => {
          const installs =
            ext.statistics.find((s) => s.statisticName === "install")?.value ||
            0;
          const rating =
            ext.statistics.find((s) => s.statisticName === "averagerating")
              ?.value || 0;

          const extCategory = ext.categories?.[0] || ext.tags?.[0] || "Other";

          const latestVersion = ext.versions?.[0];

          let iconUrl = "/placeholder.svg?height=64&width=64";

          if (latestVersion?.files) {
            const iconFile = latestVersion.files.find(
              (file) =>
                file.assetType ===
                "Microsoft.VisualStudio.Services.Icons.Default",
            );
            if (iconFile?.source) {
              iconUrl = iconFile.source;
            }
          }

          if (
            iconUrl === "/placeholder.svg?height=64&width=64" &&
            latestVersion?.assetUri
          ) {
            iconUrl = `${latestVersion.assetUri}/Microsoft.VisualStudio.Services.Icons.Default`;
          }

          return {
            id: ext.extensionId,
            name: ext.displayName,
            publisher: ext.publisher.displayName,
            description: ext.shortDescription || "",
            category: extCategory,
            categories: ext.categories || [],
            rating: rating ? ((rating / 5) * 5).toFixed(1) : "4.5",
            installs: formatInstalls(installs),
            installCount: installs,
            icon: iconUrl,
            extensionName: `${ext.publisher.publisherName}.${ext.extensionName}`,
          };
        }) || [];

      // Sort by install count (high to low)
      allExtensions.sort((a, b) => b.installCount - a.installCount);

      // Return only the requested number of extensions
      const extensions = allExtensions.slice(0, limit);

      const responseHeaders = {
        "Content-Type": "application/json",
        // Cache for 5 minutes on CDN/edge, allow stale content for 10 minutes while revalidating
        "Cache-Control":
          "public, s-maxage=300, stale-while-revalidate=600, max-age=60",
        // Add Vary header to cache different responses for different query params
        Vary: "Accept-Encoding",
        // Add CORS headers to allow requests from any origin
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      };

      return new Response(
        JSON.stringify({
          extensions,
          totalPages: Math.ceil(totalCount / limit), // Calculate based on requested limit
          currentPage: page,
          totalExtensions: totalCount,
        }),
        {
          headers: responseHeaders,
        },
      );
    } catch (error) {
      console.error("[v0] Error fetching extensions:", error);
      const errorResponseHeaders = {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      };
      return new Response(
        JSON.stringify({ error: "Failed to fetch extensions" }),
        {
          status: 500,
          headers: errorResponseHeaders,
        },
      );
    }
  },
};

function formatInstalls(installs) {
  if (installs >= 1000000) {
    return `${(installs / 1000000).toFixed(1)}M+`;
  } else if (installs >= 1000) {
    return `${(installs / 1000).toFixed(1)}K+`;
  }
  return `${installs}+`;
}

function handleOptions(request) {
  const headers = request.headers;
  if (
    headers.get("Origin") !== null &&
    headers.get("Access-Control-Request-Method") !== null &&
    headers.get("Access-Control-Request-Headers") !== null
  ) {
    // Handle CORS preflight requests.
    const respHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400", // 24 hours
    };
    return new Response(null, { headers: respHeaders });
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        Allow: "GET, HEAD, OPTIONS",
      },
    });
  }
}
