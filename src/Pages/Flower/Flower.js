import React from "react";
import { Link, useParams } from "react-router-dom";
import FlowerCard from "../../Components/FlowerCard/FlowerCard";

import "./Flower.scss";

function Flower() {
  const { id } = useParams();

  return (
    <div className="flower container">
      <p className="section-router">
        <span>
          <Link to="/">Главная</Link>
        </span>
        <span></span>
        <span className="active">
          <Link to={"/catalog"}>Букеты из роз</Link>
        </span>
      </p>
      <div className="flower-card-section">
        <FlowerCard id={id} />
      </div>
    </div>
  );
}

export default Flower;
