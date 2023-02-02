import React from 'react';
import { Link } from 'react-router-dom';
import sojib from '../../../asset/sojib2.jpg'

const Navbar = () => {
    const menuItem = <>
        <li className="flex">
            <a rel="noopener noreferrer" href="#banner" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</a>
        </li>
        <li className="flex">
            <a rel="noopener noreferrer" href="#projects" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Resume</a>
        </li>
        <li className="flex">
            <a rel="noopener noreferrer" href="#skill" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Service</a>
        </li>
        <li className="flex">
            <a href="#aboutMe" rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</a>
        </li>
        <li className="flex">
            <a rel="noopener noreferrer" href="#contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</a>
        </li>
    </>

    return (
        <header className="sm:py-4 py-2 mb-10 bg-[#f0f2f5]">
            <div>
                <div className="w-5/6 mx-auto flex  items-center justify-around ">
                    <div className="flex gap-4 items-center p-2">
                        <div className="avatar hidden sm:flex">
                            <div
                                className="w-16 rounded-full ring  ring-offset-base-100 ring-offset-2 ">
                                <img className='' src={sojib} alt='/' />
                            </div>
                        </div>
                            <h2
                            className='sm:text-2xl text-xl  uppercase font-bold text-black font-serif '>
                                Port <span className='text-[#2978CB]'>folio</span>
                            </h2>
                    </div>

                    <div>
                        <ul
                            className="items-stretch font-serif  text-xl font-bold sm:space-x-3 space-x-1 hidden lg:flex">
                            {menuItem}
                        </ul>
                    </div>

                    <div className='flex items-center'>
                        <Link>
                            <button
                                className=' sm:px-8 px-4 md:py-2 py-1 rounded-md  bg-[#2978CB] text-white font-serif'>
                                Contact
                            </button>
                        </Link>
                    </div>
                    <div className='dropdown'>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className='menu menu-compact  dropdown-content mt-3 shadow bg-base-100 text-black   rounded-box p-2'>
                            <li className='hover:text-red-500'>{menuItem}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
