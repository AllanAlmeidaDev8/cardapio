import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pizza.css';
import './Button.css';
import imagen from './img/pzm.jpg';

const Pirao = () => {
    const navigate = useNavigate();

    const handleBackToCardapio = () => {
        navigate('/cardapio');
    };

    const piraoItems = [
        { nome: 'Sr turbinado', valor: 99.00, imagem: './img/pzm.jpg' },
        { nome: 'Pirão com camarão', valor: 50.00, imagem: '/assets/arroz-grega.jpg' },
        { nome: 'Pirão com Filé', valor: 50.00, imagem: '/assets/arroz-grega.jpg' },
        { nome: 'Pirão da casa', valor: 60.00, imagem: '/assets/arroz-grega.jpg' },
        { nome: 'Pirão completo', valor: 72.00, imagem: '/assets/arroz-grega.jpg' },
        { nome: 'Pirão individual', valor: 25.00, imagem: '/assets/arroz-grega.jpg' },
        { nome: 'Pirão com frango', valor: 45.00, imagem: '/assets/arroz-grega.jpg' },
        { nome: 'Pirão com carne do sol', valor: 45.00, imagem: '/assets/arroz-grega.jpg' },
    ];

   /* const piraoChapaItems = [
        { nome: 'Peito de Frango na Chapa', valor: 30.00, imagem: '/assets/frango-chapa.jpg' },
        { nome: 'Filezinho de Carne na Chapa', valor: 40.00, imagem: '/assets/carne-chapa.jpg' }
    ];*/

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
                <h2 className='subTitle'>Pirão</h2>
                <img src={ imagen } alt=""  width={100}/>
            </div>
            <div className="ista_itens">
                {piraoItems.map((item, index) => (
                    <label key={index} htmlFor={`pirao-${index}`} className="item-container">
                        <input className='check' type="checkbox" id={`pirao-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            {/* <img src={item.imagem} alt={item.nome} /> */}
                        </span>
                    </label>
                ))}
            </div>


            {/*<div>
                <h2 className='subTitle'>Pirão na Chapa</h2>
            </div>
            <div className="ista_itens">
                {piraoChapaItems.map((item, index) => (
                    <label key={index} htmlFor={`piraoChapa-${index}`} className="item-container">
                        <input type="checkbox" id={`piraoChapa-${index}`} onClick={() => adicionarAoCarrinho(item)} />
                        <span className='iten'>{item.nome}</span>
                        <span className='valor'>R$ {item.valor.toFixed(2)}</span>
                        <span className='img'>
                            <img src={item.imagem} alt={item.nome} />
                        </span>
                    </label>
                ))}
            </div>*/}

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
}

export default Pirao;
