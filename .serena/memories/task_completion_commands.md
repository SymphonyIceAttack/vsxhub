# Task Completion Commands for VSXHub

## Always Run These Commands After Making Changes

### Code Quality Checks (Mandatory)
```bash
pnpm lint         # Run Biome linter to check for issues
pnpm format       # Format code with Biome
```

### Type Safety Verification
```bash
npx tsc --noEmit  # Type check without emitting files
```

### Build Verification
```bash
pnpm build        # Verify production build works
```

### Local Testing
```bash
pnpm start        # Test production build locally
```

## Before Committing Changes

### Complete Checklist
1. **Code Quality**
   ```bash
   pnpm lint && pnpm format
   ```

2. **Type Safety**
   ```bash
   npx tsc --noEmit
   ```

3. **Build Test**
   ```bash
   pnpm build
   ```

4. **Development Server Check**
   ```bash
   pnpm dev
   # Test the application manually in browser
   ```

### Git Commands
```bash
git add .                    # Stage all changes
git status                   # Review staged changes
git commit -m "descriptive message"  # Commit with clear description
```

## CI/CD Testing (Local Verification)

### Test CI Pipeline
```bash
# Test the exact command used in CI
npx @biomejs/biome@2.2.4 ci .
```

### Environment Testing
```bash
# Test different environments if applicable
pnpm build && pnpm start    # Test production build
```

## Performance Verification

### Bundle Analysis (if needed)
```bash
ANALYZE=true pnpm build     # Analyze bundle size
```

### Performance Check
```bash
# Test Core Web Vitals
# Use browser dev tools or Lighthouse
```

## Security and Dependencies

### Dependency Audit
```bash
pnpm audit                  # Check for security vulnerabilities
pnpm outdated              # Check for outdated packages
```

### Environment Variables
```bash
# Verify all required env vars are set
echo $NEXT_PUBLIC_DIRECTUS_URL
echo $DIRECTUS_ACCESS_TOKEN
```

## Troubleshooting Failed Builds

### Clean and Rebuild
```bash
rm -rf .next dist build     # Clean build artifacts
rm -rf node_modules         # Clean dependencies (if needed)
pnpm install               # Reinstall dependencies
pnpm build                 # Rebuild
```

### Common Fixes
```bash
# Fix formatting issues
pnpm format

# Fix type issues
# Review and fix TypeScript errors

# Fix linting issues
# Review and fix Biome linting errors
```

## Pre-PR Checklist

### Final Verification
- [ ] `pnpm lint` passes with no errors
- [ ] `pnpm format` has been run
- [ ] `npx tsc --noEmit` passes with no errors
- [ ] `pnpm build` completes successfully
- [ ] Application runs correctly in development
- [ ] No console errors or warnings
- [ ] Responsive design works on different screen sizes
- [ ] Accessibility features work properly
- [ ] All new components follow established patterns
- [ ] TypeScript types are properly defined
- [ ] Environment variables are documented (if added)

### Git Hygiene
```bash
git status                  # Check for uncommitted changes
git log --oneline -n 5      # Review recent commits
git branch                  # Verify on correct branch
```

## Post-Deployment Verification

### Production Testing
```bash
# After deployment, test production site
# Check for any build or runtime errors
# Verify all features work in production environment
```

### Performance Monitoring
```bash
# Monitor Core Web Vitals
# Check for any production-specific issues
# Verify all environment variables are set correctly
```

## Notes for Different Task Types

### Bug Fixes
- Include reproduction steps in commit message
- Test fix thoroughly across different scenarios
- Verify no new issues introduced

### Feature Additions
- Update documentation if needed
- Consider adding examples or usage notes
- Ensure backward compatibility

### Performance Improvements
- Measure before and after metrics
- Document performance improvements
- Test on different devices/browsers

### Security Updates
- Verify fix addresses vulnerability
- Test across different attack vectors
- Update dependencies if needed

### Refactoring
- Ensure functionality remains unchanged
- Test all affected components
- Update documentation if API changed

## Emergency Commands

### Quick Fix for Critical Issues
```bash
# If something is broken after changes
git stash                   # Stash changes
pnpm build && pnpm start   # Test if original code works
# If original works, investigate the issue
```

### Reset to Working State
```bash
git reset --hard HEAD      # Reset to last commit (WARNING: loses all changes)
```

Remember: **Always run `pnpm lint` and `pnpm format` before committing any changes!**