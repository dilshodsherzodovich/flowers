import "./WhyRose.scss";

const WhyRose = () => {
    return (
        <section className="why">
            <div className="container why__container">
                <div className="why__wrapper">
                    <h2 className="why__title">Почему Лавка Роз</h2>
                    <p className="why__desc">Мы предоставляем исключительно комфортные условия взаимодействия всем категориям покупателей, в том числе коммерческим и корпоративным:</p>
                    <ul className="why__list">
                        <li className="why__item">
                        Удобные способы оплаты – наличными, банковскими картами, по безналичному расчету.
                        </li>
                        <li className="why__item">
                        Вручение по любому адресу (город + пригород) в течение 2 часов.
                        </li>
                        <li className="why__item">
                        Работаем ежедневно, в том числе в выходные и праздничные дни.
                        </li>
                        <li className="why__item">
                        Пошаговое консультационное и информационное сопровождение.
                        </li>
                        <li className="why__item">
                        Предоставление фото- и видеоотчетов (по желанию).
                        </li>
                    </ul>
                </div>
                <div className="why__img">

                </div>
            </div>
        </section>
    )
}

export default WhyRose;