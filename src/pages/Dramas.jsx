import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DramaTheater from "../components/DramaTheater/DramaTheater";
import dramas from "../assets/images/data/dramas.json";
import "./styles/dramas.scss";

const DUREE_FERMETURE = 300;

function Dramas() {
  const [selectDrama, setSelectDrama] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const fiche = useRef(null);
  // Carte cliquée, pour y ramener le focus à la fermeture.
  const declencheur = useRef(null);
  // Le minuteur de fermeture vit dans une référence : sans cela il survivait à
  // la fermeture et refermait la fiche suivante si on rouvrait dans l'intervalle.
  const minuteur = useRef(null);

  function handleClick(drama, evenement) {
    clearTimeout(minuteur.current);
    minuteur.current = null;
    setIsClosing(false);
    declencheur.current = evenement.currentTarget;
    setSelectDrama(drama);
  }

  function handleClose() {
    if (minuteur.current) return;
    setIsClosing(true);
    minuteur.current = setTimeout(() => {
      minuteur.current = null;
      setSelectDrama(false);
      setIsClosing(false);
      declencheur.current?.focus();
    }, DUREE_FERMETURE);
  }

  useEffect(() => () => clearTimeout(minuteur.current), []);

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
      <h1>Nos réalisations</h1>

      <p className="chapeau">
        Dix pièces montées depuis 1999. Cliquez sur une pièce pour en lire l’histoire.
      </p>

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
          className={`fond${isClosing ? " closing" : ""}`}
          ref={fiche}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="titre-fiche"
        >
          {/* La photo de la pièce en fond, très assombrie : elle donne son
              atmosphère à la fiche sans disputer la lisibilité du texte. */}
          <img className="imgFond" src={selectDrama.image} alt="" aria-hidden="true" />

          <div className="box">
            <button
              type="button"
              className="fermer"
              onClick={handleClose}
              aria-label="Fermer la fiche"
            >
              ×
            </button>

            <p className="annee">{selectDrama.year}</p>
            <h2 id="titre-fiche">{selectDrama.title}</h2>
            <p className="auteur">de {selectDrama.author}</p>

            <dl className="generique">
              {selectDrama.director && (
                <div>
                  <dt>Mise en scène</dt>
                  <dd>{selectDrama.director}</dd>
                </div>
              )}
              {selectDrama.soundAndLight && (
                <div>
                  <dt>Son et lumière</dt>
                  <dd>{selectDrama.soundAndLight}</dd>
                </div>
              )}
            </dl>

            <Link
              className="lien-galerie"
              to={`/picture?drama=${encodeURIComponent(selectDrama.title)}`}
            >
              Voir les photos
            </Link>

            <div
              className="resume"
              dangerouslySetInnerHTML={{ __html: selectDrama.description }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Dramas;
