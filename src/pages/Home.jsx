import "./styles/home.scss";
import { useState, useEffect } from "react";
import dramas from "../assets/images/data/dramas.json";

const DUREE_SLIDE = 6000;

// Images sélectionnées pour le slider
const sliderImages = [
  "photos/fenwick/Palmes_Schutz_c.jpg",
  "photos/jaouiBacri/Pieces_Un_air_famille2.jpg",
  "photos/ionesco/DSC_9227.jpg",
  "photos/moliere/IMG_1639.jpg",
  "photos/girerd/DSC_3662.jpg",
  "photos/brecht/JAC_3512_2.jpg",
  "photos/marivaux/JAC_2288.jpg",
  "photos/durvinPrevost/JAC_2970.jpg",
  "photos/mercadie/carre-de-femme2.jpg",
  "photos/kacimi/IMG_1861.jpeg"
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [enPause, setEnPause] = useState(false);
  // loading="lazy" ne différerait rien ici : les dix diapositives sont
  // superposées dans la zone visible. On ne pose donc l'image que sur la photo
  // courante et la suivante, préchargée pendant l'affichage de la précédente.
  const [photosPosees, setPhotosPosees] = useState(() => new Set([0, 1]));

  useEffect(() => {
    const suivante = (currentSlide + 1) % sliderImages.length;
    setPhotosPosees((prev) =>
      prev.has(currentSlide) && prev.has(suivante)
        ? prev
        : new Set(prev).add(currentSlide).add(suivante)
    );
  }, [currentSlide]);

  const allerA = (index) => {
    setCurrentSlide((index + sliderImages.length) % sliderImages.length);
  };

  // currentSlide fait partie des dépendances pour que le compte à rebours
  // reparte de zéro après une navigation manuelle.
  useEffect(() => {
    if (enPause) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, DUREE_SLIDE);

    return () => clearInterval(interval);
  }, [enPause, currentSlide]);

  const gererClavier = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      allerA(currentSlide - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      allerA(currentSlide + 1);
    }
  };

  return (
      <section id="home">
        <h1>BIENVENUE SUR LE SITE DES JEAN FARINE</h1>
        <div
          className="slider"
          role="region"
          aria-roledescription="carrousel"
          aria-label="Photos des spectacles de la troupe"
          onMouseEnter={() => setEnPause(true)}
          onMouseLeave={() => setEnPause(false)}
          onFocus={() => setEnPause(true)}
          onBlur={() => setEnPause(false)}
          onKeyDown={gererClavier}
        >
          <div className="slides">
            {sliderImages.map((image, index) => (
              <div
                key={image}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={
                  photosPosees.has(index)
                    ? { backgroundImage: `url("${image}")` }
                    : undefined
                }
                aria-hidden={index !== currentSlide}
              />
            ))}
          </div>

          <div className="pastilles">
            {sliderImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={index === currentSlide ? 'active' : ''}
                onClick={() => allerA(index)}
                aria-label={`Afficher la photo ${index + 1} sur ${sliderImages.length}`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>

          <div className="jeanfarine">
            <h2>JEAN FARINE ?</h2>
            <p>
              Ce terme populaire vient du théâtre de la farce, où l'acteur joue un
              imbécile dont la figure enfarinée lui a vallu le nom de <br />«
              Jean-Farine ».
              <br />
              On le nomme aussi Pierrot.
            </p>
          </div>
        </div>

        <div className="qui-sommes-nous">
          <p>
            <span className="nom">Qui sommes-nous ?</span> La troupe Les Jean Farine a été créée en 1997 à Saint Germain
            Nuelles par un groupe de parents d'élèves. Amateurs passionnés de théâtre, nous jouons différentes pièces tout
            public dans lesquelles l'humour tient souvent le premier rôle.
          </p>
        </div>

        <div className="actualite">
          <h2>Actualités</h2>

          <div className="box two-columns">
            <div className="photo">
              <img
                src="affiche-festival-theatre-amateur-2026.jpg"
                alt="Affiche : 9e Festival de théâtre amateur 2026, présenté par La Treille et Les Jean Farine, salle de spectacle L’Écrin à Saint Germain Nuelles les 27, 28 et 29 novembre 2026."
              />
            </div>
            <div className="infos">
              <h3>Prochainement : 9e Festival de théâtre amateur</h3>
              <div className="auteurs">
                <p>
                  Présenté par : <span className="nom">La Treille</span> et{" "}
                  <span className="nom">Les Jean Farine</span>
                </p>
              </div>

              <div className="dates">
                <p>Vendredi 27, samedi 28 et dimanche 29 novembre 2026</p>
              </div>

              <div className="lieu">
                <p className="nom">Salle de spectacle L’Écrin</p>
                <p>Esplanade des Anciens Combattants</p>
                <p>Bourg de Nuelles — 69210 SAINT GERMAIN NUELLES</p>
              </div>

              <div className="duree-tarif">
                <p>Tarifs :</p>
                <ul>
                  <li>
                    <span className="nom">10 €</span> le billet à l’unité
                  </li>
                  <li>
                    <span className="nom">8 €</span> pour les adhérents de La Treille et des Jean
                    Farine, les moins de 18 ans et les étudiants
                  </li>
                  <li>
                    <span className="nom">40 €</span> le pass festival (non nominatif)
                  </li>
                </ul>
              </div>

              <div className="resume">
                <p>Sept spectacles en trois jours dans la nouvelle salle L’Écrin.</p>
                <p>
                  Les Jean Farine y jouent « Tous mes rêves partent de gare d’Austerlitz » le
                  dimanche 29 novembre à 11h.
                </p>
                <p>
                  Mâchon offert après les spectacles du samedi et du dimanche matin, et Le Troquet
                  du Festival ouvert toute la journée en dehors des représentations.
                </p>
              </div>

              <div className="button">
                <a
                  href="https://www.helloasso.com/associations/la-treille/evenements/festival-de-theatre-amateur-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-reservation"
                  aria-label="Ouvrir la billetterie du festival dans un nouvel onglet"
                >
                  Réservez vos places
                </a>
              </div>

              <p>Renseignements : jeanfarine.fr — 06 52 18 45 40</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Home;
