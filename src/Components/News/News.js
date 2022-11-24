import React from "react";


//Media files
import flower1 from "../../assets/images/flower1.png";
import flower2 from "../../assets/images/flower2.png";
import flower3 from "../../assets/images/flower3.png";

function News() {
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
    }
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
      <h2 className="section-header">Новости</h2>
      <div className="blog-cards">{renderCards(blogItems)}</div>
    </div>
  );
}

export default News;
