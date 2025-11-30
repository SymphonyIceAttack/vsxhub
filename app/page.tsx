"use client";

import {
  BookOpen,
  Code2,
  HelpCircle,
  Info,
  Mail,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { CategoryFilter } from "@/components/category-filter";
import { ExtensionGrid } from "@/components/extension-grid";
import { MobileMenu } from "@/components/mobile-menu";
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
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-6">
          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between md:mb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg animate-pulse">
                  <Code2 className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <Info className="h-4 w-4" />
                  <span className="hidden lg:inline">About</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden lg:inline">Contact</span>
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span className="hidden lg:inline">FAQ</span>
                </Button>
              </Link>
              <Link href="/privacy">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <Shield className="h-4 w-4" />
                  <span className="hidden lg:inline">Privacy</span>
                </Button>
              </Link>
              <Link href="/posts">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden lg:inline">Blog</span>
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Hero section */}
        <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in opacity-80">
            Supercharge Your Development
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover the most popular and powerful Visual Studio Code extensions
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
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
