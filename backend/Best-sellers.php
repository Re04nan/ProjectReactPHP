<?php

header("Access-Control-Allow-Origin:*");    // Permite que outras aplicações acessem a api
header("Content-type: application/json");   //Indicação de arquivo JSON 

require "./Models/Historic-sold.php";

$sold = Bestsellers::getAll();

echo json_encode($sold);