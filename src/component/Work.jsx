import React from 'react'
import { Link } from 'react-router-dom'
import Desk from '../Image/desktop.svg'
import Outlet from "../Image/Home desk.jpg"
import Ayat from "../Image/Home.jpg"
import BluLabs from "../Image/Blu Lab Desktop.jpg"
import Literti from "../Image/Final Home.jpg"
import CarRental from "../Image/car rental.jpg"
import { FiGithub } from "react-icons/fi"
import { RxOpenInNewWindow } from "react-icons/rx"

const Work = () => {
  return (
    <div id="work" className=' w-11/12 lg:w-10/12 my-12 md:my-32 max-w-[1440px] mx-auto rounded-md'>
            <div className="font-inter mb-5 flex gap-3 items-center text-base lg:text-xl md:text-2xl font-semibold  text-primary-100">
        <h1>Selected Work</h1>
       <img className="w-7 md:w-10" src={ Desk } alt="desktop icon" />
               </div>
      <div className="flex flex-col gap-8 md:gap-12">
          <div className='bg-white  group p-8 flex flex-col md:flex-row gap-10 rounded-2xl shadow-md'>
          <div className="md:w-1/2">
            
                <div className="md:w-full rounded-xl shadow-lg h-[300px] overflow-hidden">

            <img
              className='md:w-full md:group-hover:-translate-y-[60%]  transition-all duration-[3000ms]'
              src={ Literti } alt="" />
          </div>
              </div>
          <div className="flex  md:w-1/2 flex-col gap-3 font-inter">
             <div className="flex items-center justify-between ">
        <h3 className="sm:text-xl text-base md:text-2xl  text-Literti-100 font-bold">Literti</h3>
<Link to="/case study" className='underline  uppercase transition-all duration-300   text-sm md:text-base font-semibold text-Literti-100'>
            Case Study
                </Link>
            </div>
          <div className="flex flex-col gap-5 ">
              <p className="text-sm sm:text-lg text-tertiary-300">
                An easy book tracking app is a website or application that provides users with
                a convenient way to keep track of the books they have read and the ones they want to read.
              </p>
              
         
          <div className="text-tertiary-200 text-sm md:text-lg flex gap-3">
            
          <div className="underline">React</div>
        <div className="underline">Tailwind Css</div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">

                  <a
                  href='https://github.com/klassno3/LITERTI'
                  target="_blank"
                  rel="noopener noreferrer"
                 className='hover:shadow-xl transition-all duration-300 flex text-sm md:text-base gap-2  p-2 md:p-3  justify-center items-center  rounded text-Literti-100 border-2 t border-Literti-100 shadow-md'>
            <span>Code</span>
            <FiGithub />

                </a>
          
                  <a
                  href='https://literti-book-tracker.netlify.app/'
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:shadow-xl transition-all duration-300 flex text-sm md:text-base gap-2  p-2 md:p-3 justify-center items-center  rounded text-white bg-Literti-100 shadow-md'
                >
                  
          
            <span>Live Demo</span>
            <RxOpenInNewWindow />
                </a>
          </div>
          
       
        </div>
            </div>
      
        </div>
        <div className='bg-white group p-6 md:p-8 flex flex-col md:flex-row gap-10 rounded-lg shadow-md'>
     <div className="md:w-1/2">
            
                <div className="md:w-full rounded-xl shadow-lg h-[300px] overflow-hidden">

            <img
              className='md:w-full md:group-hover:-translate-y-[60%]  transition-all duration-[3000ms]'
              src={ CarRental } alt="" />
          </div>
              </div>
          <div className="flex md:w-1/2 flex-col gap-3 font-inter">
           
        <h3 className="sm:text-xl text-base md:text-2xl font-bold  text-Omnifood-1">Car Rental</h3>
          <div className="flex flex-col gap-5 ">
              <p className="text-tertiary-300 text-sm sm:text-lg">
A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.        </p>
         
          <div className="text-tertiary-200 text-sm md:text-lg flex gap-3">
            
          <div className="underline">React</div>
        <div className="underline">Tailwind Css</div>
          </div>
          <div className="flex flex-col md:flex-row gap-4  md:gap-6">
                <a
                  
                  href='https://github.com/klassno3/car-rental'
                  target="_blank"
                  rel="noopener noreferrer"
                   className='hover:shadow-xl transition-all duration-300 flex text-sm md:text-base justify-center items-center gap-2 rounded text-Omnifood-1 border-2 t border-Omnifood-1 p-2 md:p-3 shadow-md'
                  >

            <span>Code</span>
            <FiGithub />
                </a>
        
                <a
                  href='https://car-rental-company-1.netlify.app/'
                  target="_blank"
                  rel="noopener noreferrer"
                className='hover:shadow-xl transition-all duration-300 flex text-sm md:text-base justify-center items-center gap-2 rounded text-white bg-Omnifood-1 p-2 md:p-3  shadow-md' 
                >
                
            <span>Live Demo</span>
            <RxOpenInNewWindow />
                </a>
          </div>
          
       
        </div>
            </div>
      
    </div>
  <div className='bg-white group p-6 md:p-8 flex flex-col md:flex-row gap-10 rounded-lg shadow-md'>
     <div className="md:w-1/2">
            
                <div className="md:w-full rounded-xl shadow-lg h-[300px] overflow-hidden">

            <img
              className='md:w-full md:group-hover:-translate-y-[60%]  transition-all duration-[3000ms]'
              src={ BluLabs } alt="" />
          </div>
              </div>
          <div className="flex md:w-1/2 flex-col gap-3 font-inter">
           
        <h3 className="sm:text-xl text-base md:text-2xl font-bold  text-BluLabs-1">Blu Labs</h3>
          <div className="flex flex-col gap-5 ">
              <p className="text-tertiary-300 text-sm sm:text-lg">
               Blu Labs official website, a software company committed to meeting the most stringent standards for performance, security, and functionality. We achieve this by conducting thorough testing and implementing rigorous quality assurance procedures.  
        </p>
         
          <div className="text-tertiary-200 text-sm md:text-lg flex gap-3">
            
          <div className="underline">React</div>
        <div className="underline">Tailwind Css</div>
          </div>
          <div className="flex flex-col md:flex-row gap-4  md:gap-6">
                <a
                  
                  href='https://github.com/klassno3/blu-labs'
                  target="_blank"
                  rel="noopener noreferrer"
                   className='hover:shadow-xl transition-all duration-300 flex text-sm md:text-base justify-center items-center gap-2 rounded text-BluLabs-1 border-2 t border-BluLabs-1 p-2 md:p-3 shadow-md'
                  >

            <span>Code</span>
            <FiGithub />
                </a>
        
                <a
                  href='https://blu-labs-company.netlify.app/'
                  target="_blank"
                  rel="noopener noreferrer"
                className='hover:shadow-xl transition-all duration-300 flex text-sm md:text-base justify-center items-center gap-2 rounded text-white bg-BluLabs-1 p-2 md:p-3  shadow-md' 
                >
                
            <span>Live Demo</span>
            <RxOpenInNewWindow />
                </a>
          </div>
          
       
        </div>
            </div>
      
    </div>
      
  
    <div className='bg-white  group p-6 md:p-8 flex flex-col md:flex-row gap-10 rounded-lg shadow-md'>
          <div className="md:w-1/2">
            
          <div className="md:w-full rounded-xl shadow-lg h-[300px] overflow-hidden">

            <img className='md:w-full md:group-hover:-translate-y-[60%]  transition-all duration-[3000ms]'
              src={ Ayat } alt="" />
          </div>
              </div>
      
      <div className="flex  md:w-1/2 flex-col gap-3 font-inter">
        <h3 className="sm:text-xl text-base md:text-2xl text-Ayat-1 font-bold">Ayat Realstate</h3>
          <div className="flex flex-col gap-5 ">
              <p className="text-sm sm:text-lg text-tertiary-300">
               Redesign Ayat Real Estate's website to make it more visually appealing and easy to use.
              </p>
              
         
          <div className="text-tertiary-200 text-sm md:text-lg flex gap-4">
            
          <div className="underline">React</div>
        <div className="underline">Tailwind Css</div>
          </div>
          <div className="flex  md:w-1/2 flex-col md:flex-row gap-4  md:gap-6">
                <a
                  
                  href='https://github.com/klassno3/Test'
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:shadow-xl transition-all duration-300 flex  text-sm md:text-base gap-2  p-2 md:p-3  justify-center items-center  rounded text-Ayat-1 border-2 t border-Ayat-1 shadow-md'
                
                
                >

             
            <span>Code</span>
            <FiGithub />
                </a>
         
                  <a
                  href='https://ayat-realstate.netlify.app/'
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:shadow-xl transition-all duration-300 flex  text-sm md:text-base gap-2  p-2 md:p-3  justify-center items-center  rounded text-white bg-Ayat-1 shadow-md'
                
                >
                  

            <span>Live Demo</span>
            <RxOpenInNewWindow />
                </a>
          </div>
          
       
        </div>
            </div>
      
    </div>
    <div className='bg-white group p-6 md:p-8 flex flex-col md:flex-row gap-10 rounded-lg shadow-md'>
          <div className="md:w-1/2">
          <div className="md:w-full rounded-xl shadow-lg h-[300px] overflow-hidden">

            <img
              className='md:w-full md:group-hover:-translate-y-[60%]  transition-all duration-[3000ms]'
              src={ Outlet } alt="" />
          </div>
              </div>   
      
      <div className="flex md:w-1/2 flex-col gap-3 font-inter">
        <h3 className="sm:text-xl text-base md:text-2xl text-Outlet-1 font-bold">Outlet Store</h3>
          <div className="flex flex-col gap-5 ">
              <p className="text-sm sm:text-lg text-tertiary-300">
               Creating an e-commerce website that is easy to use and navigate is essential for a Store that wants to sell products online.
              </p>
              
         
          <div className="text-tertiary-200 text-sm md:text-lg flex gap-4">
            
          <div className="underline">React</div>
        <div className="underline">Tailwind Css</div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <a
                  href='https://github.com/klassno3/Outlet-store'
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:shadow-xl transition-all duration-300 flex  text-sm md:text-base gap-2  p-2 md:p-3  justify-center items-center  rounded text-Outlet-1 border-2 t border-Outlet-1 shadow-md'
                
                >

            <span>Code</span>
            <FiGithub />
                </a>
                <a
                  
                  href='https://outlet-store-e-commerce.netlify.app/'
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:shadow-xl transition-all duration-300 flex  text-sm md:text-base gap-2  p-2 md:p-3  justify-center items-center  rounded text-white bg-Outlet-1 px-3 py-2 shadow-md'
>
         
            <span>Live Demo</span>
            <RxOpenInNewWindow />
                </a>
          </div>
          
       
        </div>
            </div>
      
        </div>
        
   
</div>
    
      </div>
  )
}

export default Work
