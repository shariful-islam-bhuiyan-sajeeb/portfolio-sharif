import React from 'react';
import gellary from '../../../assetGellary/phoneStore/Gallary.png'
import myBooking from '../../../assetGellary/phoneStore/myBooking.png'
import booking from '../../../assetGellary/phoneStore/Booking.png'
import addProduct from '../../../assetGellary/phoneStore/addProduct.png'
import bookingUser from '../../../assetGellary/phoneStore/booking User.png'
import { HiArrowUturnRight, HiCheckBadge, HiHashtag, IconName } from "react-icons/hi2";


const PhoneStoreDetails = () => {
    return (
        <div className="lg:my-6 my-0 ">
            <input type="checkbox" id="phone-store-modal" className="modal-toggle" />
            <div className="modal">
                <div className=" bg-gradient-to-r from-cyan-200 to-blue-200 p-8 rounded-lg w-3/5 mx-auto">
                    <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                        <img src={gellary} alt="" className="w-full h-full col-span-2 row-span-2 rounded-lg shadow-lg p-1 border min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                        <img alt="" className="w-full h-full rounded-lg shadow-lg p-1 border min-h-48 dark:bg-gray-500 aspect-square" src={myBooking} />
                        <img alt="" className="w-full h-full rounded-lg shadow-lg p-1 border min-h-48 dark:bg-gray-500 aspect-square" src={booking} />
                        <img alt="" className="w-full h-full rounded-lg shadow-lg p-1 border min-h-48 dark:bg-gray-500 aspect-square" src={addProduct} />
                        <img alt="" className="w-full h-full rounded-lg shadow-lg p-1 border min-h-48 dark:bg-gray-500 aspect-square" src={bookingUser} />
                        
                    </div>
                    <div className='text-center text-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-8 rounded-lg border w-full'>
                        <h4 className='text-4xl font-bold text-black '>Phone Store Website</h4>
                        <p className='flex justify-center items-center text-black  font-semibold mt-3 text-xl '> <span><HiCheckBadge className='text-xl font-bold text-red-600'></HiCheckBadge> </span> This is a Full stack website for use smart phone resale.</p>
                        <p className='flex justify-center text-black items-center  font-semibold mt-3 text-xl '> <span><HiCheckBadge className='text-xl font-bold text-red-600'></HiCheckBadge></span>Used firebase for authentications (email, password, and google login).</p>
                        <p className='flex justify-center text-black items-center  font-semibold mt-3 text-xl '> <span><HiCheckBadge className='text-xl font-bold text-red-600'></HiCheckBadge></span> This is a Full stack website for use smart phone resale.</p>
                        <p className='flex justify-center text-black items-center  font-semibold mt-3 text-xl '> <span><HiCheckBadge className='text-xl font-bold text-red-600'></HiCheckBadge></span> This is a Full stack website for use smart phone resale.</p>
                    </div>
                    
                    <div className='flex justify-around mt-4'>
                        <div className='mt-8'>
                            <a target='blank' href="https://assignment-12-34bee.web.app/"> <button className="btn btn-active w-40 bg-green-700">Live Link</button> </a>
                        </div>
                        <div className='mt-8'>
                            <a target='blank' href="https://github.com/shariful-islam-bhuiyan-sajeeb/mobile-store-cline-repo"> <button className="btn btn-active bg-blue-700 w-40">GitHub Cline Link</button> </a>
                        </div>
                        <div className='mt-8'>
                            <a target='blank' href="https://github.com/shariful-islam-bhuiyan-sajeeb/phone-store-server-repo"> <button className="btn btn-active bg-blue-700 w-40">GitHub Server Link</button> </a>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="phone-store-modal" className="btn btn-active btn-secondary">Backspace</label>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default PhoneStoreDetails;