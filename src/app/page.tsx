"use client";
import ClientComponent from "@/components/ClientComponent";
import CodeChefHeader from "@/components/HomePage";
import Ripple from "@/components/Ripple";
import { useEffect, useState } from "react";
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
  <div className="relative bg-white">
    <div>
      <CodeChefHeader />
    </div>
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Ripple />
    </div>
  </div>
</ClientComponent>

    </main>
  );
};

export default HomeMain;
