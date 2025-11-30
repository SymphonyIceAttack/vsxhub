"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories, categoryToSlug } from "@/lib/category-utils";

interface CategoryFilterProps {
  currentCategory: string;
}

export function CategoryFilter({ currentCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => {
        const href =
          category.id === "all" ? "/" : `/${categoryToSlug(category.id)}`;
        const isActive = currentCategory === category.id;

        return (
          <Link key={category.id} href={href}>
            <Button
              variant={isActive ? "default" : "outline"}
              size="sm"
              className={`
                rounded-full px-5 py-2 font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-primary hover:bg-primary/90 shadow-md"
                    : "glass-effect border hover:border-primary"
                }
              `}
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
