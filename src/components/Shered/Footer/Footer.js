import React from "react";
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerItem = (
    <>
      <Link to="/">Home</Link>
      <Link to="/resume">resume</Link>
      <Link>blog</Link>
    </>
  );
  return (
    <div>
      <footer className="max-w-[1440px] mx-auto py-8 ">
        {/* <ScrollToTop
          smooth
          viewBox="0 0 24 24"
          svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
        /> */}

        <div className="container relative  flex flex-col justify-center pt-10 mx-auto  lg:flex-row ">
          <div className=" text-center">
            <div className="flex justify-center items-center mb-4">
              <img
                className="w-20 h-20 text-center rounded-full ring-2 ring-offset-4  ring-blue-500 "
                src="https://i.ibb.co/N9RRHGt/s-1.jpg"
                alt=""
              />
            </div>
            <div className="flex sm:flex-row flex-col justify-center items-center">
              <div className="flex ">
                <div className=" absolute left-4 hidden sm:block  text-lg  uppercase font-bold text-gray-600 font-serif ">
                  <ul className="flex md:gap-8 gap-4">{footerItem}</ul>
                </div>
                <div className="space-y-2">
                  <h2 className="sm:text-xl text-lg  uppercase font-bold text-black font-serif ">
                    Port <span className="text-[#2978CB]">folio</span>
                  </h2>
                  <h2 className=" sm:hidden sm:text-xl text-md  uppercase font-bold text-black font-serif ">
                    <ul className="flex md:gap-8 gap-4">{footerItem}</ul>
                  </h2>
                </div>
              </div>

              <div className=" flex items-center sm:absolute xl:right-32 sm:right-10 sm:mt-0 mt-2  sm:text-xl text-lg  text-blue-500 md:gap-8 gap-4">
                <a
                  className=" rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white"
                  target="blank"
                  href="https://web.facebook.com/profile.php?id=100008876146847"
                >
                  <ImFacebook />
                </a>
                <a
                  className=" rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white"
                  target="blank"
                  href="https://web.facebook.com/profile.php?id=100008876146847"
                >
                  <FaTwitter />
                </a>
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className=" text-sm text-center text-black">
          Copyright © Master karim,All Right Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
