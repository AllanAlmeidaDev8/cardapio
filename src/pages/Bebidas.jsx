import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bebidas.css';
import './Tiragosto.css';
import './Button.css';
//import de imagens
import imgAguaSg from '../assets/imgBebidas/agua-mineral.webp';
import imgAguaCg from '../assets/imgBebidas/aguaCgas.webp';
import imgH2o from '../assets/imgBebidas/h2o.webp';
import imgGuarana from '../assets/imgBebidas/pepsi2l.webp';
import imgAguaT from '../assets/imgBebidas/tonica.webp';
import imgDietRef from '../assets/imgBebidas/dietRef.webp';
import imgRefri1L from '../assets/imgBebidas/refri1L.webp';
import imgRefriLat from '../assets/imgBebidas/refriLat.webp';
import imgRedLat from '../assets/imgBebidas/redbull.webp';
import imgSuc from '../assets/imgBebidas/sucos.jpg';
import imgHeinLog from '../assets/imgBebidas/heineken.webp';
import imgSkink from '../assets/imgBebidas/skinka.jpeg';
import imgCervSet from '../assets/imgBebidas/stella-artois.jpeg';
import imgMalzBier from '../assets/imgBebidas/malzebier.webp';
import imgCerImp from '../assets/imgBebidas/imperio.jpg';
import imgSem from '../assets/semImagen.webp';
import imgCervBud from '../assets/imgBebidas/budweiser.jpg';
import imgCervCor from '../assets/imgBebidas/corona-long.jpg';
import imgCervBrah from '../assets/imgBebidas/cerveja-brahma-350ml-puro-malte_80752.webp';
import imgDeva from '../assets/imgBebidas/6571c2fd558925a4e88991d5.webp';
import imgAmis from '../assets/imgBebidas/cerveja-amstel-lata-350ml_1.webp';
import imgIta from '../assets/imgBebidas/ita10.png';
import imgSchi from '../assets/imgBebidas/images.jpeg';
import imgIce from '../assets/imgBebidas/00018090_61456696-1e3d-4cfe-b0cc-d4b2b4226ed5.avif';
import imgVinh from '../assets/imgBebidas/28.jpg';
import imgCaip from '../assets/imgBebidas/b003cb6a8c5828399d548e534fa42cc6_XL.jpg';
import imgRosca from '../assets/imgBebidas/1caipirinhas.png';
import imgRosEsp from '../assets/imgBebidas/caipirinha-morango-kiwi.jpg';


const Bebidas = () => {
    const navigate = useNavigate();

    const handleBackToCardapio = () => {
        navigate('/cardapio');
    };

    const bebidasSemAlcool = [
        { nome: 'Agua s/ gás', valor: 2.5, imagem: imgAguaSg },
        { nome: 'Água c/ gás', valor: 4.0, imagem: imgAguaCg },
        { nome: 'H2O', valor: 4.0, imagem: imgH2o },
        { nome: 'Agua Tónica', valor: 5.0, imagem: imgAguaT },
        { nome: 'Suco skinka', valor: 5.0, imagem: imgSkink },
        { nome: 'Refri Lata', valor: 5.0, imagem: imgRefriLat },
        { nome: 'Refri 1L', valor: 7.0, imagem: imgRefri1L },
        { nome: 'Refri diet lata', valor: 6.0, imagem: imgDietRef },
        { nome: 'Suco de Poupa', valor: 6.0, imagem: imgSuc },
        { nome: 'Refri Pepsic 2L', valor: 12.0, imagem: imgGuarana },
        { nome: 'Red bull lata', valor: 14.0, imagem: imgRedLat },
    ];

    const bebidasCerveja = [
        { nome: 'Cerveja heineken long neck', valor: 9.0, imagem: imgHeinLog },
        { nome: 'Cerveja stella artois', valor: 8.0, imagem: imgCervSet },
        { nome: 'Malzebier Lata', valor: 6.0, imagem: imgMalzBier },
        { nome: 'Imperio Long Neck', valor: 8.0, imagem: imgCerImp },
        { nome: 'Corona Long Neck', valor: 9.0, imagem: imgCervCor },
        { nome: 'Budwiser Long Neck', valor: 8.0, imagem: imgCervBud },
        { nome: 'Brahma duplo malte lata', valor: 5.0, imagem: imgCervBrah},
        { nome: 'Devassa lata', valor: 5.0, imagem: imgDeva},
        { nome: 'Amstel lata', valor: 5.0, imagem: imgAmis },
        { nome: 'Itaipava lata', valor: 4.0, imagem: imgIta },
        { nome: 'Schin lata', valor: 3.0, imagem: imgSchi},
        { nome: 'Ice ', valor: 9.0, imagem: imgIce },
    ];

    const bebidasVinhos = [
        { nome: 'Vinho Tinto', valor: 38.0, imagem: imgVinh},

    ];

    const bebidasQuentes = [
        // { nome: 'Café', valor: 5.0, imagem: 'link-para-imagem-cafe' },
        // { nome: 'Chá', valor: 4.0, imagem: 'link-para-imagem-cha' },
    ];

    const bebidasCoqueteis = [
        { nome: 'Caipirinha', valor: 8.0, imagem: imgCaip },
        { nome: 'Rosca tradicional', valor: 10.0, imagem: imgRosca },
        { nome: 'Rosca Especial Morango e Kiuí', valor: 12.0, imagem: imgRosEsp },
    ];

    const [carrinho, setCarrinho] = useState([]);
    const [clientData, setClientData] = useState({
        nome: '',
        endereco: '',
        pontoReferencia: '',
        formaPagamento: 'Dinheiro',
    });

    const adicionarAoCarrinho = (item) => {
        const itemExistente = carrinho.find((carrinhoItem) => carrinhoItem.nome === item.nome);
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
        const itemExistente = carrinho.find((carrinhoItem) => carrinhoItem.nome === item.nome);
        if (itemExistente.quantidade > 1) {
            setCarrinho(
                carrinho.map((carrinhoItem) =>
                    carrinhoItem.nome === item.nome
                        ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade - 1 }
                        : carrinhoItem
                )
            );
        } else {
            setCarrinho(carrinho.filter((carrinhoItem) => carrinhoItem.nome !== item.nome));
        }
    };

    const calcularTotal = () => {
        return carrinho.reduce((total, item) => total + item.valor * item.quantidade, 0).toFixed(2);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData({
            ...clientData,
            [name]: value,
        });
    };

    const enviarWhatsApp = () => {
        if (!clientData.nome || !clientData.endereco || !clientData.pontoReferencia) {
            alert(
                'Por favor, preencha todos os campos obrigatórios (Nome, Endereço e Ponto de Referência) antes de enviar o pedido.'
            );
            return;
        }

        const gerarMensagem = () => {
            return `
          *Seu Pedido*
Pedido Sr pizza bar
-------------------------------------------------

Nome: ${clientData.nome}
Telefone: ${clientData.telefone}\n
Endereço: ${clientData.endereco}
Ponto de Referência: ${clientData.pontoReferencia}
-------------------------------------------------


Itens Selecionados - *Bebidas*
==================================================

Itens: ${carrinho.map((item) => `${item.nome} x ${item.quantidade}`).join(', ')}

--------------------------------------------------
Forma de Pagamento: ${clientData.formaPagamento}


Total: R$ ${calcularTotal()}
==================================================
          
_*Agradecemos a preferência! Aguardamos sua visita novamente.*_

`;
        };

        const mensagem = gerarMensagem();
        const numeroWhatsApp = '5571987136715';  // Altere para o número de WhatsApp real
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(linkWhatsApp, '_blank');
    };

    return (
        <div className="container">
            <div className="btn">
                <button className="button-name" onClick={handleBackToCardapio}>
                    Voltar ao Cardápio
                </button>
            </div>

            <div>
                <h2 className="subTitle">Bebidas Sem Álcool</h2>
                <div className="lista_bebidas">
                    {bebidasSemAlcool.map((item, index) => (
                        <label key={index} htmlFor={`bebida-sem-alcool-${index}`} className="item-container">
                            <input className="check" type="checkbox" id={`bebida-sem-alcool-${index}`} onClick={() => adicionarAoCarrinho(item)} />

                            <div className="iten_ingrediente">
                                <span className="iten">{item.nome}</span>
                            </div>
                            <div>
                                <span className="valor">R$ {item.valor.toFixed(2)}</span>
                            </div>
                            <span className="img">
                                <img src={item.imagem} alt={item.nome} />
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="subTitle">Cervejas</h2>
                <div className="lista_bebidas">
                    {bebidasCerveja.map((item, index) => (
                        <label key={index} htmlFor={`bebida-cerveja-${index}`} className="item-container">
                            <input className="check" type="checkbox" id={`bebida-cerveja-${index}`} onClick={() => adicionarAoCarrinho(item)} />

                            <div className="iten_ingrediente">
                                <span className="iten">{item.nome}</span>
                            </div>
                            <div>
                                <span className="valor">R$ {item.valor.toFixed(2)}</span>
                            </div>
                            <span className="img">
                                <img src={item.imagem} alt={item.nome} />
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="subTitle">Vinhos</h2>
                <div className="lista_bebidas">
                    {bebidasVinhos.map((item, index) => (
                        <label key={index} htmlFor={`bebida-vinho-${index}`} className="item-container">
                            <input className="check" type="checkbox" id={`bebida-vinho-${index}`} onClick={() => adicionarAoCarrinho(item)} />

                            <div className="iten_ingrediente">
                                <span className="iten">{item.nome}</span>
                            </div>
                            <div>
                                <span className="valor">R$ {item.valor.toFixed(2)}</span>
                            </div>
                            <span className="img">
                                <img src={item.imagem} alt={item.nome} />
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="subTitle">Bebidas Quentes</h2>
                <div className="lista_bebidas">
                    {bebidasQuentes.map((item, index) => (
                        <label key={index} htmlFor={`bebida-quente-${index}`} className="item-container">
                            <input className="check" type="checkbox" id={`bebida-quente-${index}`} onClick={() => adicionarAoCarrinho(item)} />

                            <div className="iten_ingrediente">
                                <span className="iten">{item.nome}</span>
                            </div>
                            <div>
                                <span className="valor">R$ {item.valor.toFixed(2)}</span>
                            </div>
                            <span className="img">
                                <img src={item.imagem} alt={item.nome} />
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="subTitle">Coquetéis</h2>
                <div className="lista_bebidas">
                    {bebidasCoqueteis.map((item, index) => (
                        <label key={index} htmlFor={`bebida-coquetel-${index}`} className="item-container">
                            <input className="check" type="checkbox" id={`bebida-coquetel-${index}`} onClick={() => adicionarAoCarrinho(item)} />

                            <div className="iten_ingrediente">
                                <span className="iten">{item.nome}</span>
                            </div>
                            <div>
                                <span className="valor">R$ {item.valor.toFixed(2)}</span>
                            </div>
                            <span className="img">
                                <img src={item.imagem} alt={item.nome} />
                            </span>
                        </label>
                    ))}
                </div>
            </div>


            <div className="carrinho">
                <h3 className='subTitle'>Carrinho</h3>
                {carrinho.length === 0 ? (
                    <p>Seu carrinho está vazio</p>
                ) : (
                    <ul >
                        {carrinho.map((item, index) => (
                            <li key={index} className='list-add'>
                                {item.nome} x {item.quantidade} - R$ {item.valor.toFixed(2)}
                                <div className="buttons-container">
                                    <div className='buttons'>
                                        <button className='add-btn' onClick={() => adicionarAoCarrinho(item)}>+</button>
                                        <button className='add-btn remov' onClick={() => removerDoCarrinho(item)}>-</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <h3>Total: R$ {calcularTotal()}</h3>
            </div>


            <form action="" className="cadastro">

                <h3>Dados do Cliente</h3>
                <label htmlFor="nome">Nome:</label>

                <input type="text" id='nome' className='input' name="nome" placeholder="Nome" value={clientData.nome} onChange={handleInputChange} required />

                <label>Telefone:</label>
                    <input
                        className="input"
                        type="tel"
                        name="telefone"
                        value={clientData.telefone}
                        onChange={handleInputChange}
                    />

                <label htmlFor="end">Endereço:</label>
                <input type="text" id='end' className='input' name="endereco" placeholder="Endereço" value={clientData.endereco} onChange={handleInputChange} required />

                <label htmlFor="pontRef">Ponto de Referência:</label>
                <input type="text" id='pontRef' className='input' name="pontoReferencia" placeholder="Ponto de Referência" alue={clientData.pontoReferencia} onChange={handleInputChange} required />

                <select
                    name="formaPagamento"
                    value={clientData.formaPagamento}
                    onChange={handleInputChange}
                >
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Pix">Pix</option>
                    <option value="Cartão de debito">Cartão de debito</option>
                    <option value="Cartão de credito">Cartão de credito</option>
                </select>
            </form>

            <div className="btn">
                <button className="button-name" onClick={enviarWhatsApp}>
                    Finalizar Pedido
                </button>
            </div>

        </div>
    );
};

export default Bebidas;
