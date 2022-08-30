import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import Student from './components/Student/Student';
import Admin from './components/Admin/Dashboard';
import Announcement from './components/createAnnouncement/announcement';
import AddUser from './components/Adduser/AddUser';
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Admin/Dashboard";
// import Student from "./components/Student/Student";
import User from "./components/userForm/User";

function App() {
  return (
    <div className="App">
    <Router>
    {/* <NavBar/> */}
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/announcement" element={<Announcement />}/>
      <Route path="/adduser" element={<AddUser />}/>
      {/* User/Student section */}
      <Route path="/student" element={<Student/>}/>
      {/* User/Admin section */}
      <Route path="/user" element={<User/>}/>
      <Route path="/announcement" element={<Announcement/>}/>

    </Routes>
  </Router>
  </div>
)}

export default App;
