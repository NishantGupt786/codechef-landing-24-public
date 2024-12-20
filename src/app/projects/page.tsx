"use client";
import ContactifyImg from "@/assets/images/contactify.svg";
import KalculateImg from "@/assets/images/kalculate.svg";
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
  {
    title: "Kalculate",
    index: 1,
    image: KalculateImg,
    classe: "h-[280px] w-[280px] scale-125",
  },
];

export default function Project() {
  return (
    <section className="bg-black w-screen overflow-hidden z-0 mt-12">
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
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
}
