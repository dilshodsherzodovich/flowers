import "./Intro.scss";
import OwlCarousel from "react-owl-carousel";


// images
import location1 from "../../assets/images/location1.png";
import location2 from "../../assets/images/location2.png";
import flower4 from "../../assets/images/flower4.png";


const Intro = () => {
    return (
        <>
            <div className="intro">
                <div className="container intro__container">
                    <div className="carousel">
                        <OwlCarousel
                        id="mycarousel"
                        className="owl-theme"
                        loop
                        items={1}
                        autoplay
                        autoplayTimeout={3000}
                        >
                        <div class="item">
                        <img src={flower4} alt="" />{" "}
                        </div>
                        <div class="item">
                            <img src={location1} alt="" />{" "}
                        </div>
                        <div class="item">
                            <img src={location2} alt="" />
                        </div>
                        </OwlCarousel>
                    </div>
                    <div className="intro__wrapper">
                        <h2 className="intro__title">Букет недели</h2>
                        <div className="bouquete__item">
                                        <img className="bouquete__item-img" src={flower4} alt="flowers" />
                                        <div className="bouquete__item-wrapper">
                                            <h4>Букет 25 роз Нежный микс</h4>
                                            <p className="bouquete__item-weight">Высота: 60 см, Ширина: 35 см</p>
                                            <div className="bouquete__item-bottom">
                                                <div className="bouquete__item-price">
                                                    <p>13 499 ₽ ₽</p>
                                                    <s>15 499 ₽ ₽</s>
                                                </div>
                                                <button className="bouquete__btn">В корзину</button>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;