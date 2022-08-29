import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Photo from "../../images/Miss.jpeg"
import "./User.css"

function User() {
  return (
    <Navbar collapseOnSelect expand="lg md-sm-col-12" style={{backgroundColor: "white"}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <h1>
              Hello <span>User</span>
            </h1>
          </Nav>
          <Nav>
          <div className="use">
          <img src={Photo} alt="Photo" style={{ height: "12vh", borderRadius: "50%"}} />
          <NavDropdown title="Edit" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Name</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">User name </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Avatar</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default User;
