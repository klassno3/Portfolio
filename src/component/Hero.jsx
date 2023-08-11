import React from 'react'
import Hand from '../Image/Hand.svg'
import Network from '../Image/Network.svg'
import Typewriter from "typewriter-effect";
import  { ScrollRotate } from 'react-scroll-rotate';

const Hero = () => {

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between  items-end pb-20">

          <div className="w-[70%] ">

        <div className="flex items-center gap-3 pt-32 ">

          <h2 className='text-3xl font-inter text-primary-100/90'>Hey, Im Betelhem Kirub</h2>
          <img src={Hand} alt="" className="w-12" />
        </div>
        <div className=" font-ibm text-5xl leading-[3.6rem] py-6 text-primary-100">
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
          
        <div className="w-[30%] items-center justify-end capitalize flex gap-4 ">
            <p className="font-ibm  text-primary-100 text-2xl">
            keep scrolling 
            </p>
      <ScrollRotate>
        
      <div className="">
        
      <img className="w-16"src={ Network } alt="network" />
      </div>
     </ScrollRotate>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
