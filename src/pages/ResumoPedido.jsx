import React from 'react';

const ResumoPedido = ({ tipo, tamanho, sabores, telefone, valorPizza, nome, endereco, pontoReferencia, formaPagamento, onConfirmar }) => {
    
    const gerarMensagem = () => {
        const data = new Date();
        const dataPedido = data.toLocaleDateString();
        const horaPedido = data.toLocaleTimeString();

        return `
*Resumo do Pedido*
-------------------------------------------------------------------------
Data do Pedido: ${dataPedido}
Hora do Pedido: ${horaPedido}
-------------------------------------------------------------------------
Tipo de Pizza: ${tipo ? tipo.replace('Pizza', '') : 'Nenhum'}
Tamanho: ${tamanho}
Sabores: ${sabores.length > 0 ? sabores.join(', ') : 'Nenhum'}
Valor: R$ ${valorPizza.toFixed(2)}
-------------------------------------------------------------------------

Nome: ${nome}
Telefone: ${telefone}\n
Endereço: ${endereco}
Ponto de Referência: ${pontoReferencia}
Forma de Pagamento: ${formaPagamento ? formaPagamento.charAt(0).toUpperCase() + formaPagamento.slice(1) : 'Não selecionada'}
-------------------------------------------------------------------------
_Obrigado pela preferência volte sempre_      

`.trim();
    };

    const enviarWhatsApp = () => {
        const mensagem = gerarMensagem();
        const telefone = '5571987136715'; // Substitua pelo número de telefone desejado com DDD
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    };

    const data = new Date();
    const dataPedido = data.toLocaleDateString();
    const horaPedido = data.toLocaleTimeString();

    return (
        <div className="resumo_pedido">
            <h2 className='subTitle'>Resumo do Pedido</h2>
            <div className="resumo_text">
                <p>
                    <strong>Data do Pedido:</strong> {dataPedido} <br />
                    <strong>Hora do Pedido:</strong> {horaPedido} <br />
                    <strong>Tipo de Pizza:</strong> {tipo ? tipo.replace('Pizza', '') : 'Nenhum'} <br />
                    <strong>Tamanho:</strong> {tamanho} <br />
                    <strong>Sabores:</strong> {sabores.length > 0 ? sabores.join(', ') : 'Nenhum'} <br />
                    <strong>Valor:</strong> R$ {valorPizza.toFixed(2)} <br />
                    <strong>Nome:</strong> {nome} <br />
                    <strong>Telefone:</strong> {telefone} <br />
                    <strong>Endereço:</strong> {endereco} <br />
                    <strong>Ponto de Referência:</strong> {pontoReferencia} <br />
                    <strong>Forma de Pagamento:</strong> {formaPagamento ? formaPagamento.charAt(0).toUpperCase() + formaPagamento.slice(1) : 'Não selecionada'}
                </p>
            </div>
            <div className="btn">
                <button onClick={enviarWhatsApp} className='button-name '>Confirmar Pedido</button>
            </div>
        </div>
    );

};

export default ResumoPedido;
