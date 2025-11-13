// Category slug utilities for URL-friendly category names

export const categories = [
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
] as const;

// Convert category name to URL slug (lowercase with hyphens)
export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

// Convert URL slug back to category name
export function slugToCategory(slug: string): string {
  // Find matching category by comparing slugified versions
  const category = categories.find((cat) => categoryToSlug(cat.id) === slug);
  return category ? category.id : slug;
}

// Get category label from slug
export function getCategoryLabel(slug: string): string {
  const categoryId = slugToCategory(slug);
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.label : categoryId;
}
