import React, { useEffect, useState } from "react";
import Skill from "./Skill";

const ProfessionalSkill = () => {
  const [completed, setCompleted] = useState(95);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 5), 2000);
  }, []);

  return (
    <div className=" px-6" id="skill">
      <div className=" md:my-14 my-10 text-center space-y-3">
        <h4 className=" font-semibold text-lg text-gray-600 ">
          THE SKILLS I HAVE GAINED AS A DEVELOPER
        </h4>
        <h1 className="md:text-5xl text-2xl font-semibold text-gray-600 pt-0">
          Professional Skill
        </h1>
        <p className="h-[2px] md:w-[280px] sm:[200px] w-[150px] bg-[#2978CB] mx-auto"></p>
      </div>
      <div className=" ">
        <Skill />
      </div>
    </div>
  );
};

export default ProfessionalSkill;
