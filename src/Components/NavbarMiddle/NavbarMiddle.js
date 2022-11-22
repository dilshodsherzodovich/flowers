import "./NavbarMiddle.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import instagram from "../../assets/images/Instagram.svg";
import telegram from "../../assets/images/Telegram.svg";
import whatsApp from "../../assets/images/WhatsApp.svg";
import contacte from "../../assets/images/vk.svg";
import { useState } from "react";

const NavbarMiddle = () => {

const [opened, setOpened] = useState(false);

const handleListOpened = () => {
    setOpened(!opened)
};

    return (
        <div className="middle">
           <div className="container middle__container">
            <div className="middle__links">
                    <Link to="/">
                        <img src={logo} alt="site logo" width={160} height={48} />
                    </Link>
                    <Link className="middle__delivery">Доставка цветов в Воронеже</Link>
                </div>
                <label htmlFor="#">
                    <div className="info__search">
                        <input className="info__inp" type="text" placeholder="Поиск по сайту" name="search" />
                        <button type="submit" className="info__inp-search"></button>
                    </div>
                </label>
                <div className="info__wrapper">
                    <button onClick={handleListOpened} className="info__wrapper-btn">+7 (920) 211-49-03</button>
                    <div className={opened ? "info__content info__content-opened" : "info__content"}>
                        <ul className="info__content-list">
                            <li className="info__content-item">
                                <a className="info__content-link" href="tel:+7 (920) 211-49-03">+7 (920) 211-49-03</a>
                            </li>
                            <li className="info__content-item">
                                <a className="info__content-link info__content-link--year" href="tel:+7 (920) 211-49-03">ул. Революции 1905 года 80</a>
                            </li>
                            <li className="info__content-item">
                                <a className="info__content-link info__content-link--location" href="tel:+7 (920) 211-49-03">ул. Вл. Невского 17</a>
                            </li>
                            <li className="info__content-item">
                                <a className="info__content-link info__content-link--sms" href="tel:+7 (920) 211-49-03">info@lavkaroz.ru</a>
                            </li>
                        </ul>
                        <div className="info__content-bottom">
                            <p className="info__content-title">Напишите нам:</p>
                            <ul className="info__social-list">
                                <li className="info__social-item">
                                    {/* eslint-disable-next-line */}
                                   <a target="_blank" href="https://whatsapp.com">
                                         <img src={whatsApp} alt="whats app"  width={32} height={32}/>
                                   </a>
                                </li>
                                <li className="info__social-item">
                                    {/* eslint-disable-next-line */}
                                   <a target="_blank" href="https://telegram.com">
                                         <img src={telegram} alt="telegram"  width={32} height={32}/>
                                   </a>
                                </li>
                                <li className="info__social-item">
                                    {/* eslint-disable-next-line */}
                                   <a target="_blank" href="https://vk.com">
                                         <img src={contacte} alt="vk"  width={32} height={32}/>
                                   </a>
                                </li>
                                <li className="info__social-item">
                                    {/* eslint-disable-next-line */}
                                   <a target="_blank" href="https://instagram.com">
                                         <img src={instagram} alt="instagram" width={32} height={32} />
                                   </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a className="info__wrapper-link" href="tel:+7 (920) 211-49-03">
                        <span className="info__wrapper-spn">Заказать звонок</span>
                    </a>
                </div>
                <ul className="info-social__list">
                    <li className="info-social__item">
                        <button className="info-social__list-btn"></button>
                    </li>
                    <li className="info-social__item info-social__item--active">
                        <Link className="info-social__item-link"></Link>
                        <span className="info-social__item-span">
                            <span className="count">2</span>
                            16 500 ₽</span>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default NavbarMiddle;