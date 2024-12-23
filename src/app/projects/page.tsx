"use client";
import clueminati from "@/assets/images/clueminati.svg";
import ContactifyImg from "@/assets/images/contactify.svg";
import ffcs from "@/assets/images/ffcs.svg";
import papers from "@/assets/images/papers.svg";
import Ripple from "@/components/Ripple";
import RippleStatic from "@/components/Ripplest";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import "@/styles/globals.css";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};
const SLIDES = [
  {
    title: "Contactify",
    index: 0,
    image: ContactifyImg,
    classe: "h-[270px] w-[270px]",
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
  },
  {
    title: "Papers",
    index: 4,
    image: papers,
    classe: "h-[300px] w-[300px] scale-100",
  },
  {
    title: "Clueminati 2.0",
    index: 5,
    image: clueminati,
    classe: "h-[300px] w-[300px] scale-100",
  },
];

export default function Project() {
  return (
    <div className="bg-black w-screen min-h-[100vh] overflow-visible z-0 mt-12 relative">
      {/* Ripple effect */}
      <div className="absolute inset-0 z-[-1]">
        <Ripple></Ripple>
        <RippleStatic x={0} y={1} duration={15000} />
        <RippleStatic x={1440} y={800} duration={15000} />
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