import { useState } from "react";
import Lottie from "react-lottie-player";
import dramas from "../../assets/images/data/dramas.json";
import pictures from "../../assets/images/lottie/pictures.json";
import "./Picture.scss";

function Picture() {
  const [selectedDrama, setSelectedDrama] = useState("");

  function handleDramaChange(event) {
    const selectedTitle = event.target.getAttribute("data-title");
    setSelectedDrama(selectedTitle);
  }

  return (
    <div id="picture">
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
      {selectedDrama ? (
        <div className="gallery">
          {dramas
            .find((drama) => drama.title === selectedDrama)
            .pictures.map((picture, index) => (
              <img key={index} src={picture} alt={`Picture ${index}`} />
            ))}
        </div>
      ) : (
        <div className="lottie">
          <Lottie loop animationData={pictures} play />
        </div>
      )}
    </div>
  );
}

export default Picture;
