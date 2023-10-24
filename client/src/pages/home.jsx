/* eslint-disable react/jsx-no-target-blank */
import { Link, useNavigate } from "react-router-dom";
import Herocomp from "../components/herocomp";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/footer";
gsap.registerPlugin(ScrollTrigger);
import Transition from "../../transition";
import SplitType from "split-type";
import { Works } from "../components/works";
import { hoverfunction } from "../components/hoverfunction";
import Workschema from "../components/workschema";
const Home = () => {
  const [homeworks, sethomeworks] = useState(Works.slice(0, 4));
  const workref0 = useRef();
  const workref1 = useRef();
  const workref2 = useRef();
  const workref3 = useRef();
  const worklist = [workref0, workref1, workref2, workref3];
  const sethomeworksfunction = () => {
    sethomeworks((prevhomeworks) =>
      prevhomeworks.map((item, i) => ({
        ...item,
        reference: worklist[i],
      }))
    );
  };
  useEffect(() => {
    sethomeworksfunction();
  }, []);
  // console.log("homeworks", homeworks);
  const worktitle = useRef(null);
  const workdiv = useRef(null);
  const moremebutton = useRef(null);
  const tl = gsap.timeline();
  const navigateTo = useNavigate();
  // useEffect(() => {
  //   if (window.innerWidth > 768) {
  //     gsap.to(worktitle.current, {

  //       scrollTrigger: {
  //         trigger: worktitle.current,

  //         pin: true,
  //         markers: true,
  //         // start: "60% 75%",
  //         // end: "62% 10%",
  //         start: "-40% top",
  //         end: "bottom 70%",
  //       },
  //     });
  //   }
  // }, []);
  useEffect(() => {
    if (window.innerWidth > 768) {
      tl.fromTo(
        moremebutton.current,
        {
          y: 0,
        },
        {
          y: -100,
          scrollTrigger: {
            trigger: moremebutton.current,
            start: "top 90%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    } else {
      tl.fromTo(
        moremebutton.current,
        {
          y: -20,
        },
        {
          y: -100,
          scrollTrigger: {
            trigger: moremebutton.current,
            start: "top bottom",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log("resume", myresume.chars);
  const resumeref = useRef();
  useEffect(() => {
    const myresume = new SplitType(".resume");
    gsap.fromTo(
      myresume.words,
      {
        y: 40,
      },
      {
        y: 0,
        // stagger: { each: 0.05 },
        duration: 1,
        scrollTrigger: {
          trigger: moremebutton.current,
          // scrub: true,
          toggleActions: "play play resume reset",
        },
      }
    );
  }, []);

  useEffect(() => {
    const mytext = new SplitType(".whoami");
    gsap.from(mytext.chars, {
      // opacity: 0,
      y: 80,
      stagger: 0.05,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".whoami",
        toggleActions: "play play resume reset",
      },
    });
  }, []);

  const [xPos, setxPos] = useState(0);
  const [yPos, setyPos] = useState(0);
  const [xPos2, setxPos2] = useState(0);
  const [yPos2, setyPos2] = useState(0);
  const [xPos3, setxPos3] = useState(0);
  const [yPos3, setyPos3] = useState(0);
  const moreworkbutton = useRef();
  const contactmebutton = useRef();
  useEffect(() => {
    hoverfunction(moremebutton, setxPos, setyPos);
    hoverfunction(moreworkbutton, setxPos2, setyPos2);
    hoverfunction(contactmebutton, setxPos3, setyPos3);
  }, []);
  return (
    <ReactLenis root>
      <Herocomp />
      <div className=" sm:m-20 m-10 flex flex-wrap flex-col">
        <p
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          className=" font-bold sm:text-8xl text-6xl sm:ml-20 sm:mb-10 whoami tracking-tighter"
        >
          Who am I?
        </p>
        <div className=" flex sm:place-content-around place-content-center h-[200px] items-center flex-wrap flex-row-reverse  mt-40 sm:mt-0">
          <p
            className="text-2xl  sm:w-[500px] w-[480px]  resume font-medium sm:mt-0 mt-20"
            ref={resumeref}
          >
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              Hey there my name is amine, I am a full{" "}
            </span>{" "}
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              stuck developer , I freelance with high{" "}
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              quality work , I do websites and mobile{" "}
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              apps , currently studying at ESI algiers
            </span>
            <span
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              {" "}
              (algeria).
            </span>
          </p>
          <Link to="/about">
            <button
              className=" text-lg mt-32 h-[200px] w-[200px] bg-black rounded-full sm:mr-0 mr-10 text-white"
              ref={moremebutton}
              style={{
                transform: `translate(${xPos}px, ${yPos}px)`,
              }}
            >
              More me
            </button>
          </Link>
        </div>
      </div>
      <div
        className=" flex place-content-around flex-wrap items-start  mt-28  h-fit mb-10"
        ref={workdiv}
      >
        <div
          className=" sm:w-[500px] w-full flex flex-col items-center xl:sticky top-20 place-content-between h-[500px]"
          ref={worktitle}
        >
          <p
            className=" font-bold sm:text-[3rem] text-[2rem] tracking-tighter  h-fit "
            //
          >
            My work during <br /> 1 year of experience
          </p>
          <p className=" w-[400px] font-medium text-[1.5rem] text-gray-800">
            As a photographer specialised in brand content and events, I cover
            all your needs and deliver your photos within 48 hours!
          </p>
          <div className=" flex place-content-center w-full">
            <button
              onClick={() => {
                navigateTo("/work");
              }}
              className=" h-[75px] w-[150px] sm:h-[100px] sm:w-[200px] bg-red-500 rounded-[50px] mb-5"
              style={{
                transform: `translate(${xPos2}px, ${yPos2}px)`,
              }}
              ref={moreworkbutton}
            >
              more work{" "}
            </button>
            <button
              onClick={() => {
                navigateTo("/contact");
              }}
              className=" h-[75px] w-[150px] sm:h-[100px] sm:w-[200px] bg-red-500 rounded-[50px] mb-5"
              style={{
                transform: `translate(${xPos3}px, ${yPos3}px)`,
              }}
              ref={contactmebutton}
            >
              contact me{" "}
            </button>
          </div>
        </div>

        <div className=" flex flex-wrap  xl:w-[65%] gap-5 place-content-center w-[100vw] ">
          {homeworks.map((item) => {
            return (
              <>
                <div ref={item?.reference} className="">
                  <Workschema item={item} />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </ReactLenis>
  );
};

export default Transition(Home);
