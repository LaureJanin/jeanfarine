import { useEffect } from "react";
import dramas from "../assets/images/data/dramas.json";
import "./styles/history.scss"

function History() {
	useEffect(() => {
		const cartes = document.querySelectorAll(".timeline .container");

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			cartes.forEach((carte) => carte.classList.remove("hidden"));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries
					.filter((entry) => entry.isIntersecting)
					.forEach((entry, rang) => {
						// Léger décalage entre les cartes qui arrivent ensemble.
						entry.target.style.transitionDelay = `calc(var(--cadence) * ${Math.min(rang, 8)})`;
						entry.target.classList.remove("hidden");
						// On cesse d'observer : sinon la carte repartait de zéro dès
						// qu'elle quittait l'écran et rejouait son animation à chaque
						// passage.
						observer.unobserve(entry.target);
					});
			},
			{ rootMargin: "0px 0px -10% 0px" }
		);

		cartes.forEach((carte) => observer.observe(carte));

		return () => observer.disconnect();
	}, []);

    return (
        <section id="history">
            <h1>Notre histoire</h1>
			<div className="intro">
				<p>
					En 1997, un groupe de parents d'élèves de l'école de Saint Germain Nuelles se
					réunit avec l'envie de monter une pièce de théâtre et de la jouer.
				</p>
				<p>
					La pièce choisie, <span id="italic">Les Palmes de Monsieur Schutz</span>, se
					révèle difficile à mettre en oeuvre pour les amateurs que nous sommes. Les
					difficultés de la mise en scène rendent notre travail laborieux. Nous réalisons
					que le métier de metteur en scène ne s'invente pas !
				</p>
				<p>
					En 1999, avec l'aide de Michel Bernier, metteur en scène professionnel, la pièce
					aboutit enfin et se joue pour la première fois à Nuelles. Michel nous fait
					partager son talent et l'envie de poursuivre l'aventure s'impose à nous
					naturellement.
				</p>
				<p>
					Ainsi de nouvelles pièces sont montées avec le renouvellement d'une partie des
					membres de la troupe.
				</p>
			</div>
            <div className="timeline">
				{dramas.map((item, index) => (
					<div
						key={item.id}
						className={`container hidden ${index % 2 === 0 ? "left" : "right"}`}
					>
						<div className="content">
						<h2>{item.year} - {item.title}</h2>
						{item.image && (
							<img
								src={item.image}
								className="photo"
								alt={item.title}
								loading="lazy"
								decoding="async"
							/>
						)}
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