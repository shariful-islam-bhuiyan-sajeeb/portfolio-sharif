import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menuItem = (
    <>
      <li className=" hover:text-blue-600">
        <a
          href="/"
          rel="noopener noreferrer"
          className="nav-link flex items-center gap-x-1"
        >
          Home
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a rel="noopener noreferrer" href="#projects" className="">
          Projects
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a rel="noopener noreferrer" href="#skill" className="">
          Skills
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a href="#blog" rel="noopener noreferrer" className="">
          Blog
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a rel="noopener noreferrer" href="#aboutMe" className="">
          About
        </a>
      </li>
      <li className="hover:text-blue-600">
        <a rel="noopener noreferrer" href="#contact" className="">
          Contact
        </a>
      </li>
    </>
  );

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className=" fixed z-50 top-0 left-0 right-0 ">
      <div
        className={`navbar justify-between   ${
          navbar ? "bg-slate-300 shadow" : "bg-transparent"
        }`}
      >
        <nav className=" relative w-full sm:py-4 py-2 max-w-screen-full mx-auto   flex justify-center ">
          <div className="  flex md:flex-row flex-col items-center lg:justify-around justify-between lg:px-0 md:px-4 px-0   ">
            {/* portfolio title  */}
            <div className="flex  items-center lg:mr-20 mr-4">
              <h2 className="flex sm:text-3xl text-2xl  uppercase font-bold text-black font-serif ">
                Port{" "}
                <span className="text-[#2978CB] sm:text-3xl text-2xl animate-none ">
                  folio
                </span>
              </h2>
            </div>
            {/* dropdown sm show hobe  */}
            <div className="dropdown absolute right-6  ">
              <label
                htmlFor="navbar-drawer"
                tabIndex={0}
                className="sm:hidden  "
              >
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
            </div>
            {/* menu item md show hobe  */}
            <div className="google-front md:mt-0 mt-3 lg:mr-20">
              <ul className="items-stretch font-serif sm:gap-4 gap-0  text-xl font-bold lg:space-x-3 md:space-x-1 space-x-1 hidden sm:flex">
                {menuItem}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <Drawer menuItem={menuItem} /> */}
    </div>
  );
};

export default Navbar;
