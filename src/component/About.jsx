import React from 'react'
import Logo from "../Image/About me.svg"
import AboutMe from "../Image/aboutme.webp"
const About = () => {

  
  return (
    <div id='about' className='w-11/12 md:w-10/12 mx-auto my-12'>
      <div className='flex flex-col lg:flex-row font-inter gap-6 md:gap-10 '>
        <div className="lg:w-2/5 relative">

        <img className=' rounded-lg ' src={ AboutMe } alt="" />
          <div className=" absolute right-0 bottom-0 bg-secondary-200 w-20 h-20 flex justify-center items-center rounded-full">

        <img id="logo" src={Logo} alt="" className=" animate-circle Logo w-10 h-10" />
      </div>
        </div>
        <div className="lg:w-3/5">
          <div className="flex flex-col text-center lg:text-left  gap-2 md:gap-3">

          <h2 className=" text-pink-100 sm:text-xl font-bold">
            ABOUT ME
          </h2>
          <p className="sm:text-xl md:text-2xl font-semibold">
       A dedicated Front-end Developer
based in Addis Ababa
            </p>
            <p className="text-tertiary-300 sm:text-base text-sm">
              As a  Front-End Developer, I have cultivated a formidable skill set encompassing HTML, CSS, JavaScript, React, Tailwind, and SCSS.
              My forte lies in designing and upkeeping responsive websites that deliver a seamless user experience.
              I am adept at crafting dynamic and captivating interfaces by employing clean, optimized code and leveraging state-of-the-art development tools and methodologies.
              Additionally, I am a collaborative team player who thrives in working alongside cross-functional teams to create exceptional web applications.
              </p>
          </div>
          
        </div>
  
      </div>
    
  


    </div>
  )
}

export default About
