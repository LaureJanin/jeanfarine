import "./styles/festival.scss";
import afficheFestival from "../../public/affiche_festival.jpg";
import boutonFestival from "../../public/bouton_festival.png";
import plaquetteFestival from "../../public/Depliant_Festival_Theatre amateur_2023.pdf";

export default function Festival() {
  return (
    <section id="festival">
      <h1>FESTIVAL DE THÉÂTRE AMATEUR - SAINT GERMAIN NUELLES</h1>
      <div className="festival">
        <div className="infos_festival">
          <p>
            Après 4 ans de pause, le{" "}
            <span id="bold">
              Festival de Théâtre Amateur de Saint Germain Nuelles
            </span>{" "}
            revient pour une 8ème édition, qui aura lieu du
            <br /> <span id="bold">24 au 26 novembre 2023</span>.
            <br />
            <br />
            La troupe des Jean Farine sera au rendez-vous avec une adaptation de
            la pièce de théâtre <span id="italic"> Carré de femmes </span> de
            Claude Mercadié,
            <br />
            samedi 25 novembre à 11h.
          </p>
          <br />
          <p>
            Pour en savoir plus, rendez-vous sur le site{" "}
            <span id="bold">helloasso</span> :
          </p>
          <br />
          <a
            href="https://www.helloasso.com/associations/la-treille/evenements/festival-de-theatre-amateur-2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={boutonFestival} alt="Bouton" className="bouton" />
          </a>
          <p>
            <br />
            Téléchargez{" "}
            <a
              href={plaquetteFestival}
              download="plaquette_festival.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span id="italic"> la plaquette du festival </span>
            </a>{" "}
            pour découvrir le programme complet de l'évènement, les tarifs et
            toutes les informations qui vont bien 😃.
          </p>
        </div>
        <img src={afficheFestival} alt="Affiche du film"/>
      </div>
    </section>
  );
}
