import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";
import ThemeInitializer from "@/components/ThemeInitializer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Morales Solutions — Compliant Outsourcing Teams for Support, Sales & Compliance",
  description:
    "Morales Solutions deploys compliant, scalable outsourcing teams for customer support, sales, and regulatory operations — built to protect your brand while you grow.",
  keywords: [
    "outsourcing",
    "customer support",
    "sales teams",
    "compliance operations",
    "BPO",
    "call center",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Morales Solutions — Compliant Outsourcing Teams",
    description:
      "Deploy specialized, compliance-ready teams for support, sales, and operations — operational from day one.",
    type: "website",
    images: ["/og-morales-1.png"],
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
      className={`${jakarta.variable} ${roboto.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
