import React from "react";
import { BsGithub } from "react-icons/bs";

const ProgrammingModal = () => {
  return (
    <div className="lg:my-6 my-0 ">
      <input
        type="checkbox"
        id="web-programming-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className=" relative bg-white sm:px-8 px-3 sm:py-8 py-2 rounded-lg sm:w-3/5 w-full sm:mx-auto mx-4">
          <div className="modal-action absolute -top-4 right-4">
            <label
              htmlFor="web-programming-modal"
              className="sm:text-2xl text-lg bg-red-200 hover:bg-red-600 text-black py-1 px-3 rounded-full animate-pulse"
            >
              X
            </label>
          </div>
          <div className="flex justify-center text-center">
            <img
              className="sm:w-72 w-28"
              src="https://i.ibb.co/0G60yDn/92794-website-building.gif"
              alt=""
            />
          </div>

          <div className="text-center text-black w-full pb-4">
            <div className="flex flex-col space-y-4 items-center justify-center ">
              <h4 className=" xl:text-4xl lg:text-xl sm:text-lg font-semibold font-serif text-black ">
                Travel Photographer Website
              </h4>
              <div className="flex items-center">
                <div className="h-[2px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[70px] w-[60px] bg-blue-300 text-center"></div>
                <div className="h-[2px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[70px] w-[60px] bg-yellow-500 text-center"></div>
                <div className="h-[2px] xl:w-[150px] lg:w-[100px] md:w-[80px] sm:w-[70px] w-[60px] bg-blue-300 text-center"></div>
              </div>
            </div>

            <div className="md:text-2xl text-lg sm:space-y-2 sm:mt-4 mt-2 font-serif md:text-center text-left w-8/12  mx-auto  ">
              <p> 1.Beautiful Ui and responsive website</p>
              <p>
                {" "}
                3. Technology Used: Taiwind Css, React js,Firebase,Node
                js,Express js, GPAS, AWO Slider, vercel.
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-center font-serif text-lg items-center ">
            <div className="">
              <a
                target="blank"
                href="https://github.com/shariful-islam-bhuiyan-sajeeb/travel-photographer-cline-repo"
              >
                <button className=" flex items-center gap-x-2 py-2 px-4 rounded-lg bg-[#2978CB] hover:bg-green-700">
                  <BsGithub className="text-white text-xl" />
                  GitHub Cline Link
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingModal;
