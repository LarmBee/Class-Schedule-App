
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import Student from './components/Student/Student';
import { AccountBox } from './components/accountBox';
import Admin from "./components/Admin/Admin.jsx";
import Announcement from './components/createAnnouncement/Announcement';
import AddUser from './components/Adduser/AddUser.jsx';

function App() {
  return (
    <div className="App">
    <Router>
    {/* <NavBar/> */}
    <Routes basename="<AccountBox/>" >
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<AccountBox/>}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/Announcement" element={<Announcement />}/>
      <Route path="/adduser" element={<AddUser />}/>



    </Routes>
  </Router>
  </div>
)}

export default App;
