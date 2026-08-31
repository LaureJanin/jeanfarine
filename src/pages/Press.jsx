import { useState } from "react";
import dramas from "../assets/images/data/dramas.json";
import "./styles/press.scss"

function Press() {
  const [expandedDramas, setExpandedDramas] = useState([]);

  const toggleDrama = (id) => {
    setExpandedDramas((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

    return (
        <>
            <h1>ON EN PARLE...</h1>    
            {dramas.map((drama) => (
            <div id="press" key={drama.id}>
                    <h2 className="titleDrama">
                        {drama.title} de {drama.author}{' '}
                        <span className="arrow" 
                        onClick={() => toggleDrama(drama.id)}
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