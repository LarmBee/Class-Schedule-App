import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import Student from './components/Student/Student';

function App() {
  return (
    <div className="App">
    <Router>
    {/* <NavBar/> */}
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/student" element={<Student />}/>
    </Routes>
  </Router>
  </div>
)}

export default App;