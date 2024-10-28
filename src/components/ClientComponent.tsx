"use client";
import { ReactNode, useState, useEffect } from "react";
import Loader from "@/components/loader";

interface ClientComponentProps {
  children: ReactNode;
}

const ClientComponent: React.FC<ClientComponentProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  useEffect(() => {
  
    if (typeof window !== 'undefined') {
      const hasLoadedBefore = sessionStorage.getItem('hasLoadedBefore');

      if (hasLoadedBefore) {
      
        setIsLoading(false);
      } else {
    
        setIsLoading(true);
        const timer = setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('hasLoadedBefore', 'true');
        }, 15000);

        return () => clearTimeout(timer);
      }
    }
  }, []);


  if (isLoading === null) {
    return null;
  }

  return <>{isLoading ? <Loader /> : children}</>;
};

export default ClientComponent;
