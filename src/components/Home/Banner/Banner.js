import React from "react";
import "./banner.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import react from "../../../asset/React-icon.svg.png";
import js from "../../../asset/js.png";
import node from "../../../asset/node js.png";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section id="banner" className=" lg:mt-32 md:mt-20 mt-16">
      <div className="container relative lg:gap-x-8 md:gap-x-4 sm:gap-x-2 gap-x-0  flex flex-col sm:flex-row md:w-full mx-auto  ">
        <div
          style={{
            backgroundImage: `url(https://i.ibb.co/zbs3gwD/Group-31-1.png)`,
            backgroundPosition: "center",
          }}
          className="flex items-center justify-center md:w-1/3 w-full  mx-auto sm:px-0 px-4 "
        >
          <div className="overflow-hidden w-80">
            <img
              className=" flex justify-center items-center text-center sm:rounded-none rounded-b-lg   mx-auto"
              src="https://i.ibb.co/zrbj47J/s-1-removebg-preview-1.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex sm:items-end items-center justify-start sm:px-0 px-4 lg:mb-6 md:mb-4 md:mt-0 mt-4 md:w-4/6 md:text-block">
          <div className=" flex flex-col  mx-auto font-serif space-y-2">
            <div>
              <div className=" lg:px-0  sm:space-y-2 ">
                <h2 className=" sm:text-2xl text-xl text-black fond-semibold leading-none ">
                  Hi there!
                </h2>
                <p className="flex items-center xl:text-4xl lg:text-2xl text-lg font-semibold font-serif gap-x-1 ">
                  I'm Shariful Islam Bhuiyan
                </p>
                {/* animation text */}
                <h1 className="lg:text-2xl sm:text-xl text-lg sm:font-semibold font-normal">
                  <span className="text-[#2978CB]">
                    <Typewriter
                      options={{
                        strings: [
                          "Web Developer.",
                          "And A Front-End Developer.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
              </div>
              <p className="mt-4 text-xl lg:pb-4 hidden md:block text-justify ">
                Hi! I'm Shariful Islam Bhuiyan, a passionate full-stack
                developer. I develop websites using MERN technology. I literally
                spend 8-10 hours every day on Programming and Problem Solving.
                Programming is my love and passionate. My core skill is based on
                JavaScript and I love to do most of the things using JavaScript.
                I love to make the web more open to the world.
                <span className="hidden lg:flex animate-none"></span>
              </p>
              <div className="flex   md:gap-x-8 gap-x-4 w-full mx-auto">
                <div>
                  <h2 className="sm:text-xl text-md text-center font-bold  text-[#2978CB] ">
                    Find With Me
                  </h2>
                  <div className="flex justify-center gap-4 ">
                    <a
                      target="blank"
                      href="https://www.facebook.com/profile.php?id=100008876146847"
                    >
                      <p>
                        <FaFacebook className="border-2 rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white sm:text-4xl text-2xl"></FaFacebook>
                      </p>
                    </a>
                    <a
                      target="blank"
                      href="https://github.com/shariful-islam-bhuiyan-sajeeb"
                    >
                      <p>
                        <FaGithub className="border-2 rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white sm:text-4xl text-2xl"></FaGithub>
                      </p>
                    </a>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/shariful-islam-bhuiyan-4b3b60259/"
                    >
                      <p>
                        <FaLinkedin className="border-2 rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white sm:text-4xl text-2xl"></FaLinkedin>
                      </p>
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className="sm:text-xl text-md  text-center  font-bold   text-[#2978CB]">
                    Best Skill
                  </h2>
                  <div className="flex justify-center gap-x-4 ">
                    <img
                      className="sm:w-9 w-6 sm:h-9 h-6 rounded-lg border-2 p-1 hover:bg-[#2978CB] "
                      src={js}
                      alt=""
                    />
                    <img
                      className="sm:w-9 w-6 sm:h-9 h-6 rounded-lg border-2 p-1 hover:bg-[#2978CB] "
                      src={react}
                      alt=""
                    />
                    <img
                      className="sm:w-9 w-6 sm:h-9 h-6 rounded-lg border-2 p-1 hover:bg-[#2978CB] "
                      src={node}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
