// Modélisation du tableau des titres de recettes
var recettes = [
	"SANDWICHES GLACÉS CHOCOLAT AU LAIT, FRAISES ET FRAMBOISES",
	"TARTE AU CHOCOLAT NOIR ET BLEUETS",
	"TIRAMISU CHOCOLAT AU LAIT ET FRAISES"
];

// 2. Modélisez la description de chacune des recettes
var descriptions = [
	"Une version chocolatée d'un dessert estival que tout le monde adore",
	"Une tarte fruitée et chocolatée colorée à essayer",
	"Chaque bouchée goûte l'été! "
];
console.log(descriptions);

// 3. Effectuez la même chose pour l'url de chacune des recettes
var urls = [
	"https://www.chocolatsfavoris.com/recettes/sandwiches-glaces-chocolat-au-lait-fraises-et-framboises",
	"https://www.chocolatsfavoris.com/recettes/tarte-au-chocolat-noir-et-bleuets",
	"https://www.chocolatsfavoris.com/recettes/tiramisu-chocolat-au-lait-et-fraises"
];
console.log(urls);

// Mise en place de la boucle permettant de parcourir les tableaux
for (var i = 0; i < recettes.length; i = i + 1) {
	console.log(recettes[i]);
	console.log(descriptions[i]);
	console.log(urls[i]);
	console.log("==========");
}








