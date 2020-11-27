import React from 'react';

const Order = () => {
    return (
        <main class="container-fluid">
        <aside>
            <form action="pedido.php" method="POST">
                <div id="container_pedidos">
                    <h1 class="text-primary">Realizar Compra</h1>
                    <label for="nome">Nome Completo:</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome Completo" required/>
                    <label for="endereco">Endereço:</label>
                    <input type="text" name="endereco" id="endereco" placeholder="Digite seu endereço" required/>
                    <label for="fone">Telefone:</label>
                    <input type="tel" name="telefone" id="telefone" placeholder="(xx) xxxxx-xxxx" required/>
                    <button type="submit" class="btnComprar">Enviar</button>
                    <div class="painelClone">
                        <div class="secProdutos" id="">
                            <figure>
                                <img onclick="exibirZoom(this)" class="imgProduto"
                                    id="photo"
                                    src="./imagens/Produtos"
                                    alt="" title=""/>
                            </figure>
                            <figcaption>
                                <br/>
                                <hr/>
                                <s>R$ ,00</s><br/>
                                <b class="precoDestaque">R$ ,00</b>
                                <br/>
                                <label for="quantidade">Quantidade:</label>
                                <input type="number" name="quantidade" id="quantidade" value="1" min="1" max="10"/>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </form>
        </aside>
    </main>
    );
}

export default Order;