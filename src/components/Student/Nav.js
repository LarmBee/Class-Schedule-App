import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Student/student.css"
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Photo from "../../images/Miss.jpeg"
// import "./User.css"

function User() {
  
  return (
    <Navbar collapseOnSelect expand="lg md-sm-col-12" style={{backgroundColor: "black"}}>
      <Container >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <h1 style={{color: 'white', fontSize:"2rem"}}>Ratiba</h1> 
          </Nav>
          <Nav>
          <div className="use">
          {/* <h1 style={{color: 'white', fontSize:"1rem"}}>Log Out</h1> */}
          <button className="log" style={{width: "8vw",borderRadius:"30%", height: "2vw", fontWeight: "normal"}}>Log out</button>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );  
}




export default User;
