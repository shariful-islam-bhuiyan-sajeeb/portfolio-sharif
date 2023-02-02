import React from 'react';
import './banner.css'
import sojib1 from '../../../asset/sojib2.jpg'
import { FaBeer, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import react from '../../../asset/React-icon.svg.png'
import js from '../../../asset/js.png'
import node from '../../../asset/node js.png'


const Banner = () => {
    return (
        <div className=' mt-20' id='banner'>
            <section className=" ">
                <div className="container  flex flex-col lg:flex-row md:w-full mx-auto  ">
                    <div className="flex items-center justify-center  w-2/5 mx-auto rounded-md   ">
                        <img src={sojib1} alt="" className=" flex justify-center items-center md:w-5/6 w-full mx-auto " />
                    </div>
                    <div className="flex flex-col lg:w-3/5 w-full lg:pt-6 pt-2  lg:mt-16 mt-2 md:text-block">

                        <div className='w-11/12 mx-auto'>
                            <div className='flex sm:justify-center lg:px-0 px-4 '>
                                <h2 className=" text-2xl md:text-6xl font-bold leading-none ">Hello! I'm <span className='text-red-600'>Shariful Islam Bhuiyan </span>a font-end <span className='text-red-600'>Developer</span></h2>
                            </div>
                            <p className="mt-4  mb-8 text-lg hidden md:block">Hi! I'm Shariful Islam Bhuiyan, a passionate full-stack developer. I develop websites using MERN technology. I literally spend 8-10 hours every day on Programming and Problem Solving. Programming is my love and passionate. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world.</p>
                        </div>

                        <div className=' mt-6 sm:flex gap-24'>
                            <div>
                                <h2 className='lg:text-3xl text-xl text-center font-bold mb-4 text-red-600 '>Find With Me</h2>
                                <div className='flex justify-center gap-4 '>
                                    <a target='blank' href="https://www.facebook.com/profile.php?id=100008876146847"><p> <FaFacebook className='border-2 rounded-lg p-2 text-blue-800  hover:bg-gradient-to-r from-purple-400 to-pink-400 hover:text-white text-6xl'></FaFacebook></p> </a>
                                    <a target="blank" href="https://github.com/shariful-islam-bhuiyan-sajeeb"> <p><FaGithub className='border-2 rounded-lg p-2 text-6xl  hover:bg-gradient-to-r from-purple-400 to-pink-400 hover:text-white'></FaGithub></p> </a>
                                    <a target="blank" href="https://www.linkedin.com/in/shariful-islam-bhuiyan-4b3b60259/"> <p><FaLinkedin className='border-2 rounded-lg p-2 text-6xl  hover:bg-gradient-to-r from-purple-400 to-pink-400 hover:text-white'></FaLinkedin></p> </a>
                                </div>
                            </div>
                            <div>
                                <h2 className='lg:text-3xl text-xl text-center  font-bold mb-4 text-red-600'>Best Skill</h2>
                                <div className='flex justify-center gap-4 '>
                                    <img className='w-14 h-14 rounded-lg border-2 p-2 hover:bg-gradient-to-r from-purple-400 to-pink-400 ' src={js} alt="" />
                                    <img className='w-14 h-14 rounded-lg border-2 p-2 hover:bg-gradient-to-r from-purple-400 to-pink-400' src={react} alt="" />
                                    <img className='w-14 h-14 rounded-lg border-2 p-2 hover:bg-gradient-to-r from-purple-400 to-pink-400' src={node} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </section>

        </div>
    );
};

export default Banner;