import Title from "../components/Title/Title";
import affiche from "/affiche-carre-de-femmes.png";
import "./styles/home.scss";

function Home() {
    return (
        <section id="home">
            <Title text="Bienvenue sur le site des Jean Farine" />
            <div className="slider">
                <div className="jeanfarine">
                    <h2>JEAN FARINE ?</h2>
                    <p>Ce terme populaire vient du théâtre de la farce, où l’acteur joue un imbécile dont la figure enfarinée lui a vallu le nom de <br />« Jean-Farine ». 
                    <br />Il se nomme aussi Pierrot.
                    </p>
                </div>
            </div>
            <div className="titre">
                <h2>À venir</h2>
            </div>
            <div className="actualite">
                <div className="box">
                    <h2>Qui sommes-nous ?</h2>
                    <p>La troupe des Jean Farine a été créée en 1997 à Saint Germain Nuelles par un groupe de parents d'élèves. 
                    <br />Amateurs passionnés de théâtre, nous jouons différentes pièces tout public dans lesquelles l'humour tient souvent le premier rôle.
                    <br /><br />Restez connecté pour en savoir plus. 
                    </p>
                </div>
                <div className="box">
                    <h2>Actualités</h2>
                    <p>Nous préparons actuellement une nouvelle pièce : <a href={affiche} download><span id="italic">Carré de femmes</span></a>, une comédie de Claude Mercadié.
                    <br />Elle sera jouée lors de notre festival de théâtre amateur, le week-end du <span id="bold"> 24, 25, 26 novembre 2023</span>. 
                    <br />Michel Bernier nous aide une nouvelle fois pour la mise en scène. Une autre date sera annoncée prochainement.
                    </p>
                </div>
            </div>
            <img className="affiche" src={affiche} alt="affiche de la pièce Carré de femmes mise en scène par la troupe des Jean Farine" />
        </section>
    )
}
export default Home