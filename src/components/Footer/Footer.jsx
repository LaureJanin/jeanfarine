import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {

    return (
        <footer id="footer">
            <div id="footDecoration"></div>
            <p className="troupe">
                Les Jean Farine — troupe de théâtre amateur,{" "}
                <span>Saint Germain Nuelles</span>
            </p>
            <p className="contact">
                Contact :{" "}
                <a data-item='jean.farine@free.fr' href="mailto:jean.farine@free.fr">
                    jean.farine@free.fr
                </a>
            </p>
            {/* Mentions légales et crédit dans une même cellule : la grille du
                footer compte trois colonnes, un quatrième élément la déséquilibrait. */}
            <p className="mentions">
                <Link data-item='Mentions légales' to="/mentions-legales">
                    Mentions légales
                </Link>
                <span aria-hidden="true">·</span>
                <a data-item='©laurejanin' href="https://laurejanin-portfolio.netlify.app/" target="blank">©laurejanin</a>
            </p>
        </footer>
    );
}
export default Footer
