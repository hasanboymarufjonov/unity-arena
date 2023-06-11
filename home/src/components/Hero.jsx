import React from "react";
import ArenaImg from "../assets/arena.jpg";

const Hero = () => {
  return (
    <div
      className="h-[645px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${ArenaImg}')`,
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-7xl font-bold  mb-2">
          Welcome to the <span className="text-sky-300">Unity Arena</span>
        </h1>
        <p className="text-2xl">
          Browser based, built in{" "}
          <span className="text-yellow-300">JavaScript</span> games
        </p>
      </div>
    </div>
  );
};

export default Hero;
