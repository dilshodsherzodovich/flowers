import "./Navigations.scss";
import { Link } from "react-router-dom";

const Navigations = () => {

const navigation = [
    "Цветы поштучно",
    "Розы",
    "Букеты",
    "Композиции",
    "Подарки",
    "Шары"
]

    return (
        <div className="nav">
            <div className="container nav__container">
                <Link className="nav__link">АКЦИИ</Link>
                <div>
                    {navigation.map(item => {
                        return (
                            <button className="nav__btn">{item}</button>
                        )
                    })}
                </div>
                <div>
                    <Link className="nav__link-active">Свадебные букеты</Link>
                    <Link className="nav__link-active">Повод</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigations;