import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/LtNav/LeftNav";
import { Outlet } from "react-router-dom";
import RightNav from "../RtNav/RightNav";
import Footer from "../Pages/Shared/Footer/Footer";

const NewsDetail = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsDetail;
