"use client";
import { ReactNode, useState, useEffect } from "react";
import Loader from "@/components/loader";

interface ClientComponentProps {
  children: ReactNode;
  isLoading: boolean | null;
}

const ClientComponent: React.FC<ClientComponentProps> = ({ children, isLoading }) => {
  if (isLoading === null) {
    return null;
  }

  return <>{isLoading ? <Loader /> : children}</>;
};

export default ClientComponent;
