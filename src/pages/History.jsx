import { useEffect } from "react";
import ionesco from  "../assets/photos/ionesco/DSC_9208.jpg";
import moliere from "../assets/photos/moliere/IMG_1625.jpg";
import girerd from "../assets/photos/girerd/DSC_3649.jpg";
import brecht from "../assets/photos/brecht/JAC_3512_2.jpg";
import marivaux from "../assets/photos/marivaux/JAC_2299.jpg";
import "./styles/history.scss"

function History() {
	const timelineData = [
		{
		  year: 1999,
		  title: "Les Palmes de Monsieur Schutz de Jean-Noël Fenwick",
		  director: "Michel Bernier",
		  soundAndLight: "Monique Aujogue",
		  photo: null
		},
		{
		  year: 2003,
		  title: "Un Air de Famille d'Agnès Jaoui et Jean-Pierre Bacri",
		  director: "Michel Bernier",
		  soundAndLight: "Marie Russel",
		  photo: null
		},
		{
		  year: 2006,
		  title: "La Cantatrice Chauve d'Eugène Ionesco",
		  director: "Michel Bernier",
		  soundAndLight: "Jacques Janin",
		  photo: ionesco
		},
		{
		  year: 2008,
		  title: "Les précieuses ridicules de Molière",
		  director: "Michel Bernier",
		  soundAndLight: "Jacques Janin",
		  photo: moliere
		},
		{
		  year: 2011,
		  title: "Echafaudage de Luc Girerd",
		  director: "Michel Bernier",
		  soundAndLight: "Thomas Dormoy",
		  photo: girerd
		},
		{
		  year: 2013,
		  title: "La Noce de Bertolt Brecht",
		  director: "Michel Bernier",
		  soundAndLight: null,
		  photo: brecht
		},
		{
		  year: 2016,
		  title: "Le jeu de l'amour et du hazard, Marivaux",
		  director: "Karine Giraud",
		  soundAndLight: null,
		  photo: marivaux
		}
	];

	const text = "HISTOIRE";
  	const letters = [...text].map((letter, index) => (
			<div className="wrapper" key={index}>
			<div className="letter">{letter}</div>
			<div className="shadow">{letter}</div>
			</div>
	));

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
            <div className="text">{letters}</div>
			<p className="intro">En 1997, un groupe de parents d'élèves de l'école de Saint Germain Nuelles se réunit avec l'envie de monter une pièce de théâtre et de la jouer.
			La pièce choisie, <span id="italic"> Les Palmes de Monsieur Schutz</span> se révèle difficile à mettre en oeuvre pour les amateurs que nous sommes. les difficultés de la mise en scène rendent notre travail laborieux. Nous réalisons que le métier de metteur en scène ne s'invente pas !
			En 1999, avec l'aide de Michel Bernier, metteur en scène professionnel, la pièce aboutit enfin et se joue pour la première fois à Nuelles. Michel nous fait partager son talent et l'envie de poursuivre l'aventure s'impose à nous naturellement.
			Ainsi de nouvelles pièces sont montées avec le renouvellement d'une partie des membres de la troupe.</p>
            <div className="timeline">
				{timelineData.map((item, index) => (
					<div
						key={index}
						className={`container hidden ${index % 2 === 0 ? "left" : "right"}`}
					>
						<div className="content">
						<h2>{item.year} - {item.title}</h2>
						{/* {item.photo && <img src={item.photo} className="photo" alt={item.title} />} */}
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