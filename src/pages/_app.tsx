import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Global meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Language and locale */}
        <meta httpEquiv="content-language" content="en-GB" />

        {/* Robots meta (can be overridden by individual pages) */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        {/* Author and copyright */}
        <meta name="author" content="LDPG - Land Development Property Group" />
        <meta
          name="copyright"
          content="LDPG - Land Development Property Group"
        />

        {/* Geographic targeting */}
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta
          name="geo.position"
          content="51.4879718844022;0.017832782472396915"
        />
        <meta name="ICBM" content="51.4879718844022, 0.017832782472396915" />
      </Head>

      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main id="main-content" role="main">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
