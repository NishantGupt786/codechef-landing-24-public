"use client"
import { nav } from "@/lib/navicons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface NavItemsProps {
  name: string;
  route: string;
  idName: keyof typeof nav;
  optionalClasses?: string;
}

function NavItems({ name, route, idName, optionalClasses }: NavItemsProps) {
  if (optionalClasses == undefined) {
    optionalClasses = "";
  }
  return (
    <li className="group ">
      <Link href={`/${route}`}>
        <Image
          src={nav[idName]}
          alt={`${idName} fill-current icon`}
          width={24}
          height={24}
          priority={true}
          className="transition-transform group-hover:-translate-y-5 group-hover:invert group-hover:filter"/>
        <p className={`${optionalClasses}  mt-1 hidden text-sm text-black transition-transform group-hover:block group-hover:-translate-y-5 font-Space_Grotesk`}>
          {name }
        </p>
      </Link>
    </li>
  );
}
const Navbar = () => {
  const [openHe, setOpenHe] = useState<boolean>(false);
  const menuHandler = (event : React.MouseEvent)=>{
    event.stopPropagation();
    setOpenHe(!openHe)
  }
  const menuBandh = ()=>{
    setOpenHe(false);
  }
  return (
    <div className="container" onClick={menuBandh}>
      <div className="component" onClick={menuHandler}>
        <button className="cn-button h-[2.5em] md:h-[2.2em] w-[4.5em]  items-end" id="cn-button">
          <Image
            src={nav.main}
            alt="menu icon"
            width={24}
            height={24}
            className="menu-icon"
            priority={true}/>
        </button>
        <div className={`cn-wrapper ${openHe? "opened-nav": ""}`} id="cn-wrapper" style={{display: "none"}}>
          <ul>
            <NavItems
              route="blog"
              name="Blog"
              idName="blog"
              optionalClasses="ml-4"/>
            <NavItems route="projects" name="Projects" idName="projects" />
            <NavItems route="" name="Home" idName="home" />
            <NavItems route="events" name="Events" idName="events" />
            <NavItems
              route="board"
              name="Board"
              idName="people"
              optionalClasses="mr-4"/>
          </ul>
        </div>
        <div id="cn-overlay" className={`cn-overlay ${openHe? "on-overlay": ""}`}></div>
      </div>
    </div>
  );
};

export default Navbar;