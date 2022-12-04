import "./Map.scss";

const Map = () => {
    return (
        <section className="map container">
            <iframe className="map__iframe" title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577317.9718771386!2d37.3855235!3d55.58202595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1669266207802!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="info__wrapper map__wrapper">
                    <button  className="info__wrapper-btn map__btn">+7 (920) 211-49-03</button>
                    <a className="info__wrapper-link" href="tel:+7 (920) 211-49-03">
                        <span className="info__wrapper-spn">Заказать звонок</span>
                    </a>
                    <time className="info__time map__time">Пн-Сб: 8:00–20:00 Вс: 9:00–20:00</time>
                    <a className="info__content-link info__content-link--sms" href="tel:+7 (920) 211-49-03">info@lavkaroz.ru</a>
                </div>
        </section>
    )
}

export default Map;