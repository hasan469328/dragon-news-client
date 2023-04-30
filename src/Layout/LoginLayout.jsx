import React from 'react';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const LoginLayout = () => {
  return (
    <Container>
      <NavBar></NavBar>
      <hr />
      <Outlet></Outlet>
    </Container>
  );
};

export default LoginLayout;