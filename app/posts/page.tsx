import { readItems } from "@directus/sdk";
import { Code2, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import directus from "@/lib/directus";

export const metadata: Metadata = {
  title: "VSCode Extensions - Discover the Best Extensions",
  description:
    "Curated collection of the most popular and useful Visual Studio Code extensions to boost your development productivity. Browse by category, search, and find the perfect extensions for your workflow.",
};

export const revalidate = 86400;

export default async function BlogPage() {
  try {
    console.log("[v0] Fetching posts from Directus...");
    console.log("[v0] Directus URL:", process.env.NEXT_PUBLIC_DIRECTUS_URL);

    const posts = await directus.request(
      readItems("posts", {
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "status",
          "imageurl",
        ],
        filter: {
          status: { _eq: "published" },
        },
        sort: ["-published_at"],
        limit: -1,
      }),
    );

    console.log("[v0] Successfully fetched", posts.length, "posts");

    return (
      <div className="min-h-screen">
        <header className="glass-effect sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-6">
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between md:mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Link
                    href="/"
                    className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg">
                      <Code2 className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        VSCode Extensions
                      </h1>
                      <div className="flex items-center gap-1 text-xs text-accent">
                        <Sparkles className="h-3 w-3" />
                        <span className="hidden sm:inline">Blog Posts</span>
                        <span className="sm:hidden">Blog</span>
                      </div>
                    </div>
                  </Link>
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
                    About
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                  >
                    Contact
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                  >
                    FAQ
                  </Button>
                </Link>
                <Link href="/privacy">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                  >
                    Privacy
                  </Button>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <Breadcrumb className="mb-8" />

            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-balance text-foreground mb-6">
                Blog Posts
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Explore our latest articles and updates about VSCode extensions
                and development
              </p>
            </div>

            {posts.length === 0 ? (
              <Card className="glass-effect border">
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    No posts published yet
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/posts/${post.slug}`}
                    className="group"
                  >
                    <Card className="h-full transition-all hover:shadow-lg glass-effect border hover:border-primary bg-transparent overflow-hidden">
                      {post.imageurl && (
                        <div className="relative w-full h-48 overflow-hidden">
                          <Image
                            fill={true}
                            src={`https://symcloud.top/${post.imageurl}`}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors text-balance text-foreground">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {new Date(post.published_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3 text-pretty">
                          {post.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
  } catch (error) {
    console.error("[v0] Error fetching posts:", error);
    console.error("[v0] Error details:", {
      message: error instanceof Error ? error.message : "Unknown error",
      cause: error instanceof Error ? error.cause : undefined,
      stack: error instanceof Error ? error.stack : undefined,
      directusUrl: process.env.NEXT_PUBLIC_DIRECTUS_URL,
    });

    return (
      <div className="min-h-screen">
        <header className="glass-effect sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-6">
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between md:mb-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Link
                    href="/"
                    className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-secondary to-accent shadow-lg">
                      <Code2 className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        VSCode Extensions
                      </h1>
                      <div className="flex items-center gap-1 text-xs text-accent">
                        <Sparkles className="h-3 w-3" />
                        <span className="hidden sm:inline">Blog Posts</span>
                        <span className="sm:hidden">Blog</span>
                      </div>
                    </div>
                  </Link>
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
                    About
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                  >
                    Contact
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                  >
                    FAQ
                  </Button>
                </Link>
                <Link href="/privacy">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 glass-effect border hover:border-primary transition-colors text-sm lg:text-base"
                  >
                    Privacy
                  </Button>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-red-500 dark:border-red-600 glass-effect border">
              <CardContent className="py-12 text-center space-y-4">
                <p className="text-red-600 dark:text-red-500 font-semibold">
                  Error loading posts
                </p>
                <p className="text-sm text-muted-foreground">
                  {error instanceof Error ? error.message : "Unknown error"}
                </p>
                {!process.env.NEXT_PUBLIC_DIRECTUS_URL && (
                  <p className="text-sm text-muted-foreground">
                    Please check if NEXT_PUBLIC_DIRECTUS_URL environment
                    variable is set
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }
}
