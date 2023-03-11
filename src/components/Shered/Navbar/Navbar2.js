import React from "react";

const Navbar2 = () => {
  const menuItem = (
    <>
      <li className=" hover:text-blue-600">
        <a
          href="/"
          rel="noopener noreferrer"
          className="nav-link flex items-center gap-x-1 px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M21.743 12.331l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 00-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 001 1h3a1 1 0 001-1v-4h4v4a1 1 0 001 1h3a1 1 0 001-1v-7h2a.998.998 0 00.743-1.669z" />
          </svg>
          Home
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a
          rel="noopener noreferrer"
          href="#projects"
          className=" px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Projects
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a
          rel="noopener noreferrer"
          href="#skill"
          className=" px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Skills
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a
          href="#blog"
          rel="noopener noreferrer"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Blog
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a
          rel="noopener noreferrer"
          href="#aboutMe"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          About
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a
          rel="noopener noreferrer"
          href="#contact"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar sm:w-5/6 mx-auto bg-green-500">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div> */}
          <div className="flex gap-4 items-center p-2">
            <div className="avatar hidden sm:flex">
              <div className="w-16 rounded-full ring  ring-offset-base-100 ring-offset-2 ">
                <img
                  className=""
                  src="https://i.ibb.co/N9RRHGt/s-1.jpg"
                  alt="/"
                />
              </div>
            </div>
            <h2 className="sm:text-2xl text-xl  uppercase font-bold text-black font-serif ">
              Port <span className="text-[#2978CB]">folio</span>
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="hidden sm:flex items-center ">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1wkQnSS56ozIurNP5dMC2HXUHiH41JMOi/view?usp=share_link"
            >
              <button className="bg-[#2978CB] hover:bg-green-800 py-3 w-56  sm:mt-4 mt-2 text-xl text-white rounded-lg  ">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="dropdown w-full navbar-end ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact w-full dropdown-content mt-3 shadow bg-base-100 text-black   rounded-box"
          >
            <li className="hover:text-red-500">{menuItem}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
