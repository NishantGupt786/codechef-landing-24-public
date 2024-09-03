"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import DiscordIcon from "./images/Discord.svg";
import FacebookIcon from "./images/Facebook.svg";
import InstagramIcon from "./images/Instagram.svg";
import LinkedInIcon from "./images/LinkedIn.svg";
import TwitterIcon from "./images/Twitter.svg";
import YouTubeIcon from "./images/Youtube.svg";
const Footer: React.FC = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;

      if (scrollPosition >= bottomPosition) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-black text-white pt-10">
      <div className="text-center mb-4 mt-44">
        <span
          className={`text-9xl ${isAtBottom ? "text-[#FF3B00]" : "text-white"}`}
        >
          CODECHEF
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 border-t-2 border-b-2 border-white">
        <p className="text-xl mx-auto p-4">
          CODECHEF-VIT IS A NON-COMMERCIAL ORGANISATION WITH A GOAL TO PROVIDE A
          PLATFORM FOR PROGRAMMERS AND DEVELOPERS EVERYWHERE TO MEET, COMPETE &
          HAVE FUN. AT CODECHEF-VIT, WE BELIEVE IN THE WORDS OF MATT MULLENWEG –
          “TECHNOLOGY IS THE BEST WHEN IT BRINGS PEOPLE TOGETHER”.
        </p>
        <div className="grid grid-cols-2 gap-4 p-4 border-l-2 border-white">
          <a
            href="#"
            className="bg-gray-800 text-white p-3 text-center rounded hover:bg-[#FF3B00] transition hex4"
          >
            HOME
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white p-3 text-center rounded hover:bg-[#FF3B00] transition hex4"
          >
            PROJECTS
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white p-3 text-center rounded hover:bg-[#FF3B00] transition hex4"
          >
            BOARD
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white p-3 text-center rounded hover:bg-[#FF3B00] transition hex4"
          >
            DEVSOCs
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white p-3 text-center rounded hover:bg-[#FF3B00] transition hex4"
          >
            EVENTS
          </a>
          <a
            href="#"
            className="bg-gray-800 text-white p-3 text-center rounded hover:bg-[#FF3B00] transition hex4"
          >
            BLOG
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-white py-4 ">
        <div className="text-gray-400 ml-10">© 2024 CODECHEF</div>
        <div className="flex space-x-4 gap-8">
          <a href="#" className="text-gray-400 hover:text-white">
    <Image src={FacebookIcon} alt="facebook-icon" height={1000} width={1000} className="h-auto w-auto"/>
            {/* <FacebookIcon /> */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
          <Image src={TwitterIcon} alt="facebook-icon" height={1000} width={1000} className="h-auto w-auto"/>
            {/* <TwitterIcon/> */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
          <Image src={YouTubeIcon} alt="facebook-icon" height={1000} width={1000} className="h-auto w-auto"/>
            {/* <YouTubeIcon/> */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
          <Image src={InstagramIcon} alt="facebook-icon" height={1000} width={1000} className="h-auto w-auto"/>
            {/* <InstagramIcon/> */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
          <Image src={LinkedInIcon} alt="facebook-icon" height={1000} width={1000} className="h-auto w-auto"/>
            {/* <LinkedInIcon/> */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
          <Image src={DiscordIcon} alt="facebook-icon" height={1000} width={1000} className="h-auto w-auto"/>
            {/* <DiscordIcon/> */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
