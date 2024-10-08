import React, { useState } from 'react';
import ResumoPedido from './ResumoPedido';
import Pizzaselector from './Pizzaselector';
import './Pizza.css';
import './Button.css';
import Menu from './Menu';

const Pizza = () => {
    const [tipo, setTipo] = useState('PizzaTradicional'); // Inicializa com "PizzaTradicional"
    const [tamanho, setTamanho] = useState('');
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');
    const [formaPagamento, setFormaPagamento] = useState('');
    const [telefone, setTelefone] = useState(''); // Novo estado para telefone
    const [saboresSelecionados, setSaboresSelecionados] = useState([]);
    const [mostrarResumo, setMostrarResumo] = useState(false);

    const handleTipoChange = (e) => {
        setTipo(e.target.value);
        setTamanho(''); // Reseta o tamanho quando o tipo muda
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

    const handleTelefoneChange = (e) => { // Função para atualizar o telefone
        setTelefone(e.target.value);
    };

    const handleSaboresSelecionados = (sabores) => {
        setSaboresSelecionados(sabores);
    };

    const valores = {
        PizzaTop: { Media: 38, Grande: 48, Familia: 68 },
        PizzaEspecial: { Media: 32, Grande: 42, Familia: 58 },
        PizzaTradicional: { Media: 28, Grande: 38, Familia: 55 }
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
        if (!telefone) erro += 'Preencha seu telefone.\n'; // Adicionando validação do telefone

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
    };

    return (
        <div className="container">
            {!mostrarResumo ? (
                <>
               <Menu/>
                    <div className="pizza_type type" id='1'>
                        <h2 className='subTitle'>Escolha qual o tipo de pizza</h2>
                        <div className="input_box">
                            <input
                                type="radio"
                                id="tipo_top"
                                name="ptype"
                                value="PizzaTop"
                                onChange={handleTipoChange}
                                checked={tipo === 'PizzaTop'}
                            />
                            <label htmlFor="tipo_top">Top</label>
                            <input
                                type="radio"
                                id="tipo_especial"
                                name="ptype"
                                value="PizzaEspecial"
                                onChange={handleTipoChange}
                                checked={tipo === 'PizzaEspecial'}
                            />
                            <label htmlFor="tipo_especial">Especial</label>
                            <input
                                type="radio"
                                id="tipo_tradicional"
                                name="ptype"
                                value="PizzaTradicional"
                                onChange={handleTipoChange}
                                checked={tipo === 'PizzaTradicional'} // Tradicional como selecionado por padrão
                            />
                            <label htmlFor="tipo_tradicional">Tradicional</label>
                        </div>
                    </div>

                    <div className="pizza_size type">
                        <h2 className='subTitle'>Escolha o tamanho da sua Pizza</h2>
                        <div className="input_box">
                            <input type="radio" id="size_m" name="psize" value="Media" onChange={handleTamanhoChange} />
                            <label htmlFor="size_m">Média</label>
                            <input type="radio" id="size_g" name="psize" value="Grande" onChange={handleTamanhoChange} />
                            <label htmlFor="size_g">Grande</label>
                            <input type="radio" id="size_f" name="psize" value="Familia" onChange={handleTamanhoChange} />
                            <label htmlFor="size_f">Família</label>
                        </div>
                    </div>

                    {tipo && (
                        <div className="pizza_prices">
                            <h3>Valores:</h3>
                            <p>Média: R$ {valores[tipo].Media.toFixed(2)}</p>
                            <p>Grande: R$ {valores[tipo].Grande.toFixed(2)}</p>
                            <p>Família: R$ {valores[tipo].Familia.toFixed(2)}</p>
                        </div>
                    )}

                    {tipo && (
                        <div className="pizza_sabores">
                            <Pizzaselector tipo={tipo} onSelect={handleSaboresSelecionados} />
                        </div>
                    )}

                    <div className="pedido_details">
                        <h2>Detalhes do Pedido</h2>
                        <form className='cadastro'>
                            <label htmlFor="nome">Nome:</label>
                            <input className='input' type="text" placeholder="Nome" value={nome} onChange={handleNomeChange} id='nome' />

                            <label htmlFor="telefone">Telefone:</label>
                            <input className='input' type="text" placeholder="Telefone" value={telefone} onChange={handleTelefoneChange} id='telefone' />

                            <label htmlFor="End">Endereço:</label>
                            <input className='input' type="text" placeholder="Endereço" value={endereco} onChange={handleEnderecoChange} id='End' />

                            <label htmlFor="PontR">Ponto de Referência:</label>
                            <input className='input' type="text" placeholder="Ponto de Referência" value={pontoReferencia} onChange={handlePontoReferenciaChange} id='PontR' />
                        </form>

                        <div className='referencia'>
                            <label htmlFor="forma_pagamento">Forma de Pagamento:</label>
                            <select id="forma_pagamento" placeholder="Forma de Pagamento" value={formaPagamento} onChange={handleFormaPagamentoChange}>
                                <option value="">Selecione</option>
                                <option value="dinheiro">Dinheiro</option>
                                <option value="pix">Pix QR code</option>
                                <option value="cartao de credito">Cartão de Crédito</option>
                                <option value="cartao de debito">Cartão de Débito</option>
                            </select>
                        </div>

                        <div className="btn">
                            <button type="button" onClick={handleRevisarPedido} role="button" className="button-name">Revisar Pedido</button>
                        </div>
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
                    telefone={telefone} // Passando o telefone para o componente de resumo
                    valorPizza={valorPizza}
                    onConfirmar={handleConfirmarPedido}
                />
            )}
        </div>
    );
};

export default Pizza;
