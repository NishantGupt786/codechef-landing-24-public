"use client";

import headImage from "@/assets/images/image.png";
import people from "@/assets/images/people.png";
import Card from "@/components/Card";
import { motion, useMotionValue, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

const Component1 = () => {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef<SVGPathElement | null>(null);

  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);
  const strokeDashoffset = useMotionValue(1);
  const circleRadius = 40;
  const circleOffset = circleRadius / 20;

  // Cards Data
  const cards = useMemo(
    () => [
      {
        title: "Devsoc'24",
        description:
          "Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most reputed chapters. Our teamwork, dedication, and determination propel and inspire our events to achieve greater heights.",
        imageSrc: people,
        reverse: true,
      },
      {
        title: "Cook-Off 8.0",
        description:
          "Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most reputed chapters. Our teamwork, dedication, and determination propel and inspire our events to achieve greater heights.",
        imageSrc: people,
      },
      {
        title: "Cookoff 9.0",
        description:
          "Events and hackathons are the two cornerstones that make CodeChef-VIT one of the campus' most reputed chapters. Our teamwork, dedication, and determination propel and inspire our events to achieve greater heights.",
        imageSrc: people,
        reverse: true,
      },
      {
        title: "Devsoc'25",
        description:
          "Devsoc'25 promises to bring another wave of innovation and collaboration, allowing students to participate in hackathons that challenge their creativity and problem-solving abilities.",
        imageSrc: people,
      },
    ],
    []
  );

  
  const svgHeight = 2250; 
const cardGap = svgHeight / (cards.length + 1); 
const svgPath = useMemo(() => {
  const path = [];
  let y = 0;
  let currentX = 700; 
  path.push(`M ${currentX},${y}`); 

  for (let i = 0; i < cards.length; i++) {
    y += cardGap;
    path.push(`L ${currentX},${y}`);
    const nextX = currentX === 700 ? 100 : 700; 
    
    if (i!=cards.length-1){
      path.push(`L ${nextX},${y}`);
      currentX = nextX; 
    }
  }
  y += cardGap;
  path.push(`L ${currentX},${y}`);
  return path.join(" ");
}, [cards.length, cardGap]);


  useEffect(() => {
    if (pathRef.current) {
      const pathElement = pathRef.current;
      const totalPathLength = pathElement.getTotalLength();

      const updateCirclePosition = (scrollPercent: number) => {
        const progress = scrollPercent * totalPathLength;
        const point = pathElement.getPointAtLength(progress);
        progressX.set(point.x);
        progressY.set(point.y);
        strokeDashoffset.set(1 - scrollPercent);
      };

      updateCirclePosition(scrollYProgress.get());
      const unsubscribe = scrollYProgress.onChange((scrollPercent) => {
        updateCirclePosition(scrollPercent);
      });

      return () => unsubscribe();
    }
  }, [scrollYProgress, progressX, progressY, strokeDashoffset]);

  return (
    <div className="bg-black min-h-screen w-full ">
      {/* Header Section */}
      <div className="relative h-3/4 w-5/6 mx-auto mt-12">
        <Image
          src={headImage}
          alt="Header Image"
          layout="responsive"
          width={1310}
          height={512}
        />
        <div className="absolute top-0 left-0 p-4 flex flex-col font-enigma">
          <h1 className="text-white xs:text-4xl lg:text-6xl font-bold">Our</h1>
          <h1 className="text-red-600 xs:text-6xl lg:text-[128px] font-bold">
            Events
          </h1>
        </div>
      </div>

      {/* SVG Section */}
      <div className="relative hidden lg:block">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 w-full h-[2300px] z-0"
          viewBox={`0 0 800 ${svgHeight}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <motion.path
            ref={pathRef}
            d={svgPath}
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="transparent"
            strokeDashoffset={strokeDashoffset}
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="red" />
            </linearGradient>
          </defs>
          <motion.circle
            cx={progressX}
            cy={progressY}
            r={circleRadius}
            fill="#FF3B00"
            style={{
              x: -circleOffset,
              y: -circleOffset,
            }}
          />
        </svg>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-8 items-center justify-center font-Space_Grotesk">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            imageAlt={card.title}
            reverse={card.reverse}
          />
        ))}
      </div>
    </div>
  );
};

export default Component1;
