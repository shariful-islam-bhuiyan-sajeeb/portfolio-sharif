import React from "react";
import ProjectsCard from "../Home/ProjectsCard/ProjectsCard";

const Projects = () => {
  return (
    <div
      className="md:mt-14 mt-8 sm:px-12 px-4 w-full text-center "
      id="projects"
    >
      <div className="space-y-4">
        <p className="h-[2px] md:w-[180px] w-[100px]  bg-[#2978CB] mx-auto"></p>
        <h2 className="sm:text-5xl text-2xl font-semibold font-serif text-gray-600">
          My Projects
        </h2>
      </div>
      <div className="sm:mt-10 mt-4">
        <ProjectsCard></ProjectsCard>
      </div>
    </div>
  );
};

export default Projects;
