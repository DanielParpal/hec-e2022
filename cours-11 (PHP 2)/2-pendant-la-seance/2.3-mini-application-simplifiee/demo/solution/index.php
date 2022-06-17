<?php

// Établir la connexion entre le serveur B-E et 
// le serveur de BD
include 'db/connexion-MySQL.php';

// Sélectionner les données grâce à une requête SELECT
include 'db/select-cours-fitness.php';

// On inclut les données du fichier data.php
// include 'data.php';

// On inclut l'affichage
include 'views/app.html.php';

?>
