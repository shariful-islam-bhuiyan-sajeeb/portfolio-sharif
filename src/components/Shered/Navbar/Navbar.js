import React from "react";

const Navbar = () => {
  const menuItem = (
    <>
      <li className=" hover:text-blue-600">
        <a
          href="/"
          rel="noopener noreferrer"
          className="nav-link flex items-center gap-x-1 dark:border-transparent"
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
          className=" dark:border-transparent"
        >
          Projects
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a
          rel="noopener noreferrer"
          href="#skill"
          className=" dark:border-transparent"
        >
          Skills
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a
          href="#blog"
          rel="noopener noreferrer"
          className="flex items-center dark:border-transparent"
        >
          Blog
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a
          rel="noopener noreferrer"
          href="#aboutMe"
          className="flex items-center dark:border-transparent"
        >
          About
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a
          rel="noopener noreferrer"
          href="#contact"
          className="flex items-center dark:border-transparent"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <header className="sm:py-4    bg-gray-100   ">
      <div className="w-full ">
        <div className=" flex items-center justify-center ">
          <div className="flex items-center">
            <div className="flex gap-4 items-center md:mr-20">
              <div className="avatar hidden sm:flex">
                <div className="w-16 rounded-full ring  ring-offset-base-100 ring-offset-2 ">
                  <img
                    className=""
                    src="https://i.ibb.co/N9RRHGt/s-1.jpg"
                    alt="/"
                  />
                </div>
              </div>
              <h2 className="flex sm:text-3xl text-xl  uppercase font-bold text-black font-serif ">
                Port <span className="text-[#2978CB]">folio</span>
              </h2>
            </div>

            <div className=" pr-4">
              <ul className="items-stretch font-serif md:gap-8 gap-0  text-xl font-bold sm:space-x-3 space-x-1 hidden lg:flex">
                {menuItem}
              </ul>
            </div>
            <div className="hidden md:flex items-center navbar-end ">
              <a
                target="blank"
                href="https://drive.google.com/file/d/1wkQnSS56ozIurNP5dMC2HXUHiH41JMOi/view?usp=share_link"
              >
                <button className="bg-[#2978CB] hover:bg-green-800  sm:py-2 px-8 text-xl text-white rounded-lg  ">
                  Resume
                </button>
              </a>
            </div>
          </div>
          <div className="">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
              <ui
                tabIndex={0}
                className="flex flex-col menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 text-black  rounded-box "
              >
                <li className="">{menuItem}</li>
              </ui>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

// -----------
