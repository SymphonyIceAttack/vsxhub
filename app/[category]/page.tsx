"use client";

import { BookOpen, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { CategoryFilter } from "@/components/category-filter";
import { ExtensionGrid } from "@/components/extension-grid";
import { SearchBar } from "@/components/search-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  categoryToSlug,
  getCategoryLabel,
  slugToCategory,
} from "@/lib/category-utils";

export default function CategoryPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const slug = params.category as string;
  const category = slugToCategory(slug);
  const categoryLabel = getCategoryLabel(slug);

  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearchChange = useCallback(
    (newSearch: string) => {
      setSearch(newSearch);
      const searchParam = newSearch
        ? `?search=${encodeURIComponent(newSearch)}`
        : "";
      window.history.pushState(
        {},
        "",
        `/${categoryToSlug(category)}${searchParam}`,
      );
    },
    [category],
  );

  return (
    <div className="min-h-screen">
      <header className="glass-effect sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg animate-pulse">
                <Code2 className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  VSCode Extensions
                </h1>
                <div className="flex items-center gap-1 text-xs text-accent">
                  <Sparkles className="h-3 w-3" />
                  <span>{categoryLabel}</span>
                </div>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border-2 hover:scale-105 transition-transform bg-transparent"
                >
                  <BookOpen className="h-4 w-4" />
                  Blog
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Category title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {categoryLabel} Extensions
          </h2>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          <SearchBar onSearch={handleSearchChange} initialValue={search} />
          <CategoryFilter currentCategory={category} />
        </div>

        {/* Extensions Grid */}
        <ExtensionGrid category={category} search={search} />
      </main>

      <footer className="glass-effect mt-16 py-8 border-t-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Curated Best VSCode Extensions · Continuously Updated
          </p>
          <div className="mt-2 flex justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-secondary animate-pulse delay-100"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse delay-200"></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
