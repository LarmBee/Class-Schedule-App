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

function Student() {
	const [notes, setNotes] = useState([]);
	const [announcements, setAnnouncements] = useState([]);
	const [display, setDisplay] = useState(false);
	const [postId, setPostId] = useState("");

	const getAnnouncements = async () => {
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
		console.log({ data });
	};

	useEffect(() => {
		getNotes();
	}, []);

	const showComments = (id) => {
		setPostId(id);
		setDisplay(!display);
	};

	return (
		<div className="main-container">
			<Nav />
			<User />
			{/* card of individual events */}
			<div className="card-contents">
				<div className="cards-container">
					<h1 style={{ fontSize: "2rem" }}>Schedules</h1>
					{notes.map((note) => {
						return (
							<div className="schedules">
								<div className="schedule-card">
									<h4>Title</h4>
									<h7>{note.title}</h7>
									<h4>Description</h4>
									<p>{note.description}</p>
									<h4>Meeting link</h4>
									<a href={note.meeting_link}>{note.meeting_link}</a>
									<p>{note.date}</p>
									<div className="d-flex">
										<div className="like">
											<Likes like={1} />
										</div>
										<div className="comment">
											<img
												src={comment}
												alt=""
												onClick={() => showComments(note.id)}
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				{/* end-of-card */}

				{/* Announcements-card */}
				<div className="announcement-container">
					<h1>Announcements</h1>
					{announcements.map((announcement) => {
						return (
							<div className="announcement">
								<Comments
									postId={announcement.id}
									display={display}
									setDisplay={setDisplay}
								/>

								<div className="announcement-card">
									<p>
										Title: <b>{announcement.title}</b>
									</p>
									<p>Description:{announcement.description}</p>
									<h1 style={{ color: "white" }}>Title</h1>
									<h2 style={{ fontSize: "1rem" }}>{announcement.title}</h2>
									<h1 style={{ color: "white", fontSize: "1rem" }}>
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
			{/* end-of-card */}
		</div>
	);
}
export default Student;
