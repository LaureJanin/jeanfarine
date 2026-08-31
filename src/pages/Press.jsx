import { useRef, useState } from "react";
import dramas from "../assets/images/data/dramas.json";
import Lightbox from "../components/Lightbox/Lightbox";
import "./styles/press.scss";

const avecArticles = dramas.filter((drama) => drama.press?.length);

function Press() {
  const [ouverte, setOuverte] = useState(null);
  const [agrandi, setAgrandi] = useState(null);
  const declencheurRef = useRef(null);

  function basculer(id) {
    setOuverte((prev) => (prev === id ? null : id));
  }

  function ouvrirLightbox(drama, index, event) {
    declencheurRef.current = event.currentTarget;
    setAgrandi({ drama, index });
  }

  function fermerLightbox() {
    setAgrandi(null);
    declencheurRef.current?.focus();
  }

  return (
    <div id="press">
      <h1>On en parle…</h1>

      <p className="chapeau">
        Ce que la presse locale a écrit sur nos spectacles, depuis la première en 1999.
      </p>

      <ul className="revue">
        {avecArticles.map((drama, index) => {
          const estOuverte = ouverte === drama.id;
          const nb = drama.press.length;

          return (
            <li
              key={drama.id}
              className={estOuverte ? "ouverte" : ""}
              style={{ animationDelay: `calc(var(--cadence) * ${index})` }}
            >
              <h2>
                <button
                  type="button"
                  className="entete"
                  aria-expanded={estOuverte}
                  aria-controls={`articles-${drama.id}`}
                  onClick={() => basculer(drama.id)}
                >
                  <span className="intitule">
                    <span className="titre">{drama.title}</span>
                    <span className="auteur">de {drama.author}</span>
                  </span>
                  <span className="compte">
                    {nb} article{nb > 1 ? "s" : ""}
                  </span>
                  <span className="chevron" aria-hidden="true">
                    ▾
                  </span>
                </button>
              </h2>

              {/* L'enveloppe reste montée pour que la hauteur s'anime aussi à la fermeture. */}
              <div className="enveloppe">
                <div className="articles" id={`articles-${drama.id}`}>
                  <p className="aide">Cliquez sur un article pour le lire en grand.</p>
                  <div className="etagere">
                    {drama.press.map((article, index) => (
                      <button
                        type="button"
                        key={article}
                        className="article"
                        onClick={(event) => ouvrirLightbox(drama, index, event)}
                        aria-label={`Agrandir l’article ${index + 1} sur ${nb} — ${drama.title}`}
                      >
                        <img src={article} alt="" loading="lazy" decoding="async" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {agrandi && (
        <Lightbox
          images={agrandi.drama.press.map((article, index) => ({
            src: article,
            alt: `Article de presse ${index + 1} sur ${agrandi.drama.press.length} — ${agrandi.drama.title}`,
          }))}
          depart={agrandi.index}
          titre={agrandi.drama.title}
          onFermer={fermerLightbox}
        />
      )}
    </div>
  );
}

export default Press;
