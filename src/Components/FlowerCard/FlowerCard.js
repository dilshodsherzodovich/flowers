import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiBaseUrl } from "../../config";
import { Link } from "react-router-dom";

import "./FlowerCard.scss";

// import media files
import io from "../../assets/Icons/io.png";
import masterCard from "../../assets/Icons/masterCard.png";
import maestro from "../../assets/Icons/maestro.png";
import visa from "../../assets/Icons/visaIcon.png";
import moneyIcon from "../../assets/Icons/moneyIcon.png";
import mir from "../../assets/Icons/mir.png";
import paypal from "../../assets/Icons/paypal.png";
import payment1 from "../../assets/Icons/payment.png";

// import functions
import {
  fetchFlower,
  setActiveImageIndex,
  setActiveGreenBtnIndex,
  setActiveLengthBtnIndex,
  setActivePackageBtnIndex,
} from "./singleFlower_slice";
import ReviewOwlCarousel from "../ReviewOwlCarousel/ReviewOwlCarousel";

function FlowerCard({ id }) {
  const {
    flower,
    loading,
    activeImageIndex,
    activeGreenBtnIndex,
    activeLengthBtnIndex,
    activePackageBtnIndex,
  } = useSelector((state) => state.singleFlower);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlower(id));
    //eslint-disable-next-line
  }, []);

  const renderPayment = () => {
    const images = [
      payment1,
      paypal,
      visa,
      moneyIcon,
      io,
      mir,
      masterCard,
      maestro,
    ];
    return images.map((item) => {
      return (
        <div className="payment-type-box">
          <img src={item} alt="" />
        </div>
      );
    });
  };

  const flowersImage = [
    flower.product_image,
    flower.product_image,
    flower.product_image,
    flower.product_image,
  ];

  const lengthBtns = ["40 см", "50 см", "60 см", "70 см"];

  const packageBtns = [
    "Ленточка",
    "Крафт (+290₽)",
    "Корейская (+390₽)",
    "Премиум (+490₽)",
    "Корзинка (+1000₽)",
  ];

  const greenBtns = ["Нет", "Немного (+150₽)", "Побольше (+300₽)"];

  const renderFlowerImages = () => {
    return flowersImage.map((item, index) => {
      const imgClassName = classNames("bottom-images__item", {
        active: index === activeImageIndex,
      });
      return (
        <div
          onClick={() => {
            dispatch(setActiveImageIndex(index));
          }}
          className={imgClassName}
        >
          <img src={`${apiBaseUrl + item}`} alt="" />
        </div>
      );
    });
  };

  const renderInfoBtns = (array, className, activeState, setState) => {
    return array.map((item, index) => {
      const infoClassName = classNames(className, {
        active: index === activeState,
      });
      return (
        <button
          onClick={() => {
            dispatch(setState(index));
          }}
          className={infoClassName}
        >
          <p>{item}</p>
        </button>
      );
    });
  };

  const renderCompositions = () => {
    const compositions = [
      {
        title: "Роза пионовидная",
        count: 7,
      },
      {
        title: "Роза кустовая пионовидная ",
        count: 3,
      },
      {
        title: "Озотамнус",
        count: 6,
      },
      {
        title: "Эвкалипт",
        count: 2,
      },
    ];

    return compositions.map((item) => {
      return (
        <div className="composition-item">
          <label>{item.title}</label>
          <p>-{item.count}шт</p>
        </div>
      );
    });
  };

  const renderFlower = () => {
    if (loading) {
      return <h1>loading</h1>;
    } else if (loading === "error") {
      return <h1>Error</h1>;
    }

    return (
      <>
        <div className="flowerCard-imgBox">
          <div className="images">
            <div className="activeImage">
              <img
                src={`${apiBaseUrl + flowersImage[activeImageIndex]}`}
                alt=""
              />
            </div>
            <div className="bottom-images">{renderFlowerImages()}</div>
          </div>

          <div className="flower-details">
            <p>{flower.description}</p>
          </div>
        </div>
        <div className="flowerCard-detailsBox">
          <h1 className="box-header">{flower.title}</h1>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <span>
              4.0 <span className="reviews">(15 отзывов)</span>
            </span>
          </div>
          <div className="mini-infos">
            <div className="mini-infos__item">
              <label>Высота: </label>
              <span>50см</span>
            </div>
            <div className="mini-infos__item">
              <label>Ширина: </label>
              <span>35см</span>
            </div>
            <div className="mini-infos__item">
              <label>Размер: </label>
              <span>Standart</span>
            </div>
            <div className="mini-infos__item">
              <label>Цвет: </label>
              <span>Красный</span>
            </div>
          </div>
          <div className="length-infos">
            <p className="info-header">Длина</p>
            <div className="info-btns">
              {renderInfoBtns(
                lengthBtns,
                "length-info__btn",
                activeLengthBtnIndex,
                setActiveLengthBtnIndex
              )}
            </div>
          </div>
          <div className="package-infos">
            <p className="info-header">Упаковка</p>
            <div className="info-btns">
              {renderInfoBtns(
                packageBtns,
                "package-info__btn",
                activePackageBtnIndex,
                setActivePackageBtnIndex
              )}
            </div>
          </div>
          <div className="green-infos">
            <p className="info-header">Зелень</p>
            <div className="info-btns">
              {renderInfoBtns(
                greenBtns,
                "gree-info__btn",
                activeGreenBtnIndex,
                setActiveGreenBtnIndex
              )}
            </div>
          </div>
          <div className="price-infos">
            <div className="main-prices">
              <p>{flower.price} ₽</p>
              <del>15 499 ₽ </del>
            </div>
            <div className="discount-info">
              <p>скидка от кол-ва</p>
              <i class="fa-solid fa-circle-exclamation"></i>
              <div className="info-floating-box">Скидка от количества</div>
            </div>
          </div>
          <div className="btns-box">
            <button>
              <span>+</span>
              <span>25</span>
              <span>-</span>
            </button>
            <button>
              <i class="fa-solid fa-bag-shopping"></i>
              <span>Купить</span>
              <div className="one-click__btn">
                <p>Купить в 1 клик</p>
              </div>
            </button>
            <button>
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>
          <div className="composition-infos">
            <h4 className="box-header">Состав:</h4>
            <div className="compositions">{renderCompositions()}</div>
          </div>
        </div>
        <div className="flowerCard-extraBox">
          <div className="extra-box-inner">
            <div className="delivery-box">
              <h5 className="delivery-header">Доставка</h5>
              <ul>
                <li> Самовывоз - бесплатно</li>
                <li>Доставка по Воронежу - от 300₽.</li>
                <li>Доставка с 9:00 до 21:00</li>
                <li> При заказе от 5000₽ - доставка бесплатно.</li>
              </ul>
              <Link>Подробнее о доставке...</Link>
            </div>
            <div className="payment-box">
              <h5>Способы оплаты</h5>
              <p>Вы можете оплатить наличными или картой:</p>
              <div className="paytment-types">{renderPayment()}</div>
            </div>
            <div className="last-box">
              <h5>Возврат товара</h5>
              <p>
                Если получателя не устроит качество цветов или работа флориста –
                напишите нам, в течение 24 часов! Мы решим данную проблему.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flowerCard">
      <div className="flower-full-details">{renderFlower()}</div>
      <div className="flowers-reviews">
        <div className="header-box">
          <h3>Отзывы</h3>
          <button>Все отзывы</button>
        </div>
        <ReviewOwlCarousel />
      </div>
    </div>
  );
}

export default FlowerCard;
