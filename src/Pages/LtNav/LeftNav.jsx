import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dragon-news-server-hasan469328.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4 className="mb-3">All Category</h4>
      <h4 className="text-center bg-light p-3 mb-3">National News</h4>
      <div className="mb-5">
        {
          categories.map(category => <p key={category.id}>
            <Link to={`/category/${category.id}`} className="ps-5 text-decoration-none text-secondary fs-5 fw-semibold">{category.name}</Link>
          </p>)
        }
      </div>
      <SingleCard></SingleCard>
    </div>
  );
};

export default LeftNav;
