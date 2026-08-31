import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import dramas from "../assets/images/data/dramas.json";
import "./styles/history.scss"

// Les vignettes de la galerie reprennent l'arborescence de photos/ : la carte
// affiche l'image dans 420px de large, la version pleine taille pèse quatre
// fois plus lourd pour rien.
const vignette = (image) => "photos/galerie/" + image.replace(/^photos\//, "");

// Doit suivre scroll-padding-inline-start sur .rail, dans history.scss.
const REPERE_ACCROCHE = 40;

function History() {
	const rail = useRef(null);
	const [courante, setCourante] = useState(0);

	// Sans ce suivi, la réglette n'indique pas où l'on se trouve dans la frise.
	const suivrePosition = useCallback(() => {
		const piste = rail.current;
		if (!piste) return;

		// Repère pris au bord gauche du rail, là où les cartes s'accrochent : au
		// centre, la première carte n'était jamais l'année active au repos.
		const repere = piste.scrollLeft + REPERE_ACCROCHE;
		let plusProche = 0;
		let ecartMin = Infinity;

		[...piste.children].forEach((carte, index) => {
			const ecart = Math.abs(carte.offsetLeft - repere);
			if (ecart < ecartMin) {
				ecartMin = ecart;
				plusProche = index;
			}
		});

		setCourante(plusProche);
	}, []);

	useEffect(() => {
		const piste = rail.current;
		if (!piste) return;

		suivrePosition();
		piste.addEventListener("scroll", suivrePosition, { passive: true });
		window.addEventListener("resize", suivrePosition);

		return () => {
			piste.removeEventListener("scroll", suivrePosition);
			window.removeEventListener("resize", suivrePosition);
		};
	}, [suivrePosition]);

	function allerA(index) {
		const carte = rail.current?.children[index];
		if (!carte) return;

		const doux = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		// block: nearest, sinon le navigateur recentre aussi la page verticalement
		// et le titre disparaît vers le haut.
		carte.scrollIntoView({
			behavior: doux ? "smooth" : "auto",
			inline: "start",
			block: "nearest",
		});
	}

	return (
		<section id="history">
			<h1>Notre histoire</h1>

			<div className="intro">
				<p>
					En 1997, un groupe de parents d'élèves de l'école de Saint Germain Nuelles se
					réunit avec l'envie de monter une pièce de théâtre et de la jouer.
				</p>
				<p>
					La pièce choisie, <span className="italique">Les Palmes de Monsieur Schutz</span>,
					se révèle difficile à mettre en oeuvre pour les amateurs que nous sommes. Les
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

			{/* La réglette donne à voir toute l'étendue de la frise avant tout geste :
			    un rail horizontal seul ne laisse pas deviner ce qu'il contient. */}
			<nav className="reglette" aria-label="Aller à une année">
				{dramas.map((item, index) => (
					<button
						type="button"
						key={item.id}
						className={index === courante ? "active" : ""}
						aria-current={index === courante ? "true" : undefined}
						onClick={() => allerA(index)}
					>
						{item.year}
					</button>
				))}
			</nav>

			<div className="piste">
				<button
					type="button"
					className="fleche precedente"
					onClick={() => allerA(courante - 1)}
					disabled={courante === 0}
					aria-label="Pièce précédente"
				>
					‹
				</button>

				<ul className="rail" ref={rail}>
					{dramas.map((item, index) => (
						<li
							key={item.id}
							className="carte"
							style={{ animationDelay: `calc(var(--cadence) * ${Math.min(index, 8)})` }}
						>
							<img
								src={vignette(item.image)}
								alt={item.title}
								loading="lazy"
								decoding="async"
							/>
							<div className="texte">
								<h2>
									<span className="annee">{item.year}</span>
									<span className="titre">{item.title}</span>
								</h2>
								{item.director && (
									<p>
										<span>Mise en scène</span> {item.director}
									</p>
								)}
								{item.soundAndLight && (
									<p>
										<span>Son et lumière</span> {item.soundAndLight}
									</p>
								)}
								<Link to={`/picture?drama=${encodeURIComponent(item.title)}`}>
									Voir les photos
								</Link>
							</div>
						</li>
					))}
				</ul>

				<button
					type="button"
					className="fleche suivante"
					onClick={() => allerA(courante + 1)}
					disabled={courante === dramas.length - 1}
					aria-label="Pièce suivante"
				>
					›
				</button>
			</div>
		</section>
	)
}
export default History
