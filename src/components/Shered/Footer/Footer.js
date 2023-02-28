import React from 'react';
import { ImFacebook } from 'react-icons/im'
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {

    const footerItem = <>
        <Link to="/">Home</Link>
        <Link to='/resume'>resume</Link>
        <Link>blog</Link>
    </>
    return (
        <footer className="max-w-[1440px] mx-auto py-8 ">
            <div className="container relative  flex flex-col justify-center pt-10 mx-auto  lg:flex-row ">
                <div className=' text-center'>
                    <div className='flex justify-center items-center mb-4'>
                        <img
                            className="w-20 h-20 text-center rounded-full ring-2 ring-offset-4  ring-blue-500 "
                            src="https://i.ibb.co/N9RRHGt/s-1.jpg" alt="" />
                    </div>
                    <div className='flex sm:flex-row flex-col justify-center items-center'>
                        <div className='flex '>
                            <div className=' absolute left-4 hidden sm:block  text-lg  uppercase font-bold text-gray-600 font-serif '>
                                <ul className='flex md:gap-8 gap-4'>
                                    {footerItem}
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h2
                                    className='sm:text-xl text-lg  uppercase font-bold text-black font-serif '>
                                    Port <span className='text-[#2978CB]'>folio</span>
                                </h2>
                                <h2
                                    className=' sm:hidden sm:text-xl text-md  uppercase font-bold text-black font-serif '>
                                    <ul className='flex md:gap-8 gap-4'>
                                        {footerItem}
                                    </ul>
                                </h2>
                            </div>
                        </div>

                        <div
                            className=' flex items-center sm:absolute xl:right-32 sm:right-10 sm:mt-0 mt-2  sm:text-xl text-lg  text-blue-500 md:gap-8 gap-4'>
                            <a className=' rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white'
                                target='blank'
                                href="https://web.facebook.com/profile.php?id=100008876146847">
                                <ImFacebook />
                            </a>
                            <a className=' rounded-lg p-1 text-blue-800  hover:bg-[#2978CB] hover:text-white'
                                target='blank'
                                href="https://web.facebook.com/profile.php?id=100008876146847">
                                <FaTwitter />
                            </a>
                            <FaLinkedinIn />
                        </div>

                    </div>

                </div>
            </div>
            <div className="divider"></div>
            <div className=" text-sm text-center text-black">Copyright © Master karim,All Right Reserved</div>
        </footer>
    );
};

export default Footer;