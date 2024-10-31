import "./styles/home.scss";
import logo from "../../public/affiche-soutien-femmes-afghanes_logo.png";


function Home() {
  return (
    <section id="home">
      <h1>BIENVENUE SUR LE SITE DES JEAN FARINE</h1>
      <div className="slider">
        <div className="jeanfarine">
          <h2>JEAN FARINE ?</h2>

          <p>
            Ce terme populaire vient du théâtre de la farce, où l’acteur joue un
            imbécile dont la figure enfarinée lui a vallu le nom de <br />«
            Jean-Farine ».
            <br />
            Il se nomme aussi Pierrot.
          </p>
        </div>
      </div>
      <div className="titre">
        <h2>À venir</h2>
      </div>
      <div className="actualite">
        <div className="box">
          <h2>Qui sommes-nous ?</h2>

          <p>
            La troupe Les Jean Farine a été créée en 1997 à Saint Germain
            Nuelles par un groupe de parents d'élèves.
            <br />
            <br />
            Amateurs passionnés de théâtre, nous jouons différentes pièces tout
            public dans lesquelles l'humour tient souvent le premier rôle.
            <br />
            <br />
            Restez connecté pour en savoir plus.
          </p>
        </div>
        <div className="box">
          <h2>Actualités</h2>            
            <p>
            L'association Les Jean Farine organise un évènement le <span id="bold">9 novembre 2024</span> pour témoigner de sa solidarité et apporter un soutien financier aux <span id="bold">jeunes filles et femmes afghanes</span>, privées de leurs droits
            fondamentaux.
              <br />
              <br />
              <span id="bold">Au programme :</span> ateliers créatifs, exposition, chorale, conférence et spectacle.
              <br />
              <br />
              <a href="./afghanes" target="_blank">
                <img src={logo} alt="Logo" className="logo" />
                <span id="italic">Cliquer ici pour en savoir plus</span>
              </a>
            </p>
        </div>
      </div>
    </section>
  );
}
export default Home;
