import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pizza.css';
import './Button.css';
import './Tiragosto.css';

const Promocoes = () => {
    const navigate = useNavigate();

    // Lógica para voltar para a página de cardápio
    const handleBackToCardapio = () => {
        navigate('/cardapio');
    };

    const promocoesItems = [
        { 
            nome: 'Pizza dobrada Grande ', 
            valor: 56.00, 
            imagem: '/assets/pizza-coca.jpg',
            ingrediente:'Português, calabresa e 4 queijos',
         },
        { 
            nome: 'Combo Família (3 pizzas médias) + Refri 2L', 
            valor: 80.00,
            ingrediente:'Português, calabresa e 4 queijos', 
            imagem: '/assets/combo-familia.jpg' 
        },
        { 
            nome: 'Rosca dobrada  Tradicional' , 
            valor: 18.00, 
            ingrediente:'(Frutas da Época)', 
            imagem: '/assets/combo-familia.jpg' },
            
        { nome: 'Rosca dobrada (Frutas da Época) Especial' , 
            valor: 22.00,
            ingrediente:'(Morango e Kiwí da Época)', 
            imagem: '/assets/combo-familia.jpg' },
    ];

    const [carrinho, setCarrinho] = useState([]);
    const [clientData, setClientData] = useState({
        nome: '',
        endereco: '',
        pontoReferencia: '',
        formaPagamento: 'Dinheiro'
    });

    const adicionarAoCarrinho = (item) => {
        const itemExistente = carrinho.find(carrinhoItem => carrinhoItem.nome === item.nome);
        if (itemExistente) {
            setCarrinho(carrinho.map(carrinhoItem =>
                carrinhoItem.nome === item.nome
                    ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade + 1 }
                    : carrinhoItem
            ));
        } else {
            setCarrinho([...carrinho, { ...item, quantidade: 1 }]);
        }
    };

    const removerDoCarrinho = (item) => {
        const itemExistente = carrinho.find(carrinhoItem => carrinhoItem.nome === item.nome);
        if (itemExistente.quantidade > 1) {
            setCarrinho(carrinho.map(carrinhoItem =>
                carrinhoItem.nome === item.nome
                    ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade - 1 }
                    : carrinhoItem
            ));
        } else {
            setCarrinho(carrinho.filter(carrinhoItem => carrinhoItem.nome !== item.nome));
        }
    };

    const calcularTotal = () => {
        return carrinho.reduce((total, item) => total + item.valor * item.quantidade, 0).toFixed(2);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData({
            ...clientData,
            [name]: value
        });
    };

    const enviarWhatsApp = () => {
        const gerarMensagem = () => {
            return `
                Nome: ${clientData.nome}\n
                Endereço: ${clientData.endereco}\n
                Ponto de Referência: ${clientData.pontoReferencia}\n
                Forma de Pagamento: ${clientData.formaPagamento}\n
                Itens: ${carrinho.map(item => `${item.nome} x ${item.quantidade}`).join(', ')}
                Total: R$ ${calcularTotal()}
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
                <h2 className='subTitle'>Promoções</h2>
            </div>
            <div className="ista_itens">
                {promocoesItems.map((item, index) => (
                    <label key={index} htmlFor={`promocao-${index}`} className="item-container">
                        <input className='check' type="checkbox" id={`promocao-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <div className="iten_ingrediente">
                            <span className='iten'>{item.nome}</span>
                            <span className='ingredientes'>{item.ingrediente}</span>
                        </div>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        
                        <span className='img'>
                            {/*<img src={item.imagem} alt={item.nome} />*/}
                        </span>
                    </label>
                ))}
            </div>

            <div className="carrinho">
                <h2 className='subTitle'>Carrinho</h2>
                {carrinho.length === 0 ? (
                    <p>Carrinho vazio</p>
                ) : (
                    carrinho.map((item, index) => (
                        <div key={index} className="carrinho-item">
                            <span>{item.nome} x {item.quantidade}</span>
                            <span>R$ {(item.valor * item.quantidade).toFixed(2)}</span>
                            <div className="btnCar">
                            <button className='add' onClick={() => adicionarAoCarrinho(item)}>+</button>
                            <button className='remov' onClick={() => removerDoCarrinho(item)}>-</button>
                            </div>
                        </div>
                    ))
                )}
                <div className="carrinho-total">
                    <h3>Total: R$ {calcularTotal()}</h3>
                </div>
            </div>

            <div className="formulario">
                <h2 className='subTitle'>Informações do Cliente</h2>
                <form className='cadastro'>
                    <label>Nome:</label>
                    <input className='input' type="text" name="nome" value={clientData.nome} onChange={handleInputChange} required />

                    <label>Endereço:</label>
                    <input className='input' type="text" name="endereco" value={clientData.endereco} onChange={handleInputChange} required />

                    <label>Ponto de Referência:</label>
                    <input className='input' type="text" name="pontoReferencia" value={clientData.pontoReferencia} onChange={handleInputChange}
                    />

                    <label>
                        Forma de Pagamento:
                        <select 
                            name="formaPagamento"
                            value={clientData.formaPagamento}
                            onChange={handleInputChange}
                        >
                            <option value="Dinheiro">Dinheiro</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                        </select>
                    </label>
                </form>
                <div className="btn">
                    <button onClick={enviarWhatsApp} role="button" className="button-name">
                        Enviar Pedido
                    </button>
                </div>
            </div>

            <button onClick={handleBackToCardapio} role="button" className="button-name">
                Voltar para o Cardápio
            </button>
        </div>
    );
};

export default Promocoes;
