// About.js

import React, { Component, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
      <div className="items-center justify-center"
        style={{ position: 'relative', height: '100%', }}>
        <img
          src='https://www.mcdonalds.com.my/storage/carousel/7f366266340f55db81dc7d53357eee7d.jpg'
          style={{
            flex: 1,
            width: "1600px",
            height: "953px",
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        ></img>
      </div >
    );
  }
}

export default About;