import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/LtNav/LeftNav";
import RightNav from "../RtNav/RightNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}><LeftNav></LeftNav></Col>
          <Col lg={6}><Outlet></Outlet></Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
