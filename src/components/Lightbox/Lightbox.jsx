import { useCallback, useEffect, useRef, useState } from "react";
import "./Lightbox.scss";

// Visionneuse plein écran partagée par la galerie et la page Presse.
// Le parent monte le composant quand `depart` est défini et rend le focus
// à l'élément déclencheur dans `onFermer`.
function Lightbox({ images, depart, titre, onFermer }) {
  const [index, setIndex] = useState(depart);
  const conteneurRef = useRef(null);

  const deplacer = useCallback(
    (pas) => setIndex((i) => (i + pas + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    conteneurRef.current?.focus();
    document.body.style.overflow = "hidden";

    function auClavier(event) {
      if (event.key === "Escape") onFermer();
      if (event.key === "ArrowRight") deplacer(1);
      if (event.key === "ArrowLeft") deplacer(-1);
    }

    document.addEventListener("keydown", auClavier);
    return () => {
      document.removeEventListener("keydown", auClavier);
      document.body.style.overflow = "";
    };
  }, [deplacer, onFermer]);

  const image = images[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.alt} (${index + 1} sur ${images.length})`}
      tabIndex={-1}
      ref={conteneurRef}
      onClick={onFermer}
    >
      <button type="button" className="fermer" aria-label="Fermer" onClick={onFermer}>
        ×
      </button>

      <img src={image.src} alt={image.alt} onClick={(event) => event.stopPropagation()} />

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="precedente"
            aria-label="Précédent"
            onClick={(event) => {
              event.stopPropagation();
              deplacer(-1);
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="suivante"
            aria-label="Suivant"
            onClick={(event) => {
              event.stopPropagation();
              deplacer(1);
            }}
          >
            ›
          </button>
        </>
      )}

      <p className="compteur">
        {titre}
        {images.length > 1 && ` — ${index + 1} / ${images.length}`}
      </p>
    </div>
  );
}

export default Lightbox;
