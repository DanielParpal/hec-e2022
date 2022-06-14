<?php 

// Établir la connexion entre le serveur B-E et
// le serveur de BD
include 'db/connexion-MySQL.php';

// Insérer la nouvelle ligne
include 'db/insert-into-publications.php';

// Sélectionner les données grâce à la requête SELECT
include 'db/select-publications.php';

// Inclure le fichier maître d'affichage
include 'views/app.html.php';

?>