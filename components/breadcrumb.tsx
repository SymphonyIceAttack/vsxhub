"use client";

import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const pathname = usePathname();

  // Generate breadcrumbs based on current path if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

    // Skip the first segment (empty string) and handle dynamic routes
    for (let i = 1; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      const href = `/${pathSegments.slice(0, i + 1).join("/")}`;

      // Handle dynamic routes like [category]
      if (segment.includes("[")) {
        const categoryMap: { [key: string]: string } = {
          "[category]": "Extensions",
          ai: "AI Extensions",
          testing: "Testing Extensions",
          debugging: "Debugging Extensions",
          productivity: "Productivity Extensions",
          themes: "Theme Extensions",
          linting: "Linting Extensions",
          snippets: "Snippet Extensions",
        };
        breadcrumbs.push({
          label:
            categoryMap[segment] ||
            segment.charAt(0).toUpperCase() + segment.slice(1),
          href,
        });
      } else {
        const label =
          segment.replace(/-/g, " ").charAt(0).toUpperCase() +
          segment.replace(/-/g, " ").slice(1);
        breadcrumbs.push({ label, href });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  // Don't show breadcrumbs if only home page
  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav
      className={`flex items-center space-x-1 text-sm text-muted-foreground ${className || ""}`}
      aria-label="Breadcrumb"
    >
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/50" />
          )}
          {item.href && index < breadcrumbItems.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              {index === 0 && <Home className="h-4 w-4" />}
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium flex items-center gap-1">
              {index === 0 && <Home className="h-4 w-4" />}
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
