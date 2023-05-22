import React from "react";
import { BsGithub } from "react-icons/bs";

const PhoneStoreDetails = () => {
  return (
    <div className="">
      <input type="checkbox" id="phone-store-modal" className="modal-toggle" />
      <div className="modal ">
        <div className=" relative bg-white font-serif py-8  px-4 mx-4 rounded-lg sm:w-3/5 w-full">
          <div className="modal-action absolute -top-4 right-4 ">
            <label
              htmlFor="phone-store-modal"
              className=" sm:text-2xl text-lg bg-red-200 hover:bg-red-600 text-black py-1 px-3 rounded-full animate-pulse"
            >
              X
            </label>
          </div>
          <div className="flex justify-center text-center">
            <img
              className="sm:w-72 w-28 mx-auto"
              src="https://i.ibb.co/0G60yDn/92794-website-building.gif"
              alt=""
            />
          </div>
          <div className="text-center ">
            <div className="flex flex-col space-y-2 items-center justify-center ">
              <h4 className=" xl:text-6xl lg:text-3xl sm:text-xl text-md font-semibold text-black ">
                Phone Store Website
              </h4>
              <div className="flex items-center">
                <div className="h-[2px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[70px] w-[60px] bg-blue-300 text-center"></div>
                <div className="h-[2px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[70px] w-[60px] bg-yellow-500 text-center"></div>
                <div className="h-[2px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[70px] w-[60px] bg-blue-300 text-center"></div>
              </div>
            </div>
            <div className="flex flex-col items-center sm:py-3 py-0 sm:text-2xl text-md space-y-2   text-gray-600">
              <div className="hidden sm:block">
                <p>
                  1. This is a Full stack website for use smart phone resale.
                </p>
                <p>
                  2. Used firebase for authentications (email, password, and
                  google login).
                </p>
                <p>
                  3. This is a Full stack website for use smart phone resale.
                </p>
                <p>
                  4. This is a Full stack website for use smart phone resale.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center py-3 sm:text-2xl text-md space-y-2 sm:hidden  text-gray-600">
              <p className="text-inline ">
                This is a Full stack website for use smart phone resale. Used
                firebase for authentications (email, password, and google
                login). This is a Full stack website for use smart phone resale.
                This is a Full stack website for use smart phone resale.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-center font-serif text-lg items-center md:gap-4 sm:gap-3 gap-2">
            <div className="">
              <a
                target="blank"
                href="https://github.com/shariful-islam-bhuiyan-sajeeb/mobile-store-cline-repo"
              >
                <button className="flex items-center gap-x-2 py-2 sm:px-2 md:px-4 px-1 rounded-lg bg-[#2978CB] hover:bg-green-700">
                  <BsGithub className="text-white text-xl" />
                  GitHub Cline Link
                </button>
              </a>
            </div>
            <div className="">
              <a
                target="blank"
                href="https://github.com/shariful-islam-bhuiyan-sajeeb/phone-store-server-repo"
              >
                <button className="flex items-center gap-x-2 py-2 md:px-4 sm:px-2 px-1 rounded-lg bg-[#2978CB] hover:bg-green-700">
                  <BsGithub className="text-white text-xl" />
                  GitHub Server Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneStoreDetails;
