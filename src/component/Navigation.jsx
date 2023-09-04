import React,{useState,useEffect,useRef} from 'react'
import Logo from "../Image/Logo.svg"
import Menu from "../Image/menu-alt.svg"
import Close from "../Image/close.svg"
import { Link, useLocation } from "react-router-dom"
import Resume from "../Resume/Betelhem Kirub cv.pdf"

const Navigation = () => {

  const [ active, setActive ] = useState( false );
  const [ selectedTab, setSelectedTab ] = useState( "home" );
  const [ open, setOpen ] = useState( false );
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

   const divEl = useRef();
  useEffect( () => {
    const handler = ( event ) => {
      if ( !divEl.current ) {
        return
      }
      if ( !divEl.current.contains(event.target) ) {
     setOpen(false)
   }
      
    }
    document.addEventListener( "click", handler, true );
    return () => {
      document.removeEventListener( "click", handler, true );
    };
  })
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
  
      useEffect( () => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const handleClose = () => {
    setOpen( !open );
  }

  return (
    
    <div className={`sticky top-0 left-0 z-40 overflow-hidden ${ active ? "bg-secondary-100 shadow-lg" :"  bg-secondary-100 shadow-none" }`}>
      <div className="max-w-[1440px] mx-auto  ">
        
      <div className=" w-11/12 lg:w-10/12 mx-auto ">
   
      <div className="flex justify-between items-center  pt-4 pb-3 md:pt-6 md:pb-4 ">
        
        <Link to="/" className="w-8 sm:w-12">

          <img src={Logo} alt="" />
        </Link>
          <div className="lg:hidden">

            <img onClick={ handleClose } src={ Menu } alt="" className=" sm:w-12 w-10" />
            
          </div>
          <div ref={divEl} className={ `lg:hidden fixed transition-all duration-500 flex   justify-center items-center shadow-lg w-10/12 h-screen bg-secondary-100  ${ open ? " top-0 right-0" : "top-0 right-0 translate-x-full" }` }>

            <img onClick={ handleClose } src={ Close } alt="" className={ `${ open ? "block" : "hidden" } fixed top-[40px] right-[40px] sm:w-7 w-6 ` } />
            
           <div className="flex  flex-col gap-10 font-inter text-xl f text-tertiary-300 tracking-wide">
          <Link onClick={()=>setOpen(false)} className={`cursor-pointer  hover:text-pink-100/70 ${ selectedTab === 'work' ? "text-pink-100 font-bold" : '' } `} to="/">Work</Link>
          <Link onClick={()=>setOpen(false)}  className={`cursor-pointer hover:text-pink-100/70  ${ selectedTab === 'about' ? "text-pink-100 font-bold" : '' } `} to="/about">About</Link>
          <a onClick={()=>setOpen(false)}  href={Resume} download="Resume" className="cursor-pointer hover:text-pink-100/70" > Resume </a>
          </div>
          </div>
        
        <div className=" hidden lg:flex gap-10 font-inter text-xl f text-tertiary-300 tracking-wide">
          <Link  className={`cursor-pointer  hover:text-pink-100/70 ${ selectedTab === 'work' ? "text-pink-100 font-bold" : '' } `} to="/">Work</Link>
          <Link className={`cursor-pointer hover:text-pink-100/70  ${ selectedTab === 'about' ? "text-pink-100 font-bold" : '' } `} to="/about">About</Link>
          <a href={Resume} download="Resume" className="cursor-pointer hover:text-pink-100/70" > Resume </a>
          </div>

     </div>
    </div>
    </div>
    
   </div>
  )
}

export default Navigation
