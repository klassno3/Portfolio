import React from 'react'
import Hero from './Hero'
import Work from './Work'
import About from './About'
import Navigation from './Navigation'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navigation/>
      <Hero />
      <About />
      <Work />
      <Footer/>
    </div>
  )
}

export default Home
