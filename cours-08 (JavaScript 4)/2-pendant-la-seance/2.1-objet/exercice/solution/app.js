// 2. Modélisez une recette sous la forme d'objet, et assignez-la à une nouvelle variable nommée recette_A.
// Note : vous aurez besoin des clés titre, description et url pour construire votre objet.
var recetteA = {
	titre: "MILK CHOCOLATE, STRAWBERRY, AND RASPBERRY ICE CREAM SANDWICHES",
	description: "A chocolate version of a summer dessert that everyone loves",
	url: "https://www.chocolatsfavoris.com/recipes/sandwiches-glaces-chocolat-au-lait-fraises-et-framboises"
};

// 3. Affichez votre objet dans la console.
console.log(recetteA);

// 4. Affichez le titre de votre recette dans la console.
console.log(recetteA['titre']);

// 5. Affichez sa description.
console.log(recetteA['description']);

// 6. Modélisez une autre recette sous la forme d'objet, et assignez-là à une nouvelle variable nommée recette_B.
var recetteB = {
	titre: "DARK CHOCOLATE AND BLUEBERRY PIE",
	description: "Try this colorful, fruity and chocolatey pie",
	url: "https://www.chocolatsfavoris.com/recipes/tarte-au-chocolat-noir-et-bleuets"
};

// 7. Affichez votre objet dans la console.
console.log(recetteB);

// 8. Mettez en place une condition : 
// - si le url de la recette B est une chaîne de caractères vide, affichez dans la console : le lien est brisé pour la recette B
// - sinon, affichez dans la console le lien url vers la recette B
// Assurez-vous de tester votre condition avec différentes valeurs de url.
if (recetteB['url'] == "") {
	console.log('Le lien est brisé pour la recette B.');
} else {
	console.log(recetteB['url']);
}












