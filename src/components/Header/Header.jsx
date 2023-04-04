import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/jeanfarine_logo.png";

import "./Header.scss";

function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const linkStates = [
    useState(false),
    useState(false),
    useState(false),
    useState(false)
  ];
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const handleMouseEnter = (index) => {
    linkStates[index][1](true);
  };

  const handleMouseLeave = (index) => {
    linkStates[index][1](false);
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
             <li 
              className={linkStates[0][0] ? 'spacingSpaced' : 'spacing'}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}>
                Histoire de la troupe
                </li>
            </Link>
            <Link to="/dramas" onClick={handleShowLinks}>
            <li 
              className={linkStates[1][0] ? 'spacingSpaced' : 'spacing'}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}>
                Nos réalisations
                </li>
             </Link>
            <Link to="/pressReview" onClick={handleShowLinks}>
            <li 
              className={linkStates[2][0] ? 'spacingSpaced' : 'spacing'}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}>
                On parle de nous
                </li>
             </Link>
            <Link to="/contact" onClick={handleShowLinks}>
            <li 
              className={linkStates[3][0] ? 'spacingSpaced' : 'spacing'}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}>
                Contact
                </li>
             </Link>
          </ul>
        </nav>
        <div id="HeadDecoration"></div>
    </section>
  );
}

export default Header;
