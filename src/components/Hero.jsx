import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router";
import "../css/App.css";

export default function Hero(props) {
  useGSAP(() => {
    gsap.from(props.name, {
      y: -100,
      duration: 2,
    });
    gsap.from("#heading-1", {
      x: -100,
      opacity: 0,
      duration: 2,
    });
    gsap.from("#heading-2", {
      x: 100,
      opacity: 0,
      duration: 2,
    });
    gsap.from("#header-text", {
      scale: 0.5,
      opacity: 0,
      duration: 2,
    });
    gsap.from("#btn-container", {
      y: 200,
      opacity: 0,
      duration: 2,
    });
  }, []);

  return (
    <section className="top-section h-[calc(100dvh-5rem)] flex flex-col justify-evenly items-center overflow-hidden">
      <div className="font-hero text-center">
        <h1 className="text-5xl md:text-8xl">
          <p id="heading-1">Building The Future</p>
          <p id="heading-2">Digitally Beautiful</p>
        </h1>
        <div id="header-text" className="mt-5 text-xl md:text-3xl text-center">
          <p>
            A{" "}
            <strong className="italic mx-[1px] md:mx-[2px]">
              Front-end Web Developer
            </strong>{" "}
            passionate in building creative webpages.
          </p>
          <p>Creating every design as desired.</p>
          <p>Imagination is the limit.</p>
        </div>
      </div>
      <div id="btn-container" className="flex flex-col gap-5 md:flex-row">
        <Link to="/projects">
          <button className="bg-black text-white font-bold px-15 py-3 border rounded-full hover:bg-white hover:text-black cursor-pointer">
            Projects
          </button>
        </Link>
        <Link to="/contact">
          <button className="font-bold px-15 py-3 border rounded-full hover:bg-black hover:text-white cursor-pointer">
            Contact
          </button>
        </Link>
      </div>
    </section>
  );
}
