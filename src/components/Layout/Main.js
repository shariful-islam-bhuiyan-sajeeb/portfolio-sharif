import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import Navbar from "../Shered/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <Outlet></Outlet> */}
      <Drawer />
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
