import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NavBar() {
  return (
      <Navbar className='navba' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="links">
          <Nav className="me-auto">
            <Nav.Link className="link" as = {Link} to = {"/home"}>Home</Nav.Link>
            <Nav.Link className="link" as = {Link} to = {"/student"}>Student</Nav.Link>
            <Nav.Link className="link" as = {Link} to = {"/admin"}>Admin</Nav.Link>m
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}

export default NavBar