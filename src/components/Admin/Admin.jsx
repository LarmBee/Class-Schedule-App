import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "../Student/student.css";
// import Photo from "../images/Miss.jpeg";
import Nav from "../Student/Nav.js";
import User from "../Student/User/User.js";
import Search from "../Search";
import Announcements from "../Student/Announcement.js";
import "./Admin.css";

function Admin() {
  const [announcements, setAnnouncements] = useState([]);
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
  const announcementToDisplay = announcements.map((announcement) => (
    <Announcements announcement={announcement} />
  ));


  return (
    <div className="main-container bg-aliceblue">
      <Nav />
      <User />
      <Search />
      <div className="admincards d-flex ">

      <div className="card-contents">
        <div className="announcement-container">
          <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>Announcements</h1>
          <div className="announcements-container">
            {/* <h1>Announcements</h1> */}
            {announcementToDisplay}

          </div>
          <div className="cards">
            
          </div>
          {/* <div className="btn d-flex">
            <button className="announcebtn "> Create Announcement</button>
            <button >Create Student</button>
            <button></button>
          </div> */}

        </div>

      </div>
      <div className="cardi">
        <div className="buttons">
          <Link to="/adduser" >
          <button className=""> Create Student</button>            
            </Link>
            <Link to="/announcement"> 
          <button className="mr-4"> Create Announcement</button>
            </Link>

        </div>
      <div className="row p-5 ">
              <div className="card mb-3">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card mb-3 bg-aliceblue">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card mb-3">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card mb-3">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card mb-3">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
              <div className="card ">
                <h2>Title</h2>
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>5, March 2022</p>
              </div>
            </div>
      </div>
    </div>
    </div>



  );
}

export default Admin;
