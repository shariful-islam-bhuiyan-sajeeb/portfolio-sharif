import React from "react";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";

const AboutMe = () => {
  return (
    <div className=" mt-4 font-serif" id="aboutMe">
      <div className=" md:my-14 my-10 text-center space-y-3">
        <h4 className=" font-semibold text-lg text-gray-600 ">
          A SHORT DESCRIPTION ABOUT ME
        </h4>
        <h1 className="md:text-5xl text-2xl font-semibold text-gray-600 pt-0">
          Learn More About Me
        </h1>
        <p className="h-[2px] md:w-[280px] sm:[200px] w-[150px] bg-[#2978CB] mx-auto"></p>
      </div>

      <div className=" relative flex items-center w-full mx-auto gap-4 lg:flex-row flex-col ">
        <div className="lg:w-1/3 sm:w-96 w-80 mx-auto sm:px-0 px-3 rounded-lg  ">
          <img
            src="https://i.ibb.co/Q9zZtvY/sojib11111.jpg"
            alt=""
            className="object-cover object-center w-full mx-auto rounded-lg "
          />
        </div>
        <div className=" relative flex flex-col items-start md:w-2/3 w-full  md:px-8 px-4 md:mt-6 sm:mt-4 mt-2 space-y-2 md:text-block font-serif ">
          <h2 className="lg:text-4xl sm:text-2xl text-md   font-bold leading-none text-gray-600 ">
            Full Stack Web Developer
          </h2>
          <p className="text-md text-wrap font-semibold text-justify space-y-2">
            I am a self-motivated Full Stack Developer with knowledge in
            React.js, Node.js, Express.js, Google Authentication, MongoDB,
            JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web
            development.
          </p>
          <div className="space-y-2 md:mt-2 mt-1  ">
            <h2 className="flex items-center text-xl  ">
              <HiOutlineArrowRightCircle className="text-2xl text-[#2978CB] mr-2" />
              Birthday: 1 December 1999
            </h2>
            <h2 className="flex items-center text-xl  ">
              <HiOutlineArrowRightCircle className="text-2xl text-[#2978CB] mr-2"></HiOutlineArrowRightCircle>{" "}
              Age: 23 Years
            </h2>
            <h2 className="flex items-center text-xl  ">
              <HiOutlineArrowRightCircle className="text-2xl text-[#2978CB] mr-2"></HiOutlineArrowRightCircle>
              City: Dhaka,Bangladesh
            </h2>
            <h2 className="flex items-center text-xl  ">
              <HiOutlineArrowRightCircle className="text-2xl text-[#2978CB] mr-2"></HiOutlineArrowRightCircle>{" "}
              Phone: +8801791514345
            </h2>
          </div>
          <div className="text-center">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1HNtNdfy92toti_TZv8iVyQjlpje7vAE3/view?usp=sharing"
              download="download resume.pdf"
              class="relative inline-flex items-center lg:px-12 px-6 md:py-3 py-2 overflow-hidden sm:text-lg text-sm font-medium text-indigo-600 border-2 border-[#2978CB] rounded-full hover:text-white group hover:bg-gray-50"
            >
              <span class="absolute left-0 block w-full h-0 transition-all bg-[#2978CB] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start sm:w-10 w-6 sm:h-10 h-4 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative sm:text-lg text-sm font-serif">
                Download Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
