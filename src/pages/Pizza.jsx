
import React, { useState } from 'react';
import ResumoPedido from './ResumoPedido'; // Verifique se o caminho está correto
import Pizzaselector from './Pizzaselector'; // Verifique se o caminho está correto
import { FaCheck } from "react-icons/fa6"; //inserido icones do react icons
import './Forms.css';

import './Pizza.css';


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
        PizzaTop: { Media: 25, Grande: 35, Familia: 50 },
        PizzaEspecial: { Media: 30, Grande: 40, Familia: 55 },
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
                        <h2 className='subTitle'>Escolha qual o tipo de pizza</h2>
                        <div className="pizza_type_list">
                            <input className='input radio' type="radio" id="tipo_top" name="ptype" value="PizzaTop" onChange={handleTipoChange} />
                            <label className='type_selector' htmlFor="tipo_top">
                                <p className='text'>
                                    Pizza Top {tipo === 'PizzaTop' && <FaCheck />}
                                </p>
                            </label>

                            <input className='input radio' type="radio" id="tipo_especial" name="ptype" value="PizzaEspecial" onChange={handleTipoChange} />
                            <label className='type_selector' htmlFor="tipo_especial">
                                <p className='text'>
                                    Pizza <br /> Especial{tipo === 'PizzaEspecial' && <FaCheck />}
                                </p>
                            </label>

                            <input className='input radio' type="radio" id="tipo_tradicional" name="ptype" value="PizzaTradicional" onChange={handleTipoChange} />
                            <label className='type_selector' htmlFor="tipo_tradicional">
                                <p className='text'>
                                    Pizza Tradicional{tipo === 'PizzaTradicional' && <FaCheck />}
                                </p>
                            </label>
                        </div>
                    </div>

                    <div className='conteiner_size'>
                        <h2 className='subTitle'>Escolha o tamanho da sua Pizza</h2>
                        <div className="pizza_size">

                            <input className='input radio' type="radio" id="size_m" name="psize" value="Media" onChange={handleTamanhoChange} />

                            <input className='input radio' type="radio" id="size_g" name="psize" value="Grande" onChange={handleTamanhoChange} />

                            <input className='input radio' type="radio" id="size_f" name="psize" value="Familia" onChange={handleTamanhoChange} />

                            <label htmlFor="size_m">
                                <p className='text'>
                                    Média{tamanho === 'Media' && <FaCheck />}
                                </p>
                            </label>


                            <label htmlFor="size_g">
                                <p className='text'>
                                    Grande {tamanho === 'Grande' && <FaCheck />}
                                </p>
                            </label>


                            <label htmlFor="size_f">
                                <p className='text'>
                                    Família {tamanho === 'Familia' && <FaCheck color='red' />}
                                </p>
                            </label>

                            <input className='input radio' type="radio" id="size_f" name="psize" value="Familia" onChange={handleTamanhoChange} />

                        </div>
                    </div>

                    {tipo && (
                        <div className="pizza_sabores">
                            <Pizzaselector tipo={tipo} onSelect={handleSaboresSelecionados} />
                        </div>
                    )}

                    <div className="pedido_details">
                        <h2 className='subTitle'>Insira os seus dados</h2>
                        <form action="" >
                            <div className='dados_cliente'>
                                <p>
                                    <label htmlFor="nome">Nome:</label>
                                    <input type="text" className='inputText' placeholder="Nome" value={nome} onChange={handleNomeChange} id='nome' />
                                </p>
                                <p>
                                    <label htmlFor="End">Endereço:</label><input className='inputText' type="text" placeholder="Endereço" value={endereco} onChange={handleEnderecoChange} id='End' />
                                </p>
                                <p>
                                    <label htmlFor="PontR">Ponto de Referência:</label>
                                    <input type="text" className='inputText' placeholder="Ponto de Referência" value={pontoReferencia} onChange={handlePontoReferenciaChange} id='PontR' />
                                </p>

                                <div>
                                    <label htmlFor="forma_pagamento">Forma de Pagamento:</label>
                                    <select id="forma_pagamento" placeholder="Forma de Pagamento" value={formaPagamento} onChange={handleFormaPagamentoChange}>
                                        <option value="">Selecione</option>
                                        <option value="dinheiro">Dinheiro</option>
                                        <option value="pix">Pix QR code</option>
                                        <option value="cartao de credito">Cartão de Crédito</option>
                                        <option value="cartao de debito">Cartão de Débito</option>
                                    </select>
                                </div>



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
