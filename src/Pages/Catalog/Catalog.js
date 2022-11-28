import React from "react";
import { Link } from "react-router-dom";
import CatalogFlowers from "../../Components/CatalogFlowers/CatalogFlowers";
import CatalogFilters from "../../Components/CataogFilters/CatalogFilters";

import "./Catalog.scss";

function Catalog() {
  console.log("Render");

  return (
    <div className="catalog container">
      <p className="section-router">
        <span>
          <Link to="/">Главная</Link>
        </span>
        <span></span>
        <span className="active">
          <Link to="/catalog">Букеты из роз</Link>
        </span>
      </p>
      <div className="catalog-main">
        <div className="catalog-filters-section">
          <CatalogFilters />
        </div>
        <div className="catalog-flowers-section">
          <CatalogFlowers />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
