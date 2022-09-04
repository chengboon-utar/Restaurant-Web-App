import React from 'react';
import { Link } from 'react-router-dom';
import btn from '../assets/btn1.png';
import img from '../assets/bgr1.jpg';


export default function MenuIntro() {
  return (
    <div style={{ position: 'relative', top: 0, left: 0 }} >
      <div>

        <p className=' font-bold '
          style={{
            position: 'absolute',
            top: '16%',
            left: '14%',
            zIndex: '2',
            color: 'white',
            fontSize: '4.8vw',
            fontFamily: 'fantasy',

          }}
        >Our Food</p>

        <p className=''
          style={{
            position: 'absolute',
            top: '25%',
            left: '7%',
            zIndex: '2',
            color: 'white',
            fontSize: '2.5vw',
            fontFamily: 'fantasy',

          }}
        >Delicious Moments for Everyone</p>

        <Link to='/menu' >

          <img src={btn} alt="Unknown"
            style={{
              position: 'absolute',
              top: '29%',
              left: '16%',
              zIndex: '2',
              width: '15vw',
            }}></img>

        </Link>

        <img className='relative ' src={img} alt='Unknown'></img>
      </div>

      <div>
        {/* <Link to='/menu' >

            <img src={btn1} alt="Unknown" style={{
              position: 'absolute',
              zIndex: '2',
              width: '15vw',
              top: '53%',
              left: '16%',
            }}></img>
          </Link> */}

        <p className=' font-bold ' style={{
          position: 'absolute',
          top: '45%',
          left: '2%',
          zIndex: '2',
          color: 'white',
          fontSize: '4.8vw',
          fontFamily: 'fantasy',
        }}> Wanna taste our food</p>
      </div>
    </div>
  )
}
