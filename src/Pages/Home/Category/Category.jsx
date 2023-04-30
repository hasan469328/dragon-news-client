import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryNews from "../CategoryNews/CategoryNews";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  
  return (
    <div>
      <h4 className="mb-3">Dragon News</h4>
      {categoryNews.map((news) => (
        <CategoryNews key={news._id} news={news}></CategoryNews>
      ))}
    </div>
  );
};

export default Category;
