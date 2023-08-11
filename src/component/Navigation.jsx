import React,{useState,useEffect} from 'react'
import Logo from "../Image/Logo.svg"
import { Link, useLocation } from "react-router-dom"
const Navigation = () => {

  const [ active, setActive ] = useState( false );
  const [ selectedTab, setSelectedTab ] = useState( "home" );
  const location = useLocation();
   const isActive = () => {
    window.scrollY > 0 ? setActive( true ) : setActive( false )
  }

  useEffect( () => {
    window.addEventListener( "scroll", isActive )
    return () => {
      window.removeEventListener( "scroll", isActive );
    }
  }, [] );

  useEffect( () => {
    if ( location.pathname === "/" ) {
      setSelectedTab( "work" )
      
    }
    else if ( location.pathname === "/about" ) {
      setSelectedTab( "about" )
    }
    else if ( location.pathname === "/resume" ) {
      setSelectedTab( "resume" )
    }
  
    
  }, [ location.pathname ] )
  
  return (
    
    <div className={`sticky top-0 left-0 z-40 ${ active ? "bg-secondary-100 shadow-lg" :"  bg-secondary-100 shadow-none" }`}>
     <div className="w-10/12 mx-auto ">
   
      <div className="flex justify-between items-center pt-6 pb-4 ">
        
        <Link to="/" className="w-12">

          <img src={Logo} alt="" />
        </Link>
        <div className="flex gap-10 font-inter text-xl f text-tertiary-300 tracking-wide">
          <Link  className={`cursor-pointer  hover:text-pink-100/70 ${ selectedTab === 'work' ? "text-pink-100 font-bold" : '' } `} to="/">Work</Link>
          <Link className={`cursor-pointer hover:text-pink-100/70  ${ selectedTab === 'about' ? "text-pink-100 font-bold" : '' } `} to="/about">About</Link>
          <Link  className={`cursor-pointer hover:text-pink-100/70  ${ selectedTab === 'resume' ? "text-pink-100 font-bold" : '' } `} to="">Resume</Link>
        </div>

     </div>
    </div>
    </div>
    
  )
}

export default Navigation
