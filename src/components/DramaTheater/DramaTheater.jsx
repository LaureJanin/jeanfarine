import "./DramaTheater.scss";

function DramaTheater({ drama, onClick, rang }) {
    return (
      <button
        type="button"
        className="drama-card"
        onClick={onClick}
        style={{ animationDelay: `calc(var(--cadence) * ${Math.min(rang, 8)})` }}
      >
        {/* Vignette carrée de 600px : la photo d'origine fait jusqu'à 2200px de
            large pour un affichage dans 400px. alt vide, la légende juste à côté
            nomme déjà la carte. */}
        <img
          src={drama.thumbnail ?? drama.image}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className="legende">
          <span className="annee">{drama.year}</span>
          <span className="titre">{drama.title}</span>
          <span className="auteur">{drama.author}</span>
        </span>
      </button>
    );
}

export default DramaTheater
