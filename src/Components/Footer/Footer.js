import FooterInfo from "../FooterInfo/FooterInfo";
import FooterSocial from "../FooterSocial/FooterSocial";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <FooterInfo />
                <FooterSocial />
            </div>
        </footer>
    )
}

export default Footer;