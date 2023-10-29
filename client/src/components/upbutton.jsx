import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { hoverfunction } from "./hoverfunction";
const Upbutton = () => {
  const upbutton = useRef();
  const [scrollyvalue, setscrollyvalue] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrollyvalue(window.scrollY);
    });
  }, [scrollyvalue]);

  const [xPos2, setxPos2] = useState(0);
  const [yPos2, setyPos2] = useState(0);
  useEffect(() => {
    hoverfunction(upbutton, setxPos2, setyPos2);
  }, []);
  return (
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
  );
};

export default Upbutton;
