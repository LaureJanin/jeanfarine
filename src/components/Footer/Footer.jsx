import "./Footer.scss";

function Footer() {

    return (
        <div id="footer">
            <div id="footDecoration"></div>
            <a data-item='©laurejanin' href="https://laurejanin-portfolio.netlify.app/" target="blank">©laurejanin</a>
            <p className="contact">
                Contact :{" "}
                <a data-item='jean.farine@free.fr' href="mailto:jean.farine@free.fr">
                    jean.farine@free.fr
                </a>
            </p>
        </div>
    );
}
export default Footer