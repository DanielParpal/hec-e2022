<?php 

// définition d'un tableau
$produits = [
	"t-shirt",
	"chapeau",
	"jeans"
];

// on affiche le tableau à l'écran
// echo ne fonctionnerait pas sans parcourir le tableau
// Par contre, pour voir l'ensemble du tableau d'un 
// seul coup, on peut utiliser var_dump()
var_dump($produits);
echo '<br>';

// Pour accéder à un élément grâce à son index
echo $produits[1];
echo '<br>';

// Pour modifier la valeur d'un élément
$produits[2] = "pantalons";
var_dump($produits);
echo '<br>';

// Pour ajouter un élément
$produits[] = "bas";
var_dump($produits);
echo '<br>';

// Pour déterminer la quantité d'éléments dans un tableau
echo count($produits);
echo '<br>';

?>








