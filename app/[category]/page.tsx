"use client";

import { Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { CategoryFilter } from "@/components/category-filter";
import { ExtensionGrid } from "@/components/extension-grid";
import { MobileMenu } from "@/components/mobile-menu";
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
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-6">
          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between md:mb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="/"
                  className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg">
                    <Code2 className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      VSCode Extensions
                    </h1>
                    <div className="flex items-center gap-1 text-xs text-accent">
                      <Sparkles className="h-3 w-3" />
                      <span className="hidden sm:inline">{categoryLabel}</span>
                      <span className="sm:hidden">{categoryLabel}</span>
                    </div>
                  </div>
                </Link>
              </div>
              {/* Mobile Navigation - Menu and Theme Toggle */}
              <div className="md:hidden flex items-center gap-2">
                <MobileMenu />
                <ThemeToggle />
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <Link href="/about">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
                  About
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
                  Contact
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
                  FAQ
                </Button>
              </Link>
              <Link href="/privacy">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
                  Privacy
                </Button>
              </Link>
              <Link href="/posts">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
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
          <h2 className="text-4xl font-bold text-balance text-foreground">
            {categoryLabel} Extensions
          </h2>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          <Breadcrumb />
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
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse-gentle"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse-gentle delay-100"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-secondary animate-pulse-gentle delay-200"></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
