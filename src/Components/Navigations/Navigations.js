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
                <Link>АКЦИИ</Link>
                <div>
                    {navigation.map(item => {
                        return (
                            <button>{item}</button>
                        )
                    })}
                </div>
                <div>
                    <Link>Свадебные букеты</Link>
                    <Link>Повод</Link>
                </div>
            </div>
        </div>
    )
}

export default Navigations;