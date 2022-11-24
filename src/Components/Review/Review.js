import "./Review.scss";
import flower4 from "../../assets/images/flower4.png"

const Review = () => {
    return (
        <section className="review">
            <div className="container">
                <div className="review__content">
                    <h2 className="review__title">
                    Отзывы наших покупателей
                    </h2>
                    <button className="review-btn">Оставить отзыв</button>
                </div>
                <div className="review__wrapper">
                    <div className="div review__inner">
                        <ul className="stars__list">
                            <li className="stars__item">
                                <button className="stars__btn">
                                <i className="fa-solid fa-star"></i>
                                </button>
                            </li>
                            <li className="stars__item">
                                <button className="stars__btn">
                                <i className="fa-solid fa-star"></i>
                                </button>
                            </li>
                            <li className="stars__item">
                                <button className="stars__btn">
                                <i className="fa-solid fa-star"></i>
                                </button>
                            </li>
                            <li className="stars__item">
                                <button className="stars__btn">
                                <i className="fa-solid fa-star"></i>
                                </button>
                            </li>
                            <li className="stars__item">
                                <button className="stars__btn">
                                <i className="fa-solid fa-star"></i>
                                </button>
                            </li>
                        </ul>
                        <h3 className="review__subtitle">Мередова Елена Григорьевна</h3>
                        <p className="review__desc">Хочу выразить свою благодарность коллективу, за великолепную работу и профессионализм! Заказываю уже 3 раз и каждый раз се полный восторг! Букеты красивые, цветочки свежие, стоят долго! Заказывала и готовые и собирал по своему желанию- все чудесно! Спасибо Мегацвет24 - вы тот случай, когда точно знаешь куда возвращаться за цветочками.</p>
                        <div className="price__wrapper">
                            <p className="review__price">
                            Отзыв к букету:  
                            </p>
                            <span className="review__price-inner">Розы 80 см</span>
                        </div>
                    </div>
                    {/* eslint-disable-next-line */}
                    <img src={flower4} className="review__img" alt="review image" width={200} height={200} />
                </div>
                <button type="button" className="review__button">Все отзывы</button>
            </div>
        </section>
    )
}

export default Review;