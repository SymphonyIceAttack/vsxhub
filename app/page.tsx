"use client";

import { BookOpen, Code2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CategoryFilter } from "@/components/category-filter";
import { ExtensionGrid } from "@/components/extension-grid";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";

export default function Home() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch);
    const searchParam = newSearch
      ? `?search=${encodeURIComponent(newSearch)}`
      : "";
    window.history.pushState({}, "", `/${searchParam}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Code2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-balance">
                VSCode Extensions
              </h1>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="gap-2 bg-transparent">
                <BookOpen className="h-4 w-4" />
                Blog
              </Button>
            </Link>
          </div>
          <p className="text-muted-foreground text-pretty">
            Discover the most popular and useful Visual Studio Code extensions
            to boost your development productivity
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-6">
          <SearchBar onSearch={handleSearchChange} initialValue={search} />
          <CategoryFilter currentCategory="all" />
        </div>

        {/* Extensions Grid */}
        <ExtensionGrid category="all" search={search} />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Curated Best VSCode Extensions · Continuously Updated</p>
        </div>
      </footer>
    </div>
  );
}
