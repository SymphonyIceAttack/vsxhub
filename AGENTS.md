# AGENTS.md

This document provides essential information for agents working in the VSXHub codebase - a Next.js application for discovering VS Code extensions with Directus CMS integration.

## Project Overview

**VSXHub** is a Next.js application that serves as a directory for VS Code extensions. It uses Directus as a headless CMS for content management, featuring a modern UI with Radix UI components and Tailwind CSS styling.

## Essential Commands

### Development
```bash
pnpm dev          # Start development server (http://localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
```

### Code Quality
```bash
pnpm lint         # Run Biome linter (biome check)
pnpm format       # Format code with Biome (biome format --write)
```

### Environment Setup
- Create `.env.local` with Directus configuration:
  - `NEXT_PUBLIC_DIRECTUS_URL` - Directus instance URL
  - `DIRECTUS_ACCESS_TOKEN` - Access token for server-side operations

## Project Structure

```
vsxhub/
├── app/                    # Next.js app directory (App Router)
│   ├── api/               # API routes
│   │   ├── draft/         # Draft post handling
│   │   └── extensions/    # Extension-related APIs
│   ├── [category]/        # Dynamic category pages
│   ├── posts/            # Blog post pages
│   └── *.tsx             # Page components
├── components/            # React components
│   ├── ui/               # Base UI components (Radix + shadcn/ui)
│   ├── blog/             # Blog-specific components
│   └── *.tsx             # Feature components
├── lib/                  # Utility libraries
│   ├── directus.ts       # Directus client configuration
│   ├── utils.ts          # General utilities
│   └── category-utils.ts # Category-specific utilities
├── public/               # Static assets
└── .github/workflows/    # CI/CD configuration
```

## Key Technologies & Patterns

### Framework & Language
- **Next.js 16+** with App Router
- **TypeScript** (strict mode enabled)
- **React 19** with modern hooks patterns

### Code Quality Tools
- **Biome** for linting and formatting (NOT ESLint/Prettier)
- Configuration in `biome.json`:
  - 2-space indentation
  - Recommended rules for Next.js and React
  - Custom rules: array index keys allowed, exhaustive dependencies disabled

### UI & Styling
- **Radix UI** primitives for accessibility
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **Class Variance Authority (CVA)** for component variants
- **clsx** + **tailwind-merge** for conditional classes

### Content Management
- **Directus SDK** for headless CMS integration
- Type-safe schema defined in `lib/directus.ts`
- Environment variables for configuration

## Code Organization Patterns

### Component Structure
- Use `"use client"` directive for interactive components
- Implement proper TypeScript types for all props
- Use CVA for component variants (see `components/ui/button.tsx`)
- Import utilities with `@/*` alias (configured in `tsconfig.json`)

### Styling Patterns
```typescript
// Conditional classes with clsx + tailwind-merge
import { cn } from "@/lib/utils";
className={cn(
  "base-classes",
  variant && buttonVariants({ variant }),
  className
)}
```

### State Management
- Use React hooks (useState, useCallback, useEffect)
- Search params handling in client components
- Query parameter sync with URL state

### Directus Integration
- Client configured in `lib/directus.ts`
- Type-safe schema with Post interface
- Environment-based configuration
- REST API with static token authentication

## Configuration Files

### package.json Scripts
- `"dev": "next dev"` - Development server
- `"build": "next build"` - Production build
- `"start": "next start"` - Start production server
- `"lint": "biome check"` - Run Biome linter
- `"format": "biome format --write"` - Format code

### next.config.ts
- TypeScript build errors ignored (`ignoreBuildErrors: true`)
- Unoptimized images for static deployment
- Remote image patterns: `symcloud.top` and all HTTPS domains
- Experimental features section (currently empty)

### biome.json
- VCS integration enabled for Git
- File includes/excludes: all files except node_modules, .next, dist, build
- Indentation: 2 spaces
- Custom rules override recommended defaults
- Next.js and React domain rules enabled

## Development Workflow

### Starting Development
1. Ensure environment variables are set in `.env.local`
2. Run `pnpm dev` to start development server
3. Access application at `http://localhost:3000`

### Code Quality Checks
1. Run `pnpm lint` to check for issues
2. Run `pnpm format` to fix formatting
3. CI runs `biome ci .` automatically on push/PR

### Adding New Features
1. Follow existing component patterns in `components/ui/` or feature folders
2. Use TypeScript strict typing
3. Implement proper accessibility with Radix UI
4. Test with Biome linting before committing

## Environment Configuration

### Required Environment Variables
- `NEXT_PUBLIC_DIRECTUS_URL` - Directus instance URL
- `DIRECTUS_ACCESS_TOKEN` - Server-side access token

### Development vs Production
- Development: Typically uses localhost Directus instance
- Production: Uses deployed Directus instance
- URLs and tokens should be managed per environment

## Testing & Quality Assurance

### Code Quality Tools
- **Biome** primary tool for linting and formatting
- GitHub Actions CI pipeline runs `biome ci .`
- No separate test framework currently configured

### Common Biome Rules Applied
- Recommended rules for JavaScript/TypeScript
- React-specific accessibility rules
- Next.js specific patterns
- Some rules disabled (see biome.json for specifics)

## Important Gotchas

### Next.js Specific
- Use `"use client"` directive for interactive components
- Dynamic imports may need proper SSR configuration
- Image optimization disabled for static hosting (`next.config.ts`)
- TypeScript errors ignored during build (`ignoreBuildErrors: true`)

### UI Components
- Components use CVA for variants (not custom styling functions)
- Always import utilities with `@/*` alias
- Use proper TypeScript typing for component props
- Accessibility built-in with Radix UI primitives

### Directus Integration
- Environment variables required for configuration
- Schema types defined centrally in `lib/directus.ts`
- Client configured with static token authentication
- Consider server-side vs client-side data fetching

### Styling
- Tailwind CSS v4 (newer version)
- Custom CSS classes may use `glass-effect`, gradients, animations
- Responsive design patterns with `md:`, `sm:` prefixes
- Dark mode support with theme provider

### Development
- No test scripts in package.json (add if testing framework needed)
- Biome configuration differs from ESLint patterns
- TypeScript strict mode enabled (be explicit with types)
- Module resolution uses `bundler` setting in tsconfig.json

## CI/CD Configuration

### GitHub Actions
- Workflow: `.github/workflows/code-quality.yml`
- Triggers: push and pull requests
- Uses Biome v2.2.4 setup action
- Runs `biome ci .` for quality checks

### Deployment
- Next.js application ready for Vercel deployment
- Static optimization enabled
- Image handling configured for static hosting

## Adding New Dependencies

### UI Libraries
- Radix UI components available: accordion, dialog, slot
- Additional Radix components can be added as needed
- Follow existing pattern in `components/ui/`

### Development Tools
- Additional scripts can be added to `package.json`
- Update `biome.json` if custom linting rules needed
- Consider TypeScript configuration updates for new features

### Content Management
- Extend Directus schema in `lib/directus.ts`
- Add new environment variables as needed
- Update API routes in `app/api/` for new content types

## Performance Considerations

- Images are unoptimized for static hosting
- Consider code splitting for large components
- Directus API calls should be optimized
- Tailwind CSS purging configured through build process
- TypeScript build errors ignored (monitor for runtime issues)