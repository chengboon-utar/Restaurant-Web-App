// Home.js

import React, { Component } from 'react';
import Hero from '../components/Hero';

import 'swiper/css/bundle';
import Ads from '../components/Ads';
import MenuIntro from '../components/Menu-orderIntro';

import Nav from '../components/Nav';

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,


} from "react-share";

export default function Home() {

  const slide_style = {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  }

  const slides = [
    { id: 1, Element: <Hero /> },
    { id: 2, Element: <Ads /> },
    { id: 3, Element: <MenuIntro /> }
  ]

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      {slides.map(slide => <div key={slide.id} style={slide_style}> {slide.Element} </div>)}

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
