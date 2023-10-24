import "./App.css";

import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home";
// import Contact from "./pages/contact";
// import Work from "./pages/work";
// import About from "./pages/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
axios.defaults.withCredentials = true;
import Navbar2 from "./components/navbar2";
import { useSelector } from "react-redux";
import { lazy } from "react";
// import { Suspense } from "react";
const Home = lazy(() => import("./pages/home"));
const Contact = lazy(() => import("./pages/contact"));
const Work = lazy(() => import("./pages/work"));
const About = lazy(() => import("./pages/about"));
import { hoverfunction } from "./components/hoverfunction";
import Success from "./pages/success";
// import MouseFollower from "mouse-follower";
// import gsap from "gsap";
// // MouseFollower.registerGSAP(gsap);
// // const cursor = new MouseFollower({
// //   container: document.body,
// //   speed: 0.3,
// // });
function App() {
  const [scrollyvalue, setscrollyvalue] = useState(0);
  const [navbar2bool, setnavbar2bool] = useState(false);
  const hoverbooleen = useSelector((state) => state.hoverbooleen.value);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrollyvalue(window.scrollY);
    });
  }, [scrollyvalue]);
  const location = useLocation();
  const cursorref = useRef();
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  useEffect(() => {
    const handlemousemove = (e) => {
      setx(e.clientX - 9);
      sety(e.clientY - 9);
    };
    window.addEventListener("mousemove", handlemousemove);
  }, []);
  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [xPos2, setxPos2] = useState(0);
  const [yPos2, setyPos2] = useState(0);
  const menubutton = useRef();
  const upbutton = useRef();
  useEffect(() => {
    hoverfunction(menubutton, setxPos, setyPos);
  }, []);
  useEffect(() => {
    hoverfunction(upbutton, setxPos2, setyPos2);
  }, []);
  return (
    <>
      <Navbar />
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className={` text-white  transition-all z-10 h-[70px] shadow-xl w-[70px] rounded-full bg-[#1C1D20] border border-gray-700 text-2xl fixed bottom-10 right-10`}
        ref={upbutton}
        style={{
          transform: `translate(${xPos2}px, ${yPos2}px) ${
            scrollyvalue < 20 ? "scale(0)" : "scale(1)"
          }`,
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      {/* ${
            scrollyvalue >= 2384
              ? "bg-transparent hover:border text-white"
              : " text-white"
          } */}
      <button
        onClick={() => {
          setnavbar2bool(!navbar2bool);
        }}
        ref={menubutton}
        style={{
          transform: `translate(${xPos}px, ${yPos}px) ${
            !navbar2bool && scrollyvalue < 20 && window.innerWidth > 568
              ? "scale(0)"
              : "scale(1)"
          }`,
          // transform: !navbar2bool && scrollyvalue < 20 ? "scale-0" : "scale-100",
        }}
        className={`  transition-all flex items-center place-content-center gap-[2px] bg-[#1C1D20] border border-gray-700 flex-col z-30 h-[70px] shadow-xl w-[70px] rounded-full text-2xl fixed top-10 right-10 `}
      >
        <span
          className={`${
            !navbar2bool
              ? ""
              : "rotate-[315deg] translate-x-[.5px] translate-y-[4px]"
          } h-[2px]  w-[25px] bg-white transition-all duration-[1s]`}
        ></span>
        <span
          className={`${
            !navbar2bool ? "" : "rotate-[405deg] "
          } h-[2px] w-[25px] bg-white transition-all duration-[1s]`}
        ></span>
      </button>

      <Navbar2 navbar2bool={navbar2bool} setnavbar2bool={setnavbar2bool} />
      <div
        style={{
          top: y + "px",
          left: x + "px",
          transform: hoverbooleen ? "scale(7)" : "scale(0)",
          backgroundColor: "red",
          zIndex: "50",
          // animationDelay : 3,
          // transform: 'skewY(8)',
          pointerEvents: "none",
          borderRadius: "100%",
          position: "fixed",
          height: "18px",
          width: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease-out",
          transition: "transform .3s cubic-bezier(0.7, 0, 0.3, 1)",
        }}
        className={`cursor`}
        ref={cursorref}
      >
        <p
          className={`${
            hoverbooleen ? " scale-100  font-medium" : " scale-0"
          } transition-all text-white text-[3px]`}
        >
          View
        </p>
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location?.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success navbar2bool={navbar2bool} />} />
          <Route path="/*" element={<p> page not found</p>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
