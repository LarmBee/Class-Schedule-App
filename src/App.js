import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Student from "./components/Student";

function App() {
	return (
    <BrowserRouter>
    <Routes>

      {/* login path */}
      <Route path="/login" element={<Login />} />

      {/* Admin/Dashboard section */}
      <Route path="/admin" element={<Dashboard/>} />

      {/* User/Student section */}
      <Route path="/student" element={<Student/>}/>
    </Routes>
    
  </BrowserRouter>
	);
}

export default App;
