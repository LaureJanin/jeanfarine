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
            <div className="slider"></div>
            
            <div className="jeanfarine">
                <h2>Jean Farine ?</h2>
                <p>C'est un niais, un benet. 
                <br />Ce terme populaire vient du théâtre de la farce, où l’acteur joue un imbécile dont la figure enfarinée lui a vallu le nom de "Jean-Farine". 
                <br /> On le nomme aussi Pierrot.
                </p>
            </div>
 
            <div className="actualite"> 
                <h2>Qui sommes nous ?</h2>
                <p>La troupe des Jean Farine a été créée en 1997 à Saint Germain sur L'Arbresle. Amateurs passionnés de théâtre, nous jouons différentes pièces tout public dans lesquelles l'humour tient le premier rôle.</p>
                <h2>Actualités</h2>
                <p>Notre nouvelle pièce en préparation, Le truc du Tralala, actuellement en répétition, sera joué prochainement. Restez connecté pour en savoir plus. Des dates seront annoncées prochainement</p>
            </div> 
        </section>
    )
}
export default Home