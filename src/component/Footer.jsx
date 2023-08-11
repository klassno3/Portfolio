import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-10/12 py-10 mx-auto'>
      <div className="flex justify-between">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-2">

          <div>
            <h3 className="text-4xl capitalize font-ibm text-primary-100 ">Thanks for Stopping by!</h3>
          </div>
            <p className="text-xl font-inter text-primary-100 ">betelhemkirub@gmail.com</p>
            <div className="text-primary-100 flex text-sm gap-1 font-inter items-center">
              <FaTelegram size={ 20 } />
              <p>@Betlhem33</p>
            </div>
          </div>
          <p className="text-sm font-light font-inter text-primary-100"> © 2023 Betelhem Kirub. all rights reserved </p>
        </div>
        
        <div className="flex gap-4 text-primary-100">
          <a href='https://github.com/klassno3/'>
          
          <FaGithubSquare className='cursor-pointer hover:text-pink-100 transition-all duration-300' size={ 40 } />
          </a>
          <a href='https://www.linkedin.com/in/betelhem-kirub-7830a926b/'>
          
          <FaLinkedin className='cursor-pointer hover:text-pink-100 transition-all duration-300' size={ 40 } />
          </a>
         
        </div>
      </div>
    </div>
  )
}

export default Footer