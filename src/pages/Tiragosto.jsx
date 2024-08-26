import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tiragosto.css';

const Tiragosto = () => {
    const navigate = useNavigate();

    // Lógica para voltar para a página de cardápio
    const handleBackToCardapio = () => {
        navigate('/cardapio');
    };

    const tiraGostoItems = [
        { nome: 'Batata Frita', valor: 12.00, imagem: '/assets/batata-frita.jpg' },
        { nome: 'Frango à Passarinho', valor: 20.00, imagem: '/assets/frango-passarinho.jpg' }
    ];

    const tiraGostoChapaItems = [
        { nome: 'Picanha na Chapa', valor: 45.00, imagem: '/assets/picanha-chapa.jpg' },
        { nome: 'Linguiça na Chapa', valor: 25.00, imagem: '/assets/linguica-chapa.jpg' }
    ];

    const petiscosItems = [
        { nome: 'Calabresa Acebolada', valor: 18.00, imagem: '/assets/calabresa-acebolada.jpg' },
        { nome: 'Torresmo', valor: 15.00, imagem: '/assets/torresmo.jpg' }
    ];

    const porcoesItems = [
        { nome: 'Porção de Mandioca', valor: 10.00, imagem: '/assets/mandioca.jpg' },
        { nome: 'Porção de Polenta', valor: 12.00, imagem: '/assets/polenta.jpg' }
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
                <h2 className='subTitle'>Tira Gosto</h2>
            </div>
            <div className="ista_itens">
                {tiraGostoItems.map((item, index) => (
                    <label key={index} htmlFor={`tiraGosto-${index}`} className="item-container">
                        <input type="checkbox" id={`tiraGosto-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            <img src={item.imagem} alt={item.nome} />
                        </span>
                    </label>
                ))}
            </div>

            <div>
                <h2 className='subTitle'>Tira Gosto na Chapa</h2>
            </div>
            <div className="ista_itens">
                {tiraGostoChapaItems.map((item, index) => (
                    <label key={index} htmlFor={`tiraGostoChapa-${index}`} className="item-container">
                        <input type="checkbox" id={`tiraGostoChapa-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            <img src={item.imagem} alt={item.nome} />
                        </span>
                    </label>
                ))}
            </div>

            <div>
                <h2 className='subTitle'>Petiscos</h2>
            </div>
            <div className="ista_itens">
                {petiscosItems.map((item, index) => (
                    <label key={index} htmlFor={`petiscos-${index}`} className="item-container">
                        <input type="checkbox" id={`petiscos-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            <img src={item.imagem} alt={item.nome} />
                        </span>
                    </label>
                ))}
            </div>

            <div>
                <h2 className='subTitle'>Porções</h2>
            </div>
            <div className="ista_itens">
                {porcoesItems.map((item, index) => (
                    <label key={index} htmlFor={`porcoes-${index}`} className="item-container">
                        <input type="checkbox" id={`porcoes-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            <img src={item.imagem} alt={item.nome} />
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
                            <button onClick={() => removerDoCarrinho(item)}>Remover</button>
                        </div>
                    ))
                )}
                <div className="carrinho-total">
                    <h3>Total: R$ {calcularTotal()}</h3>
                </div>
            </div>

            <div className="formulario">
                <h2 className='subTitle'>Informações do Cliente</h2>
                <form>
                    <label>
                        Nome:
                        <input
                            type="text"
                            name="nome"
                            value={clientData.nome}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Endereço:
                        <input
                            type="text"
                            name="endereco"
                            value={clientData.endereco}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Ponto de Referência:
                        <input
                            type="text"
                            name="pontoReferencia"
                            value={clientData.pontoReferencia}
                            onChange={handleInputChange}
                        />
                    </label>
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
                <button onClick={enviarWhatsApp} className="submit-button">
                    Enviar Pedido
                </button>
            </div>

            <button onClick={handleBackToCardapio} className="back-button">
                Voltar para o Cardápio
            </button>
        </div>
    );
}

export default Tiragosto;
