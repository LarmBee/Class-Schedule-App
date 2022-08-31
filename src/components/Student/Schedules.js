import React from 'react'
import {useEffect, useState} from "react"
import Likes from "./Likes"

function Schedules() {
    const [notes, setNotes] = useState([]);
    const getNotes = async () => {
        const response = await fetch("https://ratibar-backend.herokuapp.com/schedules");
        const data = await response.json();
        setNotes(data);
        console.log({data});
      };
    
      useEffect(() => {
        getNotes();
      }, []);
      
  return (
    <div>
        <div className="announcement">

				<div className="announcement-card">
                {notes.map((note) => {
			return (
				<div className="schedules lg mg sm">
				<Schedules/>

				<div className="schedule-card">
					<h1 style={{ color: "white", fontSize: "2rem" }}>Title</h1>
					<h2 style={{ fontSize: "1rem" }}>{note.title}</h2>
					<h1 style={{ color: "white", fontSize: "2rem" }}>
					Description
					</h1>
					<h4 style={{ fontSize: "1rem" }}>{note.description}</h4>
					<h1 style={{ color: "white", fontSize: "1rem" }}>
					Meeting link
					</h1>
					<a href={note.meeting_link}>{note.meeting_link}</a>
					<p>{note.date}</p>
				</div>
				</div>
			);
			})}
				</div>
				<div className="d-flex">
					{/* <div className="like">
						<Likes like={0}/>
					</div> */}
					{/* <div className="comment">
						<img src={comment} alt="" onClick={() => showComments(announcement.id)}/>
					</div> */}
					</div>
				</div>
    </div>
  )
}

export default Schedules