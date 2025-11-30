"use client";

import { Code2, HelpCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How do I install VSCode extensions?",
    answer:
      "Click the 'Install' button on any extension card, or search for the extension name in VSCode's Extensions panel (Ctrl+Shift+X on Windows/Linux, Cmd+Shift+X on Mac) and click the install button. VSCode will handle the download and installation automatically.",
  },
  {
    question: "Are all these extensions free?",
    answer:
      "Most VSCode extensions are completely free and open source. Some enterprise-focused extensions may have premium features or paid tiers, which will be clearly indicated in their marketplace page. We prioritize free extensions in our recommendations.",
  },
  {
    question: "How do I know which extensions are safe to install?",
    answer:
      "All extensions on the VSCode Marketplace are reviewed by Microsoft. Check the ratings, number of installs, and publisher reputation. Popular extensions with millions of installs and high ratings are generally safe and well-maintained. We only recommend extensions from reputable publishers.",
  },
  {
    question: "Can I use multiple extensions from the same category?",
    answer:
      "Yes! You can install as many extensions as you need. However, be mindful that too many extensions can slow down VSCode. It's best to enable only the extensions you actively use for your current projects. You can disable extensions temporarily if needed.",
  },
  {
    question: "How do I update my extensions?",
    answer:
      "VSCode automatically checks for extension updates. You can manually update all extensions by opening the Extensions panel and clicking the 'Update All Extensions' button, or update individual extensions as needed. We recommend keeping extensions up-to-date for security and performance.",
  },
  {
    question: "What if an extension doesn't work properly?",
    answer:
      "First, try reloading VSCode (Ctrl+R). If issues persist, check the extension's page for known issues or compatibility requirements. You can also disable the extension temporarily to see if it conflicts with others, or report issues to the extension's GitHub repository.",
  },
  {
    question: "How often do you update your extension recommendations?",
    answer:
      "We continuously monitor the VSCode marketplace and community feedback. New extensions are added regularly, and we remove outdated or problematic ones. Our content team reviews and updates recommendations weekly to ensure accuracy.",
  },
  {
    question: "Can I suggest an extension to be featured?",
    answer:
      "Absolutely! We welcome suggestions from the community. You can contact us through our contact form or email us directly. We review all suggestions and consider popular, well-reviewed extensions for inclusion in our curated lists.",
  },
  {
    question: "Do you accept donations or sponsorships?",
    answer:
      "VSXHub is a free service for the developer community. While we don't accept sponsorships for individual extension recommendations (to maintain editorial integrity), we do appreciate community support through GitHub stars, social media shares, and feedback.",
  },
  {
    question: "Is my data safe when using VSXHub?",
    answer:
      "Yes, we prioritize user privacy and security. We don't collect personal information unless you voluntarily contact us. Our website uses secure connections (HTTPS) and follows best practices for data protection. See our Privacy Policy for more details.",
  },
  {
    question: "Why isn't my favorite extension listed?",
    answer:
      "Our curation process focuses on extensions with proven value, good ratings, and active maintenance. Popular extensions might not be listed if they serve very niche use cases. We're always open to suggestions and will consider adding extensions based on community interest.",
  },
  {
    question: "How can I report a broken link or incorrect information?",
    answer:
      "We appreciate when our community helps us maintain accuracy. You can report issues through our contact form, GitHub repository, or by emailing us directly. We typically fix reported issues within 24-48 hours.",
  },
];

export default function FaqPage() {
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
                      <span className="hidden sm:inline">FAQ</span>
                      <span className="sm:hidden">FAQ</span>
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
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent text-sm lg:text-base"
                >
                  Contact
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
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-balance text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about VSCode extensions and VSXHub.
              Can't find what you're looking for? Feel free to contact us.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="glass-effect rounded-2xl p-8 border mb-16">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-primary/5"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Still have questions */}
          <div className="glass-effect rounded-2xl p-8 border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help! Reach out to us and we'll get back to
              you as soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 transition-colors font-medium gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
              <a href="mailto:hello@vsxhub.top">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors"
                >
                  Email Us
                </Button>
              </a>
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
