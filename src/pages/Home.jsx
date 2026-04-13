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
                src="affiche-tous-mes-reves-partent-de-gare-austerlitz.png"
                alt="Affiche : Tous mes rêves partent de gare d’Austerlitz, pièce de Mohamed Kacimi, Cie Les Jean Farine à Lentilly les 16 et 23 avril 2026."
              />
            </div>
            <div className="infos">
              <h3>En ce moment : Tous mes rêves partent de gare d’Austerlitz</h3>
                            <div className="auteurs">
                <p>
                  Une pièce de : <span className="nom">Mohamed Kacimi</span>
                </p>
                <p>
                  Mise en scène : <span className="nom">Catherine Albaladejo</span>
                </p>
              </div>

              <div className="dates">
                <p>Jeudis 16 avril et 23 avril 2026 à 20h</p>
              </div>

              <div className="lieu">
                <p className="nom">Espace culturel La Passerelle</p>
                <p>15 rue Chatelard Dru</p>
                <p>LENTILLY</p>
              </div>

              <div className="duree-tarif">
                <p>Durée : <span className="nom">90 min</span></p>
                <p>À partir de 14 ans</p>
                <p>
                  Tarif : <span className="nom">5 €</span> sur HelloAsso,{" "}
                  <span className="nom">8 €</span> sur place
                </p>
              </div>

              <p className="resume">
                « Tranches de vie de femmes en prison mais où l’humour reste de mise. » Dans la
                bibliothèque d’une prison, des femmes se retrouvent pour partager un repas de Noël.
                Entre éclats de rire, confidences et tensions, elles s’inventent un moment d’évasion.
              </p>

              <div className="button">
                <a
                  href="https://www.helloasso.com/associations/les-jean-farine/evenements/tous-mes-reves-partent-de-gare-d-austerlitz-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-reservation"
                  aria-label="Ouvrir la billetterie dans un nouvel onglet"
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
