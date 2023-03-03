import React from 'react';
import { HiCheckBadge, } from "react-icons/hi2";


const PhoneStoreDetails = () => {
    return (
        <div className="">
            <input type="checkbox" id="phone-store-modal" className="modal-toggle" />
            <div className="modal ">
                <div className=" relative bg-white font-serif py-8  px-4 rounded-lg w-3/5 mx-auto">
                    <div className="modal-action absolute -top-4 right-4 ">
                        <label htmlFor="phone-store-modal"
                            className=" sm:text-2xl text-lg bg-red-200 hover:bg-red-600 text-black py-1 px-3 rounded-full animate-pulse">
                            X
                        </label>
                    </div>
                    <div className='flex justify-center text-center'>
                        <img
                        className='w-72'
                            src="https://i.ibb.co/0G60yDn/92794-website-building.gif" alt=""
                        />
                    </div>
                    <div className='text-center '>
                        <div className='flex flex-col space-y-2 items-center justify-center '>
                            <h4 className=' xl:text-6xl lg:text-3xl sm:text-xl text-lg font-semibold text-black '>
                                Phone Store Website</h4>
                            <div className='h-[2px] xl:w-[450px] lg:w-[280px] w-[180px] bg-blue-300 text-center'></div>
                        </div>
                        <div className='flex flex-col items-center py-3 md:text-2xl space-y-2  text-gray-600'>
                            <p className=''>1. This is a Full stack website for use smart phone resale.</p>
                            <p className=''>2. Used firebase for authentications (email, password, and google login).</p>
                            <p className=''>3. This is a Full stack website for use smart phone resale.</p>
                            <p className=''>4. This is a Full stack website for use smart phone resale.</p>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col justify-center font-serif text-lg items-center gap-4'>
    
                        <div className=''>
                            <a target='blank' href="https://github.com/shariful-islam-bhuiyan-sajeeb/mobile-store-cline-repo">
                                <button className="py-2 sm:px-2 md:px-4 px-1 rounded-lg bg-[#2978CB] hover:bg-green-700">
                                    GitHub Cline Link
                                </button>
                            </a>
                        </div>
                        <div className=''>
                            <a target='blank' href="https://github.com/shariful-islam-bhuiyan-sajeeb/phone-store-server-repo">
                                <button className="py-2 md:px-4 sm:px-2 px-1 rounded-lg bg-[#2978CB] hover:bg-green-700">
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

export default PhoneStoreDetails;