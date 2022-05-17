var produits;
produits = [
	'jeans',
	'chapeau',
	'chandail',
	'shorts'
];

console.log(produits);
console.log(produits[0]);
console.log(produits[2]);

produits[2] = 'cardigan';
console.log(produits);

produits[0] = 'pantalons';
console.log(produits);

// Indice pour le TP2
// Se servir d'une variable comme index (donc entre les crochets)
var monIndex = 1;
console.log(produits[monIndex]);

// Quantité d'éléments dans mon tableau
console.log(produits.length);

// Pour ajouter un nouvel élément APRÈS la définition initiale
produits.push('manteau');
console.log(produits);

// La présence d'un élément dans un tableau
console.log(produits.includes('chapeau'));
console.log(produits.includes('salopette'));











