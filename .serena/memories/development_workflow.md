# Development Workflow for VSXHub

## Getting Started

### Initial Setup
1. **Environment Configuration**
   - Create `.env.local` file with required environment variables:
     - `NEXT_PUBLIC_DIRECTUS_URL` - Directus instance URL
     - `DIRECTUS_ACCESS_TOKEN` - Server-side access token

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Start Development Server**
   ```bash
   pnpm dev
   ```

4. **Access Application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Process

### Feature Development Workflow
1. **Create Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Develop Feature**
   - Follow component patterns in `components/ui/` or feature folders
   - Use TypeScript strict typing
   - Implement proper accessibility with Radix UI
   - Test with Biome linting before committing

3. **Code Quality Checks**
   ```bash
   pnpm lint    # Check for issues
   pnpm format  # Fix formatting
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Push and Create PR**
   ```bash
   git push -u origin feature/your-feature-name
   ```

### Component Development Guidelines

#### Creating New Components
1. **Location**
   - Reusable UI components: `components/ui/`
   - Feature-specific components: `components/[feature]/`
   - Blog components: `components/blog/`

2. **Structure Pattern**
   ```typescript
   // Use this pattern for consistency
   import { Slot } from "@radix-ui/react-slot";
   import { cva, type VariantProps } from "class-variance-authority";
   import type * as React from "react";
   
   import { cn } from "@/lib/utils";
   
   const componentVariants = cva("base-styles", {
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
     asChild = false,
     ...props
   }: React.ComponentProps<"div"> &
     VariantProps<typeof componentVariants> & {
       asChild?: boolean;
     }) {
     const Comp = asChild ? Slot : "div";
     
     return (
       <Comp
         className={cn(componentVariants({ variant, className }))}
         {...props}
       />
     );
   }
   
   export { Component, componentVariants };
   ```

3. **Client-Side Components**
   - Add `"use client"` directive for interactive components
   - Use for components with useState, useEffect, or event handlers

#### Styling Guidelines
- Use Tailwind CSS v4 utilities
- Follow responsive design patterns with `sm:`, `md:`, `lg:` prefixes
- Support dark mode with `dark:` variants
- Use CSS custom properties for complex theming

### API Development

#### Directus Integration
1. **Schema Definition**
   - Add types to `lib/directus.ts`
   - Define interfaces for all data structures
   - Use proper TypeScript types

2. **Environment Setup**
   - Store configuration in environment variables
   - Handle missing configuration gracefully
   - Use different URLs/tokens for dev vs production

3. **Data Fetching**
   - Use TanStack Query for client-side data fetching
   - Implement proper caching strategies
   - Handle loading and error states

### State Management
- Use React hooks for local component state
- Handle search parameters in client components
- Sync query parameters with URL state
- Use TanStack Query for server state management

### Testing Strategy
- Currently no test framework configured
- Consider adding testing if needed:
  - Unit tests with Vitest or Jest
  - Component tests with React Testing Library
  - E2E tests with Playwright or Cypress

## Performance Considerations

### Code Splitting
- Use dynamic imports for large components
- Implement proper lazy loading
- Minimize bundle size

### Image Optimization
- Note: Images are currently unoptimized for static hosting
- Consider enabling Next.js Image optimization for production
- Use appropriate image formats and sizes

### Directus Optimization
- Cache API responses when appropriate
- Optimize queries to fetch only needed data
- Implement pagination for large datasets

## Accessibility Development
- Use Radix UI primitives for built-in accessibility
- Test keyboard navigation
- Ensure proper ARIA attributes
- Maintain color contrast standards
- Test with screen readers

## Debugging and Troubleshooting

### Common Development Issues
1. **Type Errors**
   - Ensure strict TypeScript compliance
   - Check for implicit `any` types
   - Verify import paths and aliases

2. **Build Issues**
   - Clear `.next` directory: `rm -rf .next`
   - Check for circular dependencies
   - Verify environment variables

3. **Directus Connection Issues**
   - Verify environment variables are set
   - Check Directus server status
   - Validate API tokens and permissions

### Debug Commands
```bash
# Type checking
npx tsc --noEmit

# Clean build
rm -rf .next dist build

# Check bundle analyzer (if needed)
ANALYZE=true pnpm build
```

## Deployment Workflow
1. **Build Check**
   ```bash
   pnpm build
   ```

2. **Production Testing**
   ```bash
   pnpm start
   ```

3. **Deploy to Vercel**
   - Push to main branch triggers automatic deployment
   - Environment variables configured in Vercel dashboard

## Code Review Guidelines
- Ensure TypeScript strict compliance
- Check accessibility implementations
- Verify responsive design
- Validate performance impact
- Ensure proper error handling
- Check for security considerations

## Maintaining Code Quality
- Run `pnpm lint` before committing
- Run `pnpm format` to fix formatting
- Follow established patterns and conventions
- Document complex functionality
- Test changes thoroughly