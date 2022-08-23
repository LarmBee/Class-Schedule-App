import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Admin/Dashboard";
import Student from "./components/Student/Student";
import User from "./components/userForm/User";
import Announcement from "./components/userForm/AnnouncementForm/Announcement";

function App() {
	return (
    <BrowserRouter>
    <Routes>

      {/* login path */}
      <Route path="/" element={<Login />} />

      {/* Admin/Dashboard section */}
      <Route path="/admin" element={<Dashboard/>} />

      {/* User/Student section */}
      <Route path="/student" element={<Student/>}/>
      {/* User/Admin section */}
      <Route path="/user" element={<User/>}/>
      <Route path="/announcement" element={<Announcement/>}/>

    </Routes>
    
  </BrowserRouter>
	);
}

export default App;
