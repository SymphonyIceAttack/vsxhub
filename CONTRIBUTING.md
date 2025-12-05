# Contributing to VSXHub

Thank you for your interest in contributing to VSXHub! This document provides guidelines and information for contributors.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain a welcoming community

## How to Contribute

### 🐛 Report Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected vs actual behavior**
- **Screenshots** (if applicable)
- **Environment details** (browser, OS, etc.)

### 💡 Suggest Features

Feature requests are welcome! Please:

- Check existing feature requests first
- Describe the problem your feature would solve
- Provide use cases and examples
- Consider implementation complexity

### 🔧 Submit Pull Requests

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Run quality checks**:
   ```bash
   pnpm lint
   pnpm format
   pnpm type-check
   ```
6. **Commit your changes**: Use conventional commit format
7. **Push to your fork**: `git push origin feature/your-feature-name`
8. **Open a Pull Request**

## Development Setup

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)
- Git

### Quick Start

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/vsxhub.git
cd vsxhub

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_DIRECTUS_URL=your_directus_instance
DIRECTUS_ACCESS_TOKEN=your_token
```

## Coding Standards

### Code Style

- **Linter**: Biome (run `pnpm lint`)
- **Formatter**: Biome (run `pnpm format`)
- **TypeScript**: Strict mode enabled

### File Organization

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable components
├── lib/                # Utilities and configurations
└── types/              # TypeScript type definitions
```

### Component Guidelines

- Use TypeScript for all new components
- Follow existing naming conventions
- Include proper accessibility attributes
- Use Tailwind CSS for styling
- Test responsive design

### Git Commit Messages

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/config changes

**Examples:**
```
feat(search): add real-time search filtering
fix(categories): resolve category filter reset issue
docs(readme): update installation instructions
```

## Testing

### Manual Testing Checklist

- [ ] New feature works as expected
- [ ] No console errors in browser
- [ ] Responsive design on mobile/tablet
- [ ] Dark/light mode functionality
- [ ] Search and filtering work correctly
- [ ] Links and navigation function properly

### Browser Testing

Test in major browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Pull Request Guidelines

### Before Submitting

- [ ] Code follows project conventions
- [ ] All tests pass locally
- [ ] Documentation updated (if needed)
- [ ] No console errors or warnings
- [ ] Mobile responsiveness verified

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Manual testing completed
- [ ] Cross-browser testing completed
- [ ] Mobile responsiveness verified

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Self-review completed
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] No breaking changes (or properly documented)
```

## Feature Requests Process

1. **Open a Discussion** for complex features
2. **Get feedback** from maintainers and community
3. **Draft Implementation Plan** (if approved)
4. **Submit Pull Request** with implementation

## Getting Help

- **GitHub Discussions**: For questions and feature discussions
- **GitHub Issues**: For bug reports and technical issues
- **Email**: hello@vsxhub.top for urgent matters

## Recognition

Contributors who make significant contributions will be:

- Added to the AUTHORS.md file
- Mentioned in release notes
- Credited in project documentation

## Thank You!

Your contributions make VSXHub better for all developers. We appreciate your time and effort in helping improve this project.

---

**Questions?** Don't hesitate to ask in GitHub Discussions or reach out to the maintainers.