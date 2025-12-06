import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default:
      "VSCode Extensions Hub - Discover Premium Extensions for Productivity",
    template: "%s | VSCode Extensions Hub",
  },
  description:
    "Discover premium Visual Studio Code extensions to supercharge your development workflow. Browse curated collections, search tools, and boost productivity.",
  keywords: [
    "VSCode",
    "Visual Studio Code",
    "extensions",
    "plugins",
    "development tools",
    "code editor",
    "productivity",
    "programming",
    "IDE",
    "developer tools",
    "web development",
    "javascript",
    "typescript",
    "python",
    "react",
    "vue",
    "angular",
    "coding",
    "software development",
    "open source",
    "vs code extensions",
    "developer productivity",
    "coding tools",
  ],
  authors: [{ name: "SymphoneIceAttack", url: "https://vsxhub.top" }],
  creator: "SymphoneIceAttack",
  publisher: "SymphoneIceAttack",
  generator: "SymphoneIceAttack",
  applicationName: "VSCode Extensions Hub",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://vsxhub.top"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/sitemap.xml", title: "VSCode Extensions RSS" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title:
      "VSCode Extensions Hub - Discover Premium Extensions for Productivity",
    description:
      "Discover premium Visual Studio Code extensions to supercharge your development workflow. Browse curated collections, search tools, and boost productivity.",
    siteName: "VSCode Extensions Hub",
    images: [
      {
        url: "/communication-hero.jpg",
        width: 1200,
        height: 630,
        alt: "VSCode Extensions Hub - Discover Premium Extensions for Productivity",
      },
      {
        url: "/communication-hero.jpg",
        width: 1200,
        height: 630,
        alt: "VSCode Extensions Hub - Discover Premium Extensions for Productivity",
      },
    ],
    videos: [],
    audio: [],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vsxhub",
    creator: "@vsxhub",
    title:
      "VSCode Extensions Hub - Discover Premium Extensions for Productivity",
    description:
      "Discover premium Visual Studio Code extensions to supercharge your development workflow. Browse curated collections, search tools, and boost productivity.",
    images: ["/communication-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-snippet": -1,
      notranslate: false,
    },
    notranslate: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/icon-192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/icon-512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "Software Development Tools",
  other: {
    "theme-color": "#0f172a",
    "msapplication-TileColor": "#0f172a",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "VSCode Extensions Hub",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileImage": "/icon-192.png",
    "pinterest-rich-pins": "false",
    "twitter:domain": "vsxhub.top",
    "twitter:image:alt": "VSCode Extensions Hub - Discover Premium Extensions",
    "twitter:label1": "Browse",
    "twitter:data1": "Extensions",
    "twitter:label2": "Find",
    "twitter:data2": "Tools",
    "og:site_name": "VSCode Extensions Hub",
    "og:locale:alternate": "en_US",
    "article:publisher": "https://vsxhub.top",
    "profile:first_name": "VSCode",
    "profile:last_name": "Extensions Hub",
    "profile:username": "vsxhub",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
