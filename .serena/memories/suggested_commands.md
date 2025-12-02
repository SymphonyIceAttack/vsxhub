# Suggested Commands for VSXHub Development

## Essential Development Commands

### Development Server
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

### Package Manager
```bash
pnpm install      # Install dependencies
pnpm add <package> # Add new dependency
pnpm remove <package> # Remove dependency
```

### Git Commands
```bash
git status        # Check git status
git add .         # Stage all changes
git commit -m "message" # Commit changes
git push          # Push to remote
git pull          # Pull from remote
```

### System Commands (Darwin/macOS)
```bash
ls -la           # List files with details
cd <directory>   # Change directory
grep -r "pattern" <directory> # Search for pattern in files
find <directory> -name "*.tsx" # Find TypeScript React files
```

## Project-Specific Commands

### Next.js
```bash
npx next dev     # Alternative to pnpm dev
npx next build   # Alternative to pnpm build
npx next start   # Alternative to pnpm start
```

### TypeScript
```bash
npx tsc --noEmit # Type check without emitting files
```

### Project Analysis
```bash
tree -I node_modules . # Show project structure (install tree: brew install tree)
du -sh *               # Show directory sizes
```

## CI/CD Commands (Local Testing)
```bash
# Test CI pipeline locally
npx @biomejs/biome@2.2.4 ci .
```

## Troubleshooting
```bash
# Clean build artifacts
rm -rf .next dist build

# Clear package manager cache
pnpm store prune

# Check for outdated dependencies
pnpm outdated
```