import { useState } from "react";
import Title from "../Title/Title"
import dramas from "../../assets/images/data/dramas.json";
import "./Picture.scss";

function Picture() {
  const [selectedDrama, setSelectedDrama] = useState("");

  function handleDramaChange(event) {
    const selectedTitle = event.target.getAttribute("data-title");
    setSelectedDrama(selectedTitle);
  }

  return (
    <div id="picture">
      <Title text="Galerie de photos" />
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
