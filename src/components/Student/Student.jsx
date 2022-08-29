import React, { useEffect, useState } from "react";
import "./student.css";
import User from "../Student/User/User.js"
import Nav from "../Student/Nav.js"


function Student() {
	const [notes, setNotes] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  const getAnnouncements = async ()=>{
    const response = await fetch("https://ratibar.herokuapp.com/announcements");
		const data = await response.json();
		setAnnouncements(data);
		console.log(data);
  };
  useEffect(() => {
		getAnnouncements();
	}, []);

	const getNotes = async () => {
		const response = await fetch("https://ratibar.herokuapp.com/schedules");
		const data = await response.json();
		setNotes(data);
		console.log(data);
	};

	useEffect(() => {
		getNotes();
	}, []);
	return (
		<div className="main-container">
			<Nav/>
    {/* card of individual events */}
			<div className="cards-container">
			<User/>
			<h1><u>Schedules</u></h1>
				{notes.map((note) => {
					return (
						<div className="schedules">
							<div className="schedule-card">
								<p>Title : {note.title}</p>
								<p>Description:{note.description}</p>
								<p>Link :<a href={note.meeting_link}>{note.meeting_link}</a></p>
								<p>Date: {note.date}</p>
								<button className="btn-schedules">Add Comment</button>
							</div>
						</div>
					);
				})}
			</div>
      {/* end-of-card */}

      {/* Announcements-card */}
      <div className="announcement-container">
	  <h1><u>Announcements</u></h1>
				{announcements.map((announcement) => {
					return (
						<div className="announcement">
							<div className="announcement-card">
								<p>Title: <b>{announcement.title}</b></p>
								<p>Description:{announcement.description}</p>
							</div>
						</div>
					);
				})}
			</div>
      {/* end-of-card */}
		</div>
	);
}

export default Student;
