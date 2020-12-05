<?php 

require "Connection.php";

class Order
{
    public $quantidade;
    public $valor_total;
    public $nome_cliente;
    public $telefone;
    public $endereco;
    public $id_produto;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM pedidos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);

    }

    public function registerOrder()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO pedidos (quantidade, valor_total, nome_cliente, telefone, endereco, id_produto) 
        values ($this->quantidade, $this->valor_total, '$this->nome_cliente', $this->telefone, '$this->endereco', $this->id_produto)");
    }
}

   