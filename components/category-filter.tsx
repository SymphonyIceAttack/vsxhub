"use client";

import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "All" },
  { id: "AI", label: "AI" },
  { id: "Programming Languages", label: "Programming Languages" },
  { id: "Themes", label: "Themes" },
  { id: "Debuggers", label: "Debuggers" },
  { id: "Formatters", label: "Formatters" },
  { id: "Linters", label: "Linters" },
  { id: "Snippets", label: "Snippets" },
  { id: "Testing", label: "Testing" },
  { id: "Data Science", label: "Data Science" },
  { id: "Machine Learning", label: "Machine Learning" },
  { id: "Extension Packs", label: "Extension Packs" },
  { id: "Language Packs", label: "Language Packs" },
  { id: "SCM Providers", label: "SCM Providers" },
  { id: "Notebooks", label: "Notebooks" },
  { id: "Visualization", label: "Visualization" },
];

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selected === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onSelect(category.id)}
          className="rounded-full"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
