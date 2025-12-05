# VSXHub - VSCode Extensions Directory

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4.svg)](https://tailwindcss.com/)

> **VSXHub** is a modern, comprehensive directory for discovering and exploring Visual Studio Code extensions. Built with Next.js, TypeScript, and Tailwind CSS, it provides a curated collection of the most popular and useful VSCode extensions to supercharge your development workflow.

## 🌟 Features

- **🔍 Smart Search**: Find extensions quickly with intelligent search functionality
- **📂 Category Filtering**: Browse extensions organized by categories (Productivity, Themes, Languages, etc.)
- **⭐ Curated Collection**: Hand-picked extensions based on popularity, quality, and developer feedback
- **📱 Responsive Design**: Fully responsive design that works perfectly on all devices
- **🌙 Dark/Light Mode**: Beautiful theme switching with system preference detection
- **⚡ Lightning Fast**: Built with Next.js 16 for optimal performance
- **🔗 Direct Links**: Direct links to VSCode Marketplace for easy installation
- **📊 Extension Details**: Comprehensive information including downloads, ratings, and descriptions

## 🚀 Live Demo

Visit the live site: **[VSXHub.top](https://vsxhub.top)**

## 📸 Screenshots

![VSXHub Homepage](https://via.placeholder.com/800x400/1e40af/ffffff?text=VSXHub+Homepage)

## 🛠️ Tech Stack

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Directus](https://directus.io/)** - Headless CMS for content management
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Biome](https://biomejs.dev/)** - Linter and formatter

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0.0 or higher
- **pnpm** (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SymphonyIceAttack/vsxhub.git
   cd vsxhub
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Directus configuration:
   ```
   NEXT_PUBLIC_DIRECTUS_URL=your_directus_instance_url
   DIRECTUS_ACCESS_TOKEN=your_access_token
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
vsxhub/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── [category]/        # Dynamic category pages
│   ├── posts/            # Blog pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── blog/             # Blog-specific components
│   ├── extension-card.tsx
│   ├── extension-grid.tsx
│   └── ...
├── lib/                  # Utility libraries
│   ├── directus.ts       # Directus client
│   ├── utils.ts          # General utilities
│   └── category-utils.ts
├── public/               # Static assets
└── ...
```

## 🧪 Available Scripts

```bash
# Development
pnpm dev                 # Start development server
pnpm build               # Build for production
pnpm start               # Start production server

# Code Quality
pnpm lint                # Run Biome linter
pnpm format              # Format code with Biome
pnpm type-check          # TypeScript type checking
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Directus Configuration
NEXT_PUBLIC_DIRECTUS_URL=https://your-directus-instance.com
DIRECTUS_ACCESS_TOKEN=your_access_token

# Analytics (Optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

### Directus Setup

1. Create a Directus instance at [directus.io](https://directus.io/)
2. Set up collections for extensions with the following fields:
   - `name` (string)
   - `description` (text)
   - `category` (string)
   - `downloads` (number)
   - `rating` (number)
   - `image_url` (string)
   - `marketplace_url` (string)
3. Create a static access token
4. Add the credentials to your `.env.local`

## 📱 Features Overview

### 🏠 Homepage
- Hero section with call-to-action
- Search bar with real-time filtering
- Category-based filtering
- Grid of featured extensions
- Responsive design for all devices

### 🔍 Search & Filter
- Intelligent search across extension names and descriptions
- Category-based filtering system
- Real-time search results
- Mobile-optimized search interface

### 📄 Extension Details
- Detailed extension information
- Direct links to VSCode Marketplace
- Category tags and metadata
- Responsive card layout

### 📚 Content Management
- Powered by Directus CMS
- Easy content updates without code changes
- Structured data for extensions
- SEO-optimized content

## 🎨 Design System

- **Component Library**: Built on Radix UI primitives
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Icons**: Lucide React icon set
- **Typography**: System fonts with optimized loading
- **Color Scheme**: Dark/light mode support with automatic detection

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run quality checks (`pnpm lint && pnpm format`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style

- **Linting**: Powered by Biome for consistent code style
- **Formatting**: Automated formatting with Biome
- **TypeScript**: Strict type checking enabled
- **Commit Messages**: Follow conventional commit format

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **SymphoneIceAttack** - *Initial work* - [GitHub](https://github.com/SymphonyIceAttack)

## 🙏 Acknowledgments

- [VSCode Marketplace](https://marketplace.visualstudio.com/) for extension data
- [Directus](https://directus.io/) for the excellent headless CMS
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind Labs](https://tailwindcss.com/) for the amazing CSS framework
- [Next.js team](https://nextjs.org/) for the incredible React framework

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/SymphonyIceAttack/vsxhub?style=social)
![GitHub forks](https://img.shields.io/github/forks/SymphonyIceAttack/vsxhub?style=social)
![GitHub issues](https://img.shields.io/github/issues/SymphonyIceAttack/vsxhub)
![GitHub license](https://img.shields.io/github/license/SymphonyIceAttack/vsxhub)

## 📞 Support

- **Website**: [https://vsxhub.top](https://vsxhub.top)
- **Email**: hello@vsxhub.top
- **GitHub Issues**: [Report bugs and feature requests](https://github.com/SymphonyIceAttack/vsxhub/issues)

---

**Made with ❤️ by developers, for developers**
