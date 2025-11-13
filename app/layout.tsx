import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import "./globals.css";
import { Providers } from "./providers";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VSCode Extensions - Discover the Best Extensions",
  description:
    "Curated collection of the most popular and useful Visual Studio Code extensions to boost your development productivity. Browse by category, search, and find the perfect extensions for your workflow.",
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
  ],
  authors: [{ name: "SymphoneIceAttack" }],
  creator: "SymphoneIceAttack",
  publisher: "SymphoneIceAttack",
  generator: "SymphoneIceAttack",
  applicationName: "VSCode Extensions",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://vsxhub.top"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "VSCode Extensions - Discover the Best Extensions",
    description:
      "Curated collection of the most popular and useful Visual Studio Code extensions to boost your development productivity.",
    siteName: "VSCode Extensions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VSCode Extensions - Discover the Best Extensions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VSCode Extensions - Discover the Best Extensions",
    description:
      "Curated collection of the most popular and useful Visual Studio Code extensions to boost your development productivity.",
    images: ["/og-image.png"],
    creator: "@vscode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
