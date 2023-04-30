import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" className="mb-5">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-decoration-none text-secondary" to="/">
                Home
              </Link>
              &nbsp;&nbsp;
              <Link className="text-decoration-none text-secondary" to="/">
                About
              </Link>
              &nbsp;&nbsp;
              <Link className="text-decoration-none text-secondary" to="/">
                Career
              </Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#deets">
                {user ? <FaUserCircle className="fs-2"></FaUserCircle> : <></>}
              </Nav.Link>

              {user ? (
                <Button onClick={handleLogout} variant="dark">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavBar;
