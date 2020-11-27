<?php 

    require "./Connection.php";


    class Product
    {
        public $id_produto;
        public $nome;
        public $categoria;
        public $descricao;
        public $estoque;
        public $preco;
        public $preco_venda;
        public $nome_imagem;


        public static function getAll()
        {
            $connection = Connection::getDb();

            $stmt = $connection->query("SELECT * FROM produtos");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }
    }
    header("Access-Control-Allow-Origin:*");
    header("Content-type: application/json");
    $json = json_encode(Product::getAll());
    echo $json;

   