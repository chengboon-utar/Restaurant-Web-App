// About.js

import React, { Component } from "react";
import Nav from "../components/Nav";
import {Link} from 'react-router-dom';
class About extends Component {
  render() {
    return (
      <div className="relative " >
        <p style={{
          position: 'absolute',
          top: '2%',
          left: '45%',
          fontSize: '3vw',
          fontFamily: 'cursive',
          zIndex: '1',
        }}>About Us</p>

        {/* <img
          src={img} className="relative"
        ></img> */}
      
        <a href="/YenNing/Gallery.html">
          Gallery
        </a>
      </div >

    );
  }
}

export default About;
