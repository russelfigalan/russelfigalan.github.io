import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link } from "react-router";

export default function Featured() {
  const boxRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".projects2", {
        scrollTrigger: {
          trigger: ".projects2",
        },
        scale: 0,
        opacity: 0,
        duration: 1,
      });
      gsap.from(".projects3", {
        scrollTrigger: {
          trigger: ".projects3",
        },
        scale: 0,
        opacity: 0,
        duration: 1,
      });
      gsap.from(".projects4", {
        scrollTrigger: {
          trigger: ".projects4",
        },
        scale: 0,
        opacity: 0,
        duration: 1,
      });
    },
    { scope: boxRef }
  );

  return (
    <>
      <section ref={boxRef} className="pt-30 mb-20 flex flex-col items-center">
        <div className="font-hero mb-15">
          <h2 className="font-medium text-5xl md:text-7xl text-center">
            Featured Projects
          </h2>
          <p className="text-xl md:text-3xl text-center">
            Projects that I've made throughout my web development journey.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[100%] flex flex-col items-center md:items-stretch md:flex-row justify-center gap-[2rem]">
            <div className="projects2 w-[40%] place-items-center md:place-items-end place-content-center">
              <img
                src={"../../images/sample_image.webp"}
                alt=""
                className="w-[70%]"
              />
            </div>
            <span className="hidden md:block h-inherit relative border-2 border-gray-300" />
            <div className="projects2 w-[90%] md:w-[40%] place-content-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                arcu arcu, porta in lacus sed, cursus iaculis lacus. In sed
                felis eget nisi pharetra lobortis. Ut nulla orci, lobortis quis
                blandit ut, varius non quam. Nunc maximus et est quis venenatis.
                Donec malesuada lacinia tortor feugiat accumsan. In tempor
                ligula orci, in lacinia velit volutpat et. Aenean tortor leo,
                fringilla pretium tellus ut, efficitur efficitur eros. Phasellus
                interdum, quam eu porta dapibus, lectus ante scelerisque neque,
                vel feugiat massa tortor quis risus. Sed tempus ultrices ipsum,
                eget aliquet magna pulvinar eget. Nam sit amet ultricies elit.
                Suspendisse id consectetur arcu.
              </p>
            </div>
          </div>
          <div className="w-[100%] flex flex-col-reverse items-center md:items-stretch md:flex-row justify-center gap-[2rem]">
            <div className="projects3 w-[90%] md:w-[40%] place-content-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                arcu arcu, porta in lacus sed, cursus iaculis lacus. In sed
                felis eget nisi pharetra lobortis. Ut nulla orci, lobortis quis
                blandit ut, varius non quam. Nunc maximus et est quis venenatis.
                Donec malesuada lacinia tortor feugiat accumsan. In tempor
                ligula orci, in lacinia velit volutpat et. Aenean tortor leo,
                fringilla pretium tellus ut, efficitur efficitur eros. Phasellus
                interdum, quam eu porta dapibus, lectus ante scelerisque neque,
                vel feugiat massa tortor quis risus. Sed tempus ultrices ipsum,
                eget aliquet magna pulvinar eget. Nam sit amet ultricies elit.
                Suspendisse id consectetur arcu.
              </p>
            </div>
            <span className="hidden md:block h-inherit relative border-2 border-gray-300" />
            <div className="projects3 w-[40%] place-items-center md:place-items-start place-content-center">
              <img
                src={"/src/assets/images/sample_image.webp"}
                alt=""
                className="w-[70%]"
              />
            </div>
          </div>
          <div className="w-[100%] flex flex-col items-center md:items-stretch md:flex-row justify-center gap-[2rem]">
            <div className="projects4 w-[40%] place-items-center md:place-items-end place-content-center">
              <img
                src={"/src/assets/images/sample_image.webp"}
                alt=""
                className="w-[70%]"
              />
            </div>
            <span className="hidden md:block h-inherit relative border-2 border-gray-300" />
            <div className="projects4 w-[90%] md:w-[40%] place-content-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                arcu arcu, porta in lacus sed, cursus iaculis lacus. In sed
                felis eget nisi pharetra lobortis. Ut nulla orci, lobortis quis
                blandit ut, varius non quam. Nunc maximus et est quis venenatis.
                Donec malesuada lacinia tortor feugiat accumsan. In tempor
                ligula orci, in lacinia velit volutpat et. Aenean tortor leo,
                fringilla pretium tellus ut, efficitur efficitur eros. Phasellus
                interdum, quam eu porta dapibus, lectus ante scelerisque neque,
                vel feugiat massa tortor quis risus. Sed tempus ultrices ipsum,
                eget aliquet magna pulvinar eget. Nam sit amet ultricies elit.
                Suspendisse id consectetur arcu.
              </p>
            </div>
          </div>
        </div>
        <div className="justify-self-center-safe">
          <Link to="/projects">
            <button className="mt-10 font-bold px-15 py-3 border rounded-full bg-black text-white hover:bg-white hover:text-black cursor-pointer">
              See All Projects
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
