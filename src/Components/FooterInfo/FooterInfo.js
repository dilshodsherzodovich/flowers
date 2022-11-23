import { Link } from "react-router-dom";
import "./FooterInfo.scss";

const FooterInfo = () => {

const piece = [
    "Розы поштучно",
    "Кустовая роза",
    "Пионовидная роза",
    "Хризантемы поштучно",
    "Альстромерия",
    "Тюльпаны",
    "Герберы поштучно",
    "Лилии поштучно",
    "Пионы",
    "Эустома",
    "Каллы поштучно",
    "Маттиола"
]

const roses = [
    "Голландские розы",
    "Местная роза",
    "Кустовые розы",
    "Пионовидные розы",
    "Букет из 101 розы"
]

const bouqets = [
    "Сборные букеты",
    "Букеты из хризантем",
    "Букеты из Альстромерий",
    "Букеты из Альстромерий",
    "Букеты Гипсофилы",
    "Букеты из гербер",
    "Букеты из пионов",
    "Букеты из тюльпанов"
]

const compositions = [
    "Ящики с цветами",
    "Коробки с цветами",
    "Корзины с цветами"
]

const prize = [
    "Мягкие игрушки",
    "Коробки конфет"
]

const schar = [
    "Шары в виде цифр",
    "Фольгированные шары",
    "Латексные шары"
]

const info = [
    "Доставка",
    "Оплата",
    "Отзывы",
    "Блог",
    "Гарантии",
    "Вопрос и ответ",
    "Корпоративным клиентам",
    "О компании",
    "Контакты"
]

const coordinat = [
    {
        location: "Служба Доставки",
        phone: "+7 (920) 211-49-03"
    },
    {
        location: "Ул. Вл. Невского 17",
        phone: "+7 (920) 211-49-03"
    },
    {
        location: "Ул. Революции 1905 года 80",
        phone: "+7 (906) 678-65-99"
    },
    {
        location: "E-mail:",
        phone: "info@lavkaroz.ru"
    }

]

    return (
        <div className="links">
            <div className="piece">
                <strong className="footer__title">Цветы поштучно</strong>
                {piece.map(item => {
                    return (
                        // eslint-disable-next-line
                        <a className="footer__link" target="_blank" href="#">{item}</a>
                    )
                })}
            </div>
            <div className="roses">
                <strong className="footer__title">Розы</strong>
                {roses.map(rose => {
                    return (
                        // eslint-disable-next-line
                        <a className="footer__link" href="#" target="_blank">{rose}</a>
                    )
                })}
            </div>
            <div className="bouqets">
                <strong className="footer__title">Букеты</strong>
                {bouqets.map(bouqe => {
                    return (
                        // eslint-disable-next-line
                        <a className="footer__link" href="#" target="_blank">{bouqe}</a>
                    )
                })}
            </div>
            <div className="wrapper">
                <div className="compositions">
                    <strong className="footer__title">Композиции</strong>
                    {compositions.map(compo => {
                        // eslint-disable-next-line
                        return <a className="footer__link" href="#" target="_blank">{compo}</a>
                    })}
                </div>
                <div className="prize">
                    <strong className="footer__title">Подарки</strong>
                    {prize.map(priz => {
                        // eslint-disable-next-line
                        return <a className="footer__link" href="#" target="_blank">{priz}</a>
                    })}
                </div>
                <div className="schar">
                    <strong className="footer__title">Шары</strong>
                    {schar.map(char => {
                        // eslint-disable-next-line
                        return <a className="footer__link" href="#" target="_blank">{char}</a>
                    })}
                </div>
            </div>
                <div className="info">
                    <strong className="footer__title">Информация</strong>
                    {info.map(information => {
                        // eslint-disable-next-line
                        return <Link className="footer__link">{information}</Link>
                    })}
                </div>
                <div className="coordinat">
                    <strong className="footer__title">Наши координаты</strong>
                    {coordinat.map(coor => {
                        return (
                           <>
                            <span>{coor.location}</span>
                            {/* eslint-disable-next-line */}
                            <a className="footer__link footer__link-phone" href="#" target="_blank">{coor.phone}</a>
                           </>
                        )
                    })}
                </div>
        </div>
    )
}

export default FooterInfo;