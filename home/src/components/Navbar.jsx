import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const name = localStorage.getItem("name");

  return (
    <div>
      <nav className="bg-gradient-to-bl from-sky-400 to-sky-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="https://img.icons8.com/pastel-glyph/200/ffffff/stadium-.png"
              className="h-8 mr-3"
              alt="#"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Unity Arena
            </span>
          </a>
          <div className="flex md:order-2">
            {name ? (
              // If name exists in local storage, render the button with the name
              <p className="text-white font-medium  text-xl mr-3 ">{name}</p>
            ) : (
              // If name does not exist in local storage, render the default button
              <Link to="/signin">
                <button className="text-sky-400 bg-white hover:bg-sky-500 hover:text-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
