import React from 'react'
import Likess from "../images/icons8-facebook-like-24.png"
import {useState} from "react"

function Likes() {
    const [likes,setLikes]=useState(0)
    const handleClick = () => {
        setLikes(likes + 1)
    }
  return (
    <div>
        <button onClick={handleClick}>
            <img src={Likess} alt="" />
        </button>
    </div>
  )
}

export default Likes