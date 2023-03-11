import React from 'react';
import './banner.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import react from '../../../asset/React-icon.svg.png'
import js from '../../../asset/js.png'
import node from '../../../asset/node js.png'
import Typewriter from 'typewriter-effect'


const Banner = () => {


    return (
        <section id='banner' className=" md:mt-8 mt-4">
            <div className="container flex flex-col md:flex-row md:w-full mx-auto  ">
                <div style={{
                    backgroundImage: `url(https://i.ibb.co/zbs3gwD/Group-31-1.png)`
                }}
                    className="flex items-center justify-center sm:px-0 px-4 ">
                    <div className='overflow-hidden'>
                        <img
                            className=" flex justify-center items-center text-center rounded-lg sm:w-full  lg:h-[550px] md:h-[450px] mx-auto ease-in-out duration-500 transform hover:scale-125"
                            src="https://i.ibb.co/zrbj47J/s-1-removebg-preview-1.png"
                            alt="" />
                    </div>
                </div>
                <div className=" md:text-left  lg:w-3/5 w-full mx-auto lg:pt-6 pt-2 lg:mt-16 md:mt-8 mt-5 md:text-block">
                    <div className=' flex flex-col w-11/12 mx-auto font-serif space-y-2'>
                        <div>
                            <div className=' lg:px-0  sm:space-y-2 '>
                                <h2 className=" sm:text-2xl text-xl text-black fond-semibold leading-none ">Hi there!</h2>
                                <div className='sm:text-4xl text-lg font-bold'>
                                    <p className='flex items-center sm:gap-x-4 gap-x-1'> 
                                        I am  <span className='text-[#2978CB]'>Shariful Islam Bhuiyan</span>
                                    </p>
                                </div>
                                <h1 className='sm:text-3xl text-xl font-bold'>
                                    <span className='text-[#2978CB]'>
                                        <Typewriter
                                            options={{
                                                strings: ["Web Developer.", "And A Front-End Developer."],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </span>
                                </h1>
                            </div>
                            <p className="mt-4 text-xl lg:mb-8 mb-4 hidden md:block text-justify ">
                                Hi! I'm Shariful Islam Bhuiyan, a passionate full-stack developer. I develop websites using MERN technology. I literally spend 8-10 hours every day on Programming and Problem Solving. <span className='hidden lg:inline'>Programming is my love and passionate. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world.</span>
                            </p>
                            <div className='flex  mt-3  md:gap-8 gap-4 w-full mx-auto'>
                                <div>
                                    <h2
                                        className='sm:text-xl text-md text-center font-bold sm:mb-4 mb-2 text-[#2978CB] '>
                                        Find With Me
                                    </h2>
                                    <div
                                        className='flex justify-center gap-4 '>
                                        <a target='blank'
                                            href="https://www.facebook.com/profile.php?id=100008876146847">
                                            <p>
                                                <FaFacebook
                                                    className='border-2 rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white sm:text-4xl text-2xl'>
                                                </FaFacebook>
                                            </p>
                                        </a>
                                        <a target="blank"
                                            href="https://github.com/shariful-islam-bhuiyan-sajeeb">
                                            <p>
                                                <FaGithub
                                                    className='border-2 rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white sm:text-4xl text-2xl'>
                                                </FaGithub>
                                            </p>
                                        </a>
                                        <a target="blank"
                                            href="https://www.linkedin.com/in/shariful-islam-bhuiyan-4b3b60259/">
                                            <p>
                                                <FaLinkedin
                                                    className='border-2 rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white sm:text-4xl text-2xl'>
                                                </FaLinkedin>
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h2
                                        className='sm:text-xl text-md  text-center  font-bold sm:mb-4 mb-2 text-[#2978CB]'>
                                        Best Skill
                                    </h2>
                                    <div className='flex justify-center gap-4 '>
                                        <img className='sm:w-9 w-6 sm:h-9 h-6 rounded-lg border-2 p-1 hover:bg-[#2978CB] ' src={js} alt="" />
                                        <img className='sm:w-9 w-6 sm:h-9 h-6 rounded-lg border-2 p-1 hover:bg-[#2978CB] ' src={react} alt="" />
                                        <img className='sm:w-9 w-6 sm:h-9 h-6 rounded-lg border-2 p-1 hover:bg-[#2978CB] ' src={node} alt="" />
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