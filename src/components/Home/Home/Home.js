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
import Timeline from "../Timeline/Timeline";
import Map from "../Map";

const Home = () => {
  return (
    <div className=" sm:max-w-[1440px] w-full mx-auto">
      <Banner></Banner>
      <AbouteMe></AbouteMe>
      <Hobbyist />
      <AboutMe></AboutMe>
      <Timeline />
      <ProfessionalSkill></ProfessionalSkill>
      <Projects></Projects>
      <Testimonial />
      <Blog />
      <Contact />
      <Map />
    </div>
  );
};

export default Home;
