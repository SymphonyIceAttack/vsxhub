"use client";

import { Code2, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
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
                    <span>Privacy Policy</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent"
                >
                  About
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent"
                >
                  Contact
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent"
                >
                  FAQ
                </Button>
              </Link>
              <Link href="/posts">
                <Button
                  variant="outline"
                  className="gap-2 glass-effect border hover:border-primary transition-colors bg-transparent"
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
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-balance text-foreground mb-6">
              Privacy Policy
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information when you use VSXHub.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: November 30, 2025
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            <section className="glass-effect rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Information We Collect
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">
                    Anonymous Usage Data:
                  </strong>{" "}
                  We collect anonymous data about how you interact with our
                  website, including pages visited, time spent, and browsing
                  patterns. This helps us improve our service and user
                  experience.
                </p>
                <p>
                  <strong className="text-foreground">
                    Technical Information:
                  </strong>{" "}
                  We automatically collect certain technical information such as
                  IP address, browser type, device information, and referring
                  URLs for analytics and security purposes.
                </p>
                <p>
                  <strong className="text-foreground">
                    Contact Information:
                  </strong>{" "}
                  If you voluntarily contact us through our contact form or
                  email, we collect the information you provide to respond to
                  your inquiries.
                </p>
              </div>
            </section>

            <section className="glass-effect rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                How We Use Your Information
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our website service</li>
                  <li>To improve user experience and website functionality</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To analyze website usage and performance</li>
                  <li>To detect and prevent security threats and abuse</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="glass-effect rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Cookies and Tracking
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to enhance
                  your browsing experience and analyze website traffic. These
                  include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">
                      Essential Cookies:
                    </strong>{" "}
                    Required for the website to function properly
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Analytics Cookies:
                    </strong>{" "}
                    Help us understand how visitors use our site
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Theme Preference:
                    </strong>{" "}
                    Remember your theme selection (light/dark mode)
                  </li>
                </ul>
                <p>
                  You can control cookie preferences through your browser
                  settings, though disabling essential cookies may affect
                  website functionality.
                </p>
              </div>
            </section>

            <section className="glass-effect rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Data Sharing and Third Parties
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">
                    No Sale of Personal Data:
                  </strong>{" "}
                  We do not sell, rent, or trade your personal information to
                  third parties for marketing purposes.
                </p>
                <p>
                  <strong className="text-foreground">
                    Service Providers:
                  </strong>{" "}
                  We may share data with trusted third-party service providers
                  who help us operate our website (hosting, analytics,
                  security). These providers are bound by confidentiality
                  agreements.
                </p>
                <p>
                  <strong className="text-foreground">
                    Legal Requirements:
                  </strong>{" "}
                  We may disclose information when required by law or to protect
                  our rights, property, or safety.
                </p>
              </div>
            </section>

            <section className="glass-effect rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Data Security
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We implement appropriate security measures to protect your
                  information against unauthorized access, alteration,
                  disclosure, or destruction. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure data storage and backup procedures</li>
                </ul>
              </div>
            </section>

            <section className="glass-effect rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Your Rights
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Access:</strong> Request
                    information about data we have about you
                  </li>
                  <li>
                    <strong className="text-foreground">Correction:</strong>{" "}
                    Request correction of inaccurate or incomplete data
                  </li>
                  <li>
                    <strong className="text-foreground">Deletion:</strong>{" "}
                    Request deletion of your personal data
                  </li>
                  <li>
                    <strong className="text-foreground">Portability:</strong>{" "}
                    Request a copy of your data in a structured format
                  </li>
                  <li>
                    <strong className="text-foreground">Opt-out:</strong>{" "}
                    Unsubscribe from communications or data collection
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:hello@vsxhub.top"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    hello@vsxhub.top
                  </a>
                </p>
              </div>
            </section>

            <section className="glass-effect rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Changes to This Policy
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically
                  for any changes. Your continued use of our service after
                  changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            <section className="glass-effect rounded-2xl p-8 border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Contact Us
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us:
                </p>
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p>
                    <strong className="text-foreground">Email:</strong>{" "}
                    hello@vsxhub.top
                  </p>
                  <p>
                    <strong className="text-foreground">Response Time:</strong>{" "}
                    We typically respond within 48 hours
                  </p>
                </div>
              </div>
            </section>
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
