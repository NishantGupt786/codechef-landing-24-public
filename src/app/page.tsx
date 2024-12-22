"use client";
import ClientComponent from "@/components/ClientComponent";
import Ripple from "@/components/Ripple";
import { useEffect, useState } from "react";
import Home from "./home/page";
import Ripplest from "@/components/Ripplest";
const HomeMain: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");

      if (hasLoadedBefore) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
        const timer = setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("hasLoadedBefore", "true");
        }, 15000);

        return () => clearTimeout(timer);
      }
    }
  }, []);
  return (
    <main>
      <ClientComponent isLoading={isLoading}>
        <Home />
        <Ripple />
       
      </ClientComponent>
    </main>
  );
};

export default HomeMain;
