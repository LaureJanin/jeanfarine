import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoJF from "../LogoJF/LogoJF";
// import logo from "/logo_jf.png";

import "./Header.scss";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  // Fermer, et non basculer : en desktop le menu est toujours affiché, un
  // basculement laissait le bouton burger annoncer un menu ouvert qui ne l'est pas.
  const fermerMenu = () => {
    setShowLinks(false);
  };

  return (
    <header id="header">
      <div className="header">
        <Link to="/" aria-label="Accueil">
          <LogoJF />
        </Link>

        <button
          type="button"
          className="burger"
          onClick={handleShowLinks}
          aria-label={showLinks ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={showLinks}
          aria-controls="menu-principal"
        >
          <span
            className={`"burger-bar" ${
              showLinks ? "burger-bar-checked" : "burger-bar"
            }`}
          />
        </button>
      </div>

      {/* NavLink marque la page courante : classe active pour l'œil,
          aria-current pour les lecteurs d'écran. */}
      <nav id="menu-principal" className={showLinks ? "heightNav" : ""}>
        <ul>
          <li>
            <NavLink data-item="Histoire" to="/history" onClick={fermerMenu}>
              Histoire
            </NavLink>
          </li>
          <li>
            <NavLink data-item="Réalisations" to="/dramas" onClick={fermerMenu}>
              Réalisations
            </NavLink>
          </li>
          <li>
            <NavLink data-item="Galerie" to="/picture" onClick={fermerMenu}>
              Galerie
            </NavLink>
          </li>
          <li>
            <NavLink data-item="Presse" to="/press" onClick={fermerMenu}>
              Presse
            </NavLink>
          </li>
        </ul>
      </nav>

      <div id="HeadDecoration"></div>
    </header>
  );
}

export default Header;
