var manteau = {
	description: "Manteau à capuchon Atom LT de Arc'teryx - Femmes",
	prix: 320,
	evaluation: 4
};

console.log(manteau);

// On accède à la valeur d'une clé grâce à cette syntaxe
// Attention: la clé doit être spécifiée comme une chaîne
// de caractères
console.log(manteau["prix"]);

// Attention: ceci essaierait de trouver une variable prix
// console.log(manteau[prix]);

// Pour modifier la valeur d'une clé (propriété), on utilise également
// les crochets carrés
manteau["evaluation"] = 3.5;
console.log(manteau);

// Pour ajouter une paire clé-valeur, on utilise également
// les crochets carrés
manteau['maNouvelleCle'] = 'ABC';
console.log(manteau);

// Syntaxe optionnelle: avec le point .
console.log(manteau.prix);







