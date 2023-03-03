import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItem = <>
        <li className="flex">
            <Link to="/" rel="noopener noreferrer" href="" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</Link>
        </li>
        <li className="flex">
            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Resume</a>
        </li>
        <li className="flex">
            <a rel="noopener noreferrer" href="#projects" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Service</a>
        </li>
        <li className="flex">
            <a href="#blog" rel="noopener noreferrer" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</a>
        </li>
        <li className="flex">
            <a rel="noopener noreferrer" href="#aboutMe" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</a>
        </li>
    </>

    return (
        <header className="sm:py-4 py-2  bg-[#f0f2f5]  ">
            <div className=" flex items-center justify-around w-5/6 mx-auto ">
                <div className="flex gap-4 items-center p-2">
                    <div className="avatar hidden sm:flex">
                        <div
                            className="w-16 rounded-full ring  ring-offset-base-100 ring-offset-2 ">
                            <img className='' src="https://i.ibb.co/N9RRHGt/s-1.jpg" alt='/' />
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
                <div className='hidden sm:flex items-center '>
                    <a target="blank" href="https://drive.google.com/file/d/1wkQnSS56ozIurNP5dMC2HXUHiH41JMOi/view?usp=share_link">
                        <button
                            className="bg-[#2978CB] hover:bg-green-800 py-3 w-56  sm:mt-4 mt-2 text-xl text-white rounded-lg  ">
                            Resume
                        </button>
                    </a>

                </div>
                <div className=''>
                    <div className='dropdown '>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className='menu menu-compact  dropdown-content mt-3 shadow bg-base-100 text-black   rounded-box'>
                            <li className='hover:text-red-500'>{menuItem}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
