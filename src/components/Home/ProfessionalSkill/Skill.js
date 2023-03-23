import React from "react";
import "./skill.css";

const Skill = () => {
  return (
    <div className=" w-full lg:gap-x-10 sm:gap-x-6 gap-x-0 flex sm:flex-row flex-col item-center justify-center">
      <div className="w-full space-y-2">
        <div className="skill-box">
          <span className="title font-semibold text-lg italic ">HTML-5</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip ">98%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title font-semibold text-lg italic">CSS-3</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title font-semibold text-lg italic">Bootstrap</span>
          <div className="skill-bar">
            <span className="skill-per bootstrap">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title font-semibold text-lg italic">
            Tailwind CSS
          </span>
          <div className="skill-bar">
            <span className="skill-per tailwind">
              <span className="tooltip">97%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title font-semibold text-lg italic">JavaScrip</span>
          <div className="skill-bar">
            <span className="skill-per JavaScrip">
              <span className="tooltip">85%</span>
            </span>
          </div>
        </div>
      </div>
      {/* ----------------- second row --------  */}
      <div className="w-full  space-y-2">
        <div className="skill-box">
          <span className="title font-semibold text-lg italic">react Js</span>
          <div className="skill-bar">
            <span className="skill-per react">
              <span className="tooltip">92%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title font-semibold text-lg italic">NodeJs</span>
          <div className="skill-bar">
            <span className="skill-per node">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title font-semibold text-lg italic">Express Js</span>
          <div className="skill-bar">
            <span className="skill-per express">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title font-semibold text-lg italic">MongoDB</span>
          <div className="skill-bar">
            <span className="skill-per mongodb">
              <span className="tooltip">88%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title font-semibold text-lg italic">JWT Token</span>
          <div className="skill-bar">
            <span className="skill-per jwt">
              <span className="tooltip">75%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
