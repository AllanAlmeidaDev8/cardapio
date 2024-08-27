import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tiragosto.css';
import './Button.css';

const Tiragosto = () => {
    const navigate = useNavigate();

    const handleBackToCardapio = () => {
        navigate('/cardapio');
    };

    const tiraGostoItems = [
        { nome: 'Carne do Sol mista', valor: 48.00, imagem: './assets/download.jpg' },
        { nome: 'Carne do Sol', valor: 45.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Frango a passarinha', valor: 40.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Arrumadinho 45', valor: 45.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Espetinho de camarão c/ carne do Sol', valor: 30.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Camarão ali óleo', valor: 45.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Isca de frango com fritas', valor: 40.00, imagem: '/assets/frango-passarinho.jpg' },
    ];

    const tiraGostoChapaItems = [
        { nome: 'Queijo coalho c/ melaço ou com molho de pizza', valor: 25.00, imagem: '/assets/picanha-chapa.jpg' },
        { nome: 'Picanha c/ queijo coalho', valor: 55.00, imagem: '/assets/linguica-chapa.jpg' },
        { nome: 'Picanha acebolada', valor: 55.00, imagem: '/assets/linguica-chapa.jpg' },
        { nome: 'Picanha c/ fritas', valor: 58.00, imagem: '/assets/linguica-chapa.jpg' },
        { nome: 'Cupim acebolado', valor: 45.00, imagem: '/assets/linguica-chapa.jpg' },
        { nome: 'Filé c/ fritas', valor: 50.00, imagem: '/assets/linguica-chapa.jpg' },
        { nome: 'Filé c/ queijo coalho', valor: 50.00, imagem: '/assets/linguica-chapa.jpg' },
        { nome: 'Camarão com fritas', valor: 55.00, imagem: '/assets/linguica-chapa.jpg' },
    ];

    const petiscosItems = [
        { nome: 'Batata Frita', valor: 22.00, imagem: '/assets/batata-frita.jpg' },
        { nome: 'Batata Mista ao molho da casa', valor: 40.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Tabua de frios', valor: 28.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Espetinho de camarão', valor: 22.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Espetinho de camarão c/ carne do Sol', valor: 30.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Caldo de sururu', valor: 14.00, imagem: '/assets/frango-passarinho.jpg' },
        { nome: 'Caldo de carne seca', valor: 12.00, imagem: '/assets/frango-passarinho.jpg' },
    ];

    const porcoesItems = [
        { nome: 'Farofa', valor: 4.00, imagem: '/assets/mandioca.jpg' },
        { nome: 'Faladas', valor: 6.00, imagem: '/assets/polenta.jpg' },
        { nome: 'Pão fatiado', valor: 2.50, imagem: '/assets/polenta.jpg' },
        { nome: 'Feijão fradinho', valor: 6.00, imagem: '/assets/polenta.jpg' },
        { nome: 'Meu feijão Tropeiro', valor: 7.00, imagem: '/assets/polenta.jpg' },
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
        if (!clientData.nome || !clientData.endereco || !clientData.pontoReferencia) {
            alert("Por favor, preencha todos os campos obrigatórios (Nome, Endereço e Ponto de Referência) antes de enviar o pedido.");
            return;
        }

        const gerarMensagem = () => {
            return `
                *Seu Pedido*

Nome: ${clientData.nome}
Endereço: ${clientData.endereco}
Itens: ${carrinho.map(item => `${item.nome} x ${item.quantidade}`).join(', ')}
Ponto de Referência: ${clientData.pontoReferencia}
Forma de Pagamento: ${clientData.formaPagamento}

Total: R$ ${calcularTotal()}
            `;
        };

        const mensagem = gerarMensagem();
        const telefone = '5571992961630';
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
                        <input className='check' type="checkbox" id={`tiraGosto-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            {/* <img src={item.imagem} alt={item.nome} /> */}{/*inserir imagem aqui */}
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
                        <input className='check' type="checkbox" id={`tiraGostoChapa-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            {/* <img src={item.imagem} alt={item.nome} /> */}{/*inserir imagem aqui*/}
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
                        <input className='check' type="checkbox" id={`petiscos-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            {/* <img src={item.imagem} alt={item.nome} /> */}{/*inserir imagem aqui*/}
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
                        <input className='check' type="checkbox" id={`porcoes-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            {/* <img src={item.imagem} alt={item.nome} /> */}{/*inserir imagem aqui*/}
                        </span>
                    </label>
                ))}
            </div>

            <div className="carrinho">
                <h2 className='subTitle'>Carrinho</h2>
                <ul>
                    {carrinho.map((item, index) => (
                        <li key={index}>
                            {item.nome} x {item.quantidade} - R$ {(item.valor * item.quantidade).toFixed(2)}
                            <div className="btnCar">
                            <button className='add' onClick={() => adicionarAoCarrinho(item)}>+</button>
                            <button className='remov' onClick={() => removerDoCarrinho(item)}>-</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <h4>Total: R$ {calcularTotal()}</h4>
            </div>

            <h3>Informações do Cliente:</h3>
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
                            <option  value="Dinheiro">Dinheiro</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                        </select>
                    </label>
                </form>
            <div className="btn">
                <button onClick={enviarWhatsApp} role="button" className="button-name">Enviar Pedido</button>
            </div>
            <div className="btn">
                <button onClick={handleBackToCardapio} role="button" className="button-name">Voltar ao Cardápio</button>
            </div>

        </div>
    );
}

export default Tiragosto;
