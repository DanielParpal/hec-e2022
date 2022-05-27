// 4. Sélectionnez, grâce à jQuery, toutes les cellules du corps de la table (td) et modifiez leur contenu html grâce à la méthode .html(). Vous pouvez mettre le contenu de votre choix.
$('td').html('lorem');

// 5. Sélectionnez, grâce à jQuery, tous les éléments ayant un attribut "class" de "temperature-negative" et modifiez leur contenu html grâce à la méthode .html()
$('.temperature-negative').html('Bonjour ABC');

// 6. Sélectionnez, grâce à jQuery, l'élément ayant un attribut "id" de "journee-demain" et modifiez son contenu html grâce à la méthode .html()
// L'utilisation de la concaténation sera nécessaire pour
// réaliser le TP2
var maSelection = "demain";
var maSelectionComplete = "#journee-" + maSelection;
console.log(maSelectionComplete);
$(maSelectionComplete).html('Ceci est la journée de demain');