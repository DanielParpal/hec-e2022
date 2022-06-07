// Modélisation des données

var manteauA = {
	description: "Manteau à capuchon Atom LT de Arc'teryx - Femmes",
	prix: 320,
	evaluation: 4,
};

var manteauB = {
	description: "Anorak Atom SL de Arc'teryx - Femmes",
	prix: 240,
	evaluation: 4
};

var manteauC = {
	description: "Parka Ayaba de Indyeva - Femmes",
	prix: 299.93,
	evaluation: 4
};

var manteaux = [
	manteauA,
	manteauB,
	manteauC
];

console.log(manteaux);
console.log(manteaux[1]);
console.log(manteaux[1]['prix']);

console.log('==================');

// Écriture des algorithmes

for (var i = 0; i < manteaux.length; i = i + 1) {
	console.log(manteaux[i]);
	console.log(manteaux[i]['prix']);
}










