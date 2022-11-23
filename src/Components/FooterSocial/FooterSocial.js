
import "./FooterSocial.scss";
import visa from "../../assets/images/footerVisa.svg";
import koshelek from "../../assets/images/footerKoshelek.svg";
import masterCard from "../../assets/images/footerMasterCard.svg";
import maestro from "../../assets/images/maestro.svg";
import world from "../../assets/images/footerWorld.svg";
import gas from "../../assets/images/footerGas.svg";
import oval from "../../assets/images/footerOval.svg";
import footerVk from "../../assets/images/footerVk.svg";
import facebook from "../../assets/images/fb.svg";
import instagram from "../../assets/images/footerInsta.svg";
import youTube from "../../assets/images/YouTube.svg";

const FooterSocial = () => {
    return (
        <div className="social">
            <p>© 2014 – 2022. Интернет-магазин «Лавка Роз»</p>
            <ul className="social__list">
                <li className="social__item">
                    {/* eslint-disable-next-line */}
                    <a href="https://masterCard.com" target="_blank" className="social__link">
                        <img className="socail__img" src={koshelek} alt="koshelek icon" width={20} height={17} />
                    </a>
                </li>
                <li className="social__item">
                    {/* eslint-disable-next-line */}
                    <a href="https://masterCard.com" target="_blank" className="social__link">
                        <img className="socail__img" src={visa} alt="visa icon" width={46} height={20} />
                    </a>
                </li>
                <li className="social__item">
                    {/* eslint-disable-next-line */}
                    <a href="https://masterCard.com" target="_blank" className="social__link">
                        <img className="socail__img" src={masterCard} alt="masterCard icon" width={26} height={20} />
                    </a>
                </li>
                <li className="social__item">
                    {/* eslint-disable-next-line */}
                    <a href="https://masterCard.com" target="_blank" className="social__link">
                        <img className="socail__img" src={maestro} alt="maestro" width={25} height={20} />
                    </a>
                </li>
                <li className="social__item">
                    {/* eslint-disable-next-line */}
                    <a href="https://masterCard.com" target="_blank" className="social__link">
                        <img className="socail__img" src={world} alt="world icon" width={49} height={14} />
                    </a>
                </li>
                <li className="social__item">
                    {/* eslint-disable-next-line */}
                    <a href="https://masterCard.com" target="_blank" className="social__link">
                        <img className="socail__img" src={gas} alt="gas icon" width={19} height={19} />
                    </a>
                </li>
                <li className="social__item">
                    {/* eslint-disable-next-line */}
                    <a href="https://masterCard.com" target="_blank" className="social__link">
                        <img className="socail__img" src={oval} alt="oval icon" width={27} height={10} />
                    </a>
                </li>
            </ul>
            <div className="nation">
                <p>Мы в социальных сетях:</p>
                <ul className="nation__list">
                    <li className="nation__item">
                        {/* eslint-disable-next-line */}
                        <a href="https://vk.com" target="_blank">
                            <img src={footerVk} alt="footer vk.com icon" width={32} height={32} />
                        </a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a href="https://vk.com" target="_blank">
                            <img src={facebook} alt="footer facebook.com icon" width={32} height={32} />
                        </a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a href="https://vk.com" target="_blank">
                            <img src={instagram} alt="footer instagram.com icon" width={32} height={32} />
                        </a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line */}
                        <a href="https://vk.com" target="_blank">
                            <img src={youTube} alt="footer youTube.com icon" width={32} height={32} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterSocial;