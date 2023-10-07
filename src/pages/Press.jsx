import { useState } from "react";
import dramas from "../assets/images/data/dramas.json";
import "./styles/press.scss"

function Press() {
  const [expandedDramas, setExpandedDramas] = useState([]);

  const toggleDrama = (id) => {
    if (expandedDramas.includes(id)) {
      setExpandedDramas(expandedDramas.filter((d) => d !== id));
    } else {
      setExpandedDramas([...expandedDramas, id]);
      if (dramas.find((d) => d.id === id)?.press?.length > 0) {
      }
    }
  };

    return (
        <>
            <h1>ON EN PARLE...</h1>    
            {dramas.map((drama) => (
            <div id="press" key={drama.id}>
                    <h2 className="titleDrama">
                        {drama.title} de {drama.author}{' '}
                        <span className="arrow" 
                        onClick={() => {
                            toggleDrama(drama.id);
                            handleShowArticles;
                          }}
                        >{expandedDramas.includes(drama.id) ? '▲' : '▼'}</span>
                    </h2>
                    {expandedDramas.includes(drama.id) && (
                        <>
                        {drama.press && (
                            <div className="articlePress">
                                {drama.press.map((pressImage) => (
                                    <img
                                    className="imagePress"
                                    key={pressImage}
                                    src={pressImage}
                                    alt="article de presse"
                                    />
                                ))}
                            </div>
                        )}
                        </>
                    )}
                </div>
            ))}
        </>
    )
}

export default Press