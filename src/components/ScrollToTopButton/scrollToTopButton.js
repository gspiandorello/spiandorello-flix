import React from "react";
import "./scrollToTopButton.css";
import upArrow from "../../assets/up-arrow.svg";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scrollToTopButton" onClick={scrollToTop}>
      <img src={upArrow} alt="Up Arrow" className="up-arrow" />
    </button>
  );
};

export default ScrollToTopButton;
