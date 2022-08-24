import React from 'react'
import NavBar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
    <NavBar/>
      <Landing/>
    </div>
  )
}

export default Home
