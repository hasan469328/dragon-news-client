import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import bg from "../../assets/bg.png";
import Qzone from "../Shared/Qzone/Qzone";

const RightNav = () => {
  return (
    <div>
      <h4 className="mb-3">Login With</h4>
      <Button variant="outline-primary" size="lg" className="mb-2 w-100">
        <FaGoogle></FaGoogle> Login With Google
      </Button>
      <Button variant="outline-secondary" size="lg" className="w-100 mb-5">
        <FaGithub></FaGithub> Login With Github
      </Button>
      <div className="mb-5">
        <h4 className="mb-3">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> instragram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="position-relative">
        <img className="" src={bg} alt="" />
        <div className="text-center position-absolute top-50 start-50 translate-middle text-white">
          <h3 className="mb-3">Create an Amazing Newspaper</h3>
          <h5 className="mb-3">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </h5>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
