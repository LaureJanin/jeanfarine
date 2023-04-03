import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {

    return (
        <footer>
            <div id="footDecoration"></div>
            <h3>Footer</h3>
            <Link to="/contact">
                <h3>Contact</h3>
            </Link>
        </footer>
    );
}
export default Footer