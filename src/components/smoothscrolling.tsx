"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
    const lenisOptions = {
      lerp: 0.3,
      duration: 3,
      smoothTouch: false, 
      smooth: true,
    };

return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );

}
export default SmoothScrolling;
