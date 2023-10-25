import "./herocomp.css";
// import try2 from "../assets/try22.png";
import amine1 from "../assets/amine01.png";
// import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import { hoverfunction } from "./hoverfunction";
// import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
// import { motion } from "framer-motion";
const Herocomp = () => {
  // const mytext = new SplitType(".iam");
  // console.log('my text : ',mytext);
  // gsap.to(".char", {
  //   y: 0,
  //   stagger: 0.05,
  //   delay: 0.2,
  //   duration: 0.3,
  // });

  // const imgref = useRef(null);
  // const navigateTo = useNavigate();

  const tl = gsap.timeline();
  const heroref = useRef(null);
  const contactbutton = useRef(null);
  const [time, settime] = useState("");
  useEffect(() => {
    gsap.fromTo(
      heroref.current,
      { height: 740 },
      {
        height: 610,
        scrollTrigger: {
          trigger: heroref.current,
          start: "center 40%",
          end: "bottom 5%",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    tl.to(
      contactbutton.current,

      {
        y: -100,
        scrollTrigger: {
          trigger: contactbutton.current,
          start: "-60% 5%",
          end: "bottom top",
          scrub: 3,
        },
      }
    );
  }, []);

  const gettime = () => {
    const now = new Date();
    const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    const minutes =
      now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    settime(hours + ":" + minutes + `${hours < 12 ? "AM" : 'PM'}`);
    setTimeout(() => {
      gettime();
    }, 1000);
  };
  useEffect(() => {
    gettime();
  }, []);

  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  useEffect(() => {
    hoverfunction(contactbutton, setxPos, setyPos);
  }, [xPos, yPos]);

  useEffect(() => {
    gsap.to(".name", {
      y: -100,
      scrollTrigger: {
        scrub: true,
      },
    });
    gsap.to(".skill", {
      y: -100,
      scrollTrigger: {
        scrub: true,
      },
    });

    gsap.to(".time", {
      y: -150,
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);
  return (
    <div className=" herobg overflow-hidden relative" ref={heroref}>
      <div className="">
        <img
          src={amine1}
          style={{}}
          className={` z-[0] absolute left-1/2 translate-x-[-52%] top-16 sm:top-0  image sm:w-[490px] w-[450px] transition-all`}
          alt=""
        />
        <div className=" relative flex pb-[40px]  flex-col items-center place-content-end h-[90vh]  ">
          {/* <p className="iam  absolute top-[230px] left-10 sm:left-[440px]  font-extrabold text-2xl sm:text-8xl z-10">
            {" "}
            I am{" "}
          </p> */}

          <a href="mailto:kadoumamine@gmail.com">
            <button
              style={{
                transform: `translate(${xPos}px, ${yPos}px)`,
              }}
              ref={contactbutton}
              className=" absolute top-[150px] right-5 sm:left-[60%] h-[150px] w-[150px]  sm:h-[180px] sm:w-[180px] bg-[#141517] text-white rounded-full text-lg"
            >
              Lets Work
            </button>
          </a>
          <p className="absolute capitalize sm:top-[200px] top-[190px] left-4 xl:left-[400px] md:left-[150px] text-xl sm:text-2xl z-10 time text-white">
            local time <br />
            {time}
            <span className=" tracking-tighter">  GMT+1</span>{" "}
          </p>
          <p className="capitalize font-semibold xl:text-[7em] md:text-[5em] text-[55px] z-10 name">
            {" "}
            <span className="amin">AMIN</span>
            <span className=" ka">E KAD</span>
            <span className=" oum">OUM</span>{" "}
          </p>
          <p className=" text-white  font-semibold xl:text-[6em] md:text-[4em] z-10 skill tracking-tighter text-4xl sm:w-fit mx-auto mb-10">
            <span className=" uppercase  fullst">full-st</span>
            <span className=" uppercase  ack">ack dev</span>
            <span className=" uppercase eloper">eloper</span>
          </p>
          {/* <button className=" text-white capitalize border h-12 w-36 mt-5">
            hire me
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Herocomp;
