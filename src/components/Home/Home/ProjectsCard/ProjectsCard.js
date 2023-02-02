import React, { useEffect } from 'react';
import './projectCard.css'
import phone from '../../../../asset/mobile phone.jfif'
import programming from '../../../../asset/programming.webp'
import quiz from '../../../../asset/quiz.jpg'
import { HiArrowRight } from "react-icons/hi2";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import PhoneStoreDetails from '../../PhoneStoreDetails/PhoneStoreDetails'
import ProgrammingModal from '../../Modal/ProgrammingModal/ProgrammingModal';
import SchoolModal from '../../Modal/SchoolModal/SchoolModal';
import Aos from 'aos';



const ProjectsCard = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className=''>
            <div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div data-aos="flip-right"
                    className=" animation3 px-6 py-4 shadow-2xl rounded-lg border-2">
                    <div className="space-y-2">
                        <PhotoProvider>
                            <PhotoView src={phone} >
                                <img src={phone} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="flex items-center text-green-500 text-xs">
                            <p className='font-semibold'>Full stack website</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-2xl font-bold text-black">Phone Store shop</h3>
                        </a>
                    </div>
                    <div className=' flex justify-between py-4'>
                        <div>
                            <label htmlFor="phone-store-modal" className=" flex items-center text-xl gap-2 font-bold text-black border-2 p-3 rounded-lg shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500">Project Details</label>

                        </div>
                        <div>
                            <a target="blank" href="https://assignment-12-34bee.web.app/"><h2 className='flex items-center text-xl gap-2 font-bold  border-2 p-3 rounded-lg shadow-2xl  bg-gradient-to-r from-purple-500 to-pink-500'>View Project <HiArrowRight className='font-bold'></HiArrowRight> </h2></a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000"
                    className="animation3 px-6 py-4 shadow-2xl rounded-lg border-2">
                    <div className="space-y-2">
                        <PhotoProvider>
                            <PhotoView src={programming} >
                                <img src={programming} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="flex items-center text-green-500 text-xs">
                            <p className='font-semibold'>Full stack website</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-2xl font-bold text-black">Web Programming</h3>
                        </a>
                    </div>

                    <div className=' flex justify-between py-4'>
                        <div>
                            <label htmlFor="web-programming-modal" className=" flex items-center text-xl gap-2 font-bold text-black border-2 p-3 rounded-lg shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500">Project Details</label>

                        </div>
                        <div>
                            <a target="blank" href="https://assignment-10-cline-projects.web.app/"><h2 className='flex items-center text-xl gap-2 font-bold  border-2 p-3 rounded-lg shadow-2xl  bg-gradient-to-r from-purple-500 to-pink-500'>View Project <HiArrowRight className='font-bold'></HiArrowRight> </h2></a>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" className="animation3 px-6 pt-4 shadow-2xl rounded-lg border-2">
                    <div className="space-y-2">
                        <PhotoProvider>
                            <PhotoView src={quiz} >
                                <img src={quiz} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="flex items-center text-green-500 text-xs">
                            <p className='font-semibold'>Full stack website</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-2xl font-bold text-black">Quiz School </h3>
                        </a>
                    </div>
                    <div>

                        <div className=' flex justify-between py-4'>
                            <div>
                                <label htmlFor="quiz-modal" className=" flex items-center text-xl gap-2 font-bold text-black border-2 p-3 rounded-lg shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500">Project Details</label>

                            </div>
                            <div>
                                <a target="blank" href="https://bejewelled-sfogliatella-aa8283.netlify.app/"><h2 className='flex items-center text-xl gap-2 font-bold  border-2 p-3 rounded-lg shadow-2xl  bg-gradient-to-r from-purple-500 to-pink-500'>View Project <HiArrowRight className='font-bold'></HiArrowRight> </h2></a>
                            </div>
                        </div>
                    </div>

                </div>
                <PhoneStoreDetails></PhoneStoreDetails>
                <ProgrammingModal></ProgrammingModal>
                <SchoolModal></SchoolModal>
            </div>

        </div>
    );
};

export default ProjectsCard;