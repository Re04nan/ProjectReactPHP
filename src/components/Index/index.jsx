import React from 'react';

import './styles.css';

const Index = () => {
    return (
            <main id="pgInicial" class="container-fluid">
                <h2>Seja bem vindo(a)!</h2>
                <p>Aqui em nossa loja, <em class="text-danger">devs tem descontos %</em> nos produtos para sua casa!</p>
                <div id="bemVindo">
                    <p>Temos produtos de ótima qualidade e para todos os gostos,</p>
                    <p>para mais informações acesse a aba contato na parte superior </p>
                    <p>do menu e mande sua pergunta que responderemos assim que possível, <b>boas compras.</b></p>
                </div>
            </main>
    );
}

export default Index;