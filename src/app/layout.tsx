import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { QueryProvider } from "@/providers/query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atlas — The AI, ML & Data Science Handbook",
    template: "%s · Atlas",
  },
  description:
    "A comprehensive, documentation-grade reference for Data Science, Machine Learning, Deep Learning, Mathematics, Generative AI, LLMs, and AI Agents — from foundations to the frontier.",
  openGraph: {
    type: "website",
    siteName: "Atlas",
    title: "Atlas — The AI, ML & Data Science Handbook",
    description:
      "Mathematical intuition, theory, derivations, and production practice for modern AI systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas — The AI, ML & Data Science Handbook",
    description:
      "Mathematical intuition, theory, derivations, and production practice for modern AI systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
