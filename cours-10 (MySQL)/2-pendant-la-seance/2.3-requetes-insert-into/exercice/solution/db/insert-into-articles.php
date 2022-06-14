<?php 

// Variables utilisées dans la requête SQL d'insertion
$description = 'Bas sans motifs';
$prix = 9; 
$image = 'resources/img/bas-sans-motifs.jpg';

// Ajoute une ligne à la table des articles
$description = $db->quote($description);
$image = $db->quote($image);
$query = "INSERT INTO articles (description, price, picture_url) VALUES ($description, $prix, $image)";
$db->exec($query);

?>