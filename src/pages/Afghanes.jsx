import React, { useEffect } from "react";
import "./styles/afghanes.scss";
import affiche from "../../public/affiche-soutien-femmes-afghanes.jpg";
import logo from "../../public/affiche-soutien-femmes-afghanes_logo.png";

function Afghanes() {
  useEffect(() => {
    document.title = "Solidarité Femmes Afghanes";
  }, []);

  return (
    <section id="Afghanes">
      <div className="wrapper">
        <div className="container">
          <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="main-title">Soutien aux filles et femmes Afghanes</h1>
          </header>

          <div className="intro-section">
            <p>
              Suite au retour des Talibans au pouvoir le 15 août 2021, les <em>femmes afghanes</em> ont été écartées de l’espace
              public. Les jeunes filles sont privées d’école dès l’âge de 11 ans.
            </p>
            <p>
              En prenant conscience du changement brutal quant à la vie de chacune de ces jeunes filles et femmes, nous
              avons souhaité organiser un <em>événement inter-associatif</em> au sein de notre
              commune pour témoigner de notre solidarité et leur apporter un soutien financier.
            </p>
            <p>
              Porté par notre association <em>Les Jean Farine</em>, le projet a été rejoint par plusieurs autres personnes (de la commune Saint Germain Nuelles et alentours) pour former le collectif : <em>« Solidarité Femmes Afghanes »</em>.
            </p>
            <p>
              Dans cette optique, nous avons décidé de soutenir l'initiative d'<em>Hamida Aman</em>, fondatrice de l'ONG <em>BOW (Begum, Organisation for Women)</em>, 
              qui se consacre à la cause des femmes afghanes. 
            </p>
            <p>En plus de sa contribution via <em>Radio Begum</em>, une radio éducative destinée aux femmes privées d'accès à l'enseignement, 
              elle a rédigé la préface du livre <em>Résistance Renaissance</em>, où elle met en avant la résilience des femmes face à l'oppression. 
              Son engagement profond pour leur autonomisation inspire notre volonté de solidarité.</p>
          </div>

          <div className="event-section">
            <h2>Événement du 9 novembre 2024</h2>
            <div className="event-content">
              <img src={affiche} alt="Affiche de l'évènement Solidarité femmes afghanes" className="event-poster" />
              <div className="event-details">
                <p>
                  Rejoignez-nous pour une journée de solidarité et de soutien aux <em>filles et femmes afghanes</em>, avec des interventions, des expositions et des performances artistiques.
                </p>
                <ul>
                  <li><em>Date :</em> 9 novembre 2024</li>
                  <li><em>Lieu :</em> Salle du Colombier 137 Imp. du Stade, 69210 Saint-Germain-Nuelles</li>
                  <li><em>Heure :</em> 10h - 20h30</li>
                  <li><em>Restauration :</em> possibilité de réserver des plats afghans avec le Tacot Toqué au 06 52 24 82 42</li>
                  <li>Le livre <em>Résistance, Renaissance</em> sera mis en vente sur place : prix
                  24 € règlement par chèque ou espèces</li>

                </ul>
                <p><em>Ensemble, cultivons l'espoir</em></p>
                <a
                  href="https://www.helloasso.com/associations/les-jean-farine/collectes/solidarite-femmes-afghanes"
                  className="cta-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Je fais un don
                </a>
              </div>
            </div>
          </div>

          <div className="radio-section">
            <h2>Le choix de l'association : Radio Begum</h2>
            <p>
              Avec l’arrivée des talibans au pouvoir, un soutien à la situation des femmes afghanes est devenu indispensable.
            </p>
            <p>
              L’association <em>Radio Begum</em> est née le 8 mai 2021 à Kaboul. Cette radio diffuse à des milliers de jeunes filles et de femmes un enseignement et une éducation couvrant divers domaines tels que la santé et le soutien psychologique. Elle émet sur bande FM depuis la capitale afghane dans 19 provinces, employant une centaine de salariées dont des journalistes, reporters, et spécialistes pédagogiques.
            </p>
            <p>
              Radio Begum est le seul espace d’écoute et d’échange pour des milliers de femmes afghanes, touchant <em>3 millions d’auditrices</em> et collaborant avec des écoles clandestines, offrant ainsi un lien social et un soutien vital.
            </p>
            <p>
              Inspirées par une interview d’<em>Hamida Aman</em>, fondatrice de l'association, diffusée sur ARTE, nous, enseignantes à la retraite, avons été profondément touchées et souhaitons apporter notre soutien à cette initiative essentielle.
            </p>
            <div className="book-section">
                <img src="resistance-renaissance.jpg" alt="Couverture du livre Résistance Renaissance" />
              <p>
                Hamida Aman a également rédigé la préface du livre <em>Résistance Renaissance</em>, un recueil de textes de plusieurs auteurs et autrices, dénonçant les droits des femmes trop souvent bafoués. Ce livre rassemble les voix de nombreux intellectuels engagés pour la cause des femmes. 
              </p>
            </div>
            <p>Les dons récoltés iront aux bénévoles qui aident au fonctionnement de l’association, au maintien des antennes relais qui émettent en dehors de Kaboul dans différentes provinces de l’Afghanistan, et au financement des salaires des afghanes.</p>
          </div>
        </div>
        <footer className="footer">
          <p>Pour plus d'informations, contactez-nous à <a href="mailto:jean.farine@free.fr">jean.farine@free.fr</a></p>
          <p>&copy; 2024 Les Jean Farine - Tous droits réservés.</p>
        </footer>
      </div>
    </section>
  );
}

export default Afghanes;
