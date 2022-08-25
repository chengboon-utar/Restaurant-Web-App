// Home.js

import React, { Component } from 'react';
import Hero from '../components/Hero';

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper";
import 'swiper/css/bundle';
import Ads from '../components/Ads';
import MenuIntro from '../components/Menu-orderIntro';

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,


} from "react-share";

export default class Home extends Component {

  slide_style = {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  }

  slides = [
    { id: 1, Element: <Hero /> },
    { id: 2, Element: <Ads /> },
    { id: 3, Element: <MenuIntro /> }
  ]

  render() {
    return (
      <div 
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
      >
        {this.slides.map(slide => <div key={slide.id} style={this.slide_style}> {slide.Element} </div>)}

        <div style={{
          position: 'fixed',
          top: '90%',
          left: '5%',
          transform: 'translate(-50%, -50%)',
          zIndex: '2',


        }}>
          <div className="box">
            {/* facebook share */}
            <FacebookShareButton
              url={"https://www.facebook.com/React-Bootstrap-109811025727740"}
              quote={"React-Bootstrap"}
              hashtag="#reactbootstrap"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            {/* twitter share */}
            <TwitterShareButton
              url={"https://www.facebook.com/React-Bootstrap-109811025727740"}
              quote={"React-Bootstrap"}
              hashtag="#reactbootstrap"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>

          </div>

        </div>
      </div>



    );
  }
}