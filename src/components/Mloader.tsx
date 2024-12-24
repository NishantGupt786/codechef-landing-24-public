"use client";

import { useEffect, useCallback } from "react";
import {
  useRive,
  RiveEventType,
  EventType,
  Layout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";

interface MLoaderProps {
  onRiveEventTrigger: () => void; 
}

export default function MLoader({ onRiveEventTrigger }: MLoaderProps) {
  const { rive, RiveComponent } = useRive({
    src: "/MIntro.riv", 
    artboard: "main",
    stateMachines: ["State Machine 1"],
    autoplay: true,
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.Center,
    }),
  });

 
  const onRiveEventReceived = useCallback(
    (riveEvent: any) => {
      const eventData = riveEvent.data;
      if (eventData?.type === RiveEventType.General) {
        console.log("Mobile Rive General Event:", eventData.name);
      
        onRiveEventTrigger();
      } else if (eventData?.type === RiveEventType.OpenUrl) {
        console.log("Mobile Rive OpenUrl Event:", eventData.name);
        window.location.href = eventData.url;
      }
    },
    [onRiveEventTrigger]
  );

  useEffect(() => {
    if (!rive) return;
    rive.on(EventType.RiveEvent, onRiveEventReceived);
    return () => {
      rive.off(EventType.RiveEvent, onRiveEventReceived);
    };
  }, [rive, onRiveEventReceived]);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <RiveComponent />
    </div>
  );
}
