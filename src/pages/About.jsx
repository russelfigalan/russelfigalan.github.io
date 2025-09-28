import Contact_Card from "../components/Contact_box";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function About() {
  const blobRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(blobRef.current, {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 7,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: blobRef }
  );

  return (
    <>
      <section className="min-h-[calc(100dvh-5rem)] mb-10 p-[1rem] [word-spacing:5px]">
        <p className="mt-5 md:w-[90%] md:text-2xl md:place-self-center-safe">
          About
        </p>
        <h1 className="mt-10 mb-20 font-hero text-5xl md:text-7xl text-center">
          My Journey to Web Development
        </h1>
        <div className="mb-5 lg:mb-10 lg:w-[70%] font-hero text-3xl md:text-5xl leading-[1.2] flex flex-col-reverse items-center-safe lg:flex-row lg:justify-evenly lg:items-center-safe lg:gap-20 place-self-center-safe">
          <p className="mt-5 lg:w-[60%]">
            Hello there,
            <br />
            I'm{" "}
            <strong>
              <i>Russel Figalan</i>
            </strong>
            <br />a{" "}
            <strong>
              <i>Front-end Web Developer</i>
            </strong>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="lg:w-[40%] h-[auto]"
          >
            <defs>
              <clipPath id="blob-img">
                <path
                  ref={blobRef}
                  fill="transparent"
                  d="M40.7,24.7C26.6,48,-29.1,48.5,-42.9,25.4C-56.6,2.3,-28.3,-44.4,-0.4,-44.6C27.4,-44.9,54.9,1.3,40.7,24.7Z"
                  transform="translate(50 50)"
                />
              </clipPath>
            </defs>
            <image
              href={"../images/profile-pic2.png"}
              alt=""
              clipPath="url(#blob-img)"
              x="0"
              y="0"
              className="w-full h-full"
            />
          </svg>
        </div>
        <div className="md:w-[70%] font-hero text-2xl md:text-3xl flex flex-col gap-3 lg:gap-5 place-self-center-safe">
          <p>
            My coding journey started back in high school when I dreamed of
            creating a simple Christmas countdown website. That simple dream
            encouraged me to take the path of web development.
          </p>
          <p>
            Life took me in a different direction, and I became a cook by
            profession. However, my interest in technology never went away.
            Eventually, I decided to seriously dive into coding, teaching myself
            through online classes and tutorial videos, making projects, and
            endless experimentation.
          </p>
          <p>
            As of now, I focus on{" "}
            <strong>
              <i>React Development</i>
            </strong>
            , creating responsive, dynamic, and user-friendly applications. It's
            a challenging, yet fun experience, turning ideas or designs into
            interactive applications.
          </p>
        </div>
      </section>
      <Contact_Card />
    </>
  );
}
