"use client";
import ContactifyImg from "@/assets/images/contactify.svg";
import KalculateImg from "@/assets/images/kalculate.svg";
import lower from "@/assets/images/lower.svg";
import upper from "@/assets/images/upper.svg";
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import "@/styles/globals.css";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = {};
const SLIDES = [
  { title: "Contactify", index: 0, image: ContactifyImg },
  { title: "Kalculate", index: 1, image: KalculateImg },
];

export const Project = () => {
  return (
    <section className="bg-black h-full w-screen overflow-x-hidden z-0 pt-5">
      <h1 className="text-white z-20 font-semibold font-enigma text-3xl text-center md:text-7xl pb-10">
        PROJECTS
      </h1>
      <Image
        src={upper}
        className=" absolute z-0 -top-[50%] -left-[50%] h-[1148px] w-auto "
        height={1000}
        width={1000}
        alt="upper-element"
      />
      <Image
        src={lower}
        className="absolute z-0 md:-bottom-[90%] -right-[30%] h-[1148px] w-auto"
        height={1000}
        width={1000}
        alt="lower-element"
      />
      <p className="text-white z-20 font-enigma text-xs md:text-lg text-center px-2 md:px-5">
        OUR CORE MEMBERS HAVE CREATED INDUSTRIAL LEVEL
        <br />
        <span className="text-[#FF4D00]">PROJECTS</span>
        <br />
        UNDER THE GUIDANCE OF THEIR ABLED TECHNICAL MENTORS
      </p>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};
