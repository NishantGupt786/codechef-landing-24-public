"use client";
import headImage from "@/assets/images/image.png";
import people from "@/assets/images/people.png";
import { motion, useMotionValue, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Component1 = () => {
  const { scrollYProgress } = useScroll();
  const pathRef = useRef<SVGPathElement | null>(null);

  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);

  const circleRadius = 40;
  const circleOffset = circleRadius / 20;

  useEffect(() => {
    if (pathRef.current) {
      const pathElement = pathRef.current;
      const totalPathLength = pathElement.getTotalLength();

      const updateCirclePosition = (scrollPercent: number) => {
        const progress = scrollPercent * totalPathLength;
        const point = pathElement.getPointAtLength(progress);
        progressX.set(point.x);
        progressY.set(point.y);
      };

      updateCirclePosition(scrollYProgress.get());
      const unsubscribe = scrollYProgress.onChange((scrollPercent) => {
        updateCirclePosition(scrollPercent);
      });

      return () => unsubscribe();
    }
  }, [scrollYProgress, progressX, progressY]);

  return (
    <div className="bg-black min-h-screen w-full font-enigma">
      {/* Header Section */}
      <div className="relative h-3/4 w-5/6 mx-auto">
        <Image
          src={headImage}
          alt="Header Image"
          layout="responsive"
          width={1310}
          height={512}
        />
        <div className="absolute top-0 left-0 p-4 flex flex-col">
          <h1 className="text-white xs:text-4xl lg:text-6xl font-bold">Our</h1>
          <h1 className="text-red-600 xs:text-6xl lg:text-8xl font-bold">Events</h1>
        </div>
      </div>

      {/* SVG Section */}
      <div className="relative">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 w-full h-[2300px] z-0"
          viewBox="0 0 800 2200"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            ref={pathRef}
            d="M 650, 0
            L 650, 100 
            L 650, 500  
            L 100, 500  
            L 100, 1000  
            L 670, 1000  
            L 670, 1450 
            L 100, 1450
            L 100, 2000"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
          />
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
      <div className="flex flex-col items-center justify-center">
        {/* First Section */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center mt-20 relative z-10 flex-wrap">
          <div className="lg:w-96 lg:mr-36">
            <div className="text-white border lg:w-72 flex justify-center mx-auto lg:mx-0">
              <h1 className="lg:text-xl text-sm">Devsoc'24</h1>
            </div>
            <p className="text-white mt-1 lg:w-96 lg:ml-0 mx-auto text-xs lg:text-lg text-center lg:text-left">
              Events and hackathons are the two cornerstones that make CodeChef-VIT
              one of the campus' most reputed chapters. Our teamwork, dedication,
              and determination propel and inspire our events to achieve greater heights.
            </p>
          </div>
          <Image
            src={people}
            alt="People"
            width={500}
            height={500}
            className="lg:h-64 lg:w-96 mx-auto lg:ml-10 h-36 w-52 mt-10 lg:mt-0"
          />
        </div>

        {/* Second Section */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center lg:mt-64 3xs:mt-28 relative z-10 flex-wrap">
          <Image
            src={people}
            alt="People"
            width={500}
            height={500}
            className="lg:h-64 lg:w-96 mx-auto lg:ml-10 h-36 w-52 mt-10 lg:mt-0 lg:mr-32"
          />
          <div className="lg:w-96 lg:ml-10">
            <div className="text-white border lg:w-64 flex justify-center mx-auto lg:mx-0">
              <h1 className="lg:text-xl text-sm">Cook-Off 8.0</h1>
            </div>
            <p className="text-white mt-1 lg:w-96 lg:ml-0 mx-auto text-xs lg:text-lg text-center lg:text-left">
              Events and hackathons are the two cornerstones that make CodeChef-VIT
              one of the campus' most reputed chapters. Our teamwork, dedication,
              and determination propel and inspire our events to achieve greater heights.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center mt-44 relative z-10 flex-wrap">
          <div className="lg:w-96 lg:mr-36">
            <div className="text-white border lg:w-64 flex justify-center mx-auto lg:mx-0">
              <h1 className="lg:text-xl text-sm">Cookoff9.0</h1>
            </div>
            <p className="text-white mt-1 lg:w-96 lg:ml-0 mx-auto text-xs lg:text-lg text-center lg:text-left">
              Events and hackathons are the two cornerstones that make CodeChef-VIT
              one of the campus' most reputed chapters. Our teamwork, dedication,
              and determination propel and inspire our events to achieve greater heights.
            </p>
          </div>
          <Image
            src={people}
            alt="People"
            width={500}
            height={500}
            className="lg:h-64 lg:w-96 mx-auto lg:ml-10 h-36 w-52 mt-10 lg:mt-0"
          />
        </div>

        {/* Fourth Section */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center mt-44 relative z-10 flex-wrap">
          <Image
            src={people}
            alt="People"
            width={500}
            height={500}
            className="lg:h-64 lg:w-96 mx-auto lg:ml-10 h-36 w-52 mt-10 lg:mt-0 lg:mr-32"
          />
          <div className="lg:w-96 lg:ml-10">
            <div className="text-white border lg:w-64 flex justify-center mx-auto lg:mx-0">
              <h1 className="lg:text-xl text-sm">Devsoc'25</h1>
            </div>
            <p className="text-white mt-1 lg:w-96 lg:ml-0 mx-auto text-xs lg:text-lg text-center lg:text-left">
              Devsoc'25 promises to bring another wave of innovation and collaboration,
              allowing students to participate in hackathons that challenge their
              creativity and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
