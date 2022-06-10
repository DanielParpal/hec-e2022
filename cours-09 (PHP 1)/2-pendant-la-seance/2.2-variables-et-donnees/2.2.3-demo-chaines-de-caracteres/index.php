<?php 

// doubles guillemets
echo "Bonsoir à tous";
echo "<br>";

// simples guillemets
echo 'Bonsoir à tous';
echo '<br>';

$prenom = "Daniel";
$nom_de_famille = 'Parpal';

// On utilise la variable à l'intérieur de guillemets simples
echo 'Bienvenue, $prenom';
echo '<br>';

// On utilise la variable à l'intérieur de guillemets doubles
echo "Bienvenue, $prenom $nom_de_famille";
echo '<br>';

// On a aussi accès à la concaténation
echo "Bienvenue, " . $prenom;
echo '<br>';

?>





