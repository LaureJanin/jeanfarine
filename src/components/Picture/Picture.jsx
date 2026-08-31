import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import dramas from "../../assets/images/data/dramas.json";
import Lightbox from "../Lightbox/Lightbox";
import "./Picture.scss";

// La grille affiche des recadrages 3:2 allégés (public/photos/galerie/…) ;
// la lightbox recharge la photo d'origine.
function vignette(photo) {
  return photo.replace(/^photos\//, "photos/galerie/");
}

function Picture() {
  const [parametres, setParametres] = useSearchParams();
  const [agrandie, setAgrandie] = useState(null);
  const declencheurRef = useRef(null);
  const filtreActifRef = useRef(null);

  const titreChoisi = parametres.get("drama") ?? "";
  const piece = useMemo(() => dramas.find((d) => d.title === titreChoisi), [titreChoisi]);
  const photos = piece?.pictures ?? [];
  const videos = piece?.videos ?? [];

  // La barre de filtres défile horizontalement sur mobile : sans ça, arriver
  // depuis Réalisations laisserait la pièce active hors champ.
  useEffect(() => {
    filtreActifRef.current?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [titreChoisi]);

  function choisirPiece(titre) {
    setParametres(titre ? { drama: titre } : {});
    setAgrandie(null);
  }

  function ouvrirLightbox(index, event) {
    declencheurRef.current = event.currentTarget;
    setAgrandie(index);
  }

  function fermerLightbox() {
    setAgrandie(null);
    declencheurRef.current?.focus();
  }

  return (
    <div id="picture">
      <h1>Galerie de photos</h1>

      <nav className="filtres" aria-label="Choisir une pièce">
        <button
          type="button"
          className={titreChoisi ? "" : "actif"}
          aria-pressed={!titreChoisi}
          ref={titreChoisi ? null : filtreActifRef}
          onClick={() => choisirPiece("")}
        >
          Toutes les pièces
        </button>
        {dramas.map((drama) => (
          <button
            key={drama.id}
            type="button"
            className={drama.title === titreChoisi ? "actif" : ""}
            aria-pressed={drama.title === titreChoisi}
            ref={drama.title === titreChoisi ? filtreActifRef : null}
            onClick={() => choisirPiece(drama.title)}
          >
            {drama.title}
          </button>
        ))}
      </nav>

      {!piece ? (
        <div className="apercus">
          {dramas.map((drama, index) => (
            <button
              key={drama.id}
              type="button"
              className="apercu"
              style={{ animationDelay: `calc(var(--cadence) * ${Math.min(index, 8)})` }}
              onClick={() => choisirPiece(drama.title)}
            >
              <img
                src={drama.thumbnail ?? drama.image}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="legende">
                <span className="titre">{drama.title}</span>
                <span className="compte">
                  {(drama.pictures?.length ?? 0) + " photos"}
                  {drama.videos?.length ? ` · ${drama.videos.length} vidéos` : ""}
                </span>
              </span>
            </button>
          ))}
        </div>
      ) : (
        <>
          <h2 className="piece-titre">{piece.title}</h2>

          {videos.length > 0 && (
            <section className="videos-section">
              <h3>Vidéos</h3>
              <div className="videos-gallery">
                {videos.map((video) => (
                  <video
                    key={video}
                    controls
                    preload="none"
                    poster={video.replace(/\.[^.]+$/, "-poster.jpg")}
                  >
                    <source
                      src={video}
                      type={video.endsWith(".mp4") ? "video/mp4" : "video/quicktime"}
                    />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                ))}
              </div>
            </section>
          )}

          <section className="photos-section">
            <h3>Photos</h3>
            <div className="gallery">
              {photos.map((photo, index) => (
                <button
                  key={photo}
                  type="button"
                  className="photo"
                  style={{ animationDelay: `calc(var(--cadence) * ${Math.min(index, 8)})` }}
                  onClick={(event) => ouvrirLightbox(index, event)}
                  aria-label={`Agrandir la photo ${index + 1} sur ${photos.length} — ${piece.title}`}
                >
                  <img
                    src={vignette(photo)}
                    alt={`${piece.title} — photo ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          </section>
        </>
      )}

      {agrandie !== null && (
        <Lightbox
          images={photos.map((photo, index) => ({
            src: photo,
            alt: `${piece.title} — photo ${index + 1}`,
          }))}
          depart={agrandie}
          titre={piece.title}
          onFermer={fermerLightbox}
        />
      )}
    </div>
  );
}

export default Picture;
