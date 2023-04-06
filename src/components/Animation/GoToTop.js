import React from "react";

const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    console.log("scroll............");
  };

  window.addEventListener("scroll", goToBtn);

  return (
    <div className="top-btn">
      <button onClick={goToBtn}>top btn</button>
    </div>
  );
};

export default GoToTop;
