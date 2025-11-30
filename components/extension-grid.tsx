"use client";

import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { ExtensionCard } from "@/components/extension-card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface Extension {
  id: string;
  name: string;
  publisher: string;
  description: string;
  category: string;
  rating: string;
  installs: string;
  icon: string;
  extensionName: string;
}

interface ExtensionGridProps {
  category?: string;
  search?: string;
}

interface ApiResponse {
  extensions: Extension[];
  totalPages?: number;
  currentPage?: number;
  totalExtensions?: number;
}

const ITEMS_PER_PAGE = 30;

export const ExtensionGrid = memo(function ExtensionGrid({
  category = "all",
  search = "",
}: ExtensionGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  console.log(
    "[v0] ExtensionGrid rendering with category:",
    category,
    "search:",
    search,
    "page:",
    currentPage,
  );

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["extensions", category, search, currentPage],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (category && category !== "all") params.append("category", category);
      if (search) params.append("search", search);
      params.append("page", currentPage.toString());
      params.append("limit", ITEMS_PER_PAGE.toString());

      console.log("[v0] Fetching extensions with params:", params.toString());
      const response = await fetch(
        `https://vsxhub-proxy.1994370030.workers.dev?${params.toString()}`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch extensions");
      }

      const result = await response.json();
      console.log("[v0] Fetched extensions count:", result.extensions.length);

      return result as ApiResponse;
    },
  });

  // Reset to page 1 when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category, search]);

  // Update total pages when data changes
  useEffect(() => {
    if (data?.totalPages) {
      setTotalPages(data.totalPages);
    } else if (data?.extensions && data.extensions.length < ITEMS_PER_PAGE) {
      // If we get fewer results than items per page, this might be the last page
      setTotalPages(currentPage);
    } else if (data?.extensions && data.extensions.length === ITEMS_PER_PAGE) {
      // If we get exactly the page size, there might be more pages
      setTotalPages(currentPage + 1);
    }
  }, [data, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5; // Number of page buttons to show

    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    const endPage = Math.min(totalPages, startPage + showPages - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  if (isLoading && currentPage === 1) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-destructive mb-4">
          Failed to load extensions. Please try again later.
        </p>
        <Button onClick={() => refetch()} variant="outline">
          Retry
        </Button>
      </div>
    );
  }

  const extensions = data?.extensions || [];

  if (extensions.length === 0 && !isLoading) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No extensions found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Extensions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {extensions.map((extension: Extension) => (
          <ExtensionCard key={extension.id} extension={extension} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6">
        {/* Navigation Row */}
        <div className="flex items-center justify-center space-x-2 w-full sm:w-auto">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevPage}
            disabled={currentPage === 1 || isLoading}
            className="flex items-center gap-1 min-w-[80px] sm:min-w-[90px]"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden xs:inline">Previous</span>
            <span className="xs:hidden">Prev</span>
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-1 max-w-[200px] sm:max-w-none overflow-x-auto">
            {/* First page */}
            {getPageNumbers()[0] > 1 && (
              <>
                <Button
                  variant={currentPage === 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(1)}
                  disabled={isLoading}
                  className="min-w-[40px] flex-shrink-0"
                >
                  1
                </Button>
                {getPageNumbers()[0] > 2 && (
                  <span className="px-1 text-muted-foreground flex-shrink-0">
                    ...
                  </span>
                )}
              </>
            )}

            {/* Page numbers */}
            {getPageNumbers().map((pageNum) => (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(pageNum)}
                disabled={isLoading}
                className="min-w-[40px] flex-shrink-0"
              >
                {pageNum}
              </Button>
            ))}

            {/* Last page */}
            {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
              <>
                {getPageNumbers()[getPageNumbers().length - 1] <
                  totalPages - 1 && (
                  <span className="px-1 text-muted-foreground flex-shrink-0">
                    ...
                  </span>
                )}
                <Button
                  variant={currentPage === totalPages ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={isLoading}
                  className="min-w-[40px] flex-shrink-0"
                >
                  {totalPages}
                </Button>
              </>
            )}

            {/* Show page 1 if no other pages and totalPages is 1 */}
            {totalPages === 1 && (
              <Button
                variant="default"
                size="sm"
                disabled={true}
                className="min-w-[40px] flex-shrink-0"
              >
                1
              </Button>
            )}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages || isLoading}
            className="flex items-center gap-1 min-w-[80px] sm:min-w-[90px]"
          >
            <span className="hidden xs:inline">Next</span>
            <span className="xs:hidden">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Page info - moved below on mobile */}
        <div className="text-center text-sm text-muted-foreground w-full sm:w-auto">
          Page {currentPage} of {totalPages}
          {data?.totalExtensions && (
            <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">
              ({data.totalExtensions} total extensions)
            </span>
          )}
        </div>
      </div>

      {/* Loading indicator for page changes */}
      {isLoading && currentPage > 1 && (
        <div className="flex items-center justify-center py-4">
          <Spinner className="h-6 w-6" />
          <span className="ml-2 text-sm text-muted-foreground">
            Loading page {currentPage}...
          </span>
        </div>
      )}

      {/* Page info */}
      <div className="text-center text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
        {data?.totalExtensions && (
          <span className="ml-2">
            ({data.totalExtensions} total extensions)
          </span>
        )}
      </div>
    </div>
  );
});
