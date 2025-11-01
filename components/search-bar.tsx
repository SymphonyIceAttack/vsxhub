"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export function SearchBar({ onSearch, initialValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 500); // Debounce search by 500ms

    return () => clearTimeout(timer);
  }, [query, onSearch]);

  useEffect(() => {
    setQuery(initialValue);
  }, [initialValue]);

  return (
    <div className="relative max-w-2xl">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search extensions by name or functionality..."
        className="pl-10 h-12 bg-card"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
