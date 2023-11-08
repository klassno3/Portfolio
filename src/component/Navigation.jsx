import React,{useState,useEffect,useRef} from 'react'
import Logo from "../Image/Logo.svg"
import Menu from "../Image/menu-alt.svg"
import Close from "../Image/close.svg"
import { Link } from "react-scroll"
import Resume from "../Resume/Betelhem Kirub cv.pdf"

const Navigation = () => {

  const [ active, setActive ] = useState( false );
  const [ open, setOpen ] = useState( false );
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
 
  
  const handleClose = () => {
    setOpen( !open );
  }

  return (
    
    <div className={`sticky top-0 left-0 z-40 overflow-hidden ${ active ? "bg-white shadow-lg" :"  bg-secondary-100 shadow-none" }`}>
      <div className="max-w-[1440px] mx-auto  ">
        
      <div className=" w-11/12 lg:w-10/12 mx-auto ">
   
      <div className="flex justify-between items-center  pt-4 pb-3 md:pt-6 md:pb-4 ">
        
        <Link to="hero" activeClass="currently" offset={-120} smooth={ true } className=" cursor-pointer w-8 sm:w-12">

          <img src={Logo} alt="" />
        </Link>
          <div className="lg:hidden">

            <img onClick={ handleClose } src={ Menu } alt="" className=" sm:w-12 w-10" />
            
          </div>
          <div ref={divEl} className={ `lg:hidden fixed transition-all duration-500 flex   justify-center items-center shadow-lg w-10/12 h-screen bg-secondary-100  ${ open ? " top-0 right-0" : "top-0 right-0 translate-x-full" }` }>

            <img onClick={ handleClose } src={ Close } alt="" className={ `${ open ? "block" : "hidden" } fixed top-[40px] right-[40px] sm:w-7 w-6 ` } />
            
           <div className="flex sharp flex-col gap-10 font-inter text-xl text-tertiary-200/70 tracking-wide">
                          <Link onClick={()=>setOpen(false)} to="hero" activeClass="current" offset={-150}  smooth={ true } className="cursor-pointer hover:text-pink-100/70">Home</Link>
                <Link to="about" activeClass="current" offset={-150} smooth={ true } onClick={ () => setOpen( false ) } className="cursor-pointer hover:text-pink-100/70">About</Link>
                <Link to="work" activeClass="current"offset={-150} smooth={ true } onClick={()=>setOpen(false)} className="  cursor-pointer  hover:text-pink-100/70" >Work</Link>
          <a onClick={()=>setOpen(false)}  href={Resume} download="Resume" className="cursor-pointer hover:text-pink-100/70" > Resume </a>
          </div>
          </div>
        
        <div className=" hidden lg:flex gap-10 font-inter text-xl  text-tertiary-200/70 tracking-wide">
          <Link to="hero" activeClass="current" offset={-150}  smooth={ true } className="cursor-pointer  hover:text-pink-100/70">Home</Link>
          <Link to="about" activeClass="current" offset={-150}  smooth={ true } className="cursor-pointer hover:text-pink-100/70">About</Link>
          <Link to="work" activeClass="current" offset={-150}  smooth={ true }  className="cursor-pointer  hover:text-pink-100/70">Work</Link>
          <a href={Resume} download="Resume" className="cursor-pointer hover:text-pink-100/70" > Resume </a>
          </div>

     </div>
    </div>
    </div>
    
   </div>
  )
}

export default Navigation
