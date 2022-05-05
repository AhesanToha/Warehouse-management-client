import React from "react";
import banner from "../../../images/banner.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner">
      <img  src={banner} alt="" />
      <div className='banner-title'>
      <p>Here you can find all kinds of laptop</p>
      <p>let's visit out House</p>
      </div>
    </div>
  );
};

export default Banner;
