import React from 'react';
import { Link } from 'react-router-dom';
import btn from '../assets/btn1.png';
import btn1 from '../assets/btn2.png';
import img from '../assets/bgr1.jpg';


export default function MenuIntro() {
  {
    return (
      <div style={{
        position: 'relative',
        top: 0,
        left: 0,
      }} >
        <div>

          <p className=' text-white font-bold ' style={{
            position: 'absolute',
            zIndex: '2',
            fontFamily: 'fantasy',
            top: '16%',
            left: '14%',
            fontSize: '4.8vw',

          }}> Our Food</p>

          <p className=' text-white  ' style={{
            position: 'absolute',
            zIndex: '2',
            fontFamily: 'fantasy',
            top: '25%',
            left: '7%',
            fontSize: '2.5vw',

          }}> Delicious Moments for Everyone</p>

          <Link to='/menu' >

            <img src={btn} alt="Unknown" style={{
              position: 'absolute',
              zIndex: '2',
              width: '15vw',
              top: '29%',
              left: '16%',
            }}></img>

          </Link>

          <img className='relative '
            src={img}
          ></img>

        </div>

        <div  >
          <Link to='/menu' >

            <img src={btn1} alt="Unknown" style={{
              position: 'absolute',
              zIndex: '2',
              width: '15vw',
              top: '53%',
              left: '16%',
            }}></img>
          </Link>
          
          <p className='text-white  font-bold ' style={{
            position: 'absolute',
            zIndex: '2',
            fontFamily: 'fantasy',
            fontSize: '4.8vw',
            top: '45%',
            left: '2%',

          }}> Wanna taste our food</p>
        </div>
      </div>

    )
  }
}
