import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mathiyazhagan L | AI & Machine Learning Engineer Portfolio",
  description: "Portfolio of Mathiyazhagan L - B.Tech AI & Data Science (2027) specializing in Machine Learning, Deep Learning, Generative AI, RAG, and Computer Vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
