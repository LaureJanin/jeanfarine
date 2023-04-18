import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title/Title"
import DramaTheater from "../components/DramaTheater/DramaTheater";
import dramas from "../assets/images/data/dramas.json";
import croix from "../assets/images/croix.png";
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
      <Title text="Nos réalisations" />
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
            <h2>{selectDrama.title}</h2>
            <div className="content">
                <h3>Auteur(s) : {selectDrama.author}</h3>
                <Link to="/picture">
                    Photos
                </Link>
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