import Hand from '../Image/Hand.svg'
import Html from '../Image/html-5.svg'
import Css from '../Image/css-3.svg'
import Js from '../Image/js.svg'
import RctJs from "../Image/RctJs.svg"
import Tailwind from '../Image/tailwind.svg'
import Figma from '../Image/figma.svg' 

const About = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className=" flex flex-col justify-center items-center gap-3 pt-32">

      
     <div className="flex items-center gap-3 ">

          <h2 className='text-3xl font-inter text-primary-100/90'>Hey, Im Betelhem Kirub</h2>
          <img src={Hand} alt="" className="w-12" />
        </div>
        <div className="w-[70%]">
          <h1 className="font-ibm text-2xl  text-center text-primary-100">I'm a front-end developer and UI/UX designer and always try to understand the "why" behind everything that I do, both in design and in life.</h1>
        </div>

      </div>
      <div className="flex flex-col gap-5 rounded-[30px] py-20 px-16 text-secondary-100 mt-32 bg-gradient-to-b from-pink-200 to-pink-100 ">
        <h1 className=" font-inter font-semibold text-4xl ">About Me</h1>
        <p className="text-lg font-inter ">
          I am currently in my fourth year pursuing a degree in Software Engineering at AASTU. Throughout my academic journey, I have consistently exhibited a strong inclination towards understanding the underlying principles and methodologies behind the design and production of various systems and products. This inclination, coupled with my curiosity in the process and production aspect, has sparked my keen interest in front-end development.

As I delved deeper into the realm of software development, I realized that simply fulfilling user or business requirements was not enough. I yearned to bridge the gap between abstract ideas and tangible designs. This realization propelled me towards the captivating field of UI/UX design, where I could actively participate in transforming user or business requirements into visually appealing and user-friendly interfaces.

By exploring UI/UX design, I aim to leverage my software engineering background to create intuitive and seamless user experiences. I recognize the significance of aligning user needs with business goals, thereby ensuring the success of any digital product. This involves empathizing with users, conducting thorough research, and employing design thinking methodologies to craft meaningful and engaging interfaces.

          <p className='pt-3'>
            
In summary, my journey towards becoming a UI/UX designer stems from my deep-rooted curiosity about the how and why behind the design and production processes. By combining my knowledge of software engineering with the art of UI/UX design, I aim to create visually appealing and user-centric interfaces that fulfill both user needs and business objectives.
          </p>
          
        </p>
      </div>
      <div className="py-32 flex flex-col gap-8">
        
      <div className="flex justify-center font-ibm text-5xl  text-primary-100">
        <h1 className="">Skills</h1>
      </div>
      <div className="grid w-9/12 mx-auto justify-center items-center  grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-6 ">
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={Html} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={Css} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={Tailwind} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={Figma} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={Js} alt="" />
        <img className="w-16 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer transition-all duration-300" src={RctJs} alt="" />
      </div>
      </div>
    </div>
  )
}

export default About
