import React from "react";
import { FaGamepad } from "react-icons/fa";
import collectorGame from "../assets/collector.png";
import roomsGame from "../assets/game-of-rooms.png";

const Games = () => {
  return (
    <div>
      <section className="bg-gradient-to-bl from-sky-400 to-sky-200 mt-10">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">
            Games
          </h2>
          <div className="grid grid-cols-1 gap-8  sm:gap-12 md:grid-cols-1 lg:grid-cols-3 ">
            <div href="#" className="flex justify-center items-center">
              {" "}
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img
                  className="w-full object-cover object-center h-56"
                  src="https://construct-static.com/uploads/91398/3eb4ea3c-8c6c-449a-88ea-f2c638250d59/r/900/scr1.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Snake Multiplayer Game
                  </div>
                  <p className="text-gray-700 text-base">
                    Classic arcade game built using HTML, CSS, and JavaScript,
                    with server-side functionality implemented using Node.js,
                    Express.js, and Socket.io.
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2 float-left">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #multiplayer
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #remote
                  </span>
                </div>

                <a
                  href="https://snake-multiplayer-game.vercel.app/"
                  className="text-white bg-sky-700 hover:bg-sky-400  font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center  float-right mt-2.5 mr-4"
                >
                  <FaGamepad size={32} className="mr-2" />
                  Play
                </a>
              </div>
            </div>
            <div href="#" className="flex justify-center items-center">
              {" "}
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                {/* <img
                  className="w-full object-cover object-center h-56"
                  src="https://res.cloudinary.com/dk-hub/image/upload/v1527754326/coin-collector_s2bzsv.png"
                  alt="Sunset in the mountains"
                /> */}
                <img
                  className="w-full object-cover object-center h-56"
                  src={collectorGame}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Coin Collector</div>
                  <p className="text-gray-700 text-base">
                    Multiplayer coin collection online game built with HTML,
                    CSS, JavaScript, and powered by Firebase to deliver an
                    exhilarating multiplayer experience.
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2 float-left">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #multiplayer
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #remote
                  </span>
                </div>

                <a
                  href="https://coin-collector-game.vercel.app/"
                  className="text-white bg-sky-700 hover:bg-sky-400  font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center  float-right mt-2.5 mr-4"
                >
                  <FaGamepad size={32} className="mr-2" />
                  Play
                </a>
              </div>
            </div>
            <div href="#" className="flex justify-center items-center">
              {" "}
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img
                  className="w-full object-cover object-center h-56"
                  src={roomsGame}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Game of Rooms</div>
                  <p className="text-gray-700 text-base">
                    As the main character, a courageous and determined king,
                    you'll explore a magnificent castle brought to life using
                    JavaScript and HTML canvas.
                  </p>
                </div>

                <div className="px-6 pt-4 pb-2 float-left">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #singleplayer
                  </span>
                </div>

                <a
                  href="https://game-of-rooms.vercel.app"
                  className="text-white bg-sky-700 hover:bg-sky-400  font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center  float-right mt-2.5 mr-4"
                >
                  <FaGamepad size={32} className="mr-2" />
                  Play
                </a>
              </div>
            </div>
            {/* <a href="#" className="flex justify-center items-center"></a>
            <a href="#" className="flex justify-center items-center"></a>
            <a href="#" className="flex justify-center items-center"></a>
            <a href="#" className="flex justify-center items-center"></a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;
