import "./Products.scss";

// images

import flower4 from "../../assets/images/flower4.png";
import flower5 from "../../assets/images/flower5.png";

const Products = () => {

const flowers = [
    {
        id: 1,
        image: {flower4},
        title: "Букет 25 роз Нежный микс",
        weight: "Высота: 60 см, Ширина: 35 см",
        price: 13499,
        discount: 15499,
    },
    {
        id: 2,
        image: {flower4},
        title: "Букет 25 роз Нежный микс",
        weight: "Высота: 60 см, Ширина: 35 см",
        price: 13499,
        discount: 15499,
    },
    {
        id: 3,
        image: {flower4},
        title: "Букет 25 роз Нежный микс",
        weight: "Высота: 60 см, Ширина: 35 см",
        price: 13499,
        discount: 15499,
    },
    {
        id: 4,
        image: {flower4},
        title: "Букет 25 роз Нежный микс",
        weight: "Высота: 60 см, Ширина: 35 см",
        price: 13499,
        discount: 15499,
    }
]

    return (
        <section className="products">
            <h2 className="visually-hidden">Продукты</h2>
            <div className="container">
                <div className="bouquete__wrapper">
                    <h3 className="bouquete__title">Букеты цветов с доставкой</h3>
                    <ul className="bouquete__list">
                        {flowers.map(item => {
                            const {id, image, title, weight, price, discount} = item;
                            return (
                                <li key={id} className="bouquete__item">
                                    <img className="bouquete__item-img" src={image.flower4} alt="flowers" />
                                    <div className="bouquete__item-wrapper">
                                        <h4>{title}</h4>
                                        <p className="bouquete__item-weight">{weight}</p>
                                        <div className="bouquete__item-bottom">
                                            <div className="bouquete__item-price">
                                                <p>{price} ₽</p>
                                                <s>{discount} ₽</s>
                                            </div>
                                            <button className="bouquete__btn">В корзину</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Products;