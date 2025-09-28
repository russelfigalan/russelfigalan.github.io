import SideBar from "./SideMenu";
import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Header() {
  const [isShwon, setIsShown] = useState(false);

  const showSideBar = () => {
    setIsShown(!isShwon);
  };

  return (
    <>
      <header className="sticky top-[0] h-[5rem] bg-white z-80 rounded-b-4xl">
        <div
          id="header"
          className="h-full flex justify-between md:min-lg:justify-around items-center p-[1rem] rounded-b-4xl shadow-[0_5px_5px_-1px_rgba(0,0,0,0.3)]"
        >
          <Link to="/" className="w-[150px] md:w-[200px]">
            <img src={"../logos/personal-logo.png"} />
          </Link>
          <nav className="hidden md:min-lg:block">
            <NavLink to="/" className={"px-5 py-3 hover:bg-gray-200"}>
              Home
            </NavLink>
            <NavLink to="/services" className={"px-5 py-3 hover:bg-gray-200"}>
              Services
            </NavLink>
            <NavLink to="/projects" className={"px-5 py-3 hover:bg-gray-200"}>
              Projects
            </NavLink>
            <NavLink to="/about" className={"px-5 py-3 hover:bg-gray-200"}>
              About
            </NavLink>
          </nav>
          <div className="hidden md:min-lg:block">
            <Link to="/contact">
              <button className="font-bold w-[200px] py-2 border border-gray-200 rounded-full hover:bg-gray-200 cursor-pointer">
                Get in Touch
              </button>
            </Link>
          </div>
          <div
            onClick={showSideBar}
            className="md:min-lg:hidden cursor-pointer"
          >
            <img src={"assets/icons/hamburger_menu.png"} className="w-[20px]" />
          </div>
        </div>
      </header>
      <SideBar toggle={isShwon} onButtonClick={showSideBar} />
    </>
  );
}
