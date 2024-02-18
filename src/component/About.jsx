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
          <div className="flex flex-col text-center lg:text-left  gap-2 md:gap-2">

          <h2 className=" text-pink-100 sm:text-xl font-bold">
            ABOUT ME
          </h2>
          <p className="sm:text-xl text-primary-100 md:text-2xl font-semibold">
        Dedicated Front-end Developer

            </p>
            <p className="text-primary-100/70 font-inter sm:text-base text-sm">
            I have a deep passion for creating captivating designs that not only catch your eye but also bring them to life. My main goal is to bridge the gap between functional masterpieces and visually pleasing interfaces that make a lasting impression.

I have a strong foundation in web development, using HTML, CSS, JavaScript, TypeScript, React, Tailwind, and SCSS. These tools allow me to transform ideas into stunning realities. I am also well-versed in design tools like Figma, which helps me bring concepts to life with pixel-perfect designs.

              </p>
          </div>
          
        </div>
  
      </div>
    
  


    </div>
  )
}

export default About
