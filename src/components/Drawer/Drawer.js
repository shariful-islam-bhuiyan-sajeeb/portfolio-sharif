import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shered/Footer/Footer";
import Navbar from "../Shered/Navbar/Navbar";
import {
  HiCircleStack,
  HiDocumentDuplicate,
  HiHome,
  HiUserGroup,
} from "react-icons/hi2";

import { ImBlogger2 } from "react-icons/im";
import { FcAbout } from "react-icons/fc";
import { RiContactsFill } from "react-icons/ri";

const Drawer = () => {
  const menuItem = (
    <>
      <li className=" hover:bg-slate-200 hover:text-[#2978CB]  w-full mx-auto py-2 ">
        <a
          href="/"
          rel="noopener noreferrer"
          className=" flex items-center justify-center gap-x-4 "
        >
          <HiHome />
          Home
        </a>
      </li>
      <li className=" hover:bg-slate-200 hover:text-[#2978CB]  w-full mx-auto py-2">
        <a
          rel="noopener noreferrer"
          href="#projects"
          className=" flex items-center justify-center gap-x-4"
        >
          <HiCircleStack />
          Projects
        </a>
      </li>
      <li className=" hover:bg-slate-200 hover:text-[#2978CB]  w-full mx-auto py-2">
        <a
          rel="noopener noreferrer"
          href="#skill"
          className=" flex items-center justify-center gap-x-4"
        >
          <HiDocumentDuplicate />
          Skills
        </a>
      </li>
      <li className=" hover:bg-slate-200 hover:text-[#2978CB]  w-full mx-auto py-2">
        <a
          href="#blog"
          rel="noopener noreferrer"
          className=" flex items-center justify-center gap-x-4"
        >
          <ImBlogger2 />
          Blog
        </a>
      </li>
      <li className=" hover:bg-slate-200 hover:text-[#2978CB]  w-full mx-auto py-2">
        <a
          rel="noopener noreferrer"
          href="#aboutMe"
          className="flex items-center justify-center gap-x-4"
        >
          <FcAbout />
          About
        </a>
      </li>
      <li className=" hover:bg-slate-200 hover:text-[#2978CB]  w-full mx-auto py-2">
        <a
          rel="noopener noreferrer"
          href="#contact"
          className="flex items-center justify-center gap-x-4"
        >
          <RiContactsFill />
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer">
        <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
        <div className="drawer-side">
          <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
          <ul className=" text-center  w-52 bg-base-100 text-base-content">
            <div className="flex flex-col items-start py-4 px-2 bg-[#57A0D2]">
              <div>
                <img
                  className="w-16 h-16 rounded-full ring-1 ring-gray-500"
                  src="https://i.ibb.co/N9RRHGt/s-1.jpg"
                  alt=""
                />
              </div>
              <div className="text-gray-700 flex flex-col items-start">
                <h2 className=" font-semibold font-serif  mt-1 ">
                  Shariful Islam Bhuiyan
                </h2>
                <p className="flex items-center font-semibold mt-2 gap-x-2">
                  734 Followers <HiUserGroup />{" "}
                </p>
              </div>
            </div>
            <li className=" w-full flex flex-col items-center text-lg font-semibold font-serif space-y-4  mt-4">
              {menuItem}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
