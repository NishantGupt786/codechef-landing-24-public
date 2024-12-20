"use client";

import Rive, { Alignment, Fit, Layout } from "@rive-app/react-canvas";

export default function Loader() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
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