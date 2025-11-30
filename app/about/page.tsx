"use client";

import { BookOpen, Code2, Heart, Sparkles, Target, Users } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="glass-effect sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-primary shadow-md">
                  <Code2 className="h-5 w-5 md:h-7 md:w-7 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl md:text-3xl font-bold text-balance text-foreground">
                    VSCode Extensions
                  </h1>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Sparkles className="h-3 w-3" />
                    <span>About Us</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent"
                >
                  <Heart className="h-4 w-4" />
                  Contact
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent"
                >
                  <BookOpen className="h-4 w-4" />
                  FAQ
                </Button>
              </Link>
              <Link href="/privacy">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent"
                >
                  <Target className="h-4 w-4" />
                  Privacy
                </Button>
              </Link>
              <Link href="/posts">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent"
                >
                  <Users className="h-4 w-4" />
                  Blog
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb className="mb-8" />

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-balance text-foreground mb-6">
              About VSXHub
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are passionate developers who believe that the right extensions
              can transform your development experience. VSXHub is your trusted
              guide to discovering the best Visual Studio Code extensions.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="glass-effect rounded-2xl p-8 border">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower developers worldwide by curating and presenting the
                most valuable VSCode extensions in an intuitive, searchable
                platform. We believe every developer deserves access to tools
                that enhance their productivity and creativity.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8 border">
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Community
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                VSXHub serves thousands of developers daily, from beginners to
                seasoned professionals. Our community-driven approach ensures
                that we always recommend extensions that truly make a difference
                in real-world development workflows.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Curated Collections
                </h4>
                <p className="text-muted-foreground">
                  Hand-picked extensions organized by category, popularity, and
                  use case to help you find exactly what you need.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Expert Reviews
                </h4>
                <p className="text-muted-foreground">
                  Detailed insights and recommendations based on real-world
                  usage and community feedback from developers like you.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Up-to-Date
                </h4>
                <p className="text-muted-foreground">
                  We continuously update our database with the latest extensions
                  and remove outdated or unsupported ones to maintain quality.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="glass-effect rounded-2xl p-8 border mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                VSXHub was born from a simple frustration: finding the right
                VSCode extensions felt like searching for a needle in a
                haystack. As developers, we spent countless hours scrolling
                through the marketplace, reading reviews, and trying extensions
                that promised to make our workflow better.
              </p>
              <p>
                We realized that while the VSCode marketplace is vast and
                powerful, it lacked a curated, user-friendly way to discover
                truly valuable extensions. So we decided to build VSXHub – not
                just another directory, but a thoughtfully crafted platform that
                understands what developers actually need.
              </p>
              <p>
                Today, VSXHub is more than just an extension directory. It's a
                community resource built by developers, for developers. We're
                proud to help millions of developers worldwide discover tools
                that make their coding journey more efficient and enjoyable.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Our Values
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-effect rounded-xl p-6 border">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Quality Over Quantity
                </h4>
                <p className="text-muted-foreground text-sm">
                  We prefer to recommend fewer, high-quality extensions rather
                  than overwhelming you with endless options.
                </p>
              </div>
              <div className="glass-effect rounded-xl p-6 border">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Transparency
                </h4>
                <p className="text-muted-foreground text-sm">
                  All recommendations are based on genuine value and utility,
                  not commercial partnerships or paid placements.
                </p>
              </div>
              <div className="glass-effect rounded-xl p-6 border">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Community First
                </h4>
                <p className="text-muted-foreground text-sm">
                  Every decision we make considers the impact on our developer
                  community and their real-world needs.
                </p>
              </div>
              <div className="glass-effect rounded-xl p-6 border">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Continuous Improvement
                </h4>
                <p className="text-muted-foreground text-sm">
                  We constantly evolve our platform based on user feedback and
                  emerging development trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="glass-effect mt-16 py-8 border-t-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Curated Best VSCode Extensions · Continuously Updated
          </p>
          <div className="mt-2 flex justify-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse-gentle"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse-gentle delay-100"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-secondary animate-pulse-gentle delay-200"></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
