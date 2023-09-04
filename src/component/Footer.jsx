import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1440px] mx-auto">

    <div className='w-11/12 lg:w-10/12 py-10 mx-auto'>
      <div className="flex flex-col gap-7 md:flex-row md:justify-between">
          <div className="flex flex-col md:gap-2 gap-1">
          <div>
            <h3 className="text-xl md:text-3xl lg:text-4xl capitalize font-ibm text-primary-100 ">Thanks for Stopping by!</h3>
          </div>
            <p className="text-sm lg:text-xl font-inter text-primary-100 ">betelhemkirub@gmail.com</p>
            <div className="text-primary-100 flex text-sm gap-1 font-inter items-center">
              <FaTelegram size={ 20 } />
              <p>@Betlhem33</p>
            </div>
          </div>
       
        
        <div className="flex gap-4 text-primary-100">
          <a href='https://github.com/klassno3/'>
          
          <FaGithubSquare className='cursor-pointer hover:text-pink-100 transition-all duration-300' size={ 35 } />
          </a>
          <a href='https://www.linkedin.com/in/betelhem-kirub-7830a926b/'>
          
          <FaLinkedin className='cursor-pointer hover:text-pink-100 transition-all duration-300' size={35 } />
          </a>
         
        </div>
        </div>
                  <p className="text-xs md:text-sm pt-7 md:pt-20 font-light font-inter text-primary-100"> © 2023 Betelhem Kirub. all rights reserved </p>

    </div>
    </div>
  )
}

export default Footer