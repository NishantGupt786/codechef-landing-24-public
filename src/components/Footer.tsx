"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DiscordIcon from "./../assets/images/Discord.svg";
import FacebookIcon from "./../assets/images/Facebook.svg";
import InstagramIcon from "./../assets/images/Instagram.svg";
import LinkedInIcon from "./../assets/images/LinkedIn.svg";
import TwitterIcon from "./../assets/images/Twitter.svg";
import YouTubeIcon from "./../assets/images/Youtube.svg";

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
      <div className="text-center mb-4 mt-44 font-enigma">
        <span
          className={`text-9xl ${isAtBottom ? "text-[#FF3B00]" : "text-white"}`}
        >
          CODECHEF
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 border-t-2 border-b-2 border-white font-enigma">
        <p className="text-xl mx-auto p-4">
          CODECHEF-VIT IS A NON-COMMERCIAL ORGANISATION WITH A GOAL TO PROVIDE A
          PLATFORM FOR PROGRAMMERS AND DEVELOPERS EVERYWHERE TO MEET, COMPETE &
          HAVE FUN. AT CODECHEF-VIT, WE BELIEVE IN THE WORDS OF MATT MULLENWEG –
          “TECHNOLOGY IS THE BEST WHEN IT BRINGS PEOPLE TOGETHER”.
        </p>
        <div className="grid grid-cols-2 border-l-2 border-white grid-container">
          <div className="grid-item grid grid-cols-2  w-[700px]">
            <FooterButton label={"HOME"} redirect={"#"}/>
            <FooterButton label={"PROJECTS"} redirect={"#"}/>
          </div>
          <br></br>
          <div className="grid-item grid grid-cols-2  w-[700px]">
          <FooterButton label={"BOARD"} redirect={"#"}/>
            <FooterButton label={"DEVSOC"} redirect={"#"}/>
          </div>
          <br></br>
          <div className="grid-item grid grid-cols-2   w-[700px]">
          <FooterButton label={"EVENTS"} redirect={"#"}/>
            <FooterButton label={"BLOG"} redirect={"#"}/>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-white py-4">
        <div className="text-gray-400 ml-10">© 2024 CODECHEF</div>
        <div className="flex space-x-4 gap-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <div className=" rounded-full p-3">
              <Image
                src={FacebookIcon}
                alt="facebook-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className=" rounded-full p-3">
              <Image
                src={TwitterIcon}
                alt="twitter-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className=" rounded-full p-3">
              <Image
                src={YouTubeIcon}
                alt="youtube-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className=" rounded-full p-3">
              <Image
                src={InstagramIcon}
                alt="instagram-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className="rounded-full p-3">
              <Image
                src={LinkedInIcon}
                alt="linkedin-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <div className=" rounded-full p-3">
              <Image
                src={DiscordIcon}
                alt="discord-icon"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterButton = ({
  label,
  redirect,
}: {
  label: string;
  redirect: string;
}) => {
  return (
    <Link href={redirect}>
      <div className="bg-gray-800 text-white p-3 text-center rounded hover:bg-[#FF3B00] transition hex4 border-b-8 border-r-4 border-white">
        {label}
      </div>
    </Link>
  );
};
