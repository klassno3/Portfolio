import React from 'react'
import Hero from './Hero'
import Desk from '../Image/desktop.svg'
import AyatLogo from "../Image/Ayat-Logo.svg"
import OutletLogo from "../Image/Outlet-Logo.svg"
import Outlet from "../Image/Outlet.png"
import Ayat from "../Image/Ayat.png"
import Omnifood from "../Image/Omnifood.png"
import OmnifoodLogo from "../Image/omnifood-logo.png"

const Work = () => {
  return (
    <div>

    <Hero/>
    <div className='w-10/12 mx-auto py-20'>
      <div className="flex items-end gap-4">

      <div className="font-inter text-2xl font-semibold  text-primary-100">
        <h1>Selected Word</h1>
        </div>
        <img className="w-10" src={ Desk } alt="desktop icon" />
        
      </div>
         <div className="group bg-gradient-to-b from-Outlet-1.1 to-Outlet-1 text-secondary-100 mt-10 rounded-[30px] px-20 py-20 ">
        <div className="flex items-center justify-between">

        <div className="flex gap-12 flex-col">

        <div className="w-44">
          <img src={OutletLogo} alt="" />
        </div>
            <p className='text-2xl tracking-wide font-thin'> 2023-UI-Design-UX-Design-Web Development</p>
        

          <div className="flex items-start justify-start gap-7  tracking-wide flex-col">
            <h1 className='font-inter text-4xl'>Outlet Store</h1>
            <p className='text-xl w-3/4 font-thin'> Quaerat dolores dicta modi fuga totam. Beatae officia nostrum aperiam tempora eaque!</p>
          <a href='https://outlet-store-e-commerce.netlify.app/' className='text-2xl px-12 rounded-[10px] py-4 bg-secondary-100 text-Outlet-1 tracking-wide font-inter capitalize '>View site</a>
              </div> 
          </div>
          
          <div className="w-[60%] group-hover:scale-[1.2]  transition-all duration-500 ">
            <img src={Outlet} alt="" />
          </div>
          
        </div>
      </div>
      <div className="group bg-gradient-to-b from-Ayat-1 to-Ayat-1.1 text-primary-300 mt-10 rounded-[30px] px-20 py-20 ">
        <div className="flex  justify-between">

        <div className="flex gap-12 flex-col">

        <div className="w-44">
          <img src={AyatLogo} alt="" />
        </div>
            <p className='text-2xl text- tracking-wide font-thin'> 2023-UI-Design-UX-Design-Web Development</p>
        

          <div className="flex items-start justify-start gap-7 text-Ayat-1.2 tracking-wide flex-col">
            <h1 className='font-inter text-4xl'>Ayat  Apartment Redesign</h1>
            <p className='text-xl w-3/4 font-thin'> Quaerat dolores dicta modi fuga totam. Beatae officia nostrum aperiam tempora eaque!</p>
          <a href='https://ayat-realstate.netlify.app/' className='text-2xl px-12 rounded-[10px] py-4 bg-Ayat-1.2 text-secondary-100 tracking-wide font-inter capitalize '>View site</a>
              </div> 
          </div>
          
        <div className="w-[60%] group-hover:scale-[1.2] transition-all duration-500">
            <img src={Ayat} alt="" />
          </div>
          
        </div>
      </div>
      <div className="group bg-gradient-to-b from-Omnifood-1.1 to-Omnifood-1 text-primary-300 mt-10 rounded-[30px] px-20 py-20 ">
        <div className="flex  justify-between">

        <div className="flex gap-12 flex-col">

        <div className="w-96 pt-10">
          <img src={OmnifoodLogo} alt="" />
        </div>
            <p className='text-2xl text-Omnifood-1.2 tracking-wide font-thin'> 2023-UI-Design-UX-Design-Web Development</p>
        

          <div className="flex items-start justify-start gap-7 text-secondary-200 tracking-wide flex-col">
            <h1 className='font-inter text-4xl'>Ayat  Apartment Redesign</h1>
            <p className='text-xl w-3/4 font-thin'> Quaerat dolores dicta modi fuga totam. Beatae officia nostrum aperiam tempora eaque!</p>
          <a href='https://omnifood-beti.netlify.app/' className='text-2xl px-12 rounded-[10px] py-4 bg-Omnifood-1.2 text-secondary-100 tracking-wide font-inter capitalize '>View site</a>
              </div> 
          </div>
          
        <div className="w-[60%] group-hover:scale-[1.2] transition-all duration-500">
            <img src={Omnifood} alt="" />
          </div>
          
        </div>
      </div>

      </div>

    </div>
  )
}

export default Work
