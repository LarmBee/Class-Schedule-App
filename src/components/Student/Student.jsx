import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import "./student.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NoteList";
import Search from "./Search";
import Header from "./Header";
import User from "../User/User.js"
import "./student.css"
import Announcements from "../Student/Announcements"

function Student() {
  const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "This is my first note!",
			date: "15/04/2021",
		},
		{
			id: nanoid(),
			text: "This is my second note!",
			date: "21/04/2021",
		},
		{
			id: nanoid(),
			text: "This is my third note!",
			date: "28/04/2021",
		},
		{
			id: nanoid(),
			text: "This is my new note!",
			date: "30/04/2021",
		},
	]);

	const [searchText, setSearchText] = useState("");

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
		if (savedNotes) {
			setNotes(savedNotes);
		}
	},[]);

	useEffect(() => {
		localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	// const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="Cont">
      <User />
      <div className="container">
        <div className="row">
		<Search handleSearchNote={setSearchText} />
          <div className="col-md-4 col-sm-12">
            <div className="card" style={{ height: "100%" , width: "23vw"}}>
              <h1>Announcements</h1>
			  <div className="annou">
				<Announcements/>
			  </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="row search my-2">
            <div className="studentcards">
            <div className={`${darkMode && "dark-mode"}`}>
				<Header handleToggleDarkMode={setDarkMode} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
