import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const CategoryNews = ({ news }) => {
  const {
    _id,
    category_id,
    rating,
    total_view,
    title,
    author,
    img,
    image_url,
    details,
  } = news;
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex align-items-center">
        <Image
          style={{ height: "40px" }}
          src={author.img}
          roundedCircle
        ></Image>
        <div className="ps-2 flex-grow-1 mb-0">
          <p className="mb-0">{author?.name}</p>
          <p className="mb-0">
            {moment(author?.published_date).format("YYYY-MM-D")}
          </p>
        </div>
        <div>
          <FaRegBookmark className="pe-2 fs-3"></FaRegBookmark>
          <FaShareAlt className="fs-3"></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link
                to={`/news/${_id}`}
                className="text-decoration-none text-warning d-block"
              >
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 d-flex align-items-center">
          <Rating style={{ maxWidth: 180 }} value={Math.round(rating?.number)} readOnly />
          <p className="ps-3 fs-4 align-self-center mb-0">{rating?.number}</p>
        </div>
        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CategoryNews;
