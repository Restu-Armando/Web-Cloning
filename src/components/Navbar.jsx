import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar
      className="navbar-bg position-relative z-2 "
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          Singpass
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 fw-bold">
            <Nav.Link href="#link1">Individuals</Nav.Link>
            <Nav.Link href="#link2">Businesses</Nav.Link>
            <Nav.Link href="#link2">Developers</Nav.Link>
            <Nav.Link href="#link2">Security</Nav.Link>
            <Nav.Link href="#link2">Contact</Nav.Link>
            <Nav.Link href="#link2">FAQ</Nav.Link>
            {/* Tambahkan link lain sesuai kebutuhan Anda */}
            <Button variant="outline-light " className="ml-2 border-0">
              <i className="fas fa-search"></i>
            </Button>
            <Button variant="outline-light " className="ml-2 login">
              <span className="ml-1 fw-bold p-3 ">Login</span>
            </Button>
            <Button variant="outline-light" className="ml-2 register">
              <span className="ml-1 fw-bold">Register</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
