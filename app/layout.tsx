import type { Metadata } from "next";
import "./globals.css";

const faviconPath = "/icon.png?v=20260228";

export const metadata: Metadata = {
  metadataBase: new URL("https://decisionlab.vercel.app"),
  applicationName: "Decision Lab",
  title: "Decision Lab | Life Decision Simulators",
  description:
    "Quit your job? Text your ex at 2 AM? Break up tonight? Do it here first — zero consequences, full clarity.",
  icons: {
    icon: faviconPath,
    shortcut: faviconPath,
    apple: faviconPath,
  },
  openGraph: {
    siteName: "Decision Lab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <div className="flex-1">{children}</div>
        <footer className="px-4 pb-6 pt-2 text-center text-xs text-[#6a89c4]/90 sm:px-10">
          Copyright © {currentYear} Decision Lab. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
