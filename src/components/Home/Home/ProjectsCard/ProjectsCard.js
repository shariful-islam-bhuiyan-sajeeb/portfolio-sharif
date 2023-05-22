import React, { useEffect } from "react";
import "./projectCard.css";
import phone from "../../../../asset/mobile phone.jfif";
import programming from "../../../../asset/programming.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import PhoneStoreDetails from "../../PhoneStoreDetails/PhoneStoreDetails";
import ProgrammingModal from "../../Modal/ProgrammingModal/ProgrammingModal";
import SchoolModal from "../../Modal/SchoolModal/SchoolModal";
import Aos from "aos";

const ProjectsCard = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="">
      <div className="sm:gap-x-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full mx-auto">
        {/* -------------------------Daylight news project -1--------------- */}

        <div className=" animation3 px-6 py-4   rounded-lg border shadow-lg shadow-[#2978CB]">
          <div className="space-y-2">
            <PhotoProvider>
              <PhotoView src={phone}>
                <img
                  src="https://i.ibb.co/7RPtq44/screenshot.png"
                  alt=""
                  className="block object-cover object-center w-full sm:h-72 h-full rounded-md  dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>

            <div className="flex items-center text-gray-400 text-xs">
              <p className="font-semibold">Full stack website</p>
            </div>
          </div>
          <div className=" font-serif pb-2">
            <h3 className="text-2xl font-semibold text-black">DayLight News</h3>
            <p className="text-gray-400">Team Work Project</p>
          </div>
          <div className=" flex sm:flex-row flex-col justify-between md:space-y-0 space-y-2  py-4 font-serif">
            <div className="">
              <a target="blank" href="https://daylight-news-withteam.web.app/">
                <h2 className="flex items-center justify-center sm:gap-x-3 gap-x-1 sm:text-xl text-md font-semibold  py-2 px-4 w-full rounded-lg  bg-[#2978CB] hover:bg-green-600  ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path>
                    <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path>
                  </svg>
                  <span>View Project</span>
                </h2>
              </a>
            </div>
            <div className="">
              <label
                htmlFor="quiz-modal"
                className=" flex items-center justify-center text-xl text-center  font-semibold  py-2 px-4 rounded-lg bg-[#2978CB] hover:bg-green-600"
              >
                Details
              </label>
            </div>
          </div>
        </div>

        {/*---------------phone store project-2 ----------------------- */}
        <div
          // data-aos="flip-right"
          className=" animation3 px-6 py-4 sm:my-0 my-8   rounded-lg border shadow-lg shadow-[#2978CB]"
        >
          <div className="space-y-2">
            <PhotoProvider>
              <PhotoView src={phone}>
                <img
                  src={phone}
                  alt=""
                  className="block object-cover object-center w-full sm:h-72 h-full rounded-md dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>

            <div className="flex items-center text-gray-400 text-xs">
              <p className="font-semibold">Full stack website</p>
            </div>
          </div>
          <div className=" py-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-2xl font-semibold text-black font-serif">
                Phone Store shop
              </h3>
              <p className="text-gray-400 font-serif">E-commerce website</p>
            </a>
          </div>
          <div className=" flex sm:flex-row flex-col justify-between md:space-y-0 space-y-2  py-4 font-serif">
            <div>
              <a target="blank" href="https://sage-manatee-709895.netlify.app/">
                <h2 className="flex items-center justify-center sm:gap-x-3 gap-x-1 sm:text-xl text-md font-semibold text-center py-2 px-4 w-full rounded-lg  bg-[#2978CB] hover:bg-green-600 translate-all">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path>
                    <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path>
                  </svg>
                  <span>View Project</span>
                </h2>
              </a>
            </div>
            <div className="">
              <label
                htmlFor="phone-store-modal"
                className=" flex items-center justify-center text-xl text-center  font-semibold  py-2 px-4 rounded-lg bg-[#2978CB] hover:bg-green-600"
              >
                Details
              </label>
            </div>
          </div>
        </div>
        {/*------------------------web programming project -3 ----------------*/}
        <div className="animation3 px-6 py-4  rounded-lg border-2 shadow-lg shadow-[#2978CB]">
          <div className="space-y-2">
            <PhotoProvider>
              <PhotoView src={programming}>
                <img
                  src={programming}
                  alt=""
                  className="block object-cover object-center w-full sm:h-72 h-full rounded-md  dark:bg-gray-500"
                />
              </PhotoView>
            </PhotoProvider>

            <div className="flex items-center text-gray-400 text-xs">
              <p className="font-semibold">GPAS Scrolling website</p>
            </div>
          </div>
          <div>
            <div className="py-4">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-2xl font-bold text-black">
                  Scroll Trigger GPAS
                </h3>
                <p className="text-gray-400 font-serif">Scrolling design</p>
              </a>
            </div>

            <div className=" flex sm:flex-row flex-col justify-between md:space-y-0 space-y-2 py-4 font-serif">
              <div>
                <a
                  target="blank"
                  href="https://scroll-trigger-gpas-website.vercel.app/"
                >
                  <h2 className="flex items-center justify-center sm:gap-x-3 gap-x-1 sm:text-xl text-md font-semibold text-center py-2 px-4 w-full rounded-lg  bg-[#2978CB] hover:bg-green-600">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"></path>
                      <path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"></path>
                    </svg>
                    <span>View Project</span>
                  </h2>
                </a>
              </div>
              <div>
                <label
                  htmlFor="web-programming-modal"
                  className=" flex items-center justify-center text-xl text-center  font-semibold  py-2 px-4 rounded-lg bg-[#2978CB] hover:bg-green-600"
                >
                  Details
                </label>
              </div>
            </div>
          </div>
        </div>

        <PhoneStoreDetails></PhoneStoreDetails>
        <ProgrammingModal></ProgrammingModal>
        <SchoolModal></SchoolModal>
        {/* Daylight news project add kora hoise (school modal section a) */}
      </div>
    </div>
  );
};

export default ProjectsCard;
