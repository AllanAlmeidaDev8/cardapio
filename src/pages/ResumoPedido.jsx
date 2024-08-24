import React from 'react';

const ResumoPedido = ({ tipo, tamanho, sabores, valorPizza, nome, endereco, pontoReferencia, formaPagamento, onConfirmar }) => {
    const gerarMensagem = () => {
        return `
*Resumo do Pedido*

Tipo de Pizza: ${tipo ? tipo.replace('Pizza', '') : 'Nenhum'}
Tamanho: ${tamanho}
Sabores: ${sabores.length > 0 ? sabores.join(', ') : 'Nenhum'}
Valor: R$ ${valorPizza.toFixed(2)}

Nome: ${nome}
Endereço: ${endereco}
Ponto de Referência: ${pontoReferencia}
Forma de Pagamento: ${formaPagamento ? formaPagamento.charAt(0).toUpperCase() + formaPagamento.slice(1) : 'Não selecionada'}
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
            <h2>Resumo do Pedido</h2>
            <p><strong>Tipo de Pizza</strong> {tipo ? tipo.replace('Pizza', '') : 'Nenhum'}</p>
            <p><strong>Tamanho:</strong> {tamanho}</p>
            <p><strong>Sabores:</strong> {sabores.length > 0 ? sabores.join(', ') : 'Nenhum'}</p>
            <p><strong>Valor:</strong> R$ {valorPizza.toFixed(2)}</p>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Endereço:</strong> {endereco}</p>
            <p><strong>Ponto de Referência:</strong> {pontoReferencia}</p>
            <p><strong>Forma de Pagamento:</strong> {formaPagamento ? formaPagamento.charAt(0).toUpperCase() + formaPagamento.slice(1) : 'Não selecionada'}</p>
            <button onClick={enviarWhatsApp}>Confirmar Pedido</button>
        </div>
    );
 
};

export default ResumoPedido;

