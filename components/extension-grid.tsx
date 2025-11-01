"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { ExtensionCard } from "@/components/extension-card";
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

export function ExtensionGrid({
  category = "all",
  search = "",
}: ExtensionGridProps) {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["extensions", category, search],
    queryFn: async ({ pageParam = 1 }) => {
      const params = new URLSearchParams();
      if (category && category !== "all") params.append("category", category);
      if (search) params.append("search", search);
      params.append("page", pageParam.toString());

      const response = await fetch(`/api/extensions?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Failed to fetch extensions");
      }

      const result = await response.json();
      return {
        extensions: result.extensions as Extension[],
        nextPage: pageParam + 1,
        hasMore: result.extensions.length > 0,
      };
    },
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextPage : undefined;
    },
    initialPageParam: 1,
  });

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-destructive">
          Failed to load extensions. Please try again later.
        </p>
      </div>
    );
  }

  const allExtensions = data?.pages.flatMap((page) => page.extensions) || [];

  if (allExtensions.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">No extensions found</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allExtensions.map((extension) => (
          <ExtensionCard key={extension.id} extension={extension} />
        ))}
      </div>

      <div ref={loadMoreRef} className="flex items-center justify-center py-8">
        {isFetchingNextPage && <Spinner className="h-6 w-6" />}
        {!hasNextPage && allExtensions.length > 0 && (
          <p className="text-muted-foreground text-sm">All extensions loaded</p>
        )}
      </div>
    </div>
  );
}
