import React from 'react'
import NavBar from '../Navbar/Navbar'
import Landing from '../Landing/Landing'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
    {/* <img className="bac" src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="background" /> */}
    <NavBar/>
      <Landing/>
    </div>
  )
}

export default Home
