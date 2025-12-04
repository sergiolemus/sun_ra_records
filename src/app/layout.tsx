import React from "react";
import { Header } from "./_components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { roboto } from "@/fonts/roboto";
import { bebasNeue } from "@/fonts/bebasNeue";
import { theme } from "@/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { Footer } from "./_components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Lenis } from "./_components/Lenis";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://numamundi.com"
  ),
  title: {
    default: "Numa Mundi | AI Partner for Music Production",
    template: "%s | Numa Mundi",
  },
  description:
    "Transform your music production workflow with Numa - the emergent AI bandmate that understands your creative process. Fair royalty splits, real-time collaboration, continuity of self.",
  keywords: [
    "AI music production",
    "music creation assistant",
    "AI bandmate",
    "music producer tools",
    "real-time music collaboration",
    "AI music partner",
    "emergent AI",
    "music technology",
    "DAW AI assistant",
  ],
  authors: [{ name: "Numa Mundi Team" }],
  creator: "Numa Mundi",
  publisher: "Numa Mundi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Numa Mundi",
    title: "Numa Mundi | AI Partner for Music Production",
    description:
      "Transform your music production workflow with Numa - the emergent AI bandmate that learns, improvises, and grows with you.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Numa Mundi - Emergent AI Bandmate for Music Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Numa Mundi | AI Partner for Music Production",
    description:
      "The emergent AI bandmate that learns, improvises, and grows with you. Fair royalty splits. Real-time collaboration.",
    images: ["/og-image.png"],
    creator: "@numamundi",
    site: "@numamundi",
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
};

type TRootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => React.JSX.Element;

const RootLayout: TRootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${roboto.variable} ${bebasNeue.variable}`}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body style={{ backgroundColor: "black" }}>
        {process.env.NODE_ENV === "production" && (
          <Script
            id="usercentrics-cmp"
            src="https://web.cmp.usercentrics.eu/ui/loader.js"
            data-settings-id={process.env.USERCENTRICS_ID}
            async
            strategy="beforeInteractive"
          />
        )}
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Lenis />
            <CssBaseline />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
