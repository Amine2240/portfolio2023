/* eslint-disable react/jsx-no-target-blank */

const Minifooter = () => {
  return (
    <div className=" flex sm:place-content-between items-center place-content-start mb-7 flex-row flex-wrap-reverse w-full text-white">
      <p className=" ml-10">
        <span className=" text-gray-500">Version</span> <br />
        2023 © Edition{" "}
      </p>

      <div className="w-[450px] flex flex-col sm:mr-20 sm:place-content-start ">
        <p className=" ml-[42px] text-gray-500 ">socials</p>
        <ul className=" flex  place-content-evenly">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/amine-kadoum-4a885b272/"
            >
              linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Amine2240">
              github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/amine_kadoum/">
              instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/amine.kadoum.3?locale=fr_FR"
            >
              facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Minifooter;
