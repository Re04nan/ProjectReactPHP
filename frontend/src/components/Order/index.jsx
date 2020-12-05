import {React, useEffect, useState} from 'react';

import './styles.css';

const Order = ({match}) => {
    const id = match.params.id;
    const [produtos, setProdutos] = useState([]);
    const [quantidade, setQuantidade] = useState(1);
    const [form, setForm] = useState({
        nome: "",
        endereco: "",
        telefone: "",
        quantidade: "",
        id: id
    });

    const controleMudanca = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value
        })
    }

    useEffect(async () => {
        const url = "http://projetorefactory-fullstackeletro/fullstackeletro-React/backend/index.php";
        const resposta = await fetch(url);

        setProdutos(await resposta.json());
    }, []);

    function registerOrder(event) {
        event.preventDefault();

        const url = "http://projetorefactory-fullstackeletro/fullstackeletro-React/backend/Register-order.php";

        fetch(url, {
            method: 'POST',
            body: new FormData(event.target)
        })
    }

    return (
        <main className="container-fluid">
        <aside>
            <form onSubmit={registerOrder}>
                <div id="container_pedidos">
                    <h1 className="text-primary">Realizar Compra</h1>
                    <label htmlFor="nome">Nome Completo:</label>
                    <input onChange={controleMudanca} type="text" name="nome" id="nome" placeholder="Digite seu nome Completo" required/>
                    <label htmlFor="endereco">Endereço:</label>
                    <input onChange={controleMudanca} type="text" name="endereco" id="endereco" placeholder="Digite seu endereço" required/>
                    <label htmlFor="telefone">Telefone:</label>
                    <input onChange={controleMudanca} type="tel" name="telefone" id="telefone" placeholder="(xx) xxxxx-xxxx" required/>
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input onChange={controleMudanca} type="number" name="quantidade" value={quantidade} onChange={(event) => setQuantidade(event.target.value)} id="quantidade" min="1" max="10"/>
                    <input onChange={controleMudanca} type="hidden" name="id" value={id} />
                    <button className="btnComprar">Enviar</button>
                </div>
            </form>
            {produtos && produtos.map((item) => {
                if(id === item.id_produto){
                    return(
                        <div key={id} name={item.id_produto} className="painelClone">
                            <div className="secProdutos" id={item.id_produto}>
                            <figure>
                                <img className="imgProduto"
                                    id={item.id_produto}
                                    src={require(`.././imagens/Produtos${item.nome_imagem}`).default}
                                    alt={item.nome} title={item.nome}/>
                            </figure>
                            <figcaption>
                                <br/>
                                {item.nome} {item.descricao}
                                <hr/>
                                <s>R${item.preco},00</s><br/>
                                <b className="precoDestaque">R${item.preco_venda},00</b>     
                                <br/>
                            </figcaption>
                        </div>
                    </div>
                    );
                }
            })}
        </aside>
    </main>
    );
}

export default Order;