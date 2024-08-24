import React, { useState } from 'react';
import ResumoPedido from './ResumoPedido'; // Verifique se o caminho está correto
import Pizzaselector from './Pizzaselector'; // Verifique se o caminho está correto

const Pizza = () => {
    const [tipo, setTipo] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');
    const [formaPagamento, setFormaPagamento] = useState('');
    const [saboresSelecionados, setSaboresSelecionados] = useState([]);
    const [mostrarResumo, setMostrarResumo] = useState(false);

    const handleTipoChange = (e) => {
        setTipo(e.target.value);
    };

    const handleTamanhoChange = (e) => {
        setTamanho(e.target.value);
    };

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };

    const handleEnderecoChange = (e) => {
        setEndereco(e.target.value);
    };

    const handlePontoReferenciaChange = (e) => {
        setPontoReferencia(e.target.value);
    };

    const handleFormaPagamentoChange = (e) => {
        setFormaPagamento(e.target.value);
    };

    const handleSaboresSelecionados = (sabores) => {
        setSaboresSelecionados(sabores);
    };

    const valores = {
        PizzaTop: { Media: 40, Grande: 50, Familia: 68 },
        PizzaEspecial: { Media: 34, Grande: 40, Familia: 59 },
        PizzaTradicional: { Media: 30, Grande: 39, Familia: 56 }
    };

    const valorPizza = tipo && tamanho ? valores[tipo][tamanho] : 0;

    const validarCampos = () => {
        let erro = '';
        if (!tipo) erro += 'Selecione o tipo de pizza.\n';
        if (!tamanho) erro += 'Selecione o tamanho da pizza.\n';
        if (!nome) erro += 'Preencha seu nome.\n';
        if (!endereco) erro += 'Preencha seu endereço.\n';
        if (!pontoReferencia) erro += 'Preencha o ponto de referência.\n';
        if (!formaPagamento) erro += 'Selecione a forma de pagamento.\n';

        if (erro) {
            alert(erro);
            return false;
        }
        return true;
    };

    const handleRevisarPedido = () => {
        if (validarCampos()) {
            setMostrarResumo(true);
        }
    };

    const handleConfirmarPedido = () => {
        alert('Pedido confirmado!');
        // Aqui você pode adicionar a lógica para finalizar o pedido, como enviar os dados para um servidor.
    };

    return (
        <div className="container_">
            {!mostrarResumo ? (
                <>
                    <div className="pizza_type">
                        <h2>Escolha qual o tipo de pizza</h2>
                        <input type="radio" id="tipo_top" name="ptype" value="PizzaTop" onChange={handleTipoChange} />
                        <label htmlFor="tipo_top">Pizza Top</label>

                        <input type="radio" id="tipo_especial" name="ptype" value="PizzaEspecial" onChange={handleTipoChange} />
                        <label htmlFor="tipo_especial">Pizza Especial</label>

                        <input type="radio" id="tipo_tradicional" name="ptype" value="PizzaTradicional" onChange={handleTipoChange} />
                        <label htmlFor="tipo_tradicional">Pizza Tradicional</label>
                    </div>

                    <div className="pizza_size">
                        <h2>Escolha o tamanho da sua Pizza</h2>
                        <input type="radio" id="size_m" name="psize" value="Media" onChange={handleTamanhoChange} />
                        <label htmlFor="size_m">Pizza Média</label>

                        <input type="radio" id="size_g" name="psize" value="Grande" onChange={handleTamanhoChange} />
                        <label htmlFor="size_g">Pizza Grande</label>

                        <input type="radio" id="size_f" name="psize" value="Familia" onChange={handleTamanhoChange} />
                        <label htmlFor="size_f">Pizza Família</label>
                    </div>

                    {tipo && (
                        <div className="pizza_sabores">
                            <Pizzaselector tipo={tipo} onSelect={handleSaboresSelecionados} />
                        </div>
                    )}

                    <div className="pedido_details">
                        <h2>Detalhes do Pedido</h2>
                        <form action="">
                            <p><label htmlFor="nome">Nome:</label><input type="text" placeholder="Nome" value={nome} onChange={handleNomeChange} id='nome' /></p>
                            <p><label htmlFor="End">Endereço:</label><input type="text" placeholder="Endereço" value={endereco} onChange={handleEnderecoChange} id='End' /></p>
                            <p><label htmlFor="PontR">Ponto de Referência:</label><input type="text" placeholder="Ponto de Referência" value={pontoReferencia} onChange={handlePontoReferenciaChange} id='PontR'/></p>
                           
                          
                            <div>
                                 <label htmlFor="forma_pagamento">Forma de Pagamento:</label>
                                 <select id="forma_pagamento"placeholder="Forma de Pagamento" value={formaPagamento} onChange={handleFormaPagamentoChange}
                                 >
                                     <option value="">Selecione</option>
                                     <option value="dinheiro">Dinheiro</option>
                                    <option value="pix">Pix QR code</option>
                                     <option value="cartao de credito">Cartão de Crédito</option>
                                    <option value="cartao de debito">Cartão de Débito</option>
                                 </select>
                             </div>
                            
                            <button onClick={handleRevisarPedido}>Revisar Pedido</button>
                        </form>
                    </div>
                </>
            ) : (
                <ResumoPedido
                    tipo={tipo}
                    tamanho={tamanho}
                    sabores={saboresSelecionados}
                    nome={nome}
                    endereco={endereco}
                    pontoReferencia={pontoReferencia}
                    formaPagamento={formaPagamento}
                    valorPizza={valorPizza}
                    onConfirmar={handleConfirmarPedido}
                />
            )}
        </div>
    );
};

export default Pizza;

