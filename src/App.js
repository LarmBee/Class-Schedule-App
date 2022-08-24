
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import Student from './components/Student/Student';
import { AccountBox } from './components/accountBox';

function App() {
  return (
    <div className="App">
    <Router>
    {/* <NavBar/> */}
    <Routes basename="<AccountBox/>" >
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<AccountBox/>}/>
      <Route path="/student" element={<Student />}/>
    </Routes>
  </Router>
  </div>
)}

export default App;
