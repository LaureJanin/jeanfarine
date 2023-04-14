import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {

    return (
        <footer>
            <div id="footDecoration"></div>
            <a data-item='©laurejanin' href="https://laurejanin-portfolio.netlify.app/" target="blank">©laurejanin</a>
            <Link data-item='Contact' to="/contact">
                    Contact
            </Link>
        </footer>
    );
}
export default Footer