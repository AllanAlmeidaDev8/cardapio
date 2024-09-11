import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pizza.css';
import './Pirao.css';
import './Button.css';

import imgPizz from '../assets/imgPratos/download.jpeg';
import imagemTurb from '../assets/imgPratos/turbinado.png';
import imagemCasa from '../assets/imgPratos/aipimcasa.jpg';
import imagemComp from '../assets/imgPratos/aipimcompleto.jpg';
import imagemPGN from '../assets/imgPratos/pirao.jpg';
import imagemPfrngo from '../assets/imgPratos/aipimfrango.jpeg';
import imgPirFil from '../assets/imgPratos/pirao-com-file.jpg';
import imgPirFran from '../assets/imgPratos/pirao-camarao.jpg';
import imgInd from '../assets/imgPratos/individual.jpg';





const Pirao = () => {
    const navigate = useNavigate();

    const handleBackToCardapio = () => {
        navigate('/cardapio');
    };

    const piraoItems = [
        {
            nome: 'Sr turbinado',
            valor: 110.0,
            imagem: imagemTurb,
            ingredientes: ['Aipim', 'Carne do sol', 'Calabresa', 'Camarão', 'Fumeiro', 'Queijo Coalho']
        },
        {
            nome: 'Pirão de aipim com camarão',
            valor: 52.0,
            imagem: imagemPGN,
            ingredientes: []
        },
        {
            nome: 'Pirão de aipim com Filé',
            valor: 52.0,
            imagem: imgPirFil,
            ingredientes: []
        },
        {
            nome: 'Pirão de aipim da casa',
            valor: 62.0,
            imagem: imagemCasa,
            ingredientes: ['Aipim', 'Carne do Sol', 'Frango', 'Camarão']
        },
        {
            nome: 'Pirão de aipim completo',
            valor: 75.0,
            imagem: imagemComp,
            ingredientes: ['Aipim', 'Frango', 'Camarão', 'Carne do sol', 'Calabresa', 'Salada']
        },
        {
            nome: 'Pirão de aipim com frango',
            valor: 45.0,
            imagem: imgPirFran,
            ingredientes: []
        },
        {
            nome: 'Pirão de aipim com carne do sol',
            valor: 45.0,
            imagem: imagemPGN,
            ingredientes: []
        },
        {
            nome: 'Pirão de aipim individual (Frango ou Carne)',
            valor: 25.0,
            imagem: imgInd,
            ingredientes: ['Frango ou Carne']
        },

    ];

    const [carrinho, setCarrinho] = useState([]);
    const [clientData, setClientData] = useState({
        nome: '',
        endereco: '',
        pontoReferencia: '',
        formaPagamento: 'Dinheiro',
    });

    const adicionarAoCarrinho = (item) => {
        const itemExistente = carrinho.find(
            (carrinhoItem) => carrinhoItem.nome === item.nome
        );
        if (itemExistente) {
            setCarrinho(
                carrinho.map((carrinhoItem) =>
                    carrinhoItem.nome === item.nome
                        ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade + 1 }
                        : carrinhoItem
                )
            );
        } else {
            setCarrinho([...carrinho, { ...item, quantidade: 1 }]);
        }
    };

    const removerDoCarrinho = (item) => {
        const itemExistente = carrinho.find(
            (carrinhoItem) => carrinhoItem.nome === item.nome
        );
        if (itemExistente.quantidade > 1) {
            setCarrinho(
                carrinho.map((carrinhoItem) =>
                    carrinhoItem.nome === item.nome
                        ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade - 1 }
                        : carrinhoItem
                )
            );
        } else {
            setCarrinho(
                carrinho.filter((carrinhoItem) => carrinhoItem.nome !== item.nome)
            );
        }
    };

    const calcularTotal = () => {
        return carrinho
            .reduce((total, item) => total + item.valor * item.quantidade, 0)
            .toFixed(2);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData({
            ...clientData,
            [name]: value,
        });
    };

    const enviarWhatsApp = () => {
        const gerarMensagem = () => {
            return `
            *Pedido Sr pizza bar*
=================================================

Nome: ${clientData.nome}\n
Endereço: ${clientData.endereco}\n
Ponto de Referência: ${clientData.pontoReferencia}\n
Forma de Pagamento: ${clientData.formaPagamento}\n

-------------------------------------------------

Itens Selecionado - *Pirão*
==================================================
                Itens: ${carrinho
                    .map((item) => `${item.nome} x ${item.quantidade}`)
                    .join(', ')}
                Total: R$ ${calcularTotal()}
==================================================
          
_*Agradecemos a preferência! Aguardamos sua visita novamente.*_
            `;
        };

        const mensagem = gerarMensagem();
        const telefone = '5571992961630'; // Substitua pelo número de telefone desejado com DDD
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="container">
            <div>
                <h2 className="subTitle">Pirão</h2>
            </div>
            <div className="lista_pirao">
                {piraoItems.map((item, index) => (
                    <label key={index} htmlFor={`pirao-${index}`} className="item-container">
                        <div className="box_itens">
                            <input className="check" type="checkbox" id={`pirao-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                            <span className="iten">{item.nome}</span>
                            <span className="valor">R$ {item.valor.toFixed(2)}</span>

                            <p className="ingredientes">
                                {item.ingredientes.join(', ')}
                            </p>
                        </div>
                        <span className="img">
                            <img src={item.imagem} alt={item.nome} />
                        </span>
                    </label>
                ))}
            </div>

            <div className="carrinho">
                <h2 className="subTitle">Carrinho</h2>
                {carrinho.length === 0 ? (
                    <p>Carrinho vazio</p>
                ) : (
                    carrinho.map((item, index) => (
                        <div key={index} className="carrinho-item">
                            <span>
                                {item.nome} x {item.quantidade}
                            </span>
                            <span>R$ {(item.valor * item.quantidade).toFixed(2)}</span>
                            <div className="btnCar">
                                <button
                                    className="add"
                                    onClick={() => adicionarAoCarrinho(item)}
                                >
                                    +
                                </button>
                                <button
                                    className="remov"
                                    onClick={() => removerDoCarrinho(item)}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))
                )}
                <div className="carrinho-total">
                    <h3>Total: R$ {calcularTotal()}</h3>
                </div>
            </div>

            <div className="formulario">
                <h2 className="subTitle">Informações do Cliente</h2>
                <form className="cadastro">
                    <label>Nome:</label>
                    <input
                        className="input"
                        type="text"
                        name="nome"
                        value={clientData.nome}
                        onChange={handleInputChange}
                        required
                    />

                    <label>Endereço:</label>
                    <input
                        className="input"
                        type="text"
                        name="endereco"
                        value={clientData.endereco}
                        onChange={handleInputChange}
                    />

                    <label>Ponto de Referência:</label>
                    <input
                        className="input"
                        type="text"
                        name="pontoReferencia"
                        value={clientData.pontoReferencia}
                        onChange={handleInputChange}
                    />

                    <label>
                        <h4 style={
                            {
                                padding:'10px 20px',
                                textAlign: 'center'
                            }
                        }>Forma de Pagamento:</h4>
                        <select style={
                            {
                                padding:"10px"
                            }
                        }
                            name="formaPagamento"
                            value={clientData.formaPagamento}
                            onChange={handleInputChange}
                        >
                            <option value="Dinheiro">Dinheiro</option>
                            <option value="Cartão de Débito">Pix</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                        </select>
                    </label>
                </form>

            </div>
            <div>
                <div className="btn">
                    <button
                        onClick={enviarWhatsApp}
                        role="button"
                        className="button-name"
                    >
                        Enviar Pedido
                    </button>
                </div>

                <div>
                    <button
                        onClick={handleBackToCardapio}
                        role="button"
                        className="button-name btn"
                    >
                        Voltar para o Cardápio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pirao;
