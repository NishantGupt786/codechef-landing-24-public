"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree, extend } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D u_texture;
  uniform vec2 u_mouse;
  uniform vec2 u_prevMouse;
  uniform float u_aberrationIntensity;

  void main() {
    // Grid to create that pixel-like effect
    vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
    vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);

    // Mouse direction
    vec2 mouseDirection = u_mouse - u_prevMouse;

    // Distance from the pixel center to mouse position
    vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
    float pixelDistanceToMouse = length(pixelToMouseDirection);
    float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

    // Offset the UV by the strength and mouse direction
    vec2 uvOffset = strength * -mouseDirection * 0.2;
    vec2 uv = vUv - uvOffset;

    // Chromatic aberration: sample R, G, B with slight offsets
    vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
    vec4 colorG = texture2D(u_texture, uv);
    vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

    gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
  }
`;


const PixelShaderMaterial = shaderMaterial(
  {
    u_texture: null,
    u_mouse: new THREE.Vector2(0.5, 0.5),
    u_prevMouse: new THREE.Vector2(0.5, 0.5),
    u_aberrationIntensity: 0.0,
  },
  vertexShader,
  fragmentShader
);

extend({ PixelShaderMaterial });

function PixelPlane({ textureUrl }) {
  const meshRef = useRef();
  const materialRef = useRef();

  const texture = useLoader(TextureLoader, textureUrl);


  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [targetMousePosition, setTargetMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [prevPosition, setPrevPosition] = useState({ x: 0.5, y: 0.5 });
  const [easeFactor, setEaseFactor] = useState(0.02);
  const [aberration, setAberration] = useState(0);


  const { viewport } = useThree();


  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(viewport.width, viewport.height);
  }, [viewport.width, viewport.height]);


  useFrame(() => {

    const newX = mousePosition.x + (targetMousePosition.x - mousePosition.x) * easeFactor;
    const newY = mousePosition.y + (targetMousePosition.y - mousePosition.y) * easeFactor;
    setMousePosition({ x: newX, y: newY });

    if (materialRef.current) {
      materialRef.current.u_mouse.set(newX,newY);
      materialRef.current.u_prevMouse.set(prevPosition.x,  prevPosition.y);
      materialRef.current.u_aberrationIntensity = Math.max(0, aberration - 0.05);

      setAberration((prev) => Math.max(0, prev - 0.05));
    }
  });

  const handlePointerMove = (event) => {
    setEaseFactor(0.02);
    setPrevPosition({ x: targetMousePosition.x, y: targetMousePosition.y });
    setTargetMousePosition({ x: event.uv.x, y: event.uv.y });
    setAberration(1);
  };

  const handlePointerEnter = (event) => {
    setEaseFactor(0.02);
    setMousePosition({ x: event.uv.x, y: event.uv.y });
    setTargetMousePosition({ x: event.uv.x, y: event.uv.y });
  };

  const handlePointerLeave = () => {
    setEaseFactor(0.05);
    setTargetMousePosition({ x: prevPosition.x, y: prevPosition.y });
  };

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <pixelShaderMaterial
        ref={materialRef}
        u_texture={texture}
        transparent={false}
      />
    </mesh>
  );
}

export default function PixelImage() {
  return (
   
    <div className="relative w-full h-full ">
      <Canvas
   
        camera={{ fov: 80, near: 0.01, far: 100, position: [0, 0, 5] }}
        className="w-full h-full transition-all duration-500 ease-in-out grayscale-0 hover:grayscale"
      >
        <PixelPlane textureUrl="/assets/images/France.jpg" />
      </Canvas>
    </div>
  );
}