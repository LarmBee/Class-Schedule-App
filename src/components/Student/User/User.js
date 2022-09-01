import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Photo from "../../images/Miss.jpeg"
import "./User.css"
import {useEffect,useState} from "react"
import Profile from "../User/User"

function User() {
  const [Username, setUsername] = useState([]);
  // const [Avatar, setAvatar] = useState([]);

  const getStudents = async ()=>{
    const response = await fetch("https://ratibar-backend.herokuapp.com/students/1");
		const data = await response.json();
		setUsername(data);
		console.log(data);
  };
  useEffect(() => {
		getStudents();
	}, []);

	
  return (
    <Navbar collapseOnSelect expand="lg md-sm-col-12" style={{backgroundColor: "#e8ecfa"}}>
      <Container className="use">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <h1 style={{fontSize:"2rem"}}>Hello <span>{Username.name}</span></h1>
            {/* <h1>{Username.email}</h1> */}
          </Nav>
          <Nav>
          <div className="use">
          {/* <Profile/> */}
          <img src={Photo} alt="Photo" style={{ height: "12vh", borderRadius: "50%"}} />
          {/* <NavDropdown title="Edit" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Username </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Avatar</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown> */}
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default User;
