import React from "react"
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import "./NavBarComponent.css";

export default function NavBar() {
  return (
    <Navbar className="navbar" collapseOnSelect expand="lg" >
      <Container className="navbar">
        <Navbar.Brand className="day-trip-font" href="/">Daytrip</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/reservations">Reservations</Nav.Link>
            <Nav.Link className="nav-link" href="/favourites">Favourites</Nav.Link>
            <Nav.Link className="nav-link" href="/myreviews">Reviews</Nav.Link>
            <NavDropdown title="My Adventures" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user/view">View</NavDropdown.Item>
              <NavDropdown.Item href="/user/create">Create</NavDropdown.Item>
            
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


