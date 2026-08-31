import { useState, useEffect } from "react";
import dramas from "../../assets/images/data/dramas.json";
import "./Picture.scss";

function Picture() {
  const [selectedDrama, setSelectedDrama] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dramaTitle = params.get("drama");
    if (dramaTitle) {
      setSelectedDrama(decodeURIComponent(dramaTitle));
    }
  }, [location.search]);

  function handleDramaChange(event) {
    const selectedTitle = event.target.getAttribute("data-title");
    if (selectedTitle !== null && event.target !== event.currentTarget.firstChild) {
      setSelectedDrama(selectedTitle);
      setIsMenuOpen(false);
    }
  }

  function toggleMenu(event) {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div id="picture">
      <h1>GALERIE DE PHOTOS</h1>
      <div className="menuDeroulant">
        <ul className={`mySelect ${isMenuOpen ? 'open' : ''}`} onClick={handleDramaChange}>
          <li className="myOption" data-title={selectedDrama || ""} onClick={toggleMenu}>
            {selectedDrama || "Sélectionnez une pièce "} &nbsp;&nbsp;&nbsp; {"▼"}
          </li>
          <li className="myOption" data-title="">Sélectionnez une pièce</li>
          {dramas.map((drama) => (
            <li className="myOption" key={drama.title} data-title={drama.title}>
              {drama.title}
            </li>
          ))}
        </ul>
      </div>
      {!selectedDrama ? (
        <div className="no-selection">
          <p>Sélectionnez une pièce pour voir les photos et vidéos</p>
        </div>
      ) : (
        <>
          {dramas.find((drama) => drama.title === selectedDrama)?.videos && (
            <div className="videos-section">
              <h2>Vidéos</h2>
              <div className="videos-gallery">
                {dramas
                  .find((drama) => drama.title === selectedDrama)
                  .videos.map((video, index) => (
                    <video
                      key={index}
                      controls
                      preload="none"
                      poster={video.replace(/\.[^.]+$/, "-poster.jpg")}
                    >
                      <source src={video} type={video.endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'} />
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  ))}
              </div>
            </div>
          )}
          <div className="gallery">
            {dramas
              .find((drama) => drama.title === selectedDrama)
              .pictures.map((picture, index) => (
                <img key={index} src={picture} alt={`Picture ${index}`} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Picture;
