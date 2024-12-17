// import React from "react";
// import Image from "next/image";
// import { nav } from "@/lib/navicons";

// const Navbar = () => {
//   return (
//     <div className="container">
//       <div className="component">
//         <button className="cn-button" id="cn-button">
//           +
//         </button>
//         <div className="cn-wrapper" id="cn-wrapper">
//           <ul>
//             <li>
//               <a href="/">
//                 <span className="fa fa-gear"></span>
//               </a>
//             </li>
//             <li>
//               <a href="/">
//                 <span className="fa fa-headphones"></span>
//               </a>
//             </li>
//             <li>
//               <a href="/">
//                 <span className="fa fa-home"></span>
//               </a>
//             </li>
//             <li>
//               <a href="/">
//                 <span className="fa fa-video"></span>
//               </a>
//             </li>
//             <li>
//               <a href="/">
//                 <span className="fa fa-envelope"></span>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="cn-overlay" className="cn-overlay"></div>
//       </div>
//     </div>
//   );
// };

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
        <div className="cn-wrapper" id="cn-wrapper">
          <ul>
            <li>
              <a href="/blog">
                <Image 
                  src={nav.grid} 
                  alt="grid icon" 
                  width={31} 
                  height={31} 
                  priority={true}
                />
              </a>
            </li>
            <li>
              <a href="/projects">
                <Image 
                  src={nav.message} 
                  alt="message icon" 
                  width={31} 
                  height={31} 
                  priority={true}
                />
              </a>
            </li>
            <li>
              <a href="/">
                <Image 
                  src={nav.home} 
                  alt="home icon" 
                  width={31} 
                  height={31} 
                  priority={true}
                />
              </a>
            </li>
            <li>
              <a href="/events">
                <Image 
                  src={nav.list} 
                  alt="list icon" 
                  width={31} 
                  height={31} 
                  priority={true}
                />
              </a>
            </li>
            <li>
              <a href="/board">
                <Image 
                  src={nav.user} 
                  alt="user icon" 
                  width={31} 
                  height={31} 
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
