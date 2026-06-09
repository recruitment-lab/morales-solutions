import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  title: "Morales Solutions — Compliant Outsourcing Teams for Support, Sales & Compliance",
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
  openGraph: {
    title: "Morales Solutions — Compliant Outsourcing Teams",
    description:
      "Deploy specialized, compliance-ready teams for support, sales, and operations — operational from day one.",
    type: "website",
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
      className={`${jakarta.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.add("light")}catch(e){}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
