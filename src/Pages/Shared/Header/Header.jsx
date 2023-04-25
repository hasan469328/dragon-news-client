import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center mt-5 mb-3">
        <img src={logo} alt="" />
        <p className="text-secondary fs-4 mb-1 mt-4">
          Journalism Without Fear or Favour
        </p>
        <p className="fs-3 mt-1">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="mb-3 d-flex bg-light p-3">
        <Button className="fs-4" variant="danger">
          Latest
        </Button>
        <Marquee speed={100} className="fw-semibold fs-4">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg" className="mb-5">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
