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
			<h1 style={{fontSize:"2rem"}}>Schedules</h1>
				{notes.map((note) => {
					return (
						<div className="schedules">
							<div className="schedule-card">

							<h1 style={{color: 'white', fontSize:"2rem"}}>Title</h1>
								<h2 style={{fontSize:"1rem"}}>{note.title}</h2>
								<h1 style={{color: 'white',fontSize:"2rem"}}>Description</h1>
								<h4 style={{fontSize:"1rem"}}>{note.description}</h4>
								<h1 style={{color: 'white',fontSize:"2rem"}}>Meeting link</h1>
								<a href={note.meeting_link}>{note.meeting_link}</a>
								<p>{note.date}</p>
							</div>
						</div>
					);
				})}
			</div>
      {/* end-of-card */}

      {/* Announcements-card */}
      <div className="announcement-container">

	  <h1 >Announcements</h1>
				{announcements.map((announcement) => {
					return (
						<div className="announcement">
							<div className="announcement-card">
								<p>Title: <b>{announcement.title}</b></p>
								<p>Description:{announcement.description}</p>
							<h1 style={{color: 'white'}}>Title</h1>
								<h2 style={{fontSize:"1rem"}}>{announcement.title}</h2>
								<h1 style={{color: 'white', fontSize:"1rem"}}>Description</h1>
								<h4 style={{fontSize:"1rem"}}>{announcement.description}</h4>
							</div>
						</div>
					);
				})}
			</div>
      {/* end-of-card */}
		</div>
	);
//   return (
//     <div className="Cont">
//       <div className="container">
//       {/* <div className="row">
//           <div className="row">
//             <div className="user d-flex">
//             <div className="col-md-10">
//             <h1>
//                 Hello <span>User</span>
//               </h1>
//             </div>
//               <div className="avatar col-md-2">
//                 <img
//                   src={Photo}
//                   alt="Photo"
//                   style={{ height: "12vh", borderRadius: "50%" }}
//                 />
//                 <a>Edit</a>
//               </div>
//             </div>
//           </div>
        
//       </div> */}
//       </div>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4 col-sm-12">
//               <div className="card" style={{ height: "100vh" }}>
//                 <h1>Announcements</h1>
//               </div>
//             </div>
//             <div className="col-md-8">
//             <div className="row search my-2">
//               <Form className=" search d-flex">
//                 <Form.Control
//                   type="search"
//                   placeholder="Search"
//                   className="me-2"
//                   aria-label="Search"
//                 />
//                 <Button variant="outline-success">Search</Button>
//               </Form>
//             </div>
//             <div className="row p-3">
//               <div className="card col-md-3 col-sm-12 m-2">
//                 <h2>Title</h2>
//                 <h4>Lorem ipsum dolor sit amet.</h4>
//                 <p>5, March 2022</p>
//                 <div className="reaction">
//                   <img src={Like} alt="like" />
//                   <img src={Comment} alt="Comment" />
//                 </div>
//               </div>
//               <div className="card col-md-3 col-sm-12 m-2 ">
//                 <div className="info">
//                 <h2>Title</h2>
//                 <h4>Lorem ipsum dolor sit amet.</h4>
//                 <p>5, March 2022</p>
//                 </div>
//                 <div className="reaction">
//                   <img src={Like} alt="like" />
//                   <img src={Comment} alt="Comment" />
//                 </div>
//               </div>
//               <div className="card col-md-3 col-sm-12 m-2">
//                 <h2>Title</h2>
//                 <h4>Lorem ipsum dolor sit amet.</h4>
//                 <p>5, March 2022</p>
//                 <div className="reaction">
//                   <img src={Like} alt="like" />
//                   <img src={Comment} alt="Comment" />
//                 </div>
//               </div>
//               <div className="card col-md-3 col-sm-12 m-2">
//                 <h2>Title</h2>
//                 <h4>Lorem ipsum dolor sit amet.</h4>
//                 <p>5, March 2022</p>
//                 <div className="reaction">
//                   <img src={Like} alt="like" />
//                   <img src={Comment} alt="Comment" />
//                 </div>
//               </div>
//               <div className="card col-md-3 col-sm-12 m-2">
//                 <h2>Title</h2>
//                 <h4>Lorem ipsum dolor sit amet.</h4>
//                 <p>5, March 2022</p>
//                 <div className="reaction">
//                   <img src={Like} alt="like" />
//                   <img src={Comment} alt="Comment" />
//                 </div>
//               </div>
//               <div className="card col-md-3 col-sm-12 m-2">
//                 <h2>Title</h2>
//                 <h4>Lorem ipsum dolor sit amet.</h4>
//                 <p>5, March 2022</p>
//                 <div className="reaction">
//                   <img src={Like} alt="like" />
//                   <img src={Comment} alt="Comment" />
//                 </div>
//               </div>
//             </div>
//             </div>
            
//           </div>
//         </div>
//     </div>
//   );
// >>>>>>> c447a62 (Style edit)
}

export default Student;
