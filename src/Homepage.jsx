import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export const Homepage = () => {
  return (
    <div>
      <Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">E Guidance Connect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ms-auto">
                    <Nav.Link href="#" className="fw-bold">How it works</Nav.Link>
                    <Nav.Link href="#" className="fw-bold">About</Nav.Link>
                    <Nav.Link href="#" className="fw-bold">Contact</Nav.Link>
                    <Nav.Link href="#" className="text-primary fw-bold">Log in</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Container>
      </Navbar>

      <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: "#5ec5c0", minHeight: "400px" }}>
        <Container className="text-center py-5">
            <h2 className="fw-bold">Welcome to</h2>
            <h1 className="fw-bold">E Guidance Connect</h1>
            <h4>Bullying Report</h4>
            <h5>FCU</h5>
        <Button className="btn-lg mt-3 rounded-pill px-4" variant="primary">
      Report Now
    </Button>
  </Container>
  </div>
</div>

  );
};
