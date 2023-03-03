import React, { useEffect } from 'react';
import './projectCard.css'
import phone from '../../../../asset/mobile phone.jfif'
import programming from '../../../../asset/programming.webp'
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

                {/* -------------------------Daylight news project -1--------------- */}

                <div data-aos="flip-right"
                    className=" animation3 px-6 py-4  rounded-lg border">
                    <div className="space-y-2">
                        <PhotoProvider>
                            <PhotoView src={phone} >
                                <img src="https://i.ibb.co/7RPtq44/screenshot.png" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="flex items-center text-gray-400 text-xs">
                            <p className='font-semibold'>Full stack website</p>
                        </div>
                    </div>
                    <div className=" font-serif pb-4">
                        <h3 className="text-2xl font-semibold text-black">DayLight News</h3>
                        <p className='text-gray-400'>Team Work Project</p>

                    </div>
                    <div className=' flex sm:flex-row flex-col justify-between md:space-y-0 space-y-2  py-4 font-serif'>
                        <div>
                            <a target="blank"
                                href="https://daylight-news-withteam.web.app/">
                                <h2
                                    className='text-xl font-semibold text-center py-2 px-4 w-full rounded-lg  bg-[#2978CB] hover:bg-green-600'>
                                    Live Project
                                </h2>
                            </a>
                        </div>
                        <div className=''>
                            <label htmlFor="quiz-modal"
                                className=" flex items-center justify-center text-xl text-center  font-semibold  py-2 px-4 rounded-lg bg-[#2978CB] hover:bg-green-600">
                                Details
                            </label>

                        </div>
                    </div>
                </div>

                {/*---------------phone store project-2 ----------------------- */}
                <div data-aos="flip-right"
                    className=" animation3 px-6 py-4  rounded-lg border">
                    <div className="space-y-2">
                        <PhotoProvider>
                            <PhotoView src={phone} >
                                <img src={phone} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="flex items-center text-gray-400 text-xs">
                            <p className='font-semibold'>Full stack website</p>
                        </div>
                    </div>
                    <div className=" py-4">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-2xl font-semibold text-black font-serif">Phone Store shop</h3>
                        </a>
                    </div>
                    <div className=' flex sm:flex-row flex-col justify-between md:space-y-0 space-y-2  py-4 font-serif'>
                        <div>
                            <a target="blank"
                                href="https://assignment-12-34bee.web.app/">
                                <h2
                                    className='text-xl font-semibold text-center py-2 px-4 w-full rounded-lg  bg-[#2978CB] hover:bg-green-600'>
                                    Live Project
                                </h2>
                            </a>
                        </div>
                        <div className=''>
                            <label htmlFor="phone-store-modal"
                                className=" flex items-center justify-center text-xl text-center  font-semibold  py-2 px-4 rounded-lg bg-[#2978CB] hover:bg-green-600">
                                Details
                            </label>

                        </div>
                    </div>
                </div>
                {/*------------------------web programming project -3 ----------------*/}
                <div data-aos="fade-up "
                    data-aos-duration="3000"
                    className="animation3 px-6 py-4 shadow-2xl rounded-lg border-2">
                    <div className="space-y-2">
                        <PhotoProvider>
                            <PhotoView src={programming} >
                                <img src={programming} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="flex items-center text-gray-400 text-xs">
                            <p className='font-semibold'>Full stack website</p>
                        </div>
                    </div>
                    <div>
                        <div className="py-4">
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-2xl font-bold text-black">Web Programming</h3>
                            </a>
                        </div>

                        <div className=' flex sm:flex-row flex-col justify-between md:space-y-0 space-y-2 py-4 font-serif'>

                            <div>
                                <a target="blank"
                                    href="https://assignment-10-cline-projects.web.app/">
                                    <h2
                                        className='text-xl font-semibold text-center py-2 px-4 w-full rounded-lg  bg-[#2978CB] hover:bg-green-600'>
                                        Live Project
                                    </h2>
                                </a>
                            </div>
                            <div>
                                <label htmlFor="web-programming-modal"
                                    className=" flex items-center justify-center text-xl text-center  font-semibold  py-2 px-4 rounded-lg bg-[#2978CB] hover:bg-green-600">
                                    Details
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
               
                <PhoneStoreDetails></PhoneStoreDetails>
                <ProgrammingModal></ProgrammingModal>
                <SchoolModal></SchoolModal>  
                {/* Daylight news project add kora hoise (school modal section a) */}
            </div>

        </div>
    );
};

export default ProjectsCard;
