import React from "react";
import classNames from "classnames";
import { v4 as uuid } from "uuid";

import "./CatalogFilters.scss";

function CatalogFilters() {
  const renderBouquetFilters = () => {
    const roses = ["Местные розы", "Эквадорские розы", "Кенийские розы"];
    return roses.map((item) => {
      const roseClassName = classNames("rose-item", {
        active: item === "Местные розы",
      });
      return (
        <p key={uuid()} className={roseClassName}>
          {item}
        </p>
      );
    });
  };

  const renderColorFilters = () => {
    const colors = [
      "red",
      "blue",
      "yellow",
      "orange",
      "pink",
      "teal",
      "violet",
      "green",
      "brown",
      "purple",
      "gray",
      "white",
      "chocolate",
      "coral",
    ];

    return colors.map((item) => {
      const colorClassNames = classNames("color-item", {
        active: item === "red",
      });
      return (
        <div key={uuid()} className={colorClassNames}>
          <div style={{ backgroundColor: item }} className="color"></div>
        </div>
      );
    });
  };

  const renderDiameterFilters = () => {
    const filters = ["До 25 см", "26-40 см", "41-55 см", "Более 55 см"];
    return filters.map((item) => {
      const filterClassName = classNames("diameter-item rodeo", {
        active: item === "До 25 см",
      });
      return (
        <div key={uuid()} className={filterClassName}>
          <span>
            <i class="fa-solid fa-check"></i>
          </span>
          <p>{item}</p>
        </div>
      );
    });
  };

  const renderHeightFilters = () => {
    const filters = ["До 45 см", "46-60 см", "61-75 см", "Более 75 см"];
    return filters.map((item) => {
      const heightClassName = classNames("height-item rodeo", {
        active: item === "До 45 см",
      });
      return (
        <div key={uuid()} className={heightClassName}>
          <span>
            <i class="fa-solid fa-check"></i>
          </span>
          <p>{item}</p>
        </div>
      );
    });
  };

  const renderIngredientFilters = () => {
    const filters = [
      "Тюльпаны",
      "Эустомы",
      "Хризантемы",
      "Пионы",
      "Герберы",
      "Альстромерии",
    ];

    return filters.map((item) => {
      const ingrClassName = classNames("ingr-item rodeo", {
        active: item === "Тюльпаны",
      });
      return (
        <div key={uuid()} className={ingrClassName}>
          <span>
            <i class="fa-solid fa-check"></i>
          </span>
          <p>{item}</p>
        </div>
      );
    });
  };

  const renderSpecailFilters = () => {
    const filters = [
      "Маме",
      "Жене",
      "Коллеге",
      "Дочери",
      "Подруге",
      "Начальнику",
    ];

    return filters.map((item) => {
      const specialClassNames = classNames("special-item rodeo", {
        active: item === "Маме",
      });
      return (
        <div key={uuid()} className={specialClassNames}>
          <span>
            <i class="fa-solid fa-check"></i>
          </span>
          <p>{item}</p>
        </div>
      );
    });
  };

  return (
    <div className="catalog-filters">
      <div className="bouquet-filters">
        <h5 className="subheader">Букеты из роз</h5>
        <div className="bouqutes">{renderBouquetFilters()}</div>
      </div>

      <div className="cost-filters">
        <h5 className="subheader">Цена</h5>
        <div className="inputs-group">
          <input type="number" />
          <input type="number" />
        </div>
        <div className="cost-progress">
          <div className="under-box">
            <div className="progress-show__box">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="cost-borders">
          <span>от 500 ₽</span>
          <span>до 45 500 ₽</span>
        </div>
      </div>

      <div className="color-filters">
        <h5 className="subheader">Цвета</h5>
        <div className="colors">{renderColorFilters()}</div>
      </div>

      <div className="size-filters">
        <h4 className="subheader">Размер</h4>
        <h4 className="mini-subheader">Диаметр букета</h4>
        <div className="diameters">{renderDiameterFilters()}</div>
        <h4 className="mini-subheader">Высота букета</h4>
        <div className="heights">{renderHeightFilters()}</div>
      </div>

      <div className="ingredient-filters">
        <div className="subheader-box">
          <h4 className="subheader">Состав</h4>
          <img src="" alt="" />
        </div>
        <div className="ingredients">{renderIngredientFilters()}</div>
        <p>Показать все</p>
      </div>

      <div className="special-filters">
        <h4 className="subheader">Кому</h4>
        <div className="specails">{renderSpecailFilters()}</div>
      </div>
    </div>
  );
}

export default CatalogFilters;
