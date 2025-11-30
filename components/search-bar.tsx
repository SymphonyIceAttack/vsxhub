"use client";

import { Search } from "lucide-react";
import { memo, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export const SearchBar = memo(function SearchBar({
  onSearch,
  initialValue = "",
}: SearchBarProps) {
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
    <div className="relative max-w-2xl mx-auto px-2 sm:px-0">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary z-10" />
      <Input
        type="search"
        placeholder="Search extensions by name or functionality..."
        className="pl-12 h-12 sm:h-14 glass-effect border-2 text-base sm:text-lg focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all rounded-xl"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
});
