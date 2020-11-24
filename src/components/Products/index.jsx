import React from 'react';

import 'styles.css';
import '../../funcoes';


const Products = () => {
    return (
        <main class="container-fluid">
        <header class="text-primary">
            <h2>Produtos</h2>
            <hr/>
        </header>
        <section>
            <aside id="categorias">
                <h3>Categorias</h3>
                <ul>
                    <li class="lista" id="listarTodos" onmouseout="limpar()" onmousemove="efeitoTela(this)"
                        onclick="filtrarTodos()">Todos os itens (12)</li>
                    <li class="lista" id="listarGeladeira" onmouseout="limpar()" onmousemove="efeitoTela(this)"
                        onclick="filtroCategoria('geladeira')">Geladeiras (3)</li>
                    <li class="lista" id="listarFogao" onmouseout="limpar()" onmousemove="efeitoTela(this)"
                        onclick="filtroCategoria('fogao')">Fogões (2)</li>
                    <li class="lista" id="listarMicroondas" onmouseout="limpar()" onmousemove="efeitoTela(this)"
                        onclick="filtroCategoria('microondas')">Microondas (3)</li>
                    <li class="lista" id="listarLavadora" onmouseout="limpar()" onmousemove="efeitoTela(this)"
                        onclick="filtroCategoria('lavadora')">Lavadoura de roupas (2)</li>
                    <li class="lista" id="listarLavaLoucas" onmouseout="limpar()" onmousemove="efeitoTela(this)"
                        onclick="filtroCategoria('lavaLoucas')">Lava-louças (2)</li>
                </ul>
            </aside>
            <div id="container">
                <div class="secProdutos text-dark" id="">
                    <figure>
                        <img onclick="exibirZoom(this)" class="imgProduto" id=""
                            src="./imagens/Produtos" alt=""
                            title=""/>
                    </figure>
                    <figcaption>
                        <br/>

                        <hr/>
                        <s>R$,00</s><br/>
                        <b class="precoDestaque">R$,00</b>
                    </figcaption>
                    <button class="btnComprar" onclick="copiar(this)"><a href="pedido.php">Comprar</a></button>
                </div>
            </div>
            <br/>
        </section>
    </main>
    );
}

export default Products;