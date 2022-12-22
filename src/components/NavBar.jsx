import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function NavBar({ user, setUser }) {

  const history = useHistory();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push(`/`);
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
          </Nav>
          <Nav>
            { user ? <Nav.Link href="/me">Welcome {user.username}!</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link> }
            { user ? <Button variant="white" onClick={handleLogoutClick}>Logout</Button> : null }
          </Nav>
        </Navbar.Collapse>
      </Container>

        </Navbar>
        </>
    )
}

export default NavBar