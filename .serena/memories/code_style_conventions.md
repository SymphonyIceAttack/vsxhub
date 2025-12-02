# Code Style and Conventions for VSXHub

## General Principles
- **TypeScript Strict Mode**: All code must be fully typed with explicit type annotations
- **Consistency**: Follow existing patterns and conventions throughout the codebase
- **Accessibility**: Use Radix UI primitives for built-in accessibility
- **Performance**: Optimize for Core Web Vitals and user experience

## TypeScript Conventions
- Enable strict mode in `tsconfig.json`
- Use explicit type annotations for all props and variables
- Prefer interfaces for object shapes
- Use `type` for unions and complex types
- Import types explicitly: `import type { SomeType } from "module"`

## File Organization
- Use `"use client"` directive for interactive components
- Organize components in feature-based directories
- Place reusable UI components in `components/ui/`
- Use `@/*` alias for imports (configured in `tsconfig.json`)
- Follow Next.js App Router structure

## Naming Conventions
- **Components**: PascalCase (e.g., `ExtensionCard`, `SearchBar`)
- **Files**: kebab-case for pages and layouts (e.g., `about-page.tsx`)
- **Variables**: camelCase (e.g., `extensionList`, `isLoading`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Types/Interfaces**: PascalCase with descriptive names (e.g., `Post`, `ExtensionMetadata`)

## Component Structure
```typescript
// Use CVA for component variants
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const componentVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "default-styles",
      secondary: "secondary-styles"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

function Component({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof componentVariants>) {
  return (
    <div
      className={cn(componentVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Component, componentVariants };
```

## Styling Patterns
- Use Tailwind CSS v4 for all styling
- Conditional classes with `cn()` utility:
```typescript
import { cn } from "@/lib/utils";

className={cn(
  "base-classes",
  variant && componentVariants({ variant }),
  className
)}
```
- Responsive design with `md:`, `sm:` prefixes
- Dark mode support with `dark:` prefixes
- Use CSS custom properties for theming when needed

## Import Patterns
```typescript
// External libraries
import { someFunction } from "library";

// Internal utilities
import { cn } from "@/lib/utils";

// Types (explicit import)
import type { Post } from "@/lib/directus";

// Components
import { Button } from "@/components/ui/button";
```

## State Management
- Use React hooks (useState, useCallback, useEffect)
- Handle search params in client components
- Sync query parameters with URL state
- Use TanStack Query for server state management

## Directus Integration
- Define type-safe schema in `lib/directus.ts`
- Use environment variables for configuration
- Handle server-side vs client-side data fetching appropriately
- Implement proper error handling for API calls

## Accessibility Standards
- Use Radix UI primitives for built-in accessibility
- Include proper ARIA attributes when needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain sufficient color contrast

## Error Handling
- Handle errors gracefully with user-friendly messages
- Use proper error boundaries for React components
- Log errors appropriately (avoid logging sensitive data)
- Implement fallback UI for error states

## Performance Guidelines
- Implement proper code splitting
- Optimize images (though currently unoptimized for static hosting)
- Use React.memo for expensive components
- Minimize bundle size by tree-shaking unused code
- Optimize Directus API calls with caching when appropriate

## Code Quality Rules (Biome)
- Follow Biome linting rules configured in `biome.json`
- 2-space indentation
- Array index keys allowed (`noArrayIndexKey: "off"`)
- Exhaustive dependencies disabled (`useExhaustiveDependencies: "off"`)
- Next.js and React domain rules enabled
- Organize imports automatically

## Documentation
- Use JSDoc for complex functions and components
- Include prop types and descriptions
- Document component variants and their purposes
- Keep README files updated with API changes

## Security Considerations
- Never log sensitive information
- Validate and sanitize user inputs
- Use environment variables for secrets
- Implement proper CORS handling for API routes
- Follow security best practices for Next.js applications