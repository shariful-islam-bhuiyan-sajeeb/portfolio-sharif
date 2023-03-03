import React from 'react';

const ProgrammingModal = () => {
    return (
        <div className="lg:my-6 my-0 ">
            <input type="checkbox" id="web-programming-modal" className="modal-toggle" />
            <div className="modal">
                <div className=" relative bg-white p-8 rounded-lg w-3/5 mx-auto">

                    <div className="modal-action absolute -top-4 right-4">
                        <label htmlFor="web-programming-modal"
                            className="sm:text-2xl text-lg bg-red-200 hover:bg-red-600 text-black py-1 px-3 rounded-full animate-pulse">
                            X
                        </label>
                    </div>
                    <div className='flex justify-center text-center'>
                        <img
                            className='w-72'
                            src="https://i.ibb.co/0G60yDn/92794-website-building.gif" alt=""
                        />
                    </div>

                    <div className='text-center text-black w-full pb-4'>
                        <div className='flex flex-col space-y-4 items-center justify-center '>
                            <h4 className=' xl:text-4xl lg:text-xl sm:text-xl font-semibold font-serif text-black '>
                                Web Programming Online Advertise
                            </h4>
                            <div className='h-[2px] xl:w-[450px] lg:w-[300px] md:w-[200px] sm:w-[150px] w-[100px] bg-blue-300 text-center'></div>
                        </div>

                        <div className='md:text-2xl text-lg space-y-2 pt-4 font-serif md:text-center text-left '>
                            <p className=' '> 1.This is a full stack website. Beautifully handled responsiveness</p>
                            <p className=''> 2. Database used Firebase and MongoDB</p>
                            <p className=''> 3. Technology Used: React router, Firebase, vercel, crud, google authentication, react toast.</p>
                            <p className=''>4. This is a Full stack website for use smart phone resale.</p>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col justify-center font-serif text-lg items-center gap-4'>
                        
                        <div className=''>
                            <a target='blank' href="https://github.com/shariful-islam-bhuiyan-sajeeb/mobile-store-cline-repo">
                                <button className="py-2 px-4 rounded-lg bg-[#2978CB] hover:bg-green-700">
                                    GitHub Cline Link
                                </button>
                            </a>
                        </div>
                        <div className=''>
                            <a target='blank' href="https://github.com/shariful-islam-bhuiyan-sajeeb/phone-store-server-repo">
                                <button className="py-2 px-4 rounded-lg bg-[#2978CB] hover:bg-green-700">
                                    GitHub Server Link
                                </button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProgrammingModal;