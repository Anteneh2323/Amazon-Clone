import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import classes from "./category.module.css"; // Correct CSS import

function CategoryCard({ data }) {
  return (
    <div className={classes.category__wrapper}>
      <div className={classes.category}>
        <Link to={`/category/${data.title}`} className={classes.category__link}>
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.image} alt={data.title} />
          <p>Shop now</p>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
