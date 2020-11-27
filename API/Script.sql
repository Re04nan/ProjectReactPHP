CREATE DATABASE IF NOT EXISTS fullstackeletro
DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE fullstackeletro;
--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `id` int NOT NULL,
  `nome_cliente` varchar(50) NOT NULL,
  `endereco` varchar(200) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `quantidade` int NOT NULL,
  `valor_total` float NOT NULL,
  PRIMARY KEY (`id_pedido`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `id`, `nome_cliente`, `endereco`, `telefone`, `quantidade`, `valor_total`) VALUES
(4, 12, 'Bernado', 'Av. Paulista, 520 10º andar', '1191234-4321', 2, 2089),
(5, 12, 'Larissa', 'Rua Bela Cintra', '436849-4543', 1, 2089),
(6, 12, 'Rodrigo Santos', 'Av. 23 de maio, 1200', '1197777-8989', 1, 2089),
(15, 12, 'kjkjkjjk', 'jjjjjnjnjn', '7776766767', 3, 6267),
(16, 12, 'Bruna', 'Rua dos Pinheiros', '1145458989', 1, 2089);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `categoria` varchar(40) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `estoque` int NOT NULL,
  `preco` float NOT NULL,
  `preco_venda` float NOT NULL,
  `nome_imagem` varchar(50) NOT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id_produto`, `nome`, `categoria`, `descricao`, `estoque`, `preco`, `preco_venda`, `nome_imagem`) VALUES
(1, 'Fogão Stone Prata', 'fogao', NULL, 19, 2389, 1389, '/fogao_stone_prata.jpg'),
(2, 'Fogão Tecnogas Max', 'fogao', NULL, 12, 3259, 2489, '/fogao_tecnogas_max.jpg'),
(3, 'Lava-louças Bosch', 'lavaLoucas', NULL, 10, 3259, 2489, '/lavadora_de_louca_bosch.jpg'),
(4, 'Lava-louças Consul', 'lavaLoucas', '12 comandos', 12, 3859, 3089, '/lavadora_de_louca_consul.jpg'),
(5, 'Lavadora de Roupas EcoBubble', 'lavadora', 'Inox - 12 litros', 10, 3389, 2389, '/lavadora_EcoBubble_Inox.jpg'),
(6, 'Lavadora Colombia Moderna', 'lavadora', '20 litros', 9, 4259, 3289, '/lavadora_colombia_moderna.jpg'),
(7, 'Microondas Samsung', 'microondas', 'black 20 litros', 18, 2389, 1889, '/microondas_samsung_black20L.jpg'),
(8, 'Microondas Brastemp', 'microondas', 'Inox 38 litros', 10, 4389, 3389, '/microondas_brastemp_inox38L.jpg'),
(9, 'Microondas Consul', 'microondas', 'Inox 30 litros', 16, 3000, 2289, '/microondas_consul_inox30L.jpg'),
(10, 'Geladeira Frost Free Brastemp Side Inverse', 'geladeira', '540 litros', 15, 6389, 5019, '/geladeira_brastemp.jpg'),
(11, 'Geladeira Digital Max Inteligente', 'geladeira', NULL, 2, 9259, 7289, '/geladeira_digitalmax.jpg'),
(12, 'Geladeira Moderna Black', 'geladeira', NULL, 7, 2859, 2089, '/geladeira_mod_black.jpg');
COMMIT;
