import React from 'react';
import { Link } from 'react-router-dom';
import btn from '../assets/btn1.png';
import background from '../assets/bgr1.jpg';

export default function MenuIntro() {



  return (

    <div className='absolute flex-1' >
        <img src={background} alt='background' className='background' />


      <div>
        <Link to='/menu' >
          <img className='relative ' src={btn} alt="Unknown" ></img>
        </Link>
      </div>
      <h1> 
        Our Food
      </h1>
    </div>
  )
}