"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Inter } from "next/font/google";
import Script from "next/script";
import Footer from "./Footer";
import Loader from "./loader";
import MLoader from "./Mloader";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function TheMain({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaderActive, setIsLoaderActive] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const [spacePressed, setSpacePressed] = useState<boolean>(false);

  const lenisOptions = {
    lerp: 1,
    duration: 1.5,
    smoothTouch: false,
    smooth: true,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const pcLoaderHasLoaded = sessionStorage.getItem("pcLoaderHasLoaded");
    if (pcLoaderHasLoaded === "true") {
      setIsLoaderActive(false);
    }

    const spaceClick = (event: KeyboardEvent) => {
      if (event.key === " " || event.key === "Spacebar") {
        setIsLoaderActive(false);
        sessionStorage.setItem("pcLoaderHasLoaded", "true");
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", spaceClick);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", spaceClick);
    };
  }, []);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore2");

    if (hasLoadedBefore) {
      setIsLoaderActive(false);
    } else if (!isMobile) {
      const timer = setTimeout(() => {
        setIsLoaderActive(false);
        sessionStorage.setItem("hasLoadedBefore2", "true");
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const handleRiveEvent = () => {
    setIsLoaderActive(false);
    sessionStorage.setItem("hasLoadedBefore2", "true");
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className={`${inter.className} overflow-x-hidden bg-black`}>
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

        {!isLoaderActive && (
          <>
            <Script src="/assets/navbar/js/demo1.js" strategy="lazyOnload" />
            <Script
              src="/assets/navbar/js/modernizr-2.6.2.min.js"
              strategy="lazyOnload"
            />
            <Script
              src="/assets/navbar/js/polyfills.js"
              strategy="lazyOnload"
            />
          </>
        )}
      </div>
    </ReactLenis>
  );
}
