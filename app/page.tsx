"use client";

import { BookOpen, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { CategoryFilter } from "@/components/category-filter";
import { ExtensionGrid } from "@/components/extension-grid";
import { FaqDialog } from "@/components/faq-dialog";
import { SearchBar } from "@/components/search-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearchChange = useCallback((newSearch: string) => {
    setSearch(newSearch);
    const searchParam = newSearch
      ? `?search=${encodeURIComponent(newSearch)}`
      : "";
    window.history.pushState({}, "", `/${searchParam}`);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="glass-effect sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:mb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg animate-pulse">
                  <Code2 className="h-5 w-5 md:h-7 md:w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl md:text-3xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    VSCode Extensions
                  </h1>
                  <div className="flex items-center gap-1 text-xs text-accent">
                    <Sparkles className="h-3 w-3" />
                    <span className="hidden sm:inline">
                      Discover Amazing Extensions
                    </span>
                    <span className="sm:hidden">Discover Extensions</span>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <ThemeToggle />
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <FaqDialog />
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border-2 hover:scale-105 transition-transform bg-transparent text-sm md:text-base"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden md:inline">Blog</span>
                </Button>
              </Link>
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in opacity-80">
            Supercharge Your Development
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover the most popular and powerful Visual Studio Code extensions
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          <SearchBar onSearch={handleSearchChange} initialValue={search} />
          <CategoryFilter currentCategory="all" />
        </div>

        {/* Extensions Grid */}
        <ExtensionGrid category="all" search={search} />
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
