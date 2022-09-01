import React from 'react'
import Likess from "../images/icons8-facebook-like-24.png"
import {useState} from "react"

function Likes({like}) {
    const [likes,setLikes]=useState(like)
    const handleClick = () => {
        setLikes(prevlikes=>(prevlikes) + 1)
    }
  return (
    <div>
        {likes}
        <button onClick={handleClick}>
            <img src={Likess} alt="" />
        </button>
    </div>
  )
}

export default Likes