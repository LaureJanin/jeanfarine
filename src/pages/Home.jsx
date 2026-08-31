import "./styles/home.scss";
import { useState, useEffect } from "react";
import dramas from "../assets/images/data/dramas.json";

function Home() {
  const [isQuiSommesNousVisible, setIsQuiSommesNousVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const closeQuiSommesNous = () => {
    setIsQuiSommesNousVisible(false);
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
      <section id="home">
        <h1>BIENVENUE SUR LE SITE DES JEAN FARINE</h1>
        <div className="slider">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
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

        {isQuiSommesNousVisible && (
            <div className="qui-sommes-nous-message">
              <button className="close-btn" onClick={closeQuiSommesNous}>
                ×
              </button>
              <div className="message-content">
                <p>
                  <span className="nom">Qui sommes-nous ?</span> La troupe Les Jean Farine a été créée en 1997 à Saint Germain
                  Nuelles par un groupe de parents d'élèves. Amateurs passionnés de théâtre, nous jouons différentes pièces tout
                  public dans lesquelles l'humour tient souvent le premier rôle.
                </p>
              </div>
            </div>
        )}

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
                <p>
                  Tarif : <span className="nom">10 €</span> le billet à l’unité
                </p>
                <p>
                  <span className="nom">8 €</span> pour les adhérents de La Treille et des Jean
                  Farine, les moins de 18 ans et les étudiants
                </p>
                <p>
                  <span className="nom">40 €</span> le pass festival (non nominatif)
                </p>
              </div>

              <p className="resume">
                Six spectacles en trois jours dans la toute nouvelle salle de l’Écrin. Les Jean
                Farine y jouent « Tous mes rêves partent de gare d’Austerlitz » le samedi 28
                novembre à 17h. Mâchon offert après les spectacles du samedi et du dimanche matin,
                et Le Troquet du Festival ouvert toute la journée.
              </p>

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
