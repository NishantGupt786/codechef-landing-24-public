import { nav } from "@/lib/navicons";
import Image from "next/image";
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
      <a href={`/${route}`}>
        <Image
          src={nav[idName]}
          alt={`${idName} fill-current icon`}
          width={24}
          height={24}
          priority={true}
          className="transition-transform group-hover:-translate-y-5 group-hover:invert group-hover:filter"/>
        <p className={`${optionalClasses} font-Urbanist mt-1 hidden text-sm text-black transition-transform group-hover:block group-hover:-translate-y-5 `}>
          {name}
        </p>
      </a>
    </li>
  );
}
const Navbar = () => {
  return (
    <div className="container">
      <div className="component">
        <button className="cn-button" id="cn-button">
          <Image
            src={nav.main}
            alt="menu icon"
            width={24}
            height={24}
            className="menu-icon"
            priority={true}/>
        </button>
        <div className="cn-wrapper" id="cn-wrapper">
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
        <div id="cn-overlay" className="cn-overlay"></div>
      </div>
    </div>
  );
};

export default Navbar;
