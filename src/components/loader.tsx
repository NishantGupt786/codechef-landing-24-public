"use client";

import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

export default function Loader() {
  

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <Rive
        src="/websiteloader.riv"
        layout={new Layout({
          fit: Fit.Fill,
          alignment: Alignment.Center,
        })}
      />
      
    </div>
  );
}
