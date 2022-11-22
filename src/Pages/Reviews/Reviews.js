import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

// Style files
import "./Reviews.scss";

//Media Files
import flower4 from "../../assets/images/flower4.png";
import flower5 from "../../assets/images/flower5.png";

const reviews = [
  {
    text: `Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.  `,
    byWhom: "Мередова Елена Григорьевна",
    stars: 5,
    image: flower4,
  },
  {
    text: `Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.  `,
    byWhom: "Мередова Елена Григорьевна",
    stars: 5,
    image: flower5,
  },
  {
    text: `Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.  `,
    byWhom: "Мередова Елена Григорьевна",
    stars: 5,
    image: flower4,
  },
];

const renderReviews = (array) => {
  return array.map((item) => {
    let golden = [];
    for (var i = 0; i < item.stars; i++) {
      golden.push(<i class="fa-solid fa-star"></i>);
    }
    return (
      <div key={uuid()} className="review-item">
        <div className="content-box">
          <div className="texts">
            <div className="stars">{golden}</div>
            <p className="review-owner">{item.byWhom}</p>
            <p className="review-text">{item.text}</p>
          </div>
          <div className="footer">
            <p>
              Отзыв к букету: <span>Розы 80 см</span>
            </p>
          </div>
        </div>
        <div className="img-box">
          <img src={item.image} alt="" />
        </div>
      </div>
    );
  });
};

function Reviews() {
  return (
    <div className="reviews container">
      <p className="section-router">
        <span>
          <Link to="/"> Главная</Link>
        </span>
        <span></span>
        <span className="active">
          <Link to="/reviews">Отзывы</Link>
        </span>
      </p>
      <div className="header-box">
        <h4 className="section-header">Отзывы</h4>
        <button className="review-btn">Оставить отзыв</button>
      </div>

      <div className="reviews-cards">{renderReviews(reviews)}</div>
    </div>
  );
}

export default Reviews;
