import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Link } from "react-router";

export default function Service() {
  const boxRef = useRef(null);
  let mm = gsap.matchMedia();

  useGSAP(
    () => {
      mm.add("(min-width: 769px)", () => {
        gsap.set("#service-box, #service-btn", {
          y: 100,
          opacity: 0,
        });
        gsap.to("#service-box, #service-btn", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#box",
          },
        });
      });

      mm.add("(max-width: 768px)", () => {
        gsap.set("#service-box, #service-btn", {
          y: 100,
          opacity: 0,
        });
        gsap.to(".service-box1", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".service-box1",
          },
        });
        gsap.to(".service-box2", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".service-box2",
          },
        });
        gsap.to(".service-box3", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".service-box3",
          },
        });
        gsap.to(".service-box4", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".service-box4",
          },
        });
        gsap.to(".service-box5", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".service-box5",
          },
        });
        gsap.to(".service-box6", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: ".service-box6",
          },
        });
        gsap.to("#service-btn", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: "#service-btn",
          },
        });
      });
    },
    { scope: boxRef }
  );

  return (
    <>
      <section ref={boxRef} className="pt-10">
        <div className="font-hero mb-15">
          <h2 className="font-medium text-5xl md:text-7xl text-center">
            Services to Elevate Your Online Presence
          </h2>
          <p className="text-xl md:text-3xl text-center">
            From Concept to Code
          </p>
          <p className="text-xl md:text-3xl text-center">
            Your Vision, My Code — together, we’ll make something awesome.
          </p>
        </div>
        <div
          id="box"
          className="w-[90%] flex flex-wrap justify-center items-center gap-10 justify-self-center"
        >
          <div
            id="service-box"
            className="service-box1 relative w-[300px] h-[250px] lg:w-[300px] lg:h-[200px] before:absolute before:content-[''] before:inset-0 before:bg-black before:opacity-80"
          >
            <img
              src={"../services-images/web-development.jpg"}
              alt=""
              className="w-[300px] h-[250px] lg:w-[300px] lg:h-[200px]"
            />
            <div className="absolute p-[1rem] flex flex-col justify-around items-center-safe inset-0 z-10">
              <img src={"../services-icons/coding.png"} className="w-[50px]" />
              <h3 className="font-bold text-xl text-white text-center">
                Web Development
              </h3>
              <p className="text-white text-center">
                Build unique websites from scratch tailored to your brand and
                needs.
              </p>
            </div>
          </div>
          <div
            id="service-box"
            className="service-box2 relative w-[300px] h-[250px] lg:w-[300px] lg:h-[200px] before:absolute before:content-[''] before:inset-0 before:bg-black before:opacity-80"
          >
            <img
              src={"../services-images/web-design.jpg"}
              alt=""
              className="w-[300px] h-[250px] lg:w-[300px] lg:h-[200px]"
            />
            <div className="absolute p-[1rem] flex flex-col justify-around items-center-safe inset-0 z-10">
              <img src={"../services-icons/design.png"} className="w-[50px]" />
              <h3 className="font-bold text-xl text-white text-center">
                Web Design
              </h3>
              <p className="text-white text-center">
                Create clean, modern, and user-friendly website designs.
              </p>
            </div>
          </div>
          <div
            id="service-box"
            className="service-box3 relative w-[300px] h-[250px] lg:w-[300px] lg:h-[200px] before:absolute before:content-[''] before:inset-0 before:bg-black before:opacity-80"
          >
            <img
              src={"../services-images/responsive-design.jpg"}
              alt=""
              className="w-[300px] h-[250px] lg:w-[300px] lg:h-[200px]"
            />
            <div className="absolute p-[1rem] flex flex-col justify-around items-center-safe inset-0 z-10">
              <img
                src={"../services-icons/responsive.png"}
                className="w-[50px]"
              />
              <h3 className="font-bold text-xl text-white text-center">
                Responsive Design
              </h3>
              <p className="text-white text-center">
                Ensure your site looks great and works smoothly on all devices.
              </p>
            </div>
          </div>
          <div
            id="service-box"
            className="service-box4 relative w-[300px] h-[250px] lg:w-[300px] lg:h-[200px] before:absolute before:content-[''] before:inset-0 before:bg-black before:opacity-80"
          >
            <img
              src={"../services-images/seo.jpg"}
              alt=""
              className="w-[300px] h-[250px] lg:w-[300px] lg:h-[200px]"
            />
            <div className="absolute p-[1rem] flex flex-col justify-around items-center-safe inset-0 z-10">
              <img src={"../services-icons/seo.png"} className="w-[50px]" />
              <h3 className="font-bold text-xl text-white text-center">SEO</h3>
              <p className="text-white text-center">
                Faster load times & improved SEO rankings.
              </p>
            </div>
          </div>
          <div
            id="service-box"
            className="service-box5 relative w-[300px] h-[250px] lg:w-[300px] lg:h-[200px] before:absolute before:content-[''] before:inset-0 before:bg-black before:opacity-80"
          >
            <img
              src={"../services-images/analytics.png"}
              alt=""
              className="w-[300px] h-[250px] lg:w-[300px] lg:h-[200px]"
            />
            <div className="absolute p-[1rem] flex flex-col justify-around items-center-safe inset-0 z-10">
              <img src={"../services-icons/monitor.png"} className="w-[50px]" />
              <h3 className="font-bold text-xl text-white text-center">
                Analytics
              </h3>
              <p className="text-white text-center">
                Track and analyze your website’s performance.
              </p>
            </div>
          </div>
          <div
            id="service-box"
            className="service-box6 relative w-[300px] h-[250px] lg:w-[300px] lg:h-[200px] before:absolute before:content-[''] before:inset-0 before:bg-black before:opacity-80"
          >
            <img
              src={"../services-images/web-hosting.jpg"}
              alt=""
              className="w-[300px] h-[250px] lg:w-[300px] lg:h-[200px]"
            />
            <div className="absolute p-[1rem] flex flex-col justify-around items-center-safe inset-0 z-10">
              <img
                src={"../services-icons/web-hosting.png"}
                className="w-[50px]"
              />
              <h3 className="font-bold text-xl text-white text-center">
                Hosting
              </h3>
              <p className="text-white text-center">
                Launch new websites or move existing ones without downtime.
              </p>
            </div>
          </div>
        </div>
        <div id="service-btn" className="justify-self-center-safe">
          <Link to="/services">
            <button className="mt-10 font-bold px-15 py-3 border rounded-full hover:bg-black hover:text-white cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
