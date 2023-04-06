import React from "react";
import AbouteMe from "../AbouteMe/AbouteMe";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Blog from "../Blog";
import Contact from "../Contact/Contact";
import Hobbyist from "../Hobbyist/Hobbyist";
import ProfessionalSkill from "../ProfessionalSkill/ProfessionalSkill";
import Projects from "../Projects/Projects";
import Testimonial from "../Testimonial/Testimonial";
import GoToTop from "../../Animation/GoToTop";

const Home = () => {
  return (
    <div className=" sm:max-w-[1440px] w-full mx-auto">
      <Banner></Banner>
      <AbouteMe></AbouteMe>
      <Projects></Projects>
      <ProfessionalSkill></ProfessionalSkill>
      <AboutMe></AboutMe>
      <Testimonial />
      <Blog />
      <Hobbyist />
      <Contact />
      {/* <GoToTop /> */}
    </div>
  );
};

export default Home;
