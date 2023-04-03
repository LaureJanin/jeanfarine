import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/jeanfarine_logo.png";

import "./Header.scss";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <section id="header">
        <div className="header">
            <Link to="/">
            <img className="logo" src={logo} alt="logo jean farine" width={150}/>
            </Link>
            <button type="button" className="burger" onClick={handleShowLinks}>
                <span
                    className={`"burger-bar" ${
                    showLinks ? "burger-bar-checked" : "burger-bar"
                    }`}
                />
            </button>
        </div>
        <nav>
          <ul className={`${showLinks ? "show-nav " : ""}`}>
            <Link to="/history" onClick={handleShowLinks}>
             <li>Histoire de la troupe</li>
            </Link>
            <Link to="/dramas" onClick={handleShowLinks}>
             <li>Nos réalisations</li>
             </Link>
            <Link to="/pressReview" onClick={handleShowLinks}>
             <li>On parle de nous</li>
             </Link>
            <Link to="/contact" onClick={handleShowLinks}>
             <li>Contact</li>
             </Link>
          </ul>
        </nav>
        <div id="HeadDecoration"></div>
    </section>
  );
}

export default Header;