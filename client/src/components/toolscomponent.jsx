import html from "../assets/tools/icons8-html-480.png";
import css from "../assets/tools/icons8-css-480.png";
import js from "../assets/tools/icons8-js-480.png";
import react from "../assets/tools/icons8-react-native-480.png";
import tailwind from "../assets/tools/icons8-tailwindcss-480.png";
import node from "../assets/tools/icons8-node-js-480.png";
import mongodb from "../assets/tools/icons8-mongodb.png";
import figma from "../assets/tools/icons8-figma-480.png";
import flutter from "../assets/tools/icons8-flutter-480.png";
import dart from "../assets/tools/icons8-dart-480.png";
import express from "../assets/tools/icons8-express-js-480.png";
import github from "../assets/tools/icons8-github-480.png";
import git from "../assets/tools/icons8-git-480.png";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Toolscomponent = () => {
  const skillref0 = useRef();
  const skillref1 = useRef();
  const skillref2 = useRef();
  const skillref3 = useRef();
  const skillref4 = useRef();
  const skillref5 = useRef();
  const skillref6 = useRef();
  const skillref7 = useRef();
  const skillref8 = useRef();
  const skillref9 = useRef();
  const skillref10 = useRef();
  const skillref11 = useRef();
  const skillref12 = useRef();
  const toolslist = [
    {
      id: 0,
      image: figma,
      name: "figma",
      reference: skillref0,
    },

    {
      id: 1,
      image: html,
      name: "html",
      reference: skillref1,
    },
    {
      id: 2,
      image: css,
      name: "css",
      reference: skillref2,
    },
    {
      id: 3,
      image: js,
      name: "javascript",
      reference: skillref3,
    },
    {
      id: 4,
      image: react,
      name: "reactjs",
      reference: skillref4,
    },
    {
      id: 5,
      image: tailwind,
      name: "tailwlindcss",
      reference: skillref5,
    },
    {
      id: 6,
      image: node,
      name: "nodejs",
      reference: skillref6,
    },
    {
      id: 7,
      image: mongodb,
      name: "mongodb",
      reference: skillref7,
    },
    {
      id: 8,
      image: express,
      name: "expressjs",
      reference: skillref8,
    },
    {
      id: 9,
      image: flutter,
      name: "flutter",
      reference: skillref9,
    },
    {
      id: 10,
      image: dart,
      name: "dart",
      reference: skillref10,
    },

    {
      id: 11,
      image: github,
      name: "github",
      reference: skillref11,
    },
    {
      id: 12,
      image: git,
      name: "git",
      reference: skillref12,
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "1%",
      window.innerWidth > 768
        ? "-72%"
        : window.innerWidth > 500
        ? "-90%"
        : window.innerWidth > 368
        ? "-95%"
        : "-98%",
    ]
  );
  return (
    <div>
      <div className="  h-[300vh] " ref={targetRef}>
        <p className=" text-9xl font-bold capitalize tracking-tighter ">
          tools i use :{" "}
        </p>

        <div className="sticky top-28 flex  items-center overflow-hidden">
          <motion.div style={{ x: x }} className="  flex my-20 w-fit">
            {toolslist.map((item, i) => {
              return (
                <div
                  className="section bg-gradient-to-tr from-black to-[#272a30e6] xl:w-[400px] xl:h-[400px] w-[380px] h-[380px] mx-2 mb-5 flex flex-col items-center rounded-md"
                  ref={item.reference}
                  key={item.id}
                >
                  <div className=" w-[300px] h-[300px] ml-5">
                    <img src={item.image} alt="" className=" w-[90%]" />
                  </div>
                  <p className=" text-3xl text-white capitalize">{item.name}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Toolscomponent;
