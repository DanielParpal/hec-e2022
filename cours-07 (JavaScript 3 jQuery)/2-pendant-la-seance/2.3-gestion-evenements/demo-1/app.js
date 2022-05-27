// Définir un gestionnaire d'événements
$('#inputPrix').on('keyup', function() {

	// Nous pouvons définir tout ce qui se passe
	// lorsqu'un keyup est observé sur la sélection
	// #inputPrix
	var prix = $('#inputPrix').val();
	console.log(prix);

	if (prix > 50) {
		// afficher la bannière verte
		$('#alerte-avec-rabais-20').show();
		$('#alerte-sans-rabais-20').hide();
	} else {
		// afficher la bannière rouge
		$('#alerte-sans-rabais-20').show();
		$('#alerte-avec-rabais-20').hide();
	}

});


// Nous pouvons définir autant de gestionnaires qu'on 
// le souhaite (ceux en-dessous ne feront rien)
$('.maSelection').on('click', function() {
	// autres actions
});

$('#unAutreId').on('mouseEnter', function() {

});