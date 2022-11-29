import React from "react";
import { Link } from "react-router-dom";
import CategoryFlowers from "../../Components/CategoryFlowers/CategoryFlowers";
import Catalog from "../Catalog/Catalog";

import "./Categories.scss";

function Categories(props) {
  return (
    <div className="categories ">
      <p className="section-router container">
        <span>
          <Link to="/">Главная</Link>
        </span>
        <span></span>
        <span className="active">
          <Link to="/catalog">Букеты из роз</Link>
        </span>
      </p>

      <div className="categories-header-section">
        <h1 className="header-text container">Букеты из роз</h1>
        <div className="category-flowers-section container">
          <CategoryFlowers />
        </div>
      </div>
      <div className="category-catalog-section">
        <Catalog page={"category"} />
      </div>
    </div>
  );
}

export default Categories;
