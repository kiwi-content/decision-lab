import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Decision Lab | Life Decision Simulators",
  description:
    "Run your decision before you live it. Free decision simulators for relationships, career, moving, and decluttering."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="qRhK_TW2QITIO35Vcuf1N_jHEcgQBd9cGtk42YXvdNo"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <footer className="border-t mt-20 py-8 text-sm text-gray-500">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-3">
          <div className="flex gap-4">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/methodology" className="hover:underline">
              Methodology
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
            <a href="/terms" className="hover:underline">
              Terms
            </a>
          </div>
          <p>© 2026 Decision Lab. All rights reserved.</p>
        </div>
      </footer>
    </html>
  );
}
