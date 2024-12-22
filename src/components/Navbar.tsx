import React from "react";
import Image from "next/image";
import { nav } from "@/lib/navicons";

const Navbar = () => {
  return (
    <div className="container">
      <div className="component">
        <button className="cn-button" id="cn-button">
          +
        </button>
        {/* Add the custom icon for the button too later */}
        <div className="cn-wrapper" id="cn-wrapper">
          <ul>
            <li>
              <a href="/blog">
                <Image 
                  src={nav.blogs} 
                  alt="blogs icon" 
                  width={24} 
                  height={24} 
                  priority={true}
                />
              </a>
            </li>
            <li>
              <a href="/projects">
                <Image 
                  src={nav.projects} 
                  alt="projects icon" 
                  width={24} 
                  height={24} 
                  priority={true}
                />
              </a>
            </li>
            <li>
              <a href="/">
                <Image 
                  src={nav.home} 
                  alt="home icon" 
                  width={24} 
                  height={24} 
                  priority={true}
                />
              </a>
            </li>
            <li>
              <a href="/events">    
                <Image 
                  src={nav.events} 
                  alt="events icon" 
                  width={24} 
                  height={24} 
                  priority={true}
                />
              </a>
            </li>
            <li>
              <a href="/board">
                <Image 
                  src={nav.people} 
                  alt="people icon" 
                  width={24} 
                  height={24} 
                  priority={true}
                />
              </a>
            </li>
          </ul>
        </div>
        <div id="cn-overlay" className="cn-overlay"></div>
      </div>
    </div>
  );
};

export default Navbar;
