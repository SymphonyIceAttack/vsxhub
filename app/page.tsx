"use client";

import { Code2 } from "lucide-react";
import { useState } from "react";
import { CategoryFilter } from "@/components/category-filter";
import { ExtensionGrid } from "@/components/extension-grid";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-balance">
              VSCode Extensions
            </h1>
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
          <SearchBar onSearch={setSearch} />
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        {/* Extensions Grid */}
        <ExtensionGrid category={category} search={search} />
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
