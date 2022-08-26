// About.js

import React, { Component, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../assets/bgr2.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { height } from "@mui/system";

class About extends Component {
  render() {
    return (
      <div className="relative " >
        <p style={{
          position: 'absolute',
          top: '2%',
          left: '45%',
          fontSize: '3vw',
          color: 'white',
          fontFamily: 'cursive',
          zIndex: '1',
        }}>About Us</p>

        <img
          src={img} className="relative"
        ></img>

      </div >

    );
  }
}

export default About;
