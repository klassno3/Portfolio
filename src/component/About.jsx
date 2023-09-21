import Hand from '../Image/Hand.svg'
import Html from '../Image/html-5.svg'
import Css from '../Image/css-3.svg'
import Js from '../Image/js.svg'
import RctJs from "../Image/RctJs.svg"
import Tailwind from '../Image/tailwind.svg'
import Figma from '../Image/figma.svg' 

const About = () => {
  return (
    <div  className='max-w-[1440px] mx-auto'>

    <div className='w-11/12 lg:10/12 mx-auto'>
      <div className=" flex flex-col justify-center items-center gap-3 pt-36">

      
       <div className="flex items-center gap-1 lg:gap-3  ">

          <h2 className='text-xl lg:text-3xl text-center font-inter text-primary-100/90'>Hey, Im Betelhem Kirub</h2>
          <img src={Hand} alt="" className="w-8 lg:w-12" />
        </div>
        <div className="w-full md:w-[70%]">
          <h1 className="font-ibm  text-xl md:text-2xl  text-center text-primary-100">I'm a front-end developer and UI/UX designer and always try to understand the "why" behind everything that I do, both in design and in life.</h1>
        </div>

      </div>
      <div className="flex flex-col gap-3 md:gap-5 rounded-[15px] lg:rounded-[30px] p-5  md:p-10 lg:py-20 lg:px-16 text-secondary-100 mt-32 bg-pink-200 ">
        <h1 className=" font-inter font-semibold text-2xl md:text-3xl lg:text-4xl ">About Me</h1>
        
        <p className="text-base lg:text-lg font-inter ">
          I am currently in my fourth year pursuing a degree in Software Engineering at AASTU. Throughout my academic journey, I have consistently exhibited a strong inclination towards understanding the underlying principles and methodologies behind the design and production of various systems and products. This inclination, coupled with my curiosity in the process and production aspect, has sparked my keen interest in front-end development.

As I delved deeper into the realm of software development, I realized that simply fulfilling user or business requirements was not enough. I wanted to bridge the gap between abstract ideas and tangible designs. This realization pushed me towards the captivating field of UI/UX design, where I could actively participate in transforming user or business requirements into visually appealing and user-friendly interfaces.


            
          
        </p>
      </div>
      <div className="py-32 flex flex-col gap-8">
        
      <div className="flex justify-center font-ibm text-3xl md:text-4xl lg:text-5xl  text-primary-100">
        <h1 className="">Skills</h1>
      </div>
      <div className="flex gap-28 max-w-[976px] flex-wrap mx-auto    py-10 justify-center items-start grid-cols-1 md:grid-cols-3 lg:grid-cols-6 ">
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={Html} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-30" src={Css} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={Tailwind} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={Figma} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={Js} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={RctJs} alt="" />
      </div>
      </div>
    </div>
    </div>
  )
}

export default About
