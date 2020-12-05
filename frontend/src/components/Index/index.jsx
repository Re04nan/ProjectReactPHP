import {React, useEffect, useState} from 'react';

import './styles.css';

const Index = () => {
    const [bestsellers, setBestsellers] = useState([]);

    useEffect(async () => {
        const url = "http://projetorefactory-fullstackeletro/fullstackeletro-React/backend/Best-sellers.php";
        const resposta = await fetch(url);

        setBestsellers(await resposta.json());
    }, []);



    return (
            <main id="pgInicial" className="container-fluid">
                <h2>Seja bem vindo(a)!</h2>
                <p>Aqui em nossa loja, <em className="text-danger">devs tem descontos %</em> nos produtos para sua casa!</p>
                <div id="bemVindo">
                    <p>Temos produtos de ótima qualidade e para todos os gostos,</p>
                    <p>para mais informações acesse a aba contato na parte superior </p>
                    <p>do menu e mande sua pergunta que responderemos assim que possível, <b>boas compras.</b></p>
                </div>
                <article>
                    {bestsellers.map(item => {
                        
                            <div key={item.id_produto} className="card" style="width: 18rem;">
                                    <img className="card-img-top" src={require(`.././imagens/Produtos${item.nome_imagem}`).default} alt={item.produtos}/>
                                <div className="card-body">
                                    <p className="card-text">{item.produtos}</p>
                                    <p className="card-text-danger">{item.quantidade}</p>
                                </div>
                            </div>
                        
                    })}
                </article>
            </main>
    );
}

export default Index;