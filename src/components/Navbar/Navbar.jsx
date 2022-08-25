import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#logo">Logo</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="link" as={Link} to={"/home"}>
              Home
            </Nav.Link>
            <Nav.Link className="link" as={Link} to={"/student"}>
              Student
            </Nav.Link>
            <Nav.Link className="link" as={Link} to={"/admin"}>
              Admin
            </Nav.Link>
            <Nav.Link className="link" as={Link} to={"/display"}>
              Display
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
