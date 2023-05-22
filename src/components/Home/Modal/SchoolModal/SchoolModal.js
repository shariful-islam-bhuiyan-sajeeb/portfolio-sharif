import React from "react";
import { BsGithub } from "react-icons/bs";

const SchoolModal = () => {
  return (
    <div className="lg:my-6 my-0 ">
      <input type="checkbox" id="quiz-modal" className="modal-toggle" />
      <div className="modal">
        <div className=" relative bg-white sm:px-8 px-3 sm:py-8 py-2 rounded-lg sm:w-3/5 w-full sm:mx-auto mx-4">
          <div className="modal-action absolute -top-4 right-4">
            <label
              htmlFor="quiz-modal"
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
              <h4 className=" xl:text-4xl text-xl font-semibold font-serif text-black ">
                DeyLight News
              </h4>
              <div className="flex items-center">
                <div className="h-[2px] xl:w-[70px] lg:w-[60px] md:w-[50px] sm:w-[40px] w-[30px] bg-blue-300 text-center"></div>
                <div className="h-[2px] xl:w-[70px] lg:w-[60px] md:w-[50px] sm:w-[40px] w-[30px] bg-yellow-500 text-center"></div>
                <div className="h-[2px] xl:w-[70px] lg:w-[60px] md:w-[50px] sm:w-[40px] w-[30px] bg-blue-300 text-center"></div>
              </div>
            </div>

            <div className="md:text-xl text-lg space-y-2 sm:pt-4 pt-0 md:pl-4 pl-0 font-serif md:text-left text-left ">
              <div>
                <p className="sm:text-2xl text-md ">
                  <span className="font-semibold">About:</span> This is a news
                  portal category-type project.
                </p>
              </div>
              <div className="flex lg:flex-row flex-col">
                <p className="font-semibold sm:text-2xl text-lg pr-2 ">
                  Feature:
                </p>
                <p className="sm:italic sm:text-xl text-sm text-justify">
                  {" "}
                  Division data load | search implementation | voting | stock
                  market chart | cryptocurrency chart| Translation system |
                  real-time currency converting | Donation | dark mode | social
                  media page.
                </p>
              </div>
              <div className="flex lg:flex-row flex-col">
                <p className="font-semibold sm:text-2xl text-lg pr-2 ">
                  Technology:
                </p>
                <p className="sm:italic sm:text-xl text-sm text-justify">
                  Use React JS | Node JS | Express JS | mongo DB database |
                  Redux | Firebase | SSL mommeze payment | Plotly.js | Figma use
                  | Trello for project manage | JWT Token | Tailwind css, daisy
                  UI.
                </p>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-center  font-serif text-lg items-center md:gap-4 sm:gap-3 gap-2">
            <div className="">
              <a
                target="blank"
                href="https://github.com/JilluRahmanJibon/DayLight-News"
              >
                <button className="flex items-center gap-x-2 py-2 sm:px-2  md:px-4 px-1 sm:text-lg text-md rounded-lg bg-[#2978CB] hover:bg-green-700">
                  <BsGithub className="text-white text-xl" />
                  GitHub Cline Link
                </button>
              </a>
            </div>
            <div className="">
              <a
                target="blank"
                href="https://github.com/JilluRahmanJibon/DayLight-News-Server"
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

export default SchoolModal;
