import "./NavbarMiddle.scss";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const NavbarMiddle = () => {
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
                    <button className="info__wrapper-btn">+7 (920) 211-49-03</button>
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