import React from "react";
import { Link } from "react-router-dom";

import "./Contact.scss";

//Media files
import location1 from "../../assets/images/location1.png";
import location2 from "../../assets/images/location2.png";

function Contact() {
  return (
    <div className="contact container">
      <p className="section-router">
        <span>
          <Link to="/">Главная</Link>
        </span>
        <span></span>
        <span className="active">
          <Link to={"/contact"}>Контакты</Link>
        </span>
      </p>
      <h4 className="section-header">Контакты</h4>

      <div className="contact-number">
        <p>
          <span>Оформление заказа цветов по телефону:</span>
          <a href="tel:+79202114903">+7 (920) 211-49-03</a>
        </p>
      </div>
      <div className="locations">
        <div className="single-loaction-item">
          <div className="card">
            <div className="card-image">
              <img src={location1} alt="" />
            </div>
            <div className="card-body">
              <p className="card-body__title">
                Магазин цветов в Северном районе
              </p>
              <p className="card-body__description">
                394088, ул. Владимира Невского, 17
              </p>
            </div>
            <div className="card-footer">
              <div className="footer-item">
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                <div className="details">
                  <label>Телефон:</label>
                  <a href="tel:+79202114903">+7 (920) 211-49-03</a>
                </div>
              </div>
              <div className="footer-item">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <div className="details">
                  <label>GPS:</label>
                  <a href="locationto:51.709873, 39.150053" target={"blank"}>
                    51.709873, 39.150053
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-loaction-item">
          <div className="card">
            <div className="card-image">
              <img src={location2} alt="" />
            </div>
            <div className="card-body">
              <p className="card-body__title">
                Магазин цветов в центре Воронежа
              </p>
              <p className="card-body__description">
                394030, ул. Революции 1905 года, 80
              </p>
            </div>
            <div className="card-footer">
              <div className="footer-item">
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                <div className="details">
                  <label>Телефон:</label>
                  <a href="tel:+79066786599">+7(906)678-65-99</a>
                </div>
              </div>
              <div className="footer-item">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                <div className="details">
                  <label>GPS:</label>
                  <a href="geo:51.709873, 39.150053" target={"blank"}>
                    51.667596, 39.185905
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          title="shop location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.5251462629058!2d39.14748067671884!3d51.70986107186002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a0ca00673ccdda6!2zNTHCsDQyJzM1LjUiTiAzOcKwMDknMDAuMiJF!5e1!3m2!1suz!2s!4v1669132154347!5m2!1suz!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
