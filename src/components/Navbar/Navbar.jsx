import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
      <Navbar className='navba' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#logo">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = {"/home"}>Home</Nav.Link>
            <Nav.Link as = {Link} to = {"/chaplaincy"}>Chaplaincy</Nav.Link>
            <Nav.Link as = {Link} to = {"/contact"}>Contact Us</Nav.Link>
            <Nav.Link as = {Link} to = {"/support"}>Support St Paul's</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}

export default NavBar