import "./DramaTheater.scss";

function DramaTheater({ drama, onClick, rang }) {
    return (
      <button
        type="button"
        className="drama-card"
        onClick={onClick}
        style={{ animationDelay: `${rang * 90}ms` }}
      >
        {/* Vignette carrée de 600px : la photo d'origine fait jusqu'à 2200px de
            large pour un affichage dans 400px. alt vide, le titre juste à côté
            nomme déjà la carte. */}
        <img
          src={drama.thumbnail ?? drama.image}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <span className="titre">{drama.title}</span>
      </button>
    );
}

export default DramaTheater
