import React, { useEffect, useState } from "react";
import "./student.css";
import User from "../Student/User/User.js";
import Nav from "../Student/Nav.js";
// import Feedback from "react-bootstrap/esm/Feedback";
// import like from "../images/icons8-facebook-like-24.png";
import unlike from "../images/icons8-thumbs-down-24.png";
import comment from "../images/icons8-comments-24.png";
import Likes from "./Likes";
import Comments from "./Comments";

import Announcements from "./Announcement";
// import Schedules from "./Schedules";
import Search from "../Search";

function Student() {
	const [notes, setNotes] = useState([]);
	const [announcements, setAnnouncements] = useState([]);
	const [display, setDisplay] = useState(false);
	const [postId, setPostId] = useState("");


  const getAnnouncements = async () => {
    const response = await fetch(
      "https://ratibar-backend.herokuapp.com/announcements"
    );
    const data = await response.json();
    setAnnouncements(data);
    console.log(data);
  };
  useEffect(() => {
    getAnnouncements();
  }, []);

  const getNotes = async () => {
    const response = await fetch(
      "https://ratibar-backend.herokuapp.com/schedules"
    );
    const data = await response.json();
    setNotes(data);
    // console.log({data});
  };


  useEffect(() => {
    getNotes();
  }, []);

  const showComments = (id) => {
    setPostId(id);
    setDisplay(!display);
  };

  const announcementToDisplay = announcements.map((announcement) => (
    <Announcements announcement={announcement} />
  ));

  return (
    <div className="main-container">
      <Nav />
      <User />
      <Search />
      {/* card of individual events */}
      <div className="card-contents">

	  
		<div className="cards-container">
			<h1 style={{ fontSize: "2rem" }}>Schedules</h1>
			{notes.map((note) => {
			return (
				<div className="schedules lg mg sm">

					<div className="schedule-card">
						<h1 style={{ color: "black", fontSize: "1rem",fontWeight:"bold"  }}>Title:</h1>
						<h2 style={{ fontSize: "1rem" }}>{note.title}</h2>
						<h1 style={{ color: "black", fontSize: "1rem",fontWeight:"bold"  }}>
						Description
						</h1>
						<h4 style={{ fontSize: "1rem" }}>{note.description}</h4>
						<h1 style={{ color: "black", fontSize: "1rem", fontWeight:"bold"  }}>
						Meeting link
						</h1>
						<a href={note.meeting_link}>{note.meeting_link}</a>
						<p>{note.date}</p>
					</div>
				{/* end-of-card */}

				{/* Announcements-card */}
					
			
					{/* <div className="announcement-container">
						<h1>Announcements</h1>
					{announcementToDisplay}

					</div> */}
				</div>
			)
			})}
			
			</div>


		<div className="announcement-container">
						<h1>Announcements</h1>
						<div className="announcement-container">
						{/* <h1>Announcements</h1> */}
					{/* {announcementToDisplay} */}

					</div>
						{announcements.map((announcement) => {
							return (
								<div key={announcement.id} className="announcement">
									<Comments
										postId={announcement.id}
										display={display}
										setDisplay={setDisplay}
									/>

									<div className="announcement-card">
									
										<h1 style={{ color: "black", fontSize: "1rem", fontWeight:"bold" }}>Title</h1>
										<h2 style={{ fontSize: "1rem" }}>{announcement.title}</h2>
										<h1 style={{ color: "black", fontSize: "1rem",fontWeight:"bold"  }}>
											Description
										</h1>
										<h4 style={{ fontSize: "1rem" }}>
											{announcement.description}
										</h4>
									</div>
									<div className="d-flex">
										<div className="like">
											<Likes like={1} />
										</div>
										<div className="comment">
											<img
												src={comment}
												alt=""
												onClick={() => showComments(announcement.id)}
											/>
										</div>
									</div>
								</div>
							);
						})}
					</div>
		</div>
	</div>
			


  );
}
export default Student;
