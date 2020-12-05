<?php 

header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

require "./Models/Order.php";

$order = new Order;

$order->id_produto = $_POST['id'];
$order->nome_cliente = $_POST['nome'];
$order->endereco = $_POST['endereco'];
$order->telefone = $_POST['telefone'];
$order->valor_total = 10; // Simulando, futuramente será o valor real
$order->quantidade = $_POST['quantidade'];

$order->registerOrder();
