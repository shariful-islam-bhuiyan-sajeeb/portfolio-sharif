import React from 'react';
import { Outlet } from 'react-router-dom';

const AbouteMe = () => {


    return (
        <div className=' md:mt-0 mt-4 bg-[#2978CB]  font-serif md:py-14 py-8 w-full mx-auto'>
            <Outlet/>
           <div className='space-y-2'>
                <h2 className='text-3xl font-semibold text-white text-center'>Aboute Me</h2>
                <div className='text-lg md:w-3/4 w-11/12  mx-auto text-gray-200 text-justify'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet laudantium blanditiis, nostrum similique atque ducimus nulla maxime laborum at. Nulla, quam? Fugit ipsa, atque ut modi veritatis sit explicabo tempore vero error iure quidem officia, impedit illo aspernatur quos dolor eveniet odit culpa neque quod eius cupiditate assumenda! Sit, hic?</p>
                </div>
           </div>

        </div>
    );
};

export default AbouteMe;