import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <img
                src="https://img.icons8.com/pastel-glyph/200/stadium-.png"
                className="h-8 mr-3"
                alt=""
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Unity Arena
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-black sm:mx-auto  lg:my-8" />
          <span className="block text-sm text-black sm:text-center ">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Hasanboy Marufjonov
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
