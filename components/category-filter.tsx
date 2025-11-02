"use client";

import Link from "next/link";
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
  currentCategory: string;
}

export function CategoryFilter({ currentCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const href =
          category.id === "all" ? "/" : `/${encodeURIComponent(category.id)}`;
        const isActive = currentCategory === category.id;

        return (
          <Link key={category.id} href={href}>
            <Button
              variant={isActive ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              asChild
            >
              <span>{category.label}</span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
