import React from 'react'
import { Link } from 'react-router-dom'
import Desk from '../Image/desktop.svg'
import AyatLogo from "../Image/Ayat-Logo.svg"
import OutletLogo from "../Image/Outlet-Logo.svg"
import LitertiLogo from "../Image/Literti.svg"
import Outlet from "../Image/Frame 124.png"
import Ayat from "../Image/Frame 128.png"
import Literti from "../Image/Literti.png"
import Omnifood from "../Image/Omnifood.png"
import OmnifoodLogo from "../Image/omnifood-logo.png"

const Work = () => {
 
  return (
    <div className='max-w-[1440px] mx-auto'>
      
  
  
    <div className='lg:w-10/12 w-11/12 mx-auto py-20'>
      <div className="flex items-end w-full justify-start gap-2 md:gap-4">
      <div className="font-inter text-base lg:text-xl md:text-2xl font-semibold  text-primary-100">
        <h1>Selected Work</h1>
        </div>
        <img className="w-7 md:w-10" src={ Desk } alt="desktop icon" />
      </div>
         <div className="group bg-gradient-to-b from-Literti-100 to-Literti-200 text-secondary-100 mt-10 rounded-[15px] md:rounded-[30px] p-7 md:p-10 lg:p-20 ">
        <div className="flex flex-col gap-10 md:flex-row items-start md:justify-between">
        <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col">
        <div className="w-24 md:w-36 lg:w-48">
          <img src={LitertiLogo} alt="" />
        </div>
            <p className='md:text-lg lg:text-xl sm:text-base text-sm tracking-wide font-thin'> 2023-UI-Design-UX-Design-Web Development</p>
              <div className="flex items-start justify-start gap-8  flex-col">
                
          <div className="flex items-start justify-start gap-3   flex-col">
            <h1 className='font-inter font-semibold text-3xl lg:text-4xl'>Literti</h1>
            <p className='md:text-xl font-inter  text-lg lg:text-2xl  '>
                    An easy book tracking app is a site that allows users to keep track
                    of the books they have read and want to read </p>
                </div> 
                <div className="flex flex-col  sm:flex-row gap-6">
          <a href='https://literti-book-tracker.netlify.app/'  target="_blank" rel="noopener noreferrer" className=' hover:bg-secondary-100/90 transition-all duration-300 md:text-xl flex justify-center items-center text-base px-6 py-2 lg:px-8 md:px-6 rounded-[5px] md:rounded-[8px] md:py-2 lg:py-3 bg-secondary-100/70 text-Literti-100 tracking-wide font-inter capitalize '>View site</a>
<Link to="/case study" className='transition-all duration-300 md:text-xl border-red border-2   text-base px-6 py-2 lg:px-8 md:px-6 rounded-[5px] md:rounded-[8px] md:py-2 lg:py-3  text-secondary-100 tracking-wide font-inter capitalize '>Case Study</Link>
                </div>
          </div>
            </div>
            
          <div className="w-[80%] md:w-full  md:group-hover:scale-[1.2] group-hover:scale-[1.1] transition-all duration-500 ">
            <img src={Literti} alt="" />
          </div>
          
        </div>
      </div>
         <div className="group bg-gradient-to-b from-Outlet-1.1 to-Outlet-1 text-secondary-100 mt-10 rounded-[15px] md:rounded-[30px] p-7 md:p-10 lg:p-20 ">
        <div className="flex flex-col gap-10 md:flex-row items-start md:justify-between">

        <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col">

        <div className="w-24 md:w-32 lg:w-44">
          <img src={OutletLogo} alt="" />
        </div>
            <p className='md:text-lg lg:text-xl sm:text-base text-sm tracking-wide font-thin'> 2023-UI-Design-UX-Design-Web Development</p>
              <div className="flex items-start justify-start gap-8  flex-col">
                
          <div className="flex items-start justify-start gap-3   flex-col">
            <h1 className='font-inter font-semibold text-3xl lg:text-4xl'>Outlet Store</h1>
            <p className='md:text-xl font-inter  text-lg lg:text-2xl  '>Creating an e-commerce website that is easy to use and navigate is essential for a Store that wants to sell products online.</p>
              </div> 
          <a href='https://outlet-store-e-commerce.netlify.app/'  target="_blank" rel="noopener noreferrer" className=' hover:bg-secondary-100/90 transition-all duration-300 md:text-xl  text-base px-6 py-2 lg:px-8 md:px-6 rounded-[5px] md:rounded-[8px] md:py-2 lg:py-3 bg-secondary-100/70 text-Outlet-1 tracking-wide font-inter capitalize '>View site</a>
          </div>
            </div>
            
          <div className="w-[80%] md:w-full md:group-hover:scale-[1.2] group-hover:scale-[1.1] transition-all duration-500 ">
            <img src={Outlet} alt="" />
          </div>
          
        </div>
      </div>
         <div className="group bg-gradient-to-b from-Ayat-1 to-Ayat-1.1 text-primary-300 mt-10 rounded-[15px] md:rounded-[30px] p-7 md:p-10 lg:p-20 ">
        <div className="flex flex-col gap-10 md:flex-row items-start md:justify-between">

        <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col">

        <div className="w-24 md:w-32 lg:w-44">
          <img src={AyatLogo} alt="" />
        </div>
            <p className='md:text-lg lg:text-xl   sm:text-base  text-sm tracking-wide font-thin'> 2023-UI-Design-UX-Design-Web Development</p>
              <div className="flex items-start justify-start gap-8  flex-col">
                
          <div className="flex items-start justify-start gap-3   flex-col">
            <h1 className='font-inter font-semibold text-3xl lg:text-4xl'>Ayat  Realstate Redesign</h1>
            <p className='md:text-xl font-inter  text-lg lg:text-2xl  '>Redesign Ayat Real Estate's website to make it more  visually appealing and easy to use.</p>
              </div> 
          <a href='https://ayat-realstate.netlify.app/'  target="_blank" rel="noopener noreferrer" className=' hover:bg-Ayat-1.2/90 transition-all duration-300 md:text-xl text-base px-6 py-2 lg:px-8 md:px-6 rounded-[5px] md:rounded-[8px] md:py-2 lg:py-3 bg-Ayat-1.2/70 text-secondary-100 tracking-wide font-inter capitalize '>View site</a>
          </div>
            </div>
            
          <div className="w-[80%] md:w-full md:group-hover:scale-[1.2] group-hover:scale-[1.1] transition-all duration-500 ">
            <img src={Ayat} alt="" />
          </div>
          
        </div>
      </div>
         <div className="group bg-gradient-to-b from-Omnifood-1 to-Omnifood-1.1 text-primary-300 mt-10 rounded-[15px] md:rounded-[30px] p-7 md:p-10 lg:p-20 ">
        <div className="flex flex-col  md:flex-row items-start md:justify-between">

        <div className="flex gap-6 md:gap-8 lg:gap-12 flex-col">

        <div className="w-44 md:w-48  lg:w-96">
          <img src={OmnifoodLogo} alt="" />
        </div>
            <p className='md:text-lg lg:text-xl  sm:text-base  text-sm tracking-wide font-thin'> 2023-UI-Design-UX-Design-Web Development</p>
              <div className="flex items-start justify-start gap-8  flex-col">
                
          <div className="flex items-start justify-start gap-3   flex-col">
            <h1 className='font-inter font-semibold text-3xl lg:text-4xl'>Omni Food</h1>
            <p className='md:text-xl font-inter  text-lg lg:text-2xl  '>A seamless service that provides healthy, pre-made meals that are tailored to your individual dietary needs and preferences.</p>
              </div> 
          <a href='https://omnifood-beti.netlify.app/'  target="_blank" rel="noopener noreferrer" className=' hover:bg-Ayat-1.2/90 transition-all duration-300 md:text-xl text-base px-6 py-2 lg:px-8 md:px-6 rounded-[5px] md:rounded-[8px] md:py-2 lg:py-3 bg-Ayat-1.2/70 text-secondary-100 tracking-wide font-inter capitalize '>View site</a>
          </div>
            </div>
            
          <div className="w-[70%] md:w-full md:group-hover:scale-[1.2] group-hover:scale-[1.1] transition-all duration-500 ">
            <img src={Omnifood} alt="" />
          </div>
          
        </div>
      </div>

     
    

      </div>

    </div>
  )
}

export default Work
