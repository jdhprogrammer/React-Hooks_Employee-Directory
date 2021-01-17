import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero text-center" >
      {props.children}
    </div>
  );
}

export default Hero;
