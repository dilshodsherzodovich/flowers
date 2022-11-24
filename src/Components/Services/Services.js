
import "./Services.scss";

const Services = () => {

    return (
        <section className="services">
            <div className="container">
                <h2 className="visually-hidden">Services</h2>
                <ul className="services__list">
                    <li className="services__item">
                        <h3 className="services__item-title">Экспресс-доставка от 90 минут</h3>
                    </li>
                    <li className="services__item services__item--discount">
                        <h3 className="services__item-title">Низкие цены</h3>
                    </li>
                    <li className="services__item services__item--medallion">
                        <h3 className="services__item-title">Каждый день поступление свежих цветов</h3>
                    </li>
                    <li className="services__item services__item--prize">
                        <h3 className="services__item-title">Опытные флористы</h3>
                    </li>
                    <li className="services__item services__item--vector">
                        <h3 className="services__item-title">Работаем без выходных</h3>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Services;