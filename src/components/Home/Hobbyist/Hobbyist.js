import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Hobbyist = () => {
    const [hobbyist, setHobbyist] = useState([])

    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setHobbyist(data))
    }, [])
    return (
        <div className='md:mt-16 mt-8 md:px-0 px-4 '>
            <div className='text-center space-y-2 md:mb-10 mb-4'>
                <h2 className='md:text-3xl font-semibold font-serif uppercase'>What i do</h2>
                <p className='h-[2px] md:w-[120px] sm:[200px] w-[80px] bg-[#2978CB] mx-auto'></p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    hobbyist.map((data) => (
                        <div className="w-full border-full border-b border-x hover:border-blue-600">
                            <div className='md:p-4 p-2'>
                                <div
                                    className=" flex flex-col justify-center items-center w-60 mx-auto p-0">
                                    <img src={data.picture} alt="/"
                                        className="rounded-xl w-[150px] h-[150px] text-blue-700 " />
                                </div>
                                <div className="flex flex-col justify-center items-center sm:mt-4 mt-0 ">
                                    <h2 className="card-title sm:mb-2 mb-0 sm:text-2xl text-lg text-[#2978CB]">{data.title}</h2>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Hobbyist;