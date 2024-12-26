"use client";
import clueminati from "@/assets/images/clueminati.svg";
import ContactifyImg from "@/assets/images/contactify.svg";
import ffcs from "@/assets/images/ffcs.svg";
import papers from "@/assets/images/papers.svg";
import Ripple from "@/components/Ripple";
import RippleStatic from "@/components/Ripplest";
import RippleStatic2 from "@/components/RippleStatic";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import "@/styles/globals.css";
import { EmblaOptionsType } from "embla-carousel";
import { useEffect, useState } from "react";

const OPTIONS: EmblaOptionsType = {};
const SLIDES = [
  {
    title: "Contactify",
    index: 0,
    image: ContactifyImg,
    classe: "h-[270px] w-[270px]",
    url: "https://contactify.codechefvit.com/"
  },
  // {
  //   title: "Devsoc",
  //   index: 1,
  //   image: KalculateImg,
  //   classe: "h-[280px] w-[280px] scale-125",
  // },
  // {
  //   title: "CookOff",
  //   index: 2,
  //   image: KalculateImg,
  //   classe: "h-[280px] w-[280px] scale-125",
  // },
  {
    title: "FFCS",
    index: 3,
    image: ffcs,
    classe: "h-[300px] w-[300px] scale-100",
    url:"https://ffcs.codechefvit.com/"
  },
  {
    title: "Papers",
    index: 4,
    image: papers,
    classe: "h-[300px] w-[300px] scale-100",
    url: "https://papers.codechefvit.com/"
  },
  {
    title: "Clueminati 2.0",
    index: 5,
    image: clueminati,
    classe: "h-[300px] w-[300px] scale-100",
    url: "https://github.com/CodeChefVIT/clueminati-portal-2.0"
  },
];

export default function Project() {
  const [ripHid, setRipHid] = useState<boolean>(true);
  useEffect(()=>{
    const ripShow = setTimeout(() => {
      setRipHid(false);
      console.log("ab dikhega 2nd ripple");
    }, 2000);
  },[])
  
  return (
    <div className="bg-black w-screen min-h-[80vh] md:min-h-[100vh] overflow-visible z-0 mt-12 relative">
      {/* Ripple effect */}
      <div className="absolute inset-0 z-[-1]">
        <Ripple></Ripple>
        <RippleStatic duration={7000}  />
        {/* <RippleStatic duration={1000} /> */}
        {/* {!ripHid && (
        )} */}
      </div>

      {/* Project Header */}
      <h1 className="text-white font-semibold font-enigma text-3xl text-center md:text-7xl lg:text-[128px] pb-10 mt-10">
        PROJECTS
      </h1>
      <p className="text-white font-enigma text-xs md:text-lg lg:text-xl text-center px-2 md:px-5 pb-10">
        OUR CORE MEMBERS HAVE CREATED INDUSTRIAL LEVEL
        <br />
        <span className="text-[#FF4D00]">PROJECTS</span>
        <br />
        UNDER THE GUIDANCE OF THEIR ABLED TECHNICAL MENTORS
      </p>

      {/* Carousel */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
