<?php

define("titulo", "Elon Musk PHP");
$variable = (int) 23;

$tituloHTML = <<<HTML
    <h1><em>"'${!${''} = titulo}'"  $variable</em></h1>
HTML;


echo $tituloHTML;
?>