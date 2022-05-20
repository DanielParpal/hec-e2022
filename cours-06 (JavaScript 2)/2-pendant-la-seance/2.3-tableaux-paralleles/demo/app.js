// Tableau modélisant les titres
var titres = [
	"Parka Ayaba de Indyeva - Femmes",
	"Manteau à capuchon Atom LT de Arc'teryx - Femmes",
	"Parka Woodmont de The North Face - Femmes",
	"Manteau en duvet à capuchon Fuego de Cotopaxi - Femmes"
];
console.log(titres);

// Tableau modélisant les prix
var prix = [
	299.93,
	320,
	150.97,
	244.93
];
console.log(prix);

// Tableau modélisant les évaluations
var evaluations = [
	4,
	4,
	5,
	4
];
console.log(evaluations);

console.log("==================");

// On affiche toutes les informations sur tous les manteaux
for (var i = 0; i < titres.length; i = i + 1) {
	console.log(titres[i]);
	console.log(prix[i]);
	console.log(evaluations[i]);
	console.log("==================");
}








