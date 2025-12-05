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
    process.env.NEXT_PUBLIC_SITE_URL || "https://sunrarecords.com"
  ),
  title: {
    default:
      "Sun Ra Records | Artist Accelerator - Own Your Masters. Build Your Empire.",
    template: "%s | Sun Ra Records",
  },
  description:
    "NYC artist accelerator turning proven talent into investor-ready companies. Keep 80% equity and 100% ownership of your masters. Legal, business, and investor access for high-caliber artists.",
  keywords: [
    "artist accelerator",
    "music business",
    "own your masters",
    "music equity",
    "independent artist",
    "artist investment",
    "music funding",
    "artist company",
    "music entrepreneur",
    "NYC music",
    "artist ownership",
    "music startup",
  ],
  authors: [{ name: "Sun Ra Records" }],
  creator: "Sun Ra Records",
  publisher: "Sun Ra Records",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sun Ra Records",
    title: "Sun Ra Records | Artist Accelerator - Own Your Masters.",
    description:
      "NYC artist accelerator structuring proven talent as fundable companies. Keep 80% equity, 100% of your masters. Invite only for artists with demonstrated market traction.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sun Ra Records - Artist Accelerator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sun Ra Records | Artist Accelerator",
    description:
      "Turn proven talent into investor-ready companies. Keep 80% equity, 100% of your masters. NYC artist accelerator for high-caliber talent.",
    images: ["/og-image.png"],
    creator: "@sunrarecords",
    site: "@sunrarecords",
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
