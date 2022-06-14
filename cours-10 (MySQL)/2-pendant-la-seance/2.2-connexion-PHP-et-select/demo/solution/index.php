<?php 

// On crée une connexion entre le serveur B-E et le serveur de BD
include 'db/connexion-MySQL.php';

// On envoie une requête de sélection
include 'db/select-publications.php';

// Inclusion du fichier maître d'affichage
include 'views/app.html.php';

?>
