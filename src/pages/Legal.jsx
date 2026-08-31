import "./styles/legal.scss";

// Identité de l'association reprise du registre national : annuaire des
// entreprises, SIREN 921277349.
// Le téléphone est volontairement absent : la LCEN l'exige, l'association a
// choisi de ne pas en publier. Ce n'est pas un oubli.
// Reste à renseigner avant mise en ligne : le nom des photographes.
const AC = () => <span className="a-completer">à compléter</span>;

function Legal() {
	return (
		<section id="legal">
			<h1>Mentions légales</h1>

			<div className="corps">
				<article>
					<h2>Éditeur du site</h2>
					<dl>
						<div>
							<dt>Association</dt>
							<dd>
								Les Jean Farine, association déclarée le 16 janvier 2003
							</dd>
						</div>
						<div>
							<dt>Siège social</dt>
							<dd>5 rue de la Mairie, 69210 Saint-Germain-Nuelles</dd>
						</div>
						<div>
							<dt>Numéro RNA</dt>
							<dd>W691078774</dd>
						</div>
						<div>
							<dt>Numéro SIRET</dt>
							<dd>921 277 349 00012</dd>
						</div>
						<div>
							<dt>Courriel</dt>
							<dd>
								<a href="mailto:jean.farine@free.fr">jean.farine@free.fr</a>
							</dd>
						</div>
						<div>
							<dt>Directrice de la publication</dt>
							<dd>Hélène Janin</dd>
						</div>
					</dl>
				</article>

				<article>
					<h2>Hébergement</h2>
					<p>
						Le site est hébergé par Netlify, Inc., 101 2nd Street, San Francisco,
						CA 94105, États-Unis.
					</p>
					<p>
						Netlify ne publie pas de numéro de téléphone destiné au public. Le
						service peut être joint à l'adresse{" "}
						<a href="mailto:support@netlify.com">support@netlify.com</a> ou depuis{" "}
						<a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
							netlify.com
						</a>
						.
					</p>
				</article>

				<article>
					<h2>Données personnelles et cookies</h2>
					<p>
						Ce site ne dépose aucun cookie et ne collecte aucune donnée
						personnelle. Il n'utilise ni outil de mesure d'audience, ni traceur
						publicitaire, et les polices de caractères sont servies depuis le site
						lui-même, sans appel à un service extérieur.
					</p>
					<p>
						Écrire à l'adresse indiquée plus haut ouvre votre logiciel de
						messagerie : le message ne transite pas par ce site. La réservation de
						places passe en revanche par HelloAsso, qui applique sa propre
						politique de confidentialité.
					</p>
				</article>

				<article>
					<h2>Crédits</h2>
					<dl>
						<div>
							<dt>Photographies des spectacles</dt>
							<dd>
								<AC />
							</dd>
						</div>
						<div>
							<dt>Conception et développement</dt>
							<dd>
								<a
									href="https://laurejanin-portfolio.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Laure Janin
								</a>
							</dd>
						</div>
					</dl>
					<p>
						Les textes et les photographies présentés sur ce site sont la
						propriété de leurs auteurs respectifs. Toute reproduction sans
						autorisation est interdite.
					</p>
				</article>
			</div>
		</section>
	);
}

export default Legal;
