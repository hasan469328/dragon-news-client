import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4 className="mb-3">All Category</h4>
      <h4 className="text-center bg-light p-3 mb-3">National News</h4>
      <div>
        {
          categories.map(category => <p key={category.id}>
            <Link to={`/category${category.id}`} className="ps-5 text-decoration-none text-secondary fs-5 fw-semibold">{category.name}</Link>
          </p>)
        }
      </div>
    </div>
  );
};

export default LeftNav;
