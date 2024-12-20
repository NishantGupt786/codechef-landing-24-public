"use client"
import Footer from '@/components/Footer';
import BoardCard from './BoardCard';
import Ripple from '@/components/Ripple';
import "./style.css";
import { useState } from 'react';



export default function BoardPage() {
  const [theBoards, setTheBoards] = useState([{
    boardPos: "Events Head",
    boardName: "Aarushi Kumari",
    boardDesc: "Aarushi is a dynamic leader specializing in orchestrating innovative events. Her exceptional planning and organizational skills ensure memorable experiences."
  },
  {
    boardPos: "Projects Head",
    boardName: "Abhinav Ganeshan",
    boardDesc: "Abhinav spearheads impactful projects with a focus on creativity and precision. His technical expertise drives the team to deliver exceptional results."
  },
  {
    boardPos: "Research Head",
    boardName: "Vedant Matanhelia",
    boardDesc: "Vedant is a research enthusiast with a keen eye for detail and innovation. He excels in driving forward-thinking initiatives and fostering intellectual growth."
  },
  {
    boardPos: "Media and Compi Head",
    boardName: "Divyanshu Kumar",
    boardDesc: "Divyanshu is a media expert ensuring impactful communication and outreach. He excels in leveraging platforms to amplify the team’s initiatives"
  },
  {
    boardPos: "Chairperson",
    boardName: "Karan Dugar",
    boardDesc: "Karan leads with vision and strategy, fostering collaboration across all domains. His leadership ensures the team's seamless functioning and success."
  },
  {
    boardPos: "Secretary",
    boardName: "Mrudul Mamtani",
    boardDesc: "Mrudul is the backbone of the team, managing schedules and maintaining smooth operations. His meticulous approach ensures efficient coordination."
  },
  {
    boardPos: "Frontend Head",
    boardName: "Nishant Gupta",
    boardDesc: "Nishant excels in crafting intuitive and seamless user interfaces. His expertise in frontend technologies drives the team's digital presence."
  },
  {
    boardPos: "Vice Chair: Tech",
    boardName: "Prateek Srivastava",
    boardDesc: "Prateek is a tech innovator dedicated to driving technological advancements. His mentorship and expertise ensure robust and scalable solutions."
  },
  {
    boardPos: "UI/UX Head",
    boardName: "Samyak Jain",
    boardDesc: "Samyak focuses on user-centric designs, delivering aesthetic and functional experiences. His keen sense of design elevates the team's projects."
  },
  {
    boardPos: "Finance Head",
    boardName: "Shourya Jain",
    boardDesc: "Shourya ensures financial stability with strategic budget planning and resource management. His insights keep the team’s finances on track."
  },
  {
    boardPos: "Publicity and Outreach Head",
    boardName: "Soham Chhajed",
    boardDesc: "Vedant is a research enthusiast with a keen eye for detail and innovation. He excels in driving forward-thinking initiatives and fostering intellectual growth."
  },
  {
    boardPos: "Vice Chair: Management",
    boardName: "Tanvi Jain",
    boardDesc: "Vedant is a research enthusiast with a keen eye for detail and innovation. He excels in driving forward-thinking initiatives and fostering intellectual growth."
  },
  {
    boardPos: "Backend Head",
    boardName: "Aman L",
    boardDesc: "Aman is a backend wizard building scalable and secure systems. His expertise ensures the backbone of the team's technical projects is robust and efficient."
  }])
  return (
    <>
    <div className="bg-black flex flex-col items-center">
      <div className=" pt-[5rem] text-center text-white p-parent">
        <p className="sm:text-[2.5rem] text-[1.95rem] uppercase">meet our</p>
        <p className="sm:text-[120px] text-[80px] uppercase font-normal">board</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-12 gap-y-14 mt-[5rem] ">
        {theBoards.map((el, ind)=>{
          return <BoardCard key={ind} num={ind} boardDesc={el.boardDesc} boardName={el.boardName} boardPos={el.boardPos} />
        })}
      </div>
    </div>
    <Ripple/>
    </>
  );
}
