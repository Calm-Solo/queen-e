import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "Queen E - Wisdom doesn't wrinkle",
  description: "A wise elder sharing timeless truths. Empowering younger women with wisdom and faith.",
  keywords: ["Queen E", "wisdom", "faith", "relationships", "boundaries", "self-worth", "inspiration"],
  authors: [{ name: "Queen E" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Queen E',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images/queene-favicon.png', sizes: 'any' },
    ],
    shortcut: '/images/queene-favicon.png',
    apple: [
      { url: '/images/queene-favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Queen E',
    title: "Queen E - Wisdom doesn't wrinkle",
    description: "A wise elder sharing timeless truths. Empowering younger women with wisdom and faith.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Queen E - Wisdom doesn't wrinkle",
    description: "A wise elder sharing timeless truths. Empowering younger women with wisdom and faith.",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover' as const,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFF8E7' }, // Cream
    { media: '(prefers-color-scheme: dark)', color: '#800020' }, // Burgundy
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

