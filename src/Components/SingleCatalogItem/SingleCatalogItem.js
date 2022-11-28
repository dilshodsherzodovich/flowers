import classNames from "classnames";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//import style files
import "./SingleCatalogItem.scss";

function SingleCatalogItem({
  title,
  product_image,
  price,
  description,
  preOrder,
}) {
  const [activeSize, setActiveSize] = useState("");

  const renderBtns = () => {
    const btns = ["MINI", "STANDART", "MAXI"];
    return btns.map((item) => {
      const btnClassname = classNames("", {
        active: item === activeSize,
      });
      return (
        <button
          key={uuid()}
          onClick={() => {
            setActiveSize(item);
          }}
          className={btnClassname}
        >
          {item}
        </button>
      );
    });
  };

  return (
    <div className="catalog-flower__item">
      <div className="catalog-flower__item-single">
        <div className="card">
          <div className="card-image">
            <OwlCarousel
              id="mycarousel"
              className="owl-theme"
              loop
              items={1}
              autoplay
              autoplayTimeout={5000}
            >
              <div class="item">
                <img src={product_image} alt="" />{" "}
              </div>
              <div class="item">
                <img src={product_image} alt="" />{" "}
              </div>
              <div class="item">
                <img src={product_image} alt="" />
              </div>
            </OwlCarousel>
            <div className="status-box">
              <div className="img-box">
                <i class="fa-regular fa-heart"></i>
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="img-box">
                <i class="fa-regular fa-eye"></i>
                <i className="fa-solid fa-eye"></i>
              </div>
            </div>
            <div className="description-box">
              <p>{description.slice(0, 100)}...</p>
            </div>
            <div className="flower-size">
              <div className="width">
                <i class="fa-solid fa-arrows-left-right"></i>
                <p>35 см</p>
              </div>
              <div className="height">
                <i class="fa-solid fa-arrows-left-right"></i>
                <p>50 см</p>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="card-body__title">{title}</p>
            {preOrder ? (
              <p className="delivery-date">Завтра: 08:50 - 9:20</p>
            ) : null}
            <div className="rating-box">
              <div className="ratings">
                <i class="fa-solid fa-star"></i>
                <span>
                  <span>4.0 </span>(15 отзывов)
                </span>
              </div>
              <div className="ratings-delivery">
                <i class="fa-solid fa-truck"></i>
                <span>
                  <span>150</span> мин
                </span>
              </div>
            </div>
            <div className="size-box">
              <label>Размер:</label>
              <div className="size-types">{renderBtns()}</div>
            </div>
          </div>
          <div className="card-footer">
            <div className="cost-box">
              <p className="main-cost">{price} ₽</p>
              <del className="fake-cost">15 499 ₽</del>
            </div>
            {preOrder ? (
              <button className="order">
                <i class="fa-solid fa-arrow-left"></i>
                <p>Предзаказ</p>
              </button>
            ) : (
              <button>
                <i class="fa-solid fa-bag-shopping"></i>
                <p>В корзину</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCatalogItem;
