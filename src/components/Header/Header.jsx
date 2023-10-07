import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo_jf.png";

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
          <img className="logo" src={logo} alt="logo jean farine" width={150} />
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
            <Link className="festival" to="/festival" onClick={handleShowLinks}>
              💥Festival de théâtre - Saint Germain Nuelles
            </Link>
          </li>
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
      </nav>
      <div id="HeadDecoration"></div>
    </section>
  );
}

export default Header;
