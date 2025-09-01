import "./styles/home.scss";
import { useState } from "react";

function Home() {
  const [isQuiSommesNousVisible, setIsQuiSommesNousVisible] = useState(true);

  const closeQuiSommesNous = () => {
    setIsQuiSommesNousVisible(false);
  };

  return (
      <section id="home">
        <h1>BIENVENUE SUR LE SITE DES JEAN FARINE</h1>
        <div className="slider">
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
              <img src="affiche-tous-mes-reves-partent-de-gare-austerlitz.png"
                   alt="Tous mes rêves partent de gare d’Austerlitz" />
            </div>
            <div className="infos">
              <h3>Tous mes rêves partent de gare d’Austerlitz</h3>
              <div className="auteurs">
                <p>
                  Une pièce de : <span className="nom">Mohamed Kacimi</span>
                </p>
                <p>
                  Mise en scène : <span className="nom">Catherine Albaladejo</span>
                </p>
              </div>


              <div className="dates">
                <p>Samedi 29 novembre 2025 - 20h30</p>
                <p>Dimanche 30 novembre 2025 - 15h</p>
              </div>

              <div className="lieu">
                <p className="nom">Salle des fêtes de Nuelles</p>
                <p>Esplanade des Anciens Combattants</p>
                <p>SAINT GERMAIN NUELLES</p>
              </div>

              <div className="duree-tarif">
                <p>Durée : <span className="nom">90 min</span> – Tarif : <span className="nom">10 €</span></p>
                <p>Pièce déconseillée aux moins de 12 ans</p>
              </div>

              <p className="resume">
                Dans la bibliothèque d’une prison, des femmes se retrouvent pour partager un repas
                de Noël. Entre éclats de rire, confidences et tensions, elles s’inventent un moment
                d’évasion. L’arrivée d’une nouvelle détenue vient bousculer l’équilibre du groupe.
                Un huis clos sensible et puissant qui s'affranchit, le temps d'une soirée, de l'enfermement.
              </p>

              <div className="button">
                <a
                  href="https://www.helloasso.com/associations/les-jean-farine/evenements/tous-mes-reves-partent-de-gare-d-austerlitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-reservation"
                  aria-label="Ouvrir la billetterie dans un nouvel onglet"
                >
                  Réservez vos places
                </a>
              </div>

              <p>Renseignements : 06 52 18 45 40 </p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Home;
