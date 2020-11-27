import {React, useEffect, useState} from 'react';

import './styles.css';
import {limpar, filtrarTodos, filtroCategoria} from './funcoes';

// efeito mouse
function efeitoTela (event) {
    let lista = document.getElementsByClassName("lista");
    let i = 0;

    while (i <= lista.length) {
        if (lista[i].id == event.target.id) {
            lista[i].style = "background-color: black; padding: 8px; border-radius: 20px";
        } else {
            lista[i].style = "background-color: none;";
        }
        i++;
    }
}

const Products = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
         async function fetchData()
        {
            const resposta = await fetch("http://projetorefactory-fullstackeletro/fullstackeletro/API/Product.php");

            const dados = await resposta.json();
            setProdutos(dados);
        }
        fetchData();
    }, []);
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
                    <li class="lista" id="listarTodos" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtrarTodos}>Todos os itens (12)</li>
                    <li class="lista" id="listarGeladeira" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Geladeiras (3)</li>
                    <li class="lista" id="listarFogao" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Fogões (2)</li>
                    <li class="lista" id="listarMicroondas" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Microondas (3)</li>
                    <li class="lista" id="listarLavadora" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Lavadoura de roupas (2)</li>
                    <li class="lista" id="listarLavaLoucas" onMouseOut={limpar} onMouseMove={efeitoTela}
                        onClick={filtroCategoria}>Lava-louças (2)</li>
                </ul>
            </aside>
            <div id="container">
                {produtos.map(item=>
                <div class="secProdutos text-dark" id={item.categoria}>
                    <figure>
                        <img onClick="exibirZoom(this)" class="imgProduto" id={item.id}
                            src={require(`.././imagens/Produtos${item.nome_imagem}`).default} alt={item.nome}
                            title={item.nome}/>
                    </figure>
                    <figcaption>
                        <br/>
                        {item.nome} {item.descricao}
                        <hr/>
                        <s>R${item.preco},00</s><br/>
                        <b class="precoDestaque">R${item.preco_venda},00</b>
                    </figcaption>
                    <button class="btnComprar" onClick="copiar(this)"><a href="pedido.php">Comprar</a></button>
                </div>
                )}
            </div>
            <br/>
        </section>
    </main>
    );
}


export default Products;
