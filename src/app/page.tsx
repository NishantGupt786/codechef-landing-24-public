
"use client"
import Events from "@/components/Events";
import ClientComponent from "@/components/ClientComponent";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";
const Home: React.FC = () => {
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
        <Events  />
      </ClientComponent>
    </main>
  );
};

export default Home;
