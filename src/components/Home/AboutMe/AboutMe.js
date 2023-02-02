import React from 'react';
import sojib1 from '../../../asset/sojib1.jpg'
import { HiOutlineArrowRightCircle, IconName } from "react-icons/hi2";


const AboutMe = () => {
    return (
        <div className='ml-6 mt-4' id='aboutMe'>

            <div className='lg:text-left text-center pb-4'>
                <h4 className='font-bold text-red-500 text-lg'>A SHORT DESCRIPTION ABOUT ME</h4>
                <h1 className='font-bold text-gray-600 md:text-4xl text-xl '>Learn More About Me</h1>
            </div>

            <div className="  flex items-center w-full mx-auto gap-16 lg:flex-row flex-col ">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="sm:w-2/5 w-full mx-auto rounded-md shadow-xl">
                    <img src={sojib1} alt="" className="object-cover object-center w-full  " />
                </div>
                <div className="flex flex-col lg:w-3/5 w-full px-6   md:text-block ">
                    <div>
                        <h2 className="md:text-5xl text-xl  font-bold leading-none text-gray-600 ">Full Stack Web Developer</h2>
                        <p className='text-md mt-4 font-semibold'>I am a self-motivated Full Stack Developer with knowledge in React.js, Node.js, Express.js, Google Authentication, MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development.</p>
                    </div>
                    <div className='mt-8 md:text-center'>
                        <h2 className='flex items-center text-xl mb-3 font-semibold '><HiOutlineArrowRightCircle className='text-2xl text-red-600 mr-2'></HiOutlineArrowRightCircle> Birthday: 1 December 1999</h2>
                        <h2 className='flex items-center text-xl mb-3 font-semibold '><HiOutlineArrowRightCircle className='text-2xl text-red-600 mr-2'></HiOutlineArrowRightCircle> Age: 23 Years</h2>
                        <h2 className='flex items-center text-xl mb-3 font-semibold '><HiOutlineArrowRightCircle className='text-2xl text-red-600 mr-2'></HiOutlineArrowRightCircle>City: Dhaka,Bangladesh</h2>
                        <h2 className='flex items-center text-xl mb-3 font-semibold '><HiOutlineArrowRightCircle className='text-2xl text-red-600 mr-2'></HiOutlineArrowRightCircle> Phone: +8801791514345</h2>
                    </div>
                    <a href="https://drive.google.com/u/0/uc?id=18Ka8HRYrQoNZj5PelF9_w-Rerwd8f0R1&export=download" download="download resume.pdf"> <button className="btn  bg-gradient-to-r from-purple-500 to-pink-500 w-64 mt-6">  Download Resume</button></a>

                </div>

            </div>
        </div>
    );
};

export default AboutMe;