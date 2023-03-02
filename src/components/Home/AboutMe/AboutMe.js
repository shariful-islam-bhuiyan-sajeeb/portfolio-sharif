import React from 'react';
import { HiOutlineArrowRightCircle } from "react-icons/hi2";


const AboutMe = () => {
    return (
        <div className=' mt-4 font-serif' id='aboutMe'>
            <div className=' md:my-14 my-10 text-center space-y-3'>
                <h4 className=' font-semibold text-lg text-gray-600 '>A SHORT DESCRIPTION ABOUT ME</h4>
                <h1 className='md:text-5xl text-2xl font-semibold text-gray-600 pt-0'>Learn More About Me</h1>
                <p className='h-[2px] md:w-[280px] sm:[200px] w-[150px] bg-[#2978CB] mx-auto'></p>
            </div>

            <div className=" relative flex items-center w-full mx-auto gap-4 lg:flex-row flex-col ">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="lg:w-1/3 sm:w-96 w-80 mx-auto rounded-md shadow-xl ease-in-out duration-500 transform hover:scale-125">
                    <img src='https://i.ibb.co/Q9zZtvY/sojib11111.jpg' alt="" className="object-cover object-center w-full mx-auto " />
                </div>
                <div className=" relative flex flex-col items-start md:w-2/3 w-full  md:px-8 px-4 md:mt-6 sm:mt-4 mt-2 space-y-2 md:text-block font-serif ">
                    <h2 className="lg:text-4xl sm:text-2xl text-md   font-bold leading-none text-gray-600 ">Full Stack Web Developer</h2>
                    <p className='text-md text-wrap font-semibold text-justify space-y-2'>I am a self-motivated Full Stack Developer with knowledge in React.js, Node.js, Express.js, Google Authentication, MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development.</p>
                    <div className='space-y-2 md:mt-2 mt-1  '>
                        <h2 className='flex items-center text-xl  '>
                            <HiOutlineArrowRightCircle
                                className='text-2xl text-[#2978CB] mr-2' />
                            Birthday: 1 December 1999
                        </h2>
                        <h2 className='flex items-center text-xl  '><HiOutlineArrowRightCircle className='text-2xl text-[#2978CB] mr-2'></HiOutlineArrowRightCircle> Age: 23 Years</h2>
                        <h2 className='flex items-center text-xl  '><HiOutlineArrowRightCircle className='text-2xl text-[#2978CB] mr-2'></HiOutlineArrowRightCircle>City: Dhaka,Bangladesh</h2>
                        <h2 className='flex items-center text-xl  '><HiOutlineArrowRightCircle className='text-2xl text-[#2978CB] mr-2'></HiOutlineArrowRightCircle> Phone: +8801791514345</h2>
                    </div>
                    <div className='text-center'>
                        <a
                            href="https://drive.google.com/u/0/uc?id=18Ka8HRYrQoNZj5PelF9_w-Rerwd8f0R1&export=download"
                            download="download resume.pdf">
                            <button
                                className="bg-[#2978CB] py-3 w-64 sm:mt-4 mt-2 text-xl text-white rounded-lg  ">
                                Download Resume
                            </button>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutMe;