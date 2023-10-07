import { useState, useEffect } from "react";
import dramas from "../../assets/images/data/dramas.json";
import "./Picture.scss";

function Picture() {
  const [selectedDrama, setSelectedDrama] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dramaTitle = params.get("drama");
    if (dramaTitle) {
      setSelectedDrama(decodeURIComponent(dramaTitle));
    }
  }, [location.search]);

  function handleDramaChange(event) {
    const selectedTitle = event.target.getAttribute("data-title");
    setSelectedDrama(selectedTitle);
  }

  return (
    <div id="picture">
      <h1>GALERIE DE PHOTOS</h1>
      <div className="menuDeroulant">
        <ul className="mySelect" value={selectedDrama} onClick={handleDramaChange}>
          <li className="myOption" data-title={selectedDrama || ""}>
            {selectedDrama || "Sélectionnez une pièce "} &nbsp;&nbsp;&nbsp; {"▼"}
          </li>
          <li className="myOption" data-title="">Sélectionnez une pièce</li>
          {dramas.map((drama) => (
            <li className="myOption" key={drama.title} data-title={drama.title} onClick={handleDramaChange}>
              {drama.title}
            </li>
          ))}
        </ul>
      </div>
      {!selectedDrama ? (
        <div className="gallery">
          {dramas.map((drama) =>
            drama.pictures.map((picture, index) => (
              <img key={index} src={picture} alt={`Picture ${index}`} />
            ))
          )}
        </div>
      ) : (
        <div className="gallery">
          {dramas
            .find((drama) => drama.title === selectedDrama)
            .pictures.map((picture, index) => (
              <img key={index} src={picture} alt={`Picture ${index}`} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Picture;
