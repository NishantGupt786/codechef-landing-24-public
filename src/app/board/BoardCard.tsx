"use client";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";
import "./style.css";

type BoardCardProps = {
  photo: string | StaticImageData;
  num: number;
  boardName: string;
  boardDesc: string;
  boardPos: string;
};

export default function BoardCard({
  photo,
  num,
  boardName,
  boardDesc,
  boardPos,
}: BoardCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const cardHoverStyle = {
    transform: "rotateY(180deg)",
    backgroundImage: "url('/revCard.png')",
    backgroundSize: "250px 350px !important",
  };
  const cardNotHover = {
    // transform: "rotateY(180deg)",
    backgroundImage: "url('/bCard.png')",
    backgroundSize: "250px 350px !important",
  };
  return (
    <div
      onMouseEnter={() => {
        setIsHovering(true);
        console.log("mouse come");
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        console.log("mouse go");
      }}
      className="transition-all duration-500 bg-no-repeat bg-cover h-[100px] w-[100px] card "
      style={isHovering ? cardHoverStyle : cardNotHover}
    >
      <Image
        className="transition-all duration-200"
        src={photo}
        alt="BoardMember"
        
        objectFit="cover" 
        style={{
          opacity: isHovering ? "0" : "1",
          transition: "opacity 0.3s ease-in-out",
        }}
      />
      {!isHovering ? (
        <>
          <div className="flex flex-col items-center mt-[-22px] p-parent transition-all duration-300 ">
            <p className="text-black text-[14px] name mx-6 text-center pt-1">
              {boardName}
            </p>
            <p className="text-black text-[10px] text-center mx-5 role">
              {boardPos}
            </p>
          </div>
        </>
      ) : (
        <div className="cursor-default absolute top-0  p-parent h-[70%] flex justify-center items-center mx-[40px] my-[50px]">
          <p className="text-white text-[13px] name t-r">{boardDesc}</p>
        </div>
      )}
    </div>
  );
}
