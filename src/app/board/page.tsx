"use client"
import achintya from "@/assets/images/boardimages/achintya.png";
import amlan from "@/assets/images/boardimages/amlan.png";
import anna from "@/assets/images/boardimages/anna.png";
import anoushka from "@/assets/images/boardimages/anoushka.png";
import aradhya from "@/assets/images/boardimages/aradhya.png";
import leora from "@/assets/images/boardimages/leora.png";
import aaditya from "@/assets/images/boardimages/mahanta.png";
import satyam from "@/assets/images/boardimages/satyam.png";
import shivamG from "@/assets/images/boardimages/shivam.png";
import souvik from "@/assets/images/boardimages/souvik.png";
import tarran from "@/assets/images/boardimages/taran.png";
import vaibhav from "@/assets/images/boardimages/vaibhav.png";
import vashishtha from "@/assets/images/boardimages/vashishta.png";
import Ripple from '@/components/Ripple';
import RippleStatic from '@/components/Ripplest';
import { useState } from 'react';
import BoardCard from './BoardCard';
import "./style.css";


export default function BoardPage() {

const [theBoards, setTheBoards] = useState([
  {
    boardPos: "Research Lead",
    boardName: "Aaditya Mahanta",
    boardDesc: "Aaditya is a detail-oriented thinker with a passion for innovation and uncovering insights to shape strategic decisions.",
    photo:aaditya,
  },
  {
    boardPos: "Technical Lead - Events",
    boardName: "Achintya Gupta",
    boardDesc: "Achintya is a tech-savvy problem solver, ensuring every event is powered by cutting-edge solutions.",
    photo:achintya,
  },
  {
    boardPos: "General Secretary - External",
    boardName: "Amlan",
    boardDesc: "Amlan is a charismatic communicator and bridge-builder, excelling at forging meaningful connections.",
    photo:amlan,
  },
  {
    boardPos: "Outreach and Media Lead",
    boardName: "Anoushka",
    boardDesc: "Anoushka is a creative storyteller with a knack for crafting impactful campaigns and engaging content.",
    photo:anoushka,
  },
  {
    boardPos: "General Secretary - Internal",
    boardName: "Aradhya",
    boardDesc: "Aradhya is a natural organizer with exceptional coordination skills, keeping operations smooth and efficient.",
    photo:aradhya,
  },
  {
    boardPos: "Finance Lead",
    boardName: "Leora Kumar",
    boardDesc: "Leora is a meticulous planner with a sharp eye for numbers, ensuring financial stability and transparency.",
    photo:leora,
  },
  {
    boardPos: "Vice Chairperson",
    boardName: "Satyam Ashutosh Rai",
    boardDesc: "Satyam is a dynamic leader with strategic foresight, committed to driving the organization forward.",
    photo:satyam,
  },
  {
    boardPos: "Chairperson",
    boardName: "Shivam Gutgutia",
    boardDesc: "Shivam is a visionary leader with unparalleled dedication to steering the team toward success.",
    photo:shivamG,
  },
  {
    boardPos: "Web Lead",
    boardName: "Shivam Sharma",
    boardDesc: "Shivam excels in building robust and user-friendly digital platforms, enhancing the team's online presence.",
    photo:anna,
  },
  {
    boardPos: "Technical Lead - Projects",
    boardName: "Souvik ",
    boardDesc: "Souvik is an innovative technologist with a passion for executing impactful technical projects.",
    photo:souvik,
  },
  {
    boardPos: "Publicity Lead",
    boardName: "Tarran Siddharth",
    boardDesc: "Tarran is a persuasive communicator skilled at crafting and delivering compelling messages.",
    photo:tarran,
  },
  {
    boardPos: "Design Lead",
    boardName: "Vaibhav Pathak",
    boardDesc: "Vaibhav is a creative visionary with a flair for aesthetics, translating ideas into stunning visuals.",
    photo:vaibhav,
  },
  {
    boardPos: "Creative Lead",
    boardName: "Vashishtha Kothamasu",
    boardDesc: "Vashishtha is a trailblazer in ideation, bringing fresh perspectives and imaginative solutions to the table.",
    photo:vashishtha,
  },
]);

  return (
    <>
      <div className="flex flex-col items-center">
      <div className="absolute inset-0 z-[-1]">
        <Ripple></Ripple>
        <RippleStatic duration={7000} />
        {/* <RippleStatic duration={7000} /> */}
      </div>
        <div className="pt-10 text-center text-white p-parent">
          <p className="sm:text-[4rem] text-[50px] uppercase ">meet our</p>
          <p className="sm:text-[128px] text-[70px] uppercase font-normal">board</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-14 mt-2 items-center justify-center">
          {theBoards.map((el, ind) => {
            const isLastCard = ind === theBoards.length - 1; 
            return (
              <div
                key={ind}
                className={`${isLastCard && "lg:col-span-3 md:col-span-2 justify-self-center"}`}
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
