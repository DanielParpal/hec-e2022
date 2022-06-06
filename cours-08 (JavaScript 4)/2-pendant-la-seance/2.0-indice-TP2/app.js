var produits = [
	"Produit A",
	"Produit B",
	"Produit C"
];

$('un-certain-selecteur').on('evenement', function() {
	// On récupère grâce à l'attribut data approprié
	// On stock la valeur dans une variable
	var monIndex = $(this).data('mon-bon-attribut-data');

	// et ici on utilise l'index dynamique
	// .......
});


var monIndex = 2;

console.log(produits[0]);
console.log(produits[2]);
console.log(produits[monIndex]);

// console.log([monIndex]); // cela ne veut rien dire