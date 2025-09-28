import { Link, NavLink } from "react-router";

export default function Footer() {
  const copyright = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap justify-center-safe items-center-safe rounded-t-4xl shadow-[0_-5px_5px_-1px_rgba(0,0,0,0.3)]">
      <div className="flex flex-wrap w-[90%]] rounded-4xl py-5 px-10">
        <div className="mb-5 lg:mb-0 w-[100%] lg:w-[calc(100%/2)] place-items-center">
          <img
            src={"../logos/personal-logo.png"}
            alt="My Logo"
            className="md:w-[250px]"
          />
        </div>
        <div className="w-[100%] flex justify-center-safe items-center-safe gap-10 lg:w-[calc(100%/2)]">
          <img src={"../media-icons/twitter.png"} alt="" className="w-[40px]" />
          <img src={"../media-icons/outlook.png"} alt="" className="w-[40px]" />
          <img
            src={"../media-icons/github-sign.png"}
            alt=""
            className="w-[40px]"
          />
          <img
            src={"../media-icons/linkedin.png"}
            alt=""
            className="w-[40px]"
          />
        </div>
        <nav className="w-[100%] mt-5 text-center flex flex-col md:flex-row justify-center">
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
      </div>
      <div className="flex flex-col items-center-safe lg:flex-row lg:justify-between lg:items-baseline w-full p-[1rem_1rem_0.5rem_1rem]">
        <p className="lg:w-[calc(100%/3)] text-left">
          russelfigalan@outlook.com
        </p>
        <div className="lg:w-[calc(100%/3)] flex justify-center-safe gap-10 mt-3 mb-3 lg:mt-0 lg:mb-0">
          <img
            src={"../logos/html-5.png"}
            alt=""
            className="w-[40px] h-[40px]"
          />
          <img
            src={"../logos/css-3.png"}
            alt=""
            className="w-[40px] h-[40px]"
          />
          <img src={"../logos/js.png"} alt="" className="w-[40px] h-[40px]" />
          <img
            src={"../logos/react.png"}
            alt=""
            className="w-[40px] h-[40px]"
          />
        </div>
        <p className="lg:w-[calc(100%/3)] text-right">
          &copy;{copyright} Philippines | All rights reserved.
        </p>
      </div>
    </footer>
  );
}
