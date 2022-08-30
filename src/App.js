
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import Student from './components/Student/Student';
import Admin from './components/Admin/Dashboard';
import Announcement from './components/createAnnouncement/announcement';
import AddUser from './components/Adduser/AddUser';

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



    </Routes>
  </Router>
  </div>
)}

export default App;
