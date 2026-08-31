import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DramaTheater from "../components/DramaTheater/DramaTheater";
import dramas from "../assets/images/data/dramas.json";
import Lottie from "react-lottie-player";
import croix from "../assets/images/croix.png";
import croix2 from "../assets/images/croix2.png";
import camera from "../assets/images/lottie/camera.json";
import "./styles/dramas.scss";

const DUREE_FERMETURE = 800;

function Dramas() {
  const [selectDrama, setSelectDrama] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const fiche = useRef(null);
  // Carte cliquée, pour y ramener le focus à la fermeture.
  const declencheur = useRef(null);

  function handleClick(drama, evenement) {
    declencheur.current = evenement.currentTarget;
    setSelectDrama(drama);
  }

  function handleClose() {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setSelectDrama(false);
      setIsClosing(false);
      declencheur.current?.focus();
    }, DUREE_FERMETURE);
  }

  useEffect(() => {
    if (!selectDrama) return;

    fiche.current?.focus();

    const surTouche = (evenement) => {
      if (evenement.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", surTouche);

    // La page continuait de défiler derrière la fiche.
    const overflowPrecedent = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", surTouche);
      document.body.style.overflow = overflowPrecedent;
    };
  }, [selectDrama]);

  return (
    <section id="dramas">
      <h1>NOS RÉALISATIONS</h1>
      <div className="grid">
        {dramas.map((drama, index) => (
          <DramaTheater
            key={drama.id}
            drama={drama}
            rang={index}
            onClick={(evenement) => handleClick(drama, evenement)}
          />
        ))}
      </div>
      {selectDrama && (
        <div
          className={`fond${isClosing ? ' closing' : ''}`}
          ref={fiche}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="titre-fiche"
        >
          <div className="box">
            <button type="button" onClick={handleClose} aria-label="Fermer la fiche">
              <img src={croix} alt=""/>
            </button>
            <img className="imgFond" src={selectDrama.image} alt={selectDrama.title} />
            <div className="content">
                <button type="button" onClick={handleClose} aria-label="Fermer la fiche">
                  <img src={croix2} alt=""/>
                </button>
                <h2 id="titre-fiche">{selectDrama.title}</h2>
                <Link
                  className="lien-galerie"
                  to={`/picture?drama=${encodeURIComponent(selectDrama.title)}`}
                >
                  <span className="lottie">
                    <Lottie
                      loop
                      animationData={camera}
                      play
                    />
                  </span>
                  Voir les photos
                </Link>
                <h3>Auteur(s) : {selectDrama.author}</h3>
                <h3>Résumé</h3>
                <p dangerouslySetInnerHTML={{__html: selectDrama.description}}></p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dramas;
