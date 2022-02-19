import React from "react"
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Container } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Daytrip</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/reservations">Reservations</Nav.Link>
            <Nav.Link href="/favourites">Favourites</Nav.Link>
            <NavDropdown title="My Adventures" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/user/view/1">View</NavDropdown.Item>
              <NavDropdown.Item href="/user/create/1">Create</NavDropdown.Item>
              <NavDropdown.Item href="/user/update/1">Update/Delete</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
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


