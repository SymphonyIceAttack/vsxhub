"use client";

import {
  BookOpen,
  Code2,
  GitBranch,
  HelpCircle,
  Info,
  Mail,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { CategoryFilter } from "@/components/category-filter";
import { ExtensionGrid } from "@/components/extension-grid";
import { MobileMenu } from "@/components/mobile-menu";
import { SearchBar } from "@/components/search-bar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearchChange = useCallback((newSearch: string) => {
    setSearch(newSearch);
    const searchParam = newSearch
      ? `?search=${encodeURIComponent(newSearch)}`
      : "";
    window.history.pushState({}, "", `/${searchParam}`);
  }, []);

  return (
    <div className="min-h-screen">
      <header className="glass-effect sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-6">
          <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between md:mb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg animate-pulse">
                  <Code2 className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    VSCode Extensions
                  </h2>
                  <div className="flex items-center gap-1 text-xs text-accent">
                    <Sparkles className="h-3 w-3" />
                    <span className="hidden sm:inline">
                      Discover Amazing Extensions
                    </span>
                    <span className="sm:hidden">Discover Extensions</span>
                  </div>
                </div>
              </div>
              {/* Mobile Navigation - Menu and Theme Toggle */}
              <div className="md:hidden flex items-center gap-2">
                <MobileMenu />
                <ThemeToggle />
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <Link href="/about">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <Info className="h-4 w-4" />
                  <span className="hidden lg:inline">About</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <Mail className="h-4 w-4" />
                  <span className="hidden lg:inline">Contact</span>
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <HelpCircle className="h-4 w-4" />
                  <span className="hidden lg:inline">FAQ</span>
                </Button>
              </Link>
              <Link href="/privacy">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <Shield className="h-4 w-4" />
                  <span className="hidden lg:inline">Privacy</span>
                </Button>
              </Link>
              <a
                href="https://github.com/SymphonyIceAttack/vsxhub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass-effect border hover:border-primary transition-colors rounded-md px-3 py-2 text-sm lg:text-base"
              >
                <GitBranch className="h-4 w-4" />
                <span className="hidden lg:inline">GitHub</span>
              </a>
              <Link href="/posts">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                >
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden lg:inline">Blog</span>
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Hero section */}
        <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in opacity-80">
            Supercharge Your Development with Premium VSCode Extensions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover the most popular and powerful Visual Studio Code extensions
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <SearchBar onSearch={handleSearchChange} initialValue={search} />
          <CategoryFilter currentCategory="all" />
        </div>

        {/* Extensions Grid */}
        <ExtensionGrid category="all" search={search} />

        {/* Introduction section */}
        <section className="mt-16 sm:mt-20 mb-12 sm:mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Transform Your Coding Experience
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Visual Studio Code has revolutionized the way developers write,
                debug, and manage code. With thousands of extensions available,
                VSCode has become more than just a code editor—it's a
                comprehensive development environment that can be customized to
                fit any workflow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 rounded-lg bg-card/50 border">
                <Code2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">
                  Enhanced Productivity
                </h3>
                <p className="text-sm text-muted-foreground">
                  Boost your coding speed with intelligent autocomplete,
                  debugging tools, and automated workflows that streamline
                  repetitive tasks and help you focus on what matters
                  most—building great software.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 border">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-3">
                  Customizable Experience
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tailor your development environment with themes, keybindings,
                  and language-specific tools. Create a workspace that feels
                  uniquely yours while maintaining optimal functionality.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-card/50 border">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">
                  Comprehensive Ecosystem
                </h3>
                <p className="text-sm text-muted-foreground">
                  Access a vast library of extensions covering everything from
                  code linting and formatting to AI-powered assistance, version
                  control integration, and advanced debugging capabilities.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                Why Choose VSCode Extensions?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Development Efficiency
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    Extensions like GitLens provide deep Git integration, while
                    tools like Live Server and Auto Rename Tag save hours of
                    manual work. Code formatters like Prettier and linters like
                    ESLint ensure consistent code quality across your entire
                    team.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Language Support
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    From Python and JavaScript to Rust and Go, extensions
                    provide specialized language support including syntax
                    highlighting, IntelliSense, debugging capabilities, and
                    framework-specific integrations for React, Vue, Angular, and
                    more.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Team Collaboration
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    Extensions like Live Share enable real-time collaboration,
                    while extensions for project management and documentation
                    help teams stay organized and maintain consistent
                    development practices across projects.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Modern Development Workflows
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                    Integrate with modern tools like Docker, Kubernetes, and
                    cloud services. Extensions for CI/CD, testing frameworks,
                    and deployment pipelines streamline your entire development
                    lifecycle from code to production.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Categories of Extensions
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-card/30 border">
                  <h4 className="font-semibold mb-2">Productivity Tools</h4>
                  <p className="text-muted-foreground">
                    Enhance your coding efficiency with automation and workflow
                    improvements
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card/30 border">
                  <h4 className="font-semibold mb-2">Language Extensions</h4>
                  <p className="text-muted-foreground">
                    Get enhanced support for your favorite programming languages
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card/30 border">
                  <h4 className="font-semibold mb-2">Version Control</h4>
                  <p className="text-muted-foreground">
                    Integrate seamlessly with Git and other version control
                    systems
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card/30 border">
                  <h4 className="font-semibold mb-2">Theme & UI</h4>
                  <p className="text-muted-foreground">
                    Customize your editor's appearance and user interface
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card/30 border">
                  <h4 className="font-semibold mb-2">Debug & Test</h4>
                  <p className="text-muted-foreground">
                    Powerful debugging tools and testing framework integrations
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card/30 border">
                  <h4 className="font-semibold mb-2">AI & Smart Tools</h4>
                  <p className="text-muted-foreground">
                    Leverage artificial intelligence for enhanced development
                    assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="glass-effect mt-16 py-8 border-t-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Curated Best VSCode Extensions · Continuously Updated
          </p>
          <div className="mt-2 flex justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-secondary animate-pulse delay-100"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse delay-200"></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
