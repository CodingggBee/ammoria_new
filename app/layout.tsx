import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ammoriacontracting.com"),
  title: {
    default: "Ammoria Contracting - Professional Construction Services",
    template: "%s | Ammoria Contracting",
  },
  description: "Professional contracting services with decades of experience. Trusted by homeowners and businesses for quality craftsmanship and reliable service.",
  keywords: [
    "contracting",
    "construction",
    "building contractor",
    "renovation",
    "construction services",
    "commercial construction",
    "residential construction",
  ],
  authors: [{ name: "Ammoria Contracting" }],
  creator: "Ammoria Contracting",
  publisher: "Ammoria Contracting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ammoriacontracting.com",
    siteName: "Ammoria Contracting",
    title: "Ammoria Contracting - Professional Construction Services",
    description: "Professional contracting services with decades of experience. Trusted by homeowners and businesses for quality craftsmanship and reliable service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ammoria Contracting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammoria Contracting - Professional Construction Services",
    description: "Professional contracting services with decades of experience.",
    images: ["/og-image.jpg"],
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
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ammoriacontracting.com" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
