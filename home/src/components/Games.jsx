import React from "react";
import { FaGamepad } from "react-icons/fa";

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
                  className="w-full"
                  src="https://www.wallpaperflare.com/static/1016/450/366/world-of-warcraft-lich-king-sword-cold-wallpaper-preview.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Snake</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
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
                  href=""
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
                  className="w-full"
                  src="https://www.wallpaperflare.com/static/1016/450/366/world-of-warcraft-lich-king-sword-cold-wallpaper-preview.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Snake</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
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
                  href=""
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
                  className="w-full"
                  src="https://www.wallpaperflare.com/static/1016/450/366/world-of-warcraft-lich-king-sword-cold-wallpaper-preview.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Snake</div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
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
                  href=""
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
