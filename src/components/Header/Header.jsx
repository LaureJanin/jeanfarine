import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/Logo-Externatic.svg";

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
                <p>Logo</p>
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
    </section>
  );
}

export default Header;