/* eslint-disable react/jsx-no-target-blank */
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect, useRef } from "react";
// import Transition from "../../transition";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from "split-type";
// import { memo } from "react";
import { useLocation } from "react-router-dom";
import Minifooter from "./minifooter";

// eslint-disable-next-line react/prop-types
const Navbar2 = ({ navbar2bool, setnavbar2bool }) => {
  const navigateTo = useNavigate();
  const [scrollboolen, setscrollboolen] = useState(true);
  const navbar2 = useRef();
  const bgtmpref = useRef();

  const location = useLocation();
  const { pathname } = location;
  // const navelement = useRef();
  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        setscrollboolen(false);
      } else {
        setscrollboolen(true);
      }
    });
  }, [scrollboolen]);

  useEffect(() => {
    const mytext = new SplitType(".mytext");
    gsap.from(mytext.chars, {
      y: 100,
      opacity: 0.3,
      delay: 0.2,
      stagger: 0.05,
      // ease: "back.out(1)",
      scrollTrigger: {
        trigger: navref0.current,
        // trigger: !navbar2bool ? mytext : "",
        // markers: true,
      },
    });
  }, [navbar2bool]);
  const navref0 = useRef();
  const navref1 = useRef();
  const navref2 = useRef();
  const navref3 = useRef();
  const navelements = [
    {
      id: 0,
      name: "work",
      reference: navref1,
      link: "work",
    },
    {
      id: 1,
      name: "about",
      reference: navref2,
      link: "about",
    },
    {
      id: 2,
      name: "contact",
      reference: navref3,
      link: "contact",
    },
  ];
  // const navrefs = [
  //   { reference: navref0, class: "navref0" },
  //   { reference: navref1, class: "navref1" },
  //   { reference: navref2, class: "navref2" },
  //   { reference: navref3, class: "navref3" },
  // ];

  useEffect(() => {
    gsap.fromTo(
      bgtmpref.current,
      {
        y: 500,
        opacity: 0.2,
        transition: "all ease .5s",
      },
      {
        y: 0,
        delay: 0.1,
        // duration: 0.9,
        opacity: 0.4,
        // ease: "power4.out(1)",
        scrollTrigger: {
          // trigger: bgtmpref.current,
          scrub: 2,
        },
      }
    );
  }, [navbar2bool]);

  return (
    <>
      <nav
        ref={navbar2}
        className={` navbar2 ${
          navbar2bool ? " navtrue" : " navfalse"
        }   transition-all duration-500 bg-gradient-to-tr from-[#0a0a0b] to-[#272a30] shadow-2xl shadow-white w-full fixed top-0 left-0  text-white  flex flex-col  place-content-end  items-center h-[100vh] z-20`}
      >
        <section
          className="  h-[100vh] w-[650px]  sm:w-[95vw] absolute rounded-t-full z-[-2] top-[48px] sm:top-[400px] sm:left-[750px] left-[250px] -translate-x-1/2 -translate-y-1/2 bgtmp"
          ref={bgtmpref}
        ></section>
        <ul className=" flex flex-col place-content-around items-center my-auto">
          <li
            onClick={() => {
              setnavbar2bool(false);
              navigateTo("/");
              // setindex(-1);
            }}
            style={{
              color: pathname == `/` ? "red" : "white",
            }}
            className=" capitalize navref0  mytext hover:text-red-500 group mx-auto  "
            ref={navref0}
          >
            <p className="  mylabel cursor-pointer tracking-tighter font-medium    sm:text-8xl text-6xl">
              home
            </p>
            <div className=" h-1 w-0 rounded-full bg-white group-hover:w-full transition-all duration-150"></div>
          </li>
          {navelements.map((item) => {
            return (
              <>
                <li
                  onClick={() => {
                    navigateTo(`${item.link}`);
                    setnavbar2bool(false);
                  }}
                  style={{
                    color: pathname == `/${item.name}` ? "red" : "white",
                  }}
                  className=" capitalize navref0  mytext group"
                  ref={item.reference}
                  key={item.id}
                >
                  <p
                    className={`mylabel cursor-pointer tracking-tighter font-medium sm:text-8xl text-6xl hover:text-red-500 `}
                  >
                    {item.name}
                  </p>
                  {/* <div className=" h-1 w-0 rounded-full bg-white group-hover:w-full transition-all duration-300 mx-auto"></div> */}
                </li>
              </>
            );
          })}

          <li>
            <div className=" h-10 w-5 rounded-full border  relative">
              <div className=" h-2 w-2 rounded-full bg-white left-[5.6px] scrollindic absolute"></div>
            </div>
          </li>
        </ul>
        <Minifooter />
      </nav>
    </>
  );
};

export default Navbar2;
