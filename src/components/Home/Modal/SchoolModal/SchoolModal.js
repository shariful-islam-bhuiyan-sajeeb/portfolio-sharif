import React from 'react';
import home from '../../../../assetGellary/quiz/Home.png'
import quiz from '../../../../assetGellary/quiz/quiz.png'
import chart from '../../../../assetGellary/quiz/chart.png'
import topics from '../../../../assetGellary/quiz/topics.png'
import bg from '../../../../assetGellary/quiz/bg3.jpg'
import { HiCheckBadge } from 'react-icons/hi2';


const SchoolModal = () => {
    return (
        <div className="lg:my-6 my-0 ">
            <input type="checkbox" id="quiz-modal" className="modal-toggle" />
            <div className="modal">
                <div className=" bg-slate-300 p-8 rounded-lg w-3/5 mx-auto">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                        <img src={home} alt="" className="w-full h-full col-span-2 row-span-2 rounded-lg shadow-lg p-1 border min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                        <img alt="" className="w-full h-full rounded-lg shadow-lg p-1 border min-h-48 dark:bg-gray-500 aspect-square" src={quiz} />
                        <img alt="" className="w-full h-full rounded-lg shadow-lg p-1 border min-h-48 dark:bg-gray-500 aspect-square" src={chart} />
                        <img alt="" className="w-full h-full rounded-lg shadow-lg p-1 border min-h-48 dark:bg-gray-500 aspect-square" src={topics} />
                        <img alt="" className="w-full h-full rounded-lg shadow-lg p-1 border min-h-48 dark:bg-gray-500 aspect-square" src={home} />

                    </div>
                    <div className='text-center text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-8 rounded-lg border w-full'>
                        <h4 className='text-4xl font-bold text-black '>Quiz School </h4>
                        <p className='flex justify-center items-center text-black  font-semibold mt-3 text-xl '> <span><HiCheckBadge className='text-xl font-bold text-red-600'></HiCheckBadge> </span> This is a full stack website. Beautifully handled responsiveness</p>
                        <p className='flex justify-center text-black items-center  font-semibold mt-3 text-xl '> <span><HiCheckBadge className='text-xl font-bold text-red-600'></HiCheckBadge></span>Elegant and stylish design.</p>
                        <p className='flex justify-center text-black items-center  font-semibold mt-3 text-xl '> <span><HiCheckBadge className='text-xl font-bold text-red-600'></HiCheckBadge></span> Technology Used: Used react-router-dom for routing, react-toastify for notifications, and Recharts
                            for showing chart.</p>
                        <p className='flex justify-center text-black items-center  font-semibold mt-3 text-xl '> <span><HiCheckBadge className='text-xl font-bold text-red-600'></HiCheckBadge></span> This is a Full stack website for use smart phone resale.</p>
                    </div>

                    <div className='flex justify-around mt-6'>
                        <div className='mt-8'>
                            <a target='blank' href="https://bejewelled-sfogliatella-aa8283.netlify.app/Statistics"> <button className="btn btn-active w-40 bg-green-700">Live Link</button> </a>
                        </div>
                        <div className='mt-8'>
                            <a target='blank' href="https://github.com/shariful-islam-bhuiyan-sajeeb/quiz-school-cline-repo"> <button className="btn btn-active bg-blue-700 w-40">GitHub Cline Link</button> </a>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="quiz-modal" className="btn btn-active btn-secondary">Backspace</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SchoolModal;