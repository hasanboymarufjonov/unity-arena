import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import SocketIoImg from "../assets/socket-io-icon.png";

const TechStack = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-700 md:text-4xl">
            Weapons/Shields
          </h2>
          <div className="grid grid-cols-2 gap-8  sm:gap-12 md:grid-cols-3 lg:grid-cols-7 ">
            <a href="#" className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faHtml5}
                size="5x"
                className="text-orange-500"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faJs}
                size="5x"
                className="text-yellow-300"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faReact}
                size="5x"
                className="text-sky-400"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faNodeJs}
                size="5x"
                className="text-lime-500"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://img.icons8.com/color/200/express-js.png"
                alt=""
                className="w-[80px]"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="https://img.icons8.com/color/200/firebase.png"
                alt=""
                className="w-[80px]"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img src={SocketIoImg} alt="" className="w-[80px]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
