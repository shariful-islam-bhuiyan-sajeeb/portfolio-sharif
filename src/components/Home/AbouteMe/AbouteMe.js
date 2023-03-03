import React from 'react';
import { Outlet } from 'react-router-dom';

const AbouteMe = () => {


    return (
        <div className=' md:mt-0 mt-4 bg-[#2978CB]  font-serif md:py-14 py-8 w-full mx-auto'>
            <Outlet/>
           <div className='space-y-2'>
                <h2 className='text-3xl font-semibold text-white text-center'>Aboute Me</h2>
                <div className='text-lg md:w-3/4 w-11/12  mx-auto text-gray-200 text-justify'>
                    <p>My name is shariful islam bhuiyan, my hometown  in brahmanbaria, currently i live in dhaka, and i am a student honours third  years department of economics at tejgaon college dhaka. I have been working in the web development profession for the past one year. Then my technical knowledge The skills I am currently developing include html,css,javascript,react js, express js, cors js, mongodb etc.and can use any front-end liberty  and backend tools as well.</p>
                </div>
           </div>

        </div>
    );
};

export default AbouteMe;