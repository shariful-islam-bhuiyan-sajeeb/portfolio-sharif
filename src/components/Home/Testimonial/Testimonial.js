import React from 'react';

const Testimonial = () => {
    return (
        <div className='my-10 py-10 w-full bg-[#C3E1FF]'>
            <h1 className='text-center md:text-3xl text-4xl font-serif font-semibold text-black'>Testimonial</h1>
            <div className='flex sm:flex-row flex-col lg:w-3/4 md:w-5/6 w-full mx-auto lg:gap-16 sm:gap-8 gap-4 px-6 pt-0'>
                <div className=' relative md:w-2/4 w-full mx-auto  mt-10'>
                    <div className='text-center pt-12'>
                        <div className=' '>
                            <img className='w-8 absolute content-center left-40 top-5'
                                src="https://i.ibb.co/c2PhkJx/Group-32.png" alt=""
                            />
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <img
                                    className='w-20 rounded-full'
                                    src="https://i.ibb.co/Mpjbzfr/323412284-719581959465457-1882448398303257989-n.jpg" alt=""
                                />
                            </div>
                            <div>
                                <h2
                                    className='font-bold text-xl'>
                                    Najmus Sakib
                                </h2>
                                <p
                                    className='text-lg font-semibold text-gray-400'>
                                    Programming Hero
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 text-justify'>
                        <p>One of the things that sets Shariful Islam apart from other frontend developers is their ability to blend creativity and technical know-how to produce visually stunning and highly functional web applications. Whether it's crafting pixel-perfect designs or optimizing code for maximum speed and performance, Shariful Islam consistently goes above and beyond to deliver top-notch results.</p>
                    </div>
                </div>

                    <div className='w-1 h-[320px] mt-10 hidden sm:block bg-gray-400 '></div>

                <div className=' relative md:w-2/4 w-full mx-auto mt-10'>
                    <div className='text-center pt-12'>
                        <div className=' '>
                            <img className='w-8 absolute content-center left-40 top-5'
                                src="https://i.ibb.co/c2PhkJx/Group-32.png" alt=""
                            />
                        </div>
                        <div className='flex  items-center gap-4'>
                            <div>
                                <img
                                    className='w-20 h-20 rounded-full'
                                    src="https://i.ibb.co/rtQjcGV/images.jpg" alt=""
                                />
                            </div>
                            <div>
                                <h2
                                    className='font-bold text-xl'>
                                    Abdul Quayum
                                </h2>
                                <p
                                    className='text-lg font-semibold text-gray-400'>
                                    Scrum Team Leader
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 text-justify'>
                        <p>As a leader in the tech industry, I have had the privilege of working with many talented frontend web developers. And without a doubt, Shariful Islam stands out as one of the most exceptional.Throughout our time working together, Shariful Islam consistently demonstrated a deep understanding of frontend development and a commitment to excellence in everything they did.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;