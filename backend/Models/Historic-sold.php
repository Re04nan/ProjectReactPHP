<?php

    require "Connection.php";


    class Bestsellers
    {
        public static function getAll()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT products.id_produto, products.nome AS produtos, 
            orders.quantidade AS vendidos, products.nome_imagem
            FROM produtos AS products INNER JOIN pedidos AS orders
            ON products.id_produto = orders.id_produto ORDER BY vendidos DESC LIMIT 3");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
    }