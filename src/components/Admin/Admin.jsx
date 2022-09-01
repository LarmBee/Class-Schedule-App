import React, { useEffect, useState } from "react";
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
    <div className="main-container">
      <Nav />
      <User />
      <Search />
      <div className="card-contents">
        <div className="announcement-container">
          <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>Announcements</h1>
          <div className="announcements-container">
            {/* <h1>Announcements</h1> */}
            {announcementToDisplay}

          </div>

        </div>

      </div>
    </div>


  );
}

export default Admin;
