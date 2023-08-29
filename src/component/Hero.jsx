import React , { useEffect } from 'react'
import Hand from '../Image/Hand.svg'
import Network from  '../Image/Network.svg'
import Typewriter from "typewriter-effect";

const Hero = () => {
 useEffect( () => {
    
    const elem = document.querySelector('.rotate');
  window.addEventListener('scroll', function() {
    const value = window.scrollY * 1;
    elem.style.transform = ` rotate(${value}deg)`; 
  } );


  })
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className=" w-11/12 lg:w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between  md:items-end  pb-5 md:pb-20">

          <div className="w-full md:w-[70%]  ">

        <div className="flex items-center gap-1 lg:gap-3 pt-28 md:pt-32 ">

          <h2 className='text-xl lg:text-3xl  font-inter text-primary-100/90'>Hey, Im Betelhem Kirub</h2>
          <img src={Hand} alt="" className="w-8 lg:w-12" />
        </div>
        <div className=" font-ibm text-2xl sm:text-3xl lg:text-5xl lg:leading-[3.6rem] py-6 text-primary-100">
          <h1>I'm a front-end developer and UI/UX designer with a passion for creating experiences that are </h1>
          <div className="text-pink-100">
            
                <Typewriter
                  onInit={ ( typewriter ) => {
                  typewriter
                      .typeString( "Aesthetically pleasing. " )
                      .pauseFor( 1 )
                      .deleteAll()
                      .typeString( "User friendly." )
                      .start();
                      }}
                      />
                      </div>
                      </div>
          </div>
          
        <div className="lg:w-[30%] w-full items-center justify-start md:justify-end capitalize flex gap-4 ">
            <p className="font-ibm  text-primary-100 text-xl lg:text-2xl">
            keep scrolling 
            </p>
     
        
      <div className="rotate">
        
      <img className="w-12 lg:w-16 "src={ Network } alt="network" />
      </div>

          </div>
          
        </div>
        </div>
    </div>
  )
}

export default Hero
