import React from 'react'
import Literti from "../Image/Literti.png"
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai"
import { GoLightBulb } from "react-icons/go"

import Table from "../Image/Table.png"
import SiteMap from "../Image/Sitemap.svg"
import TaskFlow from "../Image/Task Flow.svg"
import Books from "../Image/Book details.png"
import Challenge from "../Image/Challange.png"
import Home from "../Image/Home.png"
import ComponentTwo from "../Image/Components two.png"
import ComponentOne from "../Image/Components.png"
import FinalHome from "../Image/Final Home.png"
import FinalBookDetail from "../Image/Final Book Details.png"
import FinalChallenge from "../Image/Final Challenge.png"
import FinalMyBook from "../Image/Final My books.png"
import FinalDesign from "../Image/design process.jpg"


const CaseStudy = () => {
  return (
    <div className='py-20 bg-secondary-100'>
      <img className='w-9/12 lg:w-8/12 flex justify-center mx-auto' src={Literti} alt="" />
    
        <div className="flex lg:w-10/12 w-11/12 mx-auto flex-col gap-2 md:gap-4 mt-16">
          <h1 className="text-Literti-100 text-2xl lg:text-6xl  font-ibm">Literti</h1>
          <p className="text-sm md:text-xl text-tertiary-200 font-inter lg:w-3/4">Design a website that enables users to monitor their book reading progress and establish personal reading challenges.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 lg:w-10/12 w-11/12 mx-auto  justify-between mt-16 ">

        <div className=" lg:w-3/5  flex flex-col gap-5 ">

        <div className="flex flex-col gap-1 lg:gap-3">
          <h2 className="uppercase text-sm lg:text-xl font-inter font-semibold text-primary-100">Challenge</h2>
            <p className="text-sm md:text-xl text-primary-100 font-inter">
           Although social media platforms and websites like Goodreads and StoryGraph have been useful for book tracking, they suffer from poor UI/UX and lack the desired features according to users.</p>
        </div>
        <div className="flex flex-col gap-1 lg:gap-3">
          <h2 className="uppercase text-sm lg:text-xl  font-inter font-semibold text-primary-100">Solution</h2>
            <p className="text-sm md:text-xl text-primary-100 font-inter">
              Create a website with excellent UI/UX that avoids overwhelming users with unnecessary features and addresses the issues found in the UI and UX of current platforms.</p>
        </div>
          </div>
          <div className="lg:w-2/5 flex flex-col gap-3 lg:items-end ">
            <div className=" flex flex-col gap-3 items-start">
              
             <div className="flex flex-col  items-start">
          <h2 className="uppercase text-sm lg:text-xl font-inter font-semibold text-primary-100">role</h2>
          <p className="text-sm lg:text-xl text-primary-100 font-inter">Ui/Ux designer</p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter">Developer</p>
        </div>

             <div className="flex flex-col  items-start">
          <h2 className="uppercase text-sm lg:text-xl font-inter font-semibold text-primary-100">time</h2>
          <p className="text-sm lg:text-xl text-primary-100 font-inter">2 weeks</p>
        </div>
             <div className="flex flex-col items-start">
          <h2 className="uppercase text-sm lg:text-xl font-inter font-semibold text-primary-100">tools</h2>
          <p className="text-sm lg:text-xl text-primary-100 font-inter">Figma</p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter">Google Book API</p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter">React Js </p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter">Tailwind Css</p>
        </div>
            </div>
            
          </div>
        </div>
        <div className=" bg-white py-20 mt-10">
          <div className="flex flex-col gap-6 lg:w-10/12 w-11/12 mx-auto ">
            
        <h3 className="text-3xl font-inter font-semibold text-primary-100">Design Process</h3>
       <img src={FinalDesign} alt="" />
</div>
      </div>
      <div className="lg:w-10/12 w-11/12 mx-auto py-8">
        <div className="flex items-center gap-3 pt-8">
          <div className="flex items-center rounded bg-Literti-100 p-1">
            <AiOutlineHeart className='text-secondary-100' size={ 30 } />
          </div>
          <p className="text-xl md:text-3xl font-inter font-semibold text-primary-100">Empathize</p>
        </div>
        <div>
          <p className="text-sm lg:text-xl text-primary-100 font-inter my-6">I utilized multiple articles to collect information on the current market trends and gather insights about the user experience of Tracking Books and setting up reading challenges</p>
          <p className="text-sm lg:text-xl  mx-auto text-center lg:w-10/12 font-semibold text-primary-100 font-inter my-10  lg:my-28">Research objective: To gain a deeper understanding of the existing user experience in discovering and keeping track of books</p>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="text-xl md:text-3xl font-inter  text-Literti-100"> COMPETITIVE ANALYSIS</p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter ">
          
          I began the research process by conducting a thorough analysis of competitors to identify their strengths, weaknesses, and similar functionalities. Through this analysis, I discovered several issues with the user interface (UI) and user experience (UX) of existing platforms. One of the prominent issues was the lack of certain features that users frequently requested, such as the ability to rate a book with decimal points or maintain a "did not finish" list. Additionally, the UI/UX design was often confusing for users, leading to difficulties in navigating and interacting with the platform.

          </p>
        </div>
        <div className=" flex flex-col justify-center md:w-7/12 my-20 mx-auto">

        <img src={Table} alt="" />
        </div>
        <p className="text-sm lg:text-xl text-primary-100 font-inter ">
          
Furthermore, I observed that some platforms suffered from an abundance of unnecessary features that users did not find valuable. This resulted in a cluttered interface, making it harder for users to focus on the essential functions and diminishing the overall user experience.

By identifying these issues and shortcomings in the user journey, it became clear that there was a need for improvements in terms of feature offerings, UI/UX design, and streamlining the platform to provide a more user-friendly experience.
        </p>
        

        <div className="flex items-center gap-3 mt-20 ">
          <div className="flex items-center rounded bg-Literti-100 p-1">
            <AiOutlineSearch className='text-secondary-100' size={ 30 } />
          </div>
          <p className="text-xl md:text-3xlfont-inter font-semibold text-primary-100">Define</p>
        </div>
          <div className="flex flex-col gap-3 mt-12">
          <p className="text-xl md:text-3xl font-inter  text-Literti-100 font-medu"> SITEMAP</p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter ">
          
Based on the data that was collected, I brainstormed, compiled and organized the information architecture into a  sitemap.
          </p>
        </div>
          <div className=" flex flex-col justify-center 2 my-20 mx-auto">

        <img src={SiteMap} alt="" />
        </div>
          <div className="flex flex-col gap-3 mt-12">
          <p className="text-xl md:text-3xl font-inter  text-Literti-100 font-medu"> TASK FLOW</p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter ">
          
I then created task flows to explore various paths the users could take when they engage with the app.          </p>
        </div>
          <div className=" flex flex-col justify-center 2 my-20 mx-auto">

        <img src={TaskFlow} alt="" />
        </div>

        <div className="flex items-center gap-3 mt-20 ">
          <div className="flex items-center rounded bg-Literti-100 p-1">
            <GoLightBulb className='text-secondary-100' size={ 30 } />
          </div>
          <p className="text-xl md:text-3xlfont-inter font-semibold text-primary-100">Ideate</p>
        </div>
         <div className="flex flex-col gap-3 mt-12">
          <p className="text-xl md:text-3xl font-inter  text-Literti-100 font-medu">WIRE FRAMES</p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter ">
          
            After creating the sitemap and task flows, I began designing low-fidelity wireframes.
          </p>
        </div>
        <div className=" flex  gap-4 justify-center  mt-20 mx-auto">

        <img className='w-1/2' src={Books} alt="" />
        <img className='w-1/2' src={Challenge} alt="" />
        </div>
        <img className='w-1/2 mx-auto mt-4' src={Home} alt="" />
  <div className="flex flex-col gap-3 mt-12">
          <p className="text-xl md:text-3xl font-inter  text-Literti-100 font-medu">UI KIT</p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter ">
          
          Before developing the high-fidelity wireframes, I created a design system to ensure that every screen is visually consistent.
          </p>
        </div>
        <div className=" flex flex-col md:flex-row gap-4 justify-center  mt-20 mx-auto">

        <img className='md:w-1/2 mx-auto' src={ComponentOne} alt="" />
        <img className='md:w-1/2 mx-auto' src={ComponentTwo} alt="" />
        </div>

         <div className="flex items-center gap-3 mt-20 ">
          <div className="flex items-center rounded bg-Literti-100 p-1">
            <GoLightBulb className='text-secondary-100' size={ 30 } />
          </div>
          <p className="text-xl md:text-3xl font-inter font-semibold text-primary-100">ProtoType</p>
        </div>
         <div className="flex flex-col gap-3 mt-12">
          <p className="text-xl md:text-3xl font-inter  text-Literti-100 font-medu">FINAL PRODUCT</p>
          <p className="text-sm lg:text-xl text-primary-100 font-inter ">
          
           Once the brand style and UI library was created, I turned the low fidelity wireframes into a high fidelity prototype.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 items-center  my-12 lg:my-20">

          <img className='lg:w-1/2 w-9/12 ' src={ FinalHome } alt="" />
          <div className="flex flex-col gap-3">
            <h1 className='font-inter  text-sm md:text-xl  text-primary-100'>Home Screen </h1>
          <div className="flex  bg-gray-200/80 lg:px-10 lg:py-8 p-4 rounded shadow-xl text-sm sm:text-sm lg:text-xl text-primary-100 font-inter ">
            On the home screen, there is a hero section that provides a brief overview of the site.
            It includes a search bar and a list of books that users can bookmark according to their preferences.
          </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-16 items-center  my-12 lg:my-20">

          <div className="flex flex-col gap-3">
            <h1 className='font-inter  text-sm md:text-xl  text-primary-100'>Reading Challenge Screen </h1>
          <div className="flex  bg-gray-200/80 lg:px-10 lg:py-8 p-4 rounded shadow-xl text-sm sm:text-sm lg:text-xl text-primary-100 font-inter  ">
              The reading challenge screen shows you how far you have come in your reading challenge, the list of books you have read, and some statistics about those books. The progress bar shows you how much of the challenge you have completed, and the list of books shows you which books you have read and which ones you have not yet read.
          </div>
          </div>
          <img className='lg:w-1/2 w-9/12  ' src={ FinalChallenge } alt="" />
        </div>
        <div className="flex flex-col lg:flex-row gap-16 items-center  my-12 lg:my-20">

          <img className='lg:w-1/2 w-9/12 ' src={ FinalBookDetail } alt="" />
          <div className="flex flex-col gap-3">
            <h1 className='font-inter  text-sm md:text-xl  text-primary-100'>Book Details Screen </h1>
          <div className="flex  bg-gray-200/80 lg:px-10 lg:py-8 p-4 rounded shadow-xl text-sm sm:text-sm lg:text-xl text-primary-100 font-inter  ">
          The book details screen contains a comprehensive description of the book, offering in-depth information. Additionally, there is a button available that allows users to mark or bookmark the book based on their personal preferences.
          </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row-reverse gap-16 items-center  my-12 lg:my-20">

          <div className="flex flex-col gap-3">
            <h1 className='font-inter  text-sm md:text-xl  text-primary-100'>My Book Screen </h1>
          <div className="flex  bg-gray-200/80 lg:px-10 lg:py-8 p-4 rounded shadow-xl text-sm sm:text-sm lg:text-xl text-primary-100 font-inter ">
        The my book screen shows a list of books you have marked, and provides information about each book, such as the title, author, and publication date. You can also delete books from the list.
          </div>
          </div>
          <img className='lg:w-1/2 w-9/12 ' src={ FinalMyBook } alt="" />
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
