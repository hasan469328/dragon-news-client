import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsights from "./EditorInsights";

const News = () => {
  const newsDetails = useLoaderData();
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
  } = newsDetails;
  return (
    <div className="mb-5">
      <h1>Dragon News</h1>
      <Card className="p-3 mb-5">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All News IN This Catagory</Button></Link>
        </Card.Body>
      </Card>

      <EditorInsights></EditorInsights>
    </div>
  );
};

export default News;
