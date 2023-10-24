import Footer from "../components/footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Transition from "../../transition";
import amineetic1 from "../assets/amineetic1.jpg";
import aminedahou from "../assets/aminedahou.jpg";
import SplitType from "split-type";
import Toolscomponent from "../components/toolscomponent";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eticdivref = useRef();
  const dahoudivref = useRef();
  useEffect(() => {
    gsap.to(dahoudivref.current, {
      scale: "1.35",
      duration: 0.3,
      delay: 0.05,
      scrollTrigger: {
        trigger: dahoudivref.current,
        scrub: 1,
        start: "top 80%",
        end: "bottom top",
      },
    });
    gsap.to(eticdivref.current, {
      scale: "1.35",
      duration: 0.3,
      scrollTrigger: {
        trigger: eticdivref.current,
        scrub: 1,
        start: "top 80%",
        end: "bottom top",
      },
    });

    const mytext1 = new SplitType(".aboutme1");
    gsap.fromTo(
      mytext1.words,
      {
        opacity: 0,

        y: 150,
        // stagger: 0.1,
        // scrollTrigger: {
        //   trigger: ".aboutme1",
        // },
      },
      {
        delay: 0.2,
        y: 0,
        opacity: 1,
      }
    );
    const mytext2 = new SplitType(".aboutme2");
    gsap.fromTo(
      mytext2.words,
      {
        opacity: 0,
        delay: 0.2,
        duration: 0.8,
        y: 150,
        // stagger: 0.1,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".aboutme2",
          toggleActions: "play play resume reset",
        },
      }
    );
  }, []);
  // console.log("skilldevref", skilldivref);

  return (
    <ReactLenis root>
      <div>
        <div className=" flex flex-wrap  place-content-center items-center w-[100vw] gap-36 pt-32">
          <p className=" sm:w-[40%] sm:text-2xl text-xl font-medium aboutme1">
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              i am second year esi student passionate{" "}
            </span>{" "}
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              about every single thing related to tech i{" "}
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              start working seriously since a year from{" "}
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              now, i have a strong background on web
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              development, the powever of knowing
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              tools and keeping myself updated allows
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              me to offer you a pretty work
            </span>
          </p>
          <div className=" bg-red-500 sm:w-[500px] sm:h-[650px] w-[450px] h-[600px]   overflow-hidden">
            <img
              src={aminedahou}
              ref={dahoudivref}
              alt=""
              className=" w-[full]"
            />
          </div>
        </div>
        <div className=" flex flex-wrap-reverse  place-content-around items-center w-[100vw] gap-36 my-20">
          <div
            className=" bg-red-500 sm:w-[500px] sm:h-[650px] w-[450px] h-[600px] overflow-hidden"

            // style={{
            //   background: `url(${amineetic1})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundAttachment: "fixed",
            //   backgroundRepeat : 'no-repeat'
            // }}
          >
            <img
              src={amineetic1}
              ref={eticdivref}
              alt=""
              className=" w-[full]"
            />
          </div>

          <p className=" sm:w-[40%] sm:text-2xl text-xl font-medium aboutme2">
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              i am second year esi student passionate{" "}
            </span>{" "}
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              about every single thing related to tech i{" "}
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              start working seriously since a year from{" "}
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              now, i have a strong background on web
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              development, the powever of knowing
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              tools and keeping myself updated allows
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              me to offer you a pretty work
            </span>
          </p>
        </div>
        <Toolscomponent />
        <Footer />
      </div>
    </ReactLenis>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default Transition(About);
