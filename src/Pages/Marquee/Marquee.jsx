import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';


const Marqueee = () => {
  return (
    <Container>
      <div className="mb-3 d-flex bg-light p-3">
        <Button className="fs-4" variant="danger">
          Latest
        </Button>
        <Marquee speed={80} className="fw-semibold fs-4 text-danger">
          Maria Hasan Hafsa haria gache. Kao tahar khoj pale Kamrul Hasan
          Mozumder Kae Janaben...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
      </div>
    </Container>
  );
};

export default Marqueee;