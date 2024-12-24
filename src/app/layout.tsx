"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";

import Loader from "@/components/loader";
import MLoader from "@/components/Mloader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    setChanges((prev) => prev + 1);
  }, [pathname]);

  const lenisOptions = {
    lerp: 1,
    duration: 1.5,
    smoothTouch: false,
    smooth: true,
  };

  const [isLoaderActive, setIsLoaderActive] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore2");

      if (hasLoadedBefore) {
        setIsLoaderActive(false);
      } else {
        setIsLoaderActive(true);
        if (!isMobile) {
          const timer = setTimeout(() => {
            setIsLoaderActive(false);
            sessionStorage.setItem("hasLoadedBefore2", "true");
          }, 15000);

          return () => clearTimeout(timer);
        }
      }
    }
  }, [isMobile]);

  const handleRiveEvent = () => {
    console.log("Rive event triggered → Ending loader on mobile");
    setIsLoaderActive(false);
    sessionStorage.setItem("hasLoadedBefore2", "true");
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <html lang="en">
        <head></head>
        <body className={`${inter.className} overflow-x-hidden bg-black`}>
          {isLoaderActive ? (
            isMobile ? (
              <MLoader onRiveEventTrigger={handleRiveEvent} />
            ) : (
              <Loader />
            )
          ) : (
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              {pathname !== "/" && <Footer />}
            </div>
          )}

          <Script src="/assets/navbar/js/demo1.js" strategy="lazyOnload" />
          <Script
            src="/assets/navbar/js/modernizr-2.6.2.min.js"
            strategy="lazyOnload"
          />
          <Script src="/assets/navbar/js/polyfills.js" strategy="lazyOnload" />
        </body>
      </html>
    </ReactLenis>
  );
}
