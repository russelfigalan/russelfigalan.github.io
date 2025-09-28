import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link, NavLink } from "react-router";

export default function SideBar(props) {
  const toggle = props.toggle;
  const sidebarRef = useRef(null);

  useGSAP(
    () => {
      if (toggle) {
        gsap.to(sidebarRef.current, {
          x: 0,
        });
        document.body.style.overflow = "hidden";
      } else {
        gsap.to(sidebarRef.current, {
          x: "100%",
        });
        document.body.style.overflow = "unset";
      }
    },
    { dependencies: [toggle], scope: sidebarRef }
  );

  return (
    <>
      <aside
        ref={sidebarRef}
        id="sideBar"
        className="fixed top-0 w-[100%] h-[100dvh] bg-black translate-x-full z-90 overflow-hidden"
      >
        <div className="h-[5rem] place-content-center-safe place-items-end-safe p-[1rem]">
          <div onClick={props.onButtonClick} className="w-fit cursor-pointer">
            <img src={"../icons/close.png"} alt="" className="w-[20px]" />
          </div>
        </div>
        <nav className="flex flex-col text-white h-[14rem]">
          <NavLink
            to="/"
            onClick={props.onButtonClick}
            className={"flex gap-4 px-5 py-3 md:py-5 text-2xl md:text-5xl"}
          >
            <img src={"../icons/home.png"} className="w-[30px] md:w-[50px]" />
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={props.onButtonClick}
            className={"flex gap-4 px-5 py-3 md:py-5 text-2xl md:text-5xl"}
          >
            <img
              src={"../icons/services.png"}
              className="w-[30px] md:w-[50px]"
            />
            Services
          </NavLink>
          <NavLink
            to="/projects"
            onClick={props.onButtonClick}
            className={"flex gap-4 px-5 py-3 md:py-5 text-2xl md:text-5xl"}
          >
            <img
              src={"../icons/project.png"}
              className="w-[30px] md:w-[50px]"
            />
            Projects
          </NavLink>
          <NavLink
            to="/about"
            onClick={props.onButtonClick}
            className={"flex gap-4 px-5 py-3 md:py-5 text-2xl md:text-5xl"}
          >
            <img src={"../icons/about.png"} className="w-[30px] md:w-[50px]" />
            About
          </NavLink>
        </nav>
        <div className="h-[calc(100dvh-19rem)] p-[1rem] flex flex-col justify-end-safe items-center-safe">
          <Link to="/contact" onClick={props.onButtonClick} className="">
            <button className="mb-10 py-3 px-10 font-bold border border-white hover:bg-white text-white hover:text-black rounded-full cursor-pointer">
              Contact
            </button>
          </Link>
          <div className="w-[250px]">
            <img
              src={"../logos/personal_logo2.png"}
              alt=""
              className="w-[250px]"
            />
          </div>
          <p className="text-center text-white">russelfigalan@outlook.com</p>
          <div className="mt-2 flex justify-center-safe items-center-safe gap-5">
            <img
              src={"../media_icons/twitter2.png"}
              alt=""
              className="w-[30px]"
            />
            <img
              src={"../media_icons/outlook.png"}
              alt=""
              className="w-[30px]"
            />
            <img
              src={"../media_icons/github-sign2.png"}
              alt=""
              className="w-[30px]"
            />
            <img
              src={"../media_icons/linkedin.png"}
              alt=""
              className="w-[30px]"
            />
          </div>
        </div>
      </aside>
    </>
  );
}
