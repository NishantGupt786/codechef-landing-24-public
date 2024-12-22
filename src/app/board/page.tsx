"use client"
import Ripple from '@/components/Ripple';
import { useState } from 'react';
import BoardCard from './BoardCard';
import "./style.css";
import RippleStatic from '@/components/Ripplest';

export default function BoardPage() {
const [theBoards, setTheBoards] = useState([
  {
    boardPos: "Research Lead",
    boardName: "Aaditya Mahanta",
    boardDesc: "Aaditya is a detail-oriented thinker with a passion for innovation and uncovering insights to shape strategic decisions.",
  },
  {
    boardPos: "Technical Lead - Events",
    boardName: "Achintya Gupta",
    boardDesc: "Achintya is a tech-savvy problem solver, ensuring every event is powered by cutting-edge solutions.",
  },
  {
    boardPos: "General Secretary - External",
    boardName: "Amlan Srivastava",
    boardDesc: "Amlan is a charismatic communicator and bridge-builder, excelling at forging meaningful connections.",
  },
  {
    boardPos: "Outreach and Media Lead",
    boardName: "Anoushka Balamurugan",
    boardDesc: "Anoushka is a creative storyteller with a knack for crafting impactful campaigns and engaging content.",
  },
  {
    boardPos: "General Secretary - Internal",
    boardName: "Aradhya Sehgal",
    boardDesc: "Aradhya is a natural organizer with exceptional coordination skills, keeping operations smooth and efficient.",
  },
  {
    boardPos: "Finance Lead",
    boardName: "Leora Kumar",
    boardDesc: "Leora is a meticulous planner with a sharp eye for numbers, ensuring financial stability and transparency.",
  },
  {
    boardPos: "Vice Chairperson",
    boardName: "Satyam Ashutosh Rai",
    boardDesc: "Satyam is a dynamic leader with strategic foresight, committed to driving the organization forward.",
  },
  {
    boardPos: "Chairperson",
    boardName: "Shivam Gutgutia",
    boardDesc: "Shivam is a visionary leader with unparalleled dedication to steering the team toward success.",
  },
  {
    boardPos: "Web Lead",
    boardName: "Shivam Sharma",
    boardDesc: "Shivam excels in building robust and user-friendly digital platforms, enhancing the team's online presence.",
  },
  {
    boardPos: "Technical Lead - Projects",
    boardName: "Souvik Mukherjee",
    boardDesc: "Souvik is an innovative technologist with a passion for executing impactful technical projects.",
  },
  {
    boardPos: "Publicity Lead",
    boardName: "Tarran Siddharth",
    boardDesc: "Tarran is a persuasive communicator skilled at crafting and delivering compelling messages.",
  },
  {
    boardPos: "Design Lead",
    boardName: "Vaibhav Pathak",
    boardDesc: "Vaibhav is a creative visionary with a flair for aesthetics, translating ideas into stunning visuals.",
  },
  {
    boardPos: "Creative Lead",
    boardName: "Vashishtha Kothamasu",
    boardDesc: "Vashishtha is a trailblazer in ideation, bringing fresh perspectives and imaginative solutions to the table.",
  },
]);

  return (
    <>
      <div className="flex flex-col items-center">
      <div className="absolute inset-0 z-[-1]">
        <Ripple></Ripple>
        <RippleStatic x={0} y={1} duration={15000} />
        <RippleStatic x={1300} y={700} duration={15000} />
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
