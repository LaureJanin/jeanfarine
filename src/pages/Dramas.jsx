import { useState } from "react";
import DramaTheater from "../components/DramaTheater/DramaTheater";
import dramas from "../assets/images/data/dramas.json";
import croix from "../assets/images/croix.png";
import "./styles/dramas.scss";

function Dramas() {
  const [selectDrama, setSelectDrama] = useState(false);

  function handleClick(drama) {
    setSelectDrama(drama);
  }

  function handleClose() {
    setSelectDrama(false); 
  }

  const text = "NOS RÉALISATIONS";
  const letters = [...text].map((letter, index) => (
			<div className="wrapper" key={index}>
			<div className="letter">{letter}</div>
			<div className="shadow">{letter}</div>
			</div>
  ));

  return (
    <section id="dramas">
      <div className="text">{letters}</div>
      <div className="grid">
        {dramas.map((drama) => (
          <DramaTheater key={drama.id} drama={drama} onClick={() => handleClick(drama)} />
        ))}
      </div>
      {selectDrama && (
        <div className="fond">
          <div className="box">
            <button onClick={handleClose}>
              <img src={croix} alt="close window"/>
            </button>
            <img className="imgFond" src={selectDrama.image} alt={selectDrama.title} />
            <h2>{selectDrama.title}</h2>
            <div className="content">
                <h3>Auteur : {selectDrama.author}</h3>
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