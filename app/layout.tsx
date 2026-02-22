import "./globals.css";

export const metadata = {
  title: "Decision Lab | Life Decision Simulators",
  description:
    "Run your decision before you live it. Free decision simulators for relationships, career, moving, and decluttering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
