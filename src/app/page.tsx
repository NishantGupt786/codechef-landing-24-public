
"use client";

import ClientComponent from "@/components/ClientComponent"; 
import CodeChefHeader from "@/components/HomePage";
import Ripple from "@/components/Ripple";

import { useEffect, useState } from "react";


const HomeMain: React.FC = () => {

  return (
    <main>
      <div className="relative bg-white">
        <div>
          <CodeChefHeader />
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <Ripple />
        </div>
      </div>
    </main>
  );
};

export default HomeMain;
