import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tiragosto.css';
import './Button.css';
import './Pirao.css';
import Bebidas from './Bebidas';
import imgSem from '../assets/semImagen.webp';
import imgCarmis from '../assets/imgPratos/Carne-do-sol-mista.jpg';
import imgArru from '../assets/imgPratos/arrumadinho2.jpg';
import imgCarnSol from '../assets/imgPratos/carnesol.webp';
import imgFranPass from '../assets/imgPratos/frango-a-passarinha.jpg';
import imgCamAl from '../assets/imgPratos/Camarão-Alho-e-oleo.webp';
import imgCarnFrl from '../assets/imgPratos/carne-do-sol-fritas.webp.jpg';
import imgCodFrl from '../assets/imgPratos/codorna.webp.jpg';
import imgCamFri from '../assets/imgPratos/camarao-com-fritas.webp';
import imgIscFranFri from '../assets/imgPratos/isca_de_frango.webp'; 
import imgQueiMe from '../assets/imgPratos/queijo-melaco.jpg';                  
import imgQueiPic from '../assets/imgPratos/picanhacomqueijo.webp';                  
import imgQPicFri from '../assets/imgPratos/picanha-com-fritas.webp.jpg';                  
import imgQPicAc from '../assets/imgPratos/picanha-acebolada.png';                  
import imgCupiAc from '../assets/imgPratos/Como-fazer-bife-de-cupim.jpg';                  
import imgFilFri from '../assets/imgPratos/file-com-fritas.webp.jpg';                  
import imgFilQuei from '../assets/imgPratos/fileCoquejo.webp';                  
import imgBat from '../assets/imgPratos/batata1.webp';                  
import imgBatSr from '../assets/imgPratos/batataSr.png';                  
import imgTabFri from '../assets/imgPratos/Tabua_queijos_frios.webp';                  
import imgKitSal from '../assets/imgPratos/kitSalgados.webp';                  
import imgEspCam from '../assets/imgPratos/espetinhCam.jpeg';                  
import imgEspCar from '../assets/imgPratos/espetinhCar.jpeg';                  
import imgCalSur from '../assets/imgPratos/sururu.jpeg';                  
import imgCalCar from '../assets/imgPratos/calsoCarne.jpeg';                  

const Tiragosto = () => {
    const navigate = useNavigate();

    const handleBackToCardapio = () => {
        navigate('/cardapio');
    };

    const tiraGostoItems = [
        {
            nome: 'Carne do Sol mista',
            valor: 50.0,
            imagem: imgCarmis,
            ingredientes: [],
        },
        {
            nome: 'Carne com Fritas',
            valor: 50.0,
            imagem: imgCarnFrl,
            ingredientes: []
        },
        {
            nome: 'Carne do Sol',
            valor: 45.0,
            imagem: imgCarnSol,
            ingredientes: [],
        },
        {
            nome: 'Frango a passarinha',
            valor: 45.0,
            imagem: imgFranPass,
            ingredientes: [],
        },
        {
            nome: 'Arrumadinho',
            valor: 45.0,
            imagem: imgArru,
            ingredientes: ['Carne', 'Farofa', 'Vinagrete', 'Feijão '],
        },
        {
            nome: 'Camarão ao alho e óleo',
            valor: 46.0,
            imagem: imgCamAl,
            ingredientes: ['Camarão', 'Alho'],
        },
        {
            nome: 'Isca de frango com fritas',
            valor: 44.0,
            imagem: imgIscFranFri,
            ingredientes: [],
        },
        {
            nome: 'Camarão com fritas',
            valor: 55.0,
            imagem: imgCamFri,
            ingredientes: ['Camarão', 'Batata frita'],
        },
        {
            nome: 'Codorna Frita',
            valor: 45.0,
            imagem: imgCodFrl,
            ingredientes: [],
        },
    ];

    const tiraGostoChapaItems = [
        {
            nome: 'Queijo coalho ',
            valor: 25.0,
            imagem: imgQueiMe,
            ingredientes: ['Queijo coalho', 'Melaço', 'Molho de pizza'],
        },
        {
            nome: 'Picanha c/ queijo coalho',
            valor: 57.0,
            imagem: imgQueiPic,
            ingredientes: ['Picanha', 'Queijo coalho'],
        },
        {
            nome: 'Picanha acebolada',
            valor: 57.0,
            imagem: imgQPicAc,
            ingredientes: ['Picanha', 'Cebola'],
        },
        {
            nome: 'Picanha c/ fritas',
            valor: 58.0,
            imagem: imgQPicFri,
            ingredientes: ['Picanha', 'Batata frita'],
        },
        {
            nome: 'Cupim acebolado',
            valor: 47.0,
            imagem: imgCupiAc,
            ingredientes: ['Cupim', 'Cebola'],
        },
        {
            nome: 'Filé c/ fritas',
            valor: 52.0,
            imagem: imgFilFri,
            ingredientes: ['Filé', 'Batata frita'],
        },
        {
            nome: 'Filé c/ queijo coalho',
            valor: 52.0,
            imagem: imgFilQuei,
            ingredientes: ['Filé', 'Queijo coalho'],
        },
    ];

    const petiscosItems = [
        {
            nome: 'Batata Frita',
            valor: 22.0,
            imagem: imgBat,
            ingredientes: [],
        },
        {
            nome: 'Batata Sr',
            valor: 45.0,
            imagem: imgBatSr,
            ingredientes: ['Batata', 'Queijo', 'Bacon'],
        },
        {
            nome: 'Tabua de frios',
            valor: 25.0,
            imagem: imgTabFri,
            ingredientes: ['Queijos', 'Salames', 'Azeitonas'],
        },
        {
            nome: 'Kit Salgados',
            valor: 28.0,
            imagem: imgKitSal,
            ingredientes: ['Coxinhas', 'Kibes', 'Pasteis'],
        },
        {
            nome: 'Espetinho de camarão',
            valor: 12.0,
            imagem: imgEspCam,
            ingredientes: [],
        },
        {
            nome: 'Espetinho carne',
            valor: 10.0,
            imagem: imgEspCar,
            ingredientes: [],
        },
        {
            nome: 'Caldo de sururu',
            valor: 14.0,
            imagem: imgCalSur,
            ingredientes: ['Sururu', 'Coentro', 'Alho'],
        },
        {
            nome: 'Caldo de carne seca',
            valor: 12.0,
            imagem: imgCalCar,
            ingredientes: ['Carne seca', 'Batata', 'Coentro'],
        },
    ];

    const porcoesItems = [
        { nome: 'Farofa', valor: 4.0, imagem: '/assets/mandioca.jpg', ingredientes: [] },
        { nome: 'Salada Vinagrete', valor: 6.0, imagem: '/assets/polenta.jpg', ingredientes: [] },
        { nome: 'Pão fatiado', valor: 2.5, imagem: '/assets/polenta.jpg', ingredientes: [] },
        { nome: 'Feijão fradinho', valor: 6.0, imagem: '/assets/polenta.jpg', ingredientes: [] },
        {
            nome: 'Meu feijão Tropeiro',
            valor: 8.0,
            imagem: '/assets/polenta.jpg',
            ingredientes: ['Feijão', 'Farofa', 'Linguiça', 'Ovos'],
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
Endereço: ${clientData.endereco}
Ponto de Referência: ${clientData.pontoReferencia}

Itens Selecionados - *Tira gosto*
-------------------------------------------------

Itens: ${carrinho.map((item) => `${item.nome} x ${item.quantidade}`).join(', ')}

--------------------------------------------------
Forma de Pagamento: ${clientData.formaPagamento}

Total: R$ ${calcularTotal()}
          
Agradecemos a preferência! Aguardamos sua visita novamente.

`;
        };

        const mensagem = gerarMensagem();
        const numeroWhatsApp = '5571992961630';
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
                <h2 className="subTitle">Tira Gosto</h2>
            </div>
            <div className="lista_pirao">
                {tiraGostoItems.map((item, index) => (
                    <label key={index} htmlFor={`tiraGosto-${index}`} className="item-container">
                        <input className="check" type="checkbox" id={`tiraGosto-${index}`} onClick={() => adicionarAoCarrinho(item)}
                        />

                        <div className="iten_ingrediente">
                            <span className="iten">{item.nome}</span>
                            {item.ingredientes.length > 0 && (
                                <p className="ingredientes">{item.ingredientes.join(', ')}</p>
                            )}
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

            <div>
                <h2 className="subTitle">Tira Gosto na Chapa</h2>
            </div>
            <div className="lista_pirao">
                {tiraGostoChapaItems.map((item, index) => (
                    <label key={index} htmlFor={`tiraGostoChapa-${index}`} className="item-container">
                        <input
                            className="check"
                            type="checkbox"
                            id={`tiraGostoChapa-${index}`}
                            onClick={() => adicionarAoCarrinho(item)}
                        />
                        <div className="iten_ingrediente">
                            <span className="iten">{item.nome}</span>
                            {item.ingredientes.length > 0 && (
                                <p className="ingredientes">{item.ingredientes.join(', ')}</p>
                            )}
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

            <div>
                <h2 className="subTitle">Petiscos</h2>
            </div>
            <div className="lista_pirao">
                {petiscosItems.map((item, index) => (
                    <label key={index} htmlFor={`petiscos-${index}`} className="item-container">
                        <input
                            className="check"
                            type="checkbox"
                            id={`petiscos-${index}`}
                            onClick={() => adicionarAoCarrinho(item)}
                        />
                        <div className="iten_ingrediente">
                            <span className="iten">{item.nome}</span>
                            {item.ingredientes.length > 0 && (
                                <p className="ingredientes">{item.ingredientes.join(', ')}</p>
                            )}
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

            <div>
                <h2 className="subTitle">Porções</h2>
            </div>
            <div className="lista_pirao">
                {porcoesItems.map((item, index) => (
                    <label key={index} htmlFor={`porcoes-${index}`} className="item-container">
                        <input
                            className="check"
                            type="checkbox"
                            id={`porcoes-${index}`}
                            onClick={() => adicionarAoCarrinho(item)}
                        />
                        <div className="iten_ingrediente">
                            <span className="iten">{item.nome}</span>
                            {item.ingredientes.length > 0 && (
                                <p className="ingredientes">{item.ingredientes.join(', ')}</p>
                            )}
                        </div>
                        <div>
                            <span className="valor">R$ {item.valor.toFixed(2)}</span>
                            <span className="img">
                                <img src={item.imagem} alt={item.nome} />
                            </span>
                        </div>
                    </label>
                ))}
            </div>

            <div className="carrinho">
                <h2 className="subTitle">Carrinho</h2>
                {carrinho.length > 0 ? (
                    carrinho.map((item, index) => (
                        <div key={index} className="carrinho-item">
                            <span className="iten">
                                {item.nome} x {item.quantidade}
                            </span>
                            <span className="valor">
                                R$ {(item.valor * item.quantidade).toFixed(2)}
                            </span>
                            <button
                                    className="remov"
                                    onClick={() => removerDoCarrinho(item)}
                                >
                                    -
                                </button>
                        </div>
                    ))
                ) : (
                    <p className="carrinho-vazio">Seu carrinho está vazio.</p>
                )}
                <div className="carrinho-total">
                    <span>Total: R$ {calcularTotal()}</span>
                </div>
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
                        <option value="Dinheiro">Dinheiro</option>
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
