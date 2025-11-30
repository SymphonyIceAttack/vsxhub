import { readItems } from "@directus/sdk";
import { Code2, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownWithIds } from "@/components/blog/markdown-with-ids";
import { PostCTA } from "@/components/blog/post-cta";
import { RecentPosts } from "@/components/blog/recent-posts";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { Breadcrumb } from "@/components/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import directus from "@/lib/directus";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();

  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "content",
          "status",
          "imageurl",
        ],
        limit: 1,
      }),
    );

    const post = posts[0];

    if (!post) {
      notFound();
    }

    const { title, content, description, published_at, imageurl } = post;

    const recentPosts = await directus.request(
      readItems("posts", {
        filter: {
          status: { _eq: "published" },
          slug: { _neq: slug },
        },
        fields: ["id", "title", "slug", "description", "published_at"],
        sort: ["-published_at"],
        limit: 6,
      }),
    );

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
                      <span>Blog Post</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Link href="/posts">
                  <Button
                    variant="outline"
                    className="gap-2 glass-effect border hover:border-primary transition-colors"
                  >
                    Posts
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="gap-2 glass-effect border hover:border-primary transition-colors"
                  >
                    About
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="gap-2 glass-effect border hover:border-primary transition-colors"
                  >
                    Contact
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button
                    variant="outline"
                    className="gap-2 glass-effect border hover:border-primary transition-colors"
                  >
                    FAQ
                  </Button>
                </Link>
                <Link href="/privacy">
                  <Button
                    variant="outline"
                    className="gap-2 glass-effect border hover:border-primary transition-colors"
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
          <div className="max-w-7xl mx-auto">
            <Breadcrumb className="mb-8" />

            {isEnabled && (
              <Card className="mb-6 border-orange-500 dark:border-orange-600 glass-effect border">
                <CardContent className="py-3">
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    Draft mode enabled - You are previewing unpublished content
                  </p>
                </CardContent>
              </Card>
            )}

            <div className="flex gap-8">
              <article className="flex-1 min-w-0">
                <Card className="glass-effect border">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold mb-2 text-balance text-foreground">
                      {title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {new Date(published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    {description && (
                      <p className="text-lg text-muted-foreground mt-4 text-pretty">
                        {description}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="prose prose-lg dark:prose-invert max-w-none">
                    {imageurl && (
                      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                        <Image
                          fill={true}
                          src={`https://symcloud.top/${imageurl}`}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <MarkdownWithIds content={content} />
                  </CardContent>
                </Card>

                <PostCTA />

                <RecentPosts posts={recentPosts} />
              </article>

              <aside className="w-64 shrink-0 hidden md:block">
                <TableOfContents content={content} />
              </aside>
            </div>
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
    console.error("[v0] Error fetching post:", error);
    notFound();
  }
}

export async function generateStaticParams() {
  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          status: {
            _eq: "published",
          },
        },
        limit: -1,
      }),
    );

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("[v0] Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const posts = await directus.request(
      readItems("posts", {
        filter: {
          slug: {
            _eq: slug,
          },
        },
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "content",
          "status",
          "imageurl",
        ],
        limit: 1,
      }),
    );

    const post = posts[0];

    if (!post) {
      return {
        title: "Post Not Found - VSCode Extensions",
        description: "The requested blog post could not be found.",
      };
    }

    return {
      title: `${post.title} - VSCode Extensions`,
      description:
        post.description || "Read our latest blog post about VSCode extensions",
      openGraph: {
        title: post.title,
        description: post.description,
        images: post.imageurl ? [`https://symcloud.top/${post.imageurl}`] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: post.imageurl ? [`https://symcloud.top/${post.imageurl}`] : [],
      },
    };
  } catch (error) {
    console.error("[v0] Error generating metadata:", error);
    return {
      title: "Blog Post - VSCode Extensions",
      description: "Read our latest blog post about VSCode extensions",
    };
  }
}
