import React from 'react';

const ResumoPedido = ({ tipo, tamanho, sabores, valorPizza, nome, endereco, pontoReferencia, formaPagamento, onConfirmar }) => {
    const gerarMensagem = () => {
        return `
*Resumo do Pedido*
-------------------------------------------------------------------------

Tipo de Pizza: ${tipo ? tipo.replace('Pizza', '') : 'Nenhum'}
Tamanho: ${tamanho}
Sabores: ${sabores.length > 0 ? sabores.join(', ') : 'Nenhum'}
Valor: R$ ${valorPizza.toFixed(2)}
-------------------------------------------------------------------------

Nome: ${nome}
Endereço: ${endereco}
Ponto de Referência: ${pontoReferencia}
Forma de Pagamento: ${formaPagamento ? formaPagamento.charAt(0).toUpperCase() + formaPagamento.slice(1) : 'Não selecionada'}
-------------------------------------------------------------------------
_Obrigado pela preferência volte sempre_      

`.trim();
    };

    const enviarWhatsApp = () => {
        const mensagem = gerarMensagem();
        const telefone = '5571992961630'; // Substitua pelo número de telefone desejado com DDD
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    };
    return (
        <div className="resumo_pedido">
            <h2 className='subTitle'>Resumo do Pedido</h2>
            <div className="resumo_text">
                <p>
                    <strong>Tipo de Pizza:</strong> {tipo ? tipo.replace('Pizza', '') : 'Nenhum'} <br />
                    <strong>Tamanho:</strong> {tamanho} <br />
                    <strong>Sabores:</strong> {sabores.length > 0 ? sabores.join(', ') : 'Nenhum'} <br />
                    <strong>Valor:</strong> R$ {valorPizza.toFixed(2)} <br />
                    <strong>Nome:</strong> {nome} <br />
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

