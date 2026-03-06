import type { Metadata } from "next";
import { Inter, Black_Ops_One } from "next/font/google";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "./site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-black-ops",
  display: "swap",
});

const faviconPath = "/icon.png?v=20260228";
const siteTitle = "Decision Lab | 60-Second Decision Tools";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}#website`,
  name: siteName,
  alternateName: "DecisionLab",
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@id": `${siteUrl}#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: siteTitle,
  description: siteDescription,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: faviconPath,
    shortcut: faviconPath,
    apple: faviconPath,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Decision Lab - 60-Second Decision Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" className={`${inter.variable} ${blackOpsOne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          key="organization-jsonld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          key="website-jsonld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>
        <footer className="px-4 pb-6 pt-2 text-center text-xs text-[#6a89c4]/90 sm:px-10">
          Copyright © {currentYear} Decision Lab. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
