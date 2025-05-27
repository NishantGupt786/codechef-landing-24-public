"use client";
import abhinav from "@/assets/images/boardimages/abhinav.png";
import aarushi from "@/assets/images/boardimages/aarushi.png";
import aman from "@/assets/images/boardimages/aman.png";
import anoushka from "@/assets/images/boardimages/anoushka.png";
import divyanshu from "@/assets/images/boardimages/divyanshu.png";
import karan from "@/assets/images/boardimages/karan.png";
import mrudul from "@/assets/images/boardimages/mrudul.png";
import nishant from "@/assets/images/boardimages/nishant.png";
import prateek from "@/assets/images/boardimages/prateek.png";
import samyak from "@/assets/images/boardimages/samyak.png";
import soham from "@/assets/images/boardimages/soham.png";
import tanvi from "@/assets/images/boardimages/tanvi.png";
import vedant from "@/assets/images/boardimages/vedant.png";

import Ripple from "@/components/Ripple";
import RippleStatic from "@/components/RipplestStatic";
import { useState } from "react";
import BoardCard from "./BoardCard";
import "./style.css";

export default function BoardPage() {
  const [theBoards, setTheBoards] = useState([
    {
      boardPos: "Projects Head",
      boardName: "Abhinav",
      boardDesc:
        "Abhinav is a builder at heart, always focused on driving impactful and efficient project execution.",
      photo: abhinav,
    },
    {
      boardPos: "Events Head",
      boardName: "Aarushi",
      boardDesc:
        "Aarushi is a spirited organizer with a flair for curating unforgettable and well-managed events.",
      photo: aarushi,
    },
    {
      boardPos: "Web Dev Head",
      boardName: "Aman L",
      boardDesc:
        "Aman is a coding enthusiast dedicated to creating seamless, high-performance digital experiences.",
      photo: aman,
    },
    {
      boardPos: "Graphic Design Head",
      boardName: "Anoushka",
      boardDesc:
        "Anoushka is a creative powerhouse with a passion for translating ideas into visual masterpieces.",
      photo: anoushka,
    },
    {
      boardPos: "Media and Compi Head",
      boardName: "Divyanshu",
      boardDesc:
        "Divyanshu is a versatile strategist with expertise in both media engagement and competition planning.",
      photo: divyanshu,
    },
    {
      boardPos: "Chairperson",
      boardName: "Karan",
      boardDesc:
        "Karan is a visionary leader with a commitment to guiding the team toward innovation and impact.",
      photo: karan,
    },
    {
      boardPos: "Co-Secretary",
      boardName: "Mrudul",
      boardDesc:
        "Mrudul is a reliable coordinator, bridging communication and fostering collaboration across domains.",
      photo: mrudul,
    },
    {
      boardPos: "General Secretary",
      boardName: "Nishant",
      boardDesc:
        "Nishant is a dynamic facilitator with the ability to streamline operations and keep everything on track.",
      photo: nishant,
    },
    {
      boardPos: "Vice Chairperson (Tech)",
      boardName: "Prateek",
      boardDesc:
        "Prateek is a tech leader with a sharp strategic mind, pushing boundaries in the digital space.",
      photo: prateek,
    },
    {
      boardPos: "UI/UX Head",
      boardName: "Samyak",
      boardDesc:
        "Samyak is a design-thinker passionate about creating intuitive, user-friendly interfaces.",
      photo: samyak,
    },
    {
      boardPos: "Publicity and Outreach Head",
      boardName: "Soham",
      boardDesc:
        "Soham is a networking expert and content promoter with an eye for amplifying the club’s presence.",
      photo: soham,
    },
    {
      boardPos: "Vice Chairperson (Management)",
      boardName: "Tanvi",
      boardDesc:
        "Tanvi is an operations expert with exceptional leadership in managing people and processes.",
      photo: tanvi,
    },
    {
      boardPos: "Research Head",
      boardName: "Vedant",
      boardDesc:
        "Vedant is a knowledge seeker with a keen analytical mind, driving impactful research and insights.",
      photo: vedant,
    },
  ]);

  return (
    <>
      <div className="flex flex-col items-center ">
      <Ripple/>
      <RippleStatic duration={7000} />
        <div className="pt-10 text-center text-white p-parent">
          <p className="sm:text-[4rem] text-[50px] uppercase ">meet our</p>
          <p className="sm:text-[128px] text-[70px] uppercase font-normal">
            board
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-14 mt-2 items-center justify-center">
          {theBoards.map((el, ind) => {
            const isLastCard = ind === theBoards.length - 1;
            return (
              <div
                key={ind}
                className={`${
                  isLastCard &&
                  "lg:col-span-3 md:col-span-2 justify-self-center"
                }`}
              >
                <BoardCard
                  photo={el.photo}
                  num={ind}
                  boardDesc={el.boardDesc}
                  boardName={el.boardName}
                  boardPos={el.boardPos}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
