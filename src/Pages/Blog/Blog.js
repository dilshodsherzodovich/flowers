import React from "react";
import { Link } from "react-router-dom";

import "./Blog.scss";

//Media files
import flower1 from "../../assets/images/flower1.png";
import flower2 from "../../assets/images/flower2.png";
import flower3 from "../../assets/images/flower3.png";

//Icons
import reloadIcon from "../../assets/Icons/reload.png";

function Blog() {
  const blogItems = [
    {
      title: "С чем сочетаются тюльпаны",
      description: `Тюльпаны – нежные цветы, ассоциирующиеся с наступлением весенних дней.`,
      image: flower1,
      date: "18 декабря 2021",
    },
    {
      title: "Какие цветы дарят мужчинам",
      description: `Тюльпаны – нежные цветы, ассоциирующиеся с наступлением весенних дней.`,
      image: flower2,
      date: "18 декабря 2021",
    },
    {
      title: "К чему дарят белые розы",
      description: `Тюльпаны – нежные цветы, ассоциирующиеся с наступлением весенних дней.`,
      image: flower3,
      date: "18 декабря 2021",
    },
    {
      title: "К чему дарят белые розы",
      description: `Тюльпаны – нежные цветы, ассоциирующиеся с наступлением весенних дней.`,
      image: flower2,
      date: "18 декабря 2021",
    },
    {
      title: "Какие цветы дарят мужчинам",
      description: `Тюльпаны – нежные цветы, ассоциирующиеся с наступлением весенних дней.`,
      image: flower3,
      date: "18 декабря 2021",
    },
    {
      title: "С чем сочетаются тюльпаны",
      description: `Тюльпаны – нежные цветы, ассоциирующиеся с наступлением весенних дней.`,
      image: flower1,
      date: "18 декабря 2021",
    },
  ];

  const renderCards = (array) => {
    return array.map((item) => {
      return (
        <div className="single-card">
          <div className="card">
            <div className="card-image">
              <img src={item.image} alt="" />
            </div>
            <div className="card-body">
              <p className="card-body__title">{item.title}</p>
              <p className="card-body__description">{item.description}</p>
            </div>
            <div className="card-footer">
              <p>{item.date}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="blog container">
      <p className="section-router">
        <span>
          <Link to="/">Главная</Link>
        </span>
        <span></span>
        <span className="active">
          <Link to={"/blog"}>Блог</Link>
        </span>
      </p>
      <h4 className="section-header">Блог</h4>
      <div className="blog-cards">{renderCards(blogItems)}</div>
      <div className="reload-btn">
        <button type="button">
          <img src={reloadIcon} alt="" />
          <p>Показать еще</p>
        </button>
      </div>
    </div>
  );
}

export default Blog;
