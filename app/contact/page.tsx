"use client";

import {
  Code2,
  GitBranch,
  Heart,
  Mail,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
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
                      <span className="hidden sm:inline">Contact Us</span>
                      <span className="sm:hidden">Contact</span>
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
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
                  About
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
                  FAQ
                </Button>
              </Link>
              <Link href="/privacy">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
                  Privacy
                </Button>
              </Link>
              <Link href="/posts">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
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
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Have questions, suggestions, or just want to say hello? We'd love
              to hear from you. Reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-effect rounded-2xl p-8 border">
              <Mail className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Email Us
              </h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries, feature requests, or partnership
                opportunities.
              </p>
              <a
                href="mailto:hello@vsxhub.top"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                hello@vsxhub.top
              </a>
            </div>
            <div className="glass-effect rounded-2xl p-8 border">
              <GitBranch className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                GitHub
              </h3>
              <p className="text-muted-foreground mb-4">
                Report bugs, contribute to the project, or view our source code.
              </p>
              <a
                href="https://github.com/vsxhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                github.com/vsxhub
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8 border mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="glass-effect border"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="glass-effect border"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="glass-effect border"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                  className="glass-effect border"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 transition-colors font-medium"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Response Times */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                General Inquiries
              </h4>
              <p className="text-muted-foreground text-sm">
                We typically respond within 24-48 hours for general questions
                and suggestions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GitBranch className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Bug Reports
              </h4>
              <p className="text-muted-foreground text-sm">
                Critical issues are addressed within 12-24 hours. Please include
                steps to reproduce.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Partnerships
              </h4>
              <p className="text-muted-foreground text-sm">
                Business inquiries are reviewed within 3-5 business days. We'll
                be in touch soon!
              </p>
            </div>
          </div>

          {/* Community */}
          <div className="glass-effect rounded-2xl p-8 border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Community
            </h3>
            <p className="text-muted-foreground mb-6">
              VSXHub is built by developers, for developers. We believe in the
              power of community feedback to make our platform better for
              everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                className="gap-2 glass-effect border hover:border-primary transition-colors"
              >
                <GitBranch className="h-4 w-4" />
                Star on GitHub
              </Button>
              <Button
                variant="outline"
                className="gap-2 glass-effect border hover:border-primary transition-colors"
              >
                <Heart className="h-4 w-4" />
                Follow on Twitter
              </Button>
              <Link href="/faq">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Check FAQ
                </Button>
              </Link>
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
