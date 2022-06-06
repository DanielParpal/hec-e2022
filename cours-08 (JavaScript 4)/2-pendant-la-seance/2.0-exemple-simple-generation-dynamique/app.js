// 1. Modélisation des données
var produits = [
	'Produit A',
	// ex. preuve: si je mets la ligne suivante en commentaires,
	// l'état initial et le fonctionnement de l'app....
	// 'Produit B', 
	'Produit CCC',
	'Produit D'
];

// ex. preuve: si j'enlève le commentaire, on verra un produit de plus
produits.push('Produit E');

// 2. Génération dynamique de l'état initial
for (var i = 0; i < produits.length; i = i + 1) {
	var itemDeListe = '<li class="list-group-item">' + produits[i] + '</li>';

	// une autre option:
	// var itemDeListe = '<li class="list-group-item">';
	// itemDeListe = itemDeListe + produits[i];
	// itemDeListe = itemDeListe + '</li>';

	$('#liste-produits').append(itemDeListe);
}



// 3. Algorithmes dynamiques
for (var i = 0; i < produits.length; i = i + 1) {
	console.log(produits[i]);
}