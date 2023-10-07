import { useState } from "react";
import { Link } from "react-router-dom";
import DramaTheater from "../components/DramaTheater/DramaTheater";
import dramas from "../assets/images/data/dramas.json";
import Lottie from "react-lottie-player";
import croix from "../assets/images/croix.png";
import croix2 from "../assets/images/croix2.png";
import camera from "../assets/images/lottie/camera.json";
import "./styles/dramas.scss";

function Dramas() {
  const [selectDrama, setSelectDrama] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function handleClick(drama) {
    setSelectDrama(drama);
  }

  function handleClose() {
    setIsClosing(true);
    setTimeout(() => {
      setSelectDrama(false);
      setIsClosing(false);
    }, 800);
  }

  return (
    <section id="dramas">
      <h1>NOS RÉALISATIONS</h1>
      <div className="grid">
        {dramas.map((drama) => (
          <DramaTheater key={drama.id} drama={drama} onClick={() => handleClick(drama)} />
        ))}
      </div>
      {selectDrama && (
        <div className={`fond${isClosing ? ' closing' : ''}`}>
          <div className="box">
            <button onClick={handleClose}>
              <img src={croix} alt="close window"/>
            </button>
            <img className="imgFond" src={selectDrama.image} alt={selectDrama.title} />
            <div className="content">
                <button onClick={handleClose}>
                  <img src={croix2} alt="close window"/>
                </button>
                <h2>{selectDrama.title}</h2>
                <Link to={`/picture?drama=${encodeURIComponent(selectDrama.title)}`}>
                  <div className="lottie">
                    <Lottie
                      loop
                      animationData={camera}
                      play
                    />
                  </div>
                </Link>
                <h3>Auteur(s) : {selectDrama.author}</h3>
                <h3>Résumé</h3>
                <p dangerouslySetInnerHTML={{__html: selectDrama.description}}></p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dramas;