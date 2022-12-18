import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

    return (
        <>
        <Navbar className="navbar-light bg-white fixed-top" expand='lg' >

        <Container>
        <Navbar.Brand href="/">Game World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            { true ? <Nav.Link href="/MyAccount">My Account</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link> }
            { true ? <Button variant="white" onClick={handleLogoutClick}>Logout</Button> : null }
            {/* { user ? <Nav.Link href="/Logout">Logout</Nav.Link> : null } */}
          </Nav>
        </Navbar.Collapse>
      </Container>

        </Navbar>
        </>
    )
}

export default NavBar