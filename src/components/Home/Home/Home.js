import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import PhoneStoreDetails from '../PhoneStoreDetails/PhoneStoreDetails';
import ProfessionalSkill from '../ProfessionalSkill/ProfessionalSkill';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className=' max-w-[1440px] mx-auto'>
            <Banner></Banner>
            <Projects></Projects>
            <ProfessionalSkill></ProfessionalSkill>
            <AboutMe></AboutMe>
            <Contact/>
           
        </div>
    );
};

export default Home;