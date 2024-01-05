/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import { useDispatch } from "react-redux";
import { sethoverbooleen } from "../redux/hoverslice";

const Workschema = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <a href={item.weblink} target="_blank">
        <div
          className={`sm:h-[450px] sm:w-[450px] h-[380px] w-[350px] cursor-pointer group  flex place-content-center items-center px-5 hover:rounded-[20px] transition-all `}
          // data-cursor-icon='../assets/icons/facebook.png'
          onMouseOver={() => {
            dispatch(sethoverbooleen(true));
          }}
          onMouseLeave={() => {
            dispatch(sethoverbooleen(false));
          }}
          style={{
            backgroundColor: item.color,
          }}
        >
          <img
            src={item.image}
            alt="work picture"
            className=" w-full h-[230px] object-contain group-hover:scale-[1.04] transition-all duration-300 max-w-full"
            loading="lazy"
            width="300"
            height="200"
            // sizes=""
            
          />
          {item.type == "mobile" ? (
            <img
              src={item.image2}
              alt="work picture"
              className=" w-full h-[230px] object-contain group-hover:scale-[1.04] transition-all duration-300 max-w-full"
              loading="lazy"
              width="300"
              height="200"
            />
          ) : (
            ""
          )}
        </div>
      </a>
      <p className=" text-4xl capitalize mt-5">{item.title}</p>
      <div className=" h-[1.5px] w-full bg-gray-200 my-5"></div>
      <div className=" flex place-content-between text-xl">
        <a href={item.codelink} target="_blank">
          <button className=" ">View code</button>
        </a>
        <p>{item.year}</p>
      </div>
    </div>
  );
};

export default Workschema;
