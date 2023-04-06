import "./styles/home.scss"

function Home() {
  const text = "BIENVENUE SUR LE SITE DES JEAN FARINE";
  const letters = [...text].map((letter, index) => (
    <div className="wrapper" key={index}>
      <div className="letter">{letter}</div>
      <div className="shadow">{letter}</div>
    </div>
  ));
    return (
        <section id="home">
            <div className="text">{letters}</div>
            <div className="slider">
                <div className="jeanfarine">
                    <h2>JEAN FARINE ?</h2>
                    <p>C'est un niais, un benet. 
                    <br />Ce terme populaire vient du théâtre de la farce, où l’acteur joue un imbécile dont la figure enfarinée lui a vallu le nom de "Jean-Farine". 
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
                    <p>La troupe des Jean Farine a été créée en 1997 à Saint Germain Nuelles. 
                    Amateurs passionnés de théâtre, nous jouons différentes pièces tout public dans lesquelles l'humour tient souvent le premier rôle.
                    </p>
                </div>
                <div className="box">
                    <h2>Actualités</h2>
                    <p>Notre nouvelle pièce en préparation, <span id="italic">Le truc du Tralala</span>, actuellement en répétition, sera jouée prochainement. 
                    Des dates seront annoncées prochainement.
                    Restez connecté pour en savoir plus. 
                    </p>
                </div>
            </div> 
        </section>
    )
}
export default Home