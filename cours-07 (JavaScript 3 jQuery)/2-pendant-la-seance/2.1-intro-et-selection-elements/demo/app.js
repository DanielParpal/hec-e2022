// Sélection d'éléments à partir de jQuery
// et prise d'une action .html()
// On doit spécifier la sélection avec une chaîne
// de caractères.
// Mention importante: Les éléments HTML (incluant
// les attributs) seront traités comme des chaînes
// de caractères en jQuery.
$('p').html('<span class="TEST">Bonjour</span>');

// Sélection d'éléments à partir de jQuery
// grâce à un sélecteur "class"
$('.feedback-error').html('Allô');

// Sélection d'un élément à partir de jQuery
// grâce à un sélecteur "id"
$('#first-error').html('Salutations');
