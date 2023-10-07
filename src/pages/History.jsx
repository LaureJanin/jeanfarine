import { useEffect } from "react";
import dramas from "../assets/images/data/dramas.json";
import "./styles/history.scss"

function History() {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
		  entries.forEach((entry) => {
			if (entry.isIntersecting) {
			  entry.target.classList.add("show");
			} else {
			  entry.target.classList.remove("show");
			}
		  });
		});
	
		const hiddenElements = document.querySelectorAll(".hidden");
		hiddenElements.forEach((el) => observer.observe(el));
	}, []);

    return (
        <section id="history">
            <h1>HISTOIRE</h1>
			<p className="intro">En 1997, un groupe de parents d'élèves de l'école de Saint Germain Nuelles se réunit avec l'envie de monter une pièce de théâtre et de la jouer.
			La pièce choisie, <span id="italic"> Les Palmes de Monsieur Schutz</span> se révèle difficile à mettre en oeuvre pour les amateurs que nous sommes. Les difficultés de la mise en scène rendent notre travail laborieux. Nous réalisons que le métier de metteur en scène ne s'invente pas !
			En 1999, avec l'aide de Michel Bernier, metteur en scène professionnel, la pièce aboutit enfin et se joue pour la première fois à Nuelles. Michel nous fait partager son talent et l'envie de poursuivre l'aventure s'impose à nous naturellement.
			Ainsi de nouvelles pièces sont montées avec le renouvellement d'une partie des membres de la troupe.</p>
            <div className="timeline">
				{dramas.map((item, index) => (
					<div
						key={index}
						className={`container hidden ${index % 2 === 0 ? "left" : "right"}`}
					>
						<div className="content">
						<h2>{item.year} - {item.title}</h2>
						{item.image && <img src={item.image} className="photo" alt={item.title} />}
						{item.director && <p>Mise en scène : {item.director}</p>}
						{item.soundAndLight && <p>Son et lumière : {item.soundAndLight}</p>}
						</div>
					</div>
				))}
            </div>
        </section>
    )
}
export default History