// Définition d'un gestionnaire d'événement
$('.btn-click').on('click', function() {
	// ce qui se passe quand un click est observé
	// sur les éléments de classe .btn-click
	console.log('un des éléments de la sélection a été clické');

	$(this).html('TEST');

	// combinons le $(this) avec le .data()
	var monDataThis = $(this).data('test');
	console.log(monDataThis);
});



console.log('=======');
// cela va récupérer la valeur de l'attribut data-test
// var monData = $('#btnA').data('test'); 
// console.log(monData);