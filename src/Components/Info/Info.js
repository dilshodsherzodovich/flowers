import "./Info.scss";
import { Link } from "react-router-dom";
import instagram from "../../assets/images/instagram-icon.svg";
import contact from "../../assets/images/vcontact.svg";
import person from "../../assets/images/person-icon.svg";
import { useState } from "react";

const Info = () => {
  const [opened, setOpened] = useState(false);

  const handleBtnOpened = () => {
    setOpened(!opened);
  };

  return (
    <div className="info">
      <div className="container info__container">
        <time className="info__time">Пн-Сб: 8:00–20:00 Вс: 9:00–20:00</time>
        <ul className="info__list">
          <li>
            <Link className="info__btn">Доставка</Link>
          </li>
          <li>
            <Link className="info__btn">Оплата</Link>
          </li>
          <li>
            <Link className="info__btn">Отзывы</Link>
          </li>
          <li>
            <Link className="info__btn">Блог</Link>
          </li>
          <li>
            <button
              onClick={handleBtnOpened}
              className="info__btn info__btn--active"
            >
              Информация
            </button>
            <ul className={opened ? "dropdown dropdown--opened" : "dropdown"}>
              <li className="dropdown-list__item">
                <Link className="dropdown-list__link">Гарантии</Link>
              </li>
              <li className="dropdown-list__item">
                <Link className="dropdown-list__link">Вопрос и ответ</Link>
              </li>
              <li className="dropdown-list__item">
                <Link className="dropdown-list__link">
                  Корпоративным клиентам
                </Link>
              </li>
              <li className="dropdown-list__item">
                <Link className="dropdown-list__link">О компании</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="info__btn">Контакты</Link>
          </li>
        </ul>
        <ul className="info__list">
          <li className="info__item">
            {/* eslint-disable-next-line */}
            <a
              href="https://vk.com"
              target="_blank"
              className="info__item-link"
            >
              <img src={contact} alt="v contacte icon" width={24} height={24} />
            </a>
          </li>
          <li className="info__item">
            {/* eslint-disable-next-line */}
            <a
              href="https://instagram.com"
              target="_blank"
              className="info__item-link"
            >
              <img
                src={instagram}
                alt="instagram icon"
                width={18}
                height={18}
              />
            </a>
          </li>
          <l className="info__item">
            <Link className="info__item-link info__item-link--unique">
              <img src={person} alt="person icon" width={14} height={14} />
              <span className="info__item-spn">Мои заказы</span>
            </Link>
          </l>
        </ul>
      </div>
    </div>
  );
};

export default Info;
