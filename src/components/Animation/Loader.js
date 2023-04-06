import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="">
      <div className="center">
        <div className="ring1 w-full"></div>
        <span>loading...</span>
      </div>
    </div>
  );
};

export default Loader;
