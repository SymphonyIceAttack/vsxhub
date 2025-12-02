# VSXHub Project Overview

## Project Purpose
**VSXHub** is a Next.js application that serves as a directory for VS Code extensions. It provides a curated collection of the most popular and useful Visual Studio Code extensions to boost development productivity. Users can browse by category, search, and find the perfect extensions for their workflow.

## Tech Stack
- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript (strict mode enabled)
- **UI Library**: React 19 with modern hooks patterns
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives for accessibility
- **Icons**: Lucide React
- **CMS**: Directus SDK for headless content management
- **Code Quality**: Biome (linting and formatting)
- **Package Manager**: pnpm
- **Deployment**: Vercel-ready

## Key Features
- Browse VS Code extensions by category
- Search functionality for finding extensions
- Blog system for extension reviews and guides
- Dark mode support
- Responsive design
- SEO optimized with comprehensive metadata
- Analytics integration with Vercel Analytics

## Environment Configuration
- **Development**: Typically uses localhost Directus instance
- **Production**: Uses deployed Directus instance
- Environment variables required:
  - `NEXT_PUBLIC_DIRECTUS_URL` - Directus instance URL
  - `DIRECTUS_ACCESS_TOKEN` - Server-side access token

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

## Target Audience
- Developers using Visual Studio Code
- Teams looking to improve productivity with extensions
- Web developers, software engineers, and coding enthusiasts
- People seeking curated, quality extensions rather than browsing the VS Code marketplace

## Business Goals
- Provide a curated, high-quality directory of VS Code extensions
- Help developers discover extensions that improve their workflow
- Offer detailed information and reviews for extensions
- Build a community around VS Code extension discovery

## Performance Considerations
- Images are unoptimized for static hosting
- Consider code splitting for large components
- Directus API calls should be optimized
- Tailwind CSS purging configured through build process
- TypeScript build errors monitored for runtime issues