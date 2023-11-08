import Hand from '../Image/Hand.svg'
import Typewriter from "typewriter-effect";
import Html from '../Image/html-5.svg'
import Css from '../Image/css-3.svg'
import Js from '../Image/js.svg'
import Ts from '../Image/typescript.svg'
import RctJs from "../Image/RctJs.svg"
import Tailwind from '../Image/tailwind.svg'
import Figma from '../Image/figma.svg' 
import Sass from '../Image/sass.svg' 
// import HeroPic from "../Image/Me.jpg"
// import HeroPic from "../Image/HeroPic.jpg"


const Hero = () => {
  return (
    <div id="hero" className='max-w-[1440px] mx-auto'>
      <div className=" w-11/12 lg:w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center  pb-5 md:pb-20">

          <div className="w-full md:w-[70%]  ">
            <div className="flex flex-col  md:gap-10">
              
              <div>
                
        <div className="flex items-center gap-1 lg:gap-3 pt-28 md:pt-20 ">

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
                      <div className="flex mt-10 flex-col items-center md:flex-row gap-2">

                <h3 className='lg:text-2xl font-semibold font-inter pb-1 text-primary-100/90 md:border-b-0 md:border-r-2 border-b-2 pr-2 border-primary-100/90 '>
                  
                  
                  Tech Stack</h3>
                <div className="grid md:grid-cols-4 mt-3 md:mt-0 sm:grid-cols-2 gap-5">
                  <div className="flex  gap-2 translate-0 transition-all duration-500 hover:-translate-y-2">

            <img src={Html} alt="" className="w-12  cursor-pointer transition-all duration-300" />
            <img src={Css} alt="" className="w-12  cursor-pointer transition-all duration-300" />
                  </div>
                  <div className="flex gap-2  translate-0 transition-all duration-500 hover:-translate-y-2">

            <img src={Tailwind} alt="" className="w-12  cursor-pointer transition-all duration-300" />
            <img src={Sass} alt="" className="w-12  cursor-pointer transition-all duration-300" />
                  </div>
                  <div className="flex gap-2  translate-0 transition-all duration-500 hover:-translate-y-2">

            <img src={Ts} alt="" className="w-12  cursor-pointer transition-all duration-300" />
            <img src={Js} alt="" className="w-12  cursor-pointer transition-all duration-300" />
                  </div>
                  <div className="flex gap-2  translate-0 transition-all duration-500 hover:-translate-y-2">
            <img src={RctJs} alt="" className="w-12  cursor-pointer transition-all duration-300" />

            <img src={Figma} alt="" className="w-12  cursor-pointer transition-all duration-300" />
                  </div>
          </div>
        </div>
                      </div>
          </div>

          
      {/* <img className='rounded-[] border-black border-2' src={HeroPic} alt="avatar"></img> */}
        
        </div>
        </div>
    </div>
  )
}

export default Hero
