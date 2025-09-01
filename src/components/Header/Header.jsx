import { useState } from "react";
import { Link } from "react-router-dom";
import LogoJF from "../LogoJF/LogoJF";
// import logo from "/logo_jf.png";

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
          <LogoJF className="logo-desktop" width={220} />
          <span className="logo-mobile" aria-label="Accueil"></span>
        </Link>
        <button type="button" className="burger" onClick={handleShowLinks}>
          <span
            className={`"burger-bar" ${
              showLinks ? "burger-bar-checked" : "burger-bar"
            }`}
          />
        </button>
      </div>

      <nav className={`${showLinks ? "heightNav " : ""}`}>
        <ul className={`${showLinks ? "show-nav " : ""}`}>
          <li>
            <Link data-item="Histoire" to="/history" onClick={handleShowLinks}>
              Histoire
            </Link>
          </li>
          <li>
            <Link
              data-item="Réalisations"
              to="/dramas"
              onClick={handleShowLinks}
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link data-item="Galerie" to="/picture" onClick={handleShowLinks}>
              Galerie
            </Link>
          </li>
          <li>
            <Link data-item="Presse" to="/press" onClick={handleShowLinks}>
              Presse
            </Link>
          </li>
          <li>
            <Link data-item="Contact" to="/contact" onClick={handleShowLinks}>
              Contact
            </Link>
          </li>
        </ul>

        <div id="HeadDecoration"></div>
      </nav>

    </section>
  );
}

export default Header;
