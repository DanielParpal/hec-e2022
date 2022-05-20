// Tableau modélisant les titres
var titres = [
	"Parka Ayaba de Indyeva - Femmes",
	"Manteau à capuchon Atom LT de Arc'teryx - Femmes",
	"Parka Woodmont de The North Face - Femmes",
	"Manteau en duvet à capuchon Fuego de Cotopaxi - Femmes"
];

// Tableau modélisant les prix
var prix = [
	299.93,
	320,
	150.97,
	244.93
];

// Tableau modélisant les évaluations
var evaluations = [
	5,
	4,
	4,
	4
];

// Mise en place d'un filtre grâce à une condition dans une boucle
for (var i = 0; i < titres.length; i = i + 1) {
	if (prix[i] < 250) {
		console.log(titres[i]);
	}
}









