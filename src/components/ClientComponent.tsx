"use client";
import { ReactNode } from "react";
import Loader from "@/components/loader";      
import Mloader from "@/components/Mloader";    

interface ClientComponentProps {
  children: ReactNode;
  isLoading: boolean | null;
  isMobile: boolean;
  onRiveEventTrigger: () => void;
}

const ClientComponent: React.FC<ClientComponentProps> = ({
  children,
  isLoading,
  isMobile,
  onRiveEventTrigger,
}) => {

  if (isLoading === null) return null;


  if (isLoading) {

    if (isMobile) {
      return <Mloader onRiveEventTrigger={onRiveEventTrigger} />;
    }

    return <Loader />;
  }


  return <>{children}</>;
};

export default ClientComponent;
