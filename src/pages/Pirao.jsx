// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Pizza.css';
// import './Pirao.css';
// import './Button.css';
// import imagen from './img/pzm.jpg';
// import Mussarela from '../assets/Mussarela.jpg'
// import imagemPiZZa from '../assets/img-pizza.png'

// const Pirao = () => {
//     const navigate = useNavigate();

//     const handleBackToCardapio = () => {
//         navigate('/cardapio');
//     };

//     const piraoItems = [
//         { nome: 'Sr turbinado', valor: 110.00, imagemPiZZa: '../img-pizza.png' },
//         { nome: 'Pirão de aipim com camarão', valor: 52.00, imagem: '/assets/arroz-grega.jpg' },
//         { nome: 'Pirão de aipim com Filé', valor: 52.00, imagem: '/assets/arroz-grega.jpg' },
//         { nome: 'Pirão de aipim da casa', valor: 62.00, imagem: '/assets/arroz-grega.jpg' },
//         { nome: 'Pirão de aipim completo', valor: 75.00, imagem: '/assets/arroz-grega.jpg' },
//         { nome: 'Pirão de aipim com frango', valor: 45.00, imagem: '/assets/arroz-grega.jpg' },
//         { nome: 'Pirão de aipim com carne do sol', valor: 45.00, imagem: '/assets/arroz-grega.jpg' },
//         { nome: 'Pirão de aipim individual (Frango ou Carne)', valor: 25.00, imagem: '/assets/arroz-grega.jpg' },
//     ];

//    /* const piraoChapaItems = [
//         { nome: 'Peito de Frango na Chapa', valor: 30.00, imagem: '/assets/frango-chapa.jpg' },
//         { nome: 'Filezinho de Carne na Chapa', valor: 40.00, imagem: '/assets/carne-chapa.jpg' }
//     ];*/

//     const [carrinho, setCarrinho] = useState([]);
//     const [clientData, setClientData] = useState({
//         nome: '',
//         endereco: '',
//         pontoReferencia: '',
//         formaPagamento: 'Dinheiro'
//     });

//     const adicionarAoCarrinho = (item) => {
//         const itemExistente = carrinho.find(carrinhoItem => carrinhoItem.nome === item.nome);
//         if (itemExistente) {
//             setCarrinho(carrinho.map(carrinhoItem =>
//                 carrinhoItem.nome === item.nome
//                     ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade + 1 }
//                     : carrinhoItem
//             ));
//         } else {
//             setCarrinho([...carrinho, { ...item, quantidade: 1 }]);
//         }
//     };

//     const removerDoCarrinho = (item) => {
//         const itemExistente = carrinho.find(carrinhoItem => carrinhoItem.nome === item.nome);
//         if (itemExistente.quantidade > 1) {
//             setCarrinho(carrinho.map(carrinhoItem =>
//                 carrinhoItem.nome === item.nome
//                     ? { ...carrinhoItem, quantidade: carrinhoItem.quantidade - 1 }
//                     : carrinhoItem
//             ));
//         } else {
//             setCarrinho(carrinho.filter(carrinhoItem => carrinhoItem.nome !== item.nome));
//         }
//     };

//     const calcularTotal = () => {
//         return carrinho.reduce((total, item) => total + item.valor * item.quantidade, 0).toFixed(2);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target; 
//         setClientData({
//             ...clientData,
//             [name]: value
//         });
//     };

//     const enviarWhatsApp = () => {
//         const gerarMensagem = () => {
//             return `
//                 Nome: ${clientData.nome}\n
//                 Endereço: ${clientData.endereco}\n
//                 Ponto de Referência: ${clientData.pontoReferencia}\n
//                 Forma de Pagamento: ${clientData.formaPagamento}\n
//                 Itens: ${carrinho.map(item => `${item.nome} x ${item.quantidade}`).join(', ')}
//                 Total: R$ ${calcularTotal()}
//             `;
//         };

//         const mensagem = gerarMensagem();
//         const telefone = '5571992961630'; // Substitua pelo número de telefone desejado com DDD
//         const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
//         window.open(url, '_blank');
//     };

//     return (
//         <div className="container">
//             <div>
//                 <h2 className='subTitle'>Pirão</h2>
//                 {/* <img src={ imagen } alt=""  width={100}/> */}
//             </div>
//             <div className='lista_pirao'>
//                 {piraoItems.map((item, index) => (
//                     <label key={index} htmlFor={`pirao-${index}`} className="item-container">
//                         <input className='check' type="checkbox" id={`pirao-${index}`} onClick={() => adicionarAoCarrinho(item)} />
//                         <span className='iten'>{item.nome}</span>
//                         <span className='valor'>R$ {item.valor.toFixed(2)}</span>
//                         <span className='img'>
//                              <img src={item.Mussarela} alt={item.nome} /> 
//                         </span>
//                     </label>
//                 ))}
//             </div>


//             {/*<div>
//                 <h2 className='subTitle'>Pirão na Chapa</h2>
//             </div>
//             <div className="ista_itens">
//                 {piraoChapaItems.map((item, index) => (
//                     <label key={index} htmlFor={`piraoChapa-${index}`} className="item-container">
//                         <input type="checkbox" id={`piraoChapa-${index}`} onClick={() => adicionarAoCarrinho(item)} />
//                         <span className='iten'>{item.nome}</span>
//                         <span className='valor'>R$ {item.valor.toFixed(2)}</span>
//                         <span className='img'>
//                             <img src={item.imagem} alt={item.nome} />
//                         </span>
//                     </label>
//                 ))}
//             </div>*/}

//             <div className="carrinho">
//                 <h2 className='subTitle'>Carrinho</h2>
//                 {carrinho.length === 0 ? (
//                     <p>Carrinho vazio</p>
//                 ) : (
//                     carrinho.map((item, index) => (
//                         <div key={index} className="carrinho-item">
//                             <span>{item.nome} x {item.quantidade}</span>
//                             <span>R$ {(item.valor * item.quantidade).toFixed(2)}</span>
//                             <div className="btnCar">
//                             <button className='add' onClick={() => adicionarAoCarrinho(item)}>+</button>
//                             <button className='remov' onClick={() => removerDoCarrinho(item)}>-</button>
//                             </div>
//                         </div>
//                     ))
//                 )}
//                 <div className="carrinho-total">
//                     <h3>Total: R$ {calcularTotal()}</h3>
//                 </div>
//             </div>

//             <div className="formulario">
//                 <h2 className='subTitle'>Informações do Cliente</h2>
//                 <form className='cadastro'>
//                     <label>Nome:</label>
//                     <input className='input' type="text" name="nome" value={clientData.nome} onChange={handleInputChange} required />

//                     <label>Endereço:</label>
//                     <input className='input' type="text" name="endereco" value={clientData.endereco} onChange={handleInputChange}/>

//                     <label>Ponto de Referência:</label>
//                     <input className='input' type="text" name="pontoReferencia" value={clientData.pontoReferencia} onChange={handleInputChange}
//                     />

//                     <label>
//                        <h4>Forma de Pagamento:</h4>
//                         <select 
//                             name="formaPagamento"
//                             value={clientData.formaPagamento}
//                             onChange={handleInputChange}
//                         >
//                             <option value="Dinheiro">Dinheiro</option>
//                             <option value="Cartão de Débito">Pix</option>
//                             <option value="Cartão de Débito">Cartão de Débito</option>
//                             <option value="Cartão de Crédito">Cartão de Crédito</option>
                            
                            
//                         </select>
//                     </label>
//                 </form>
//                 <div className="btn">
//                     <button onClick={enviarWhatsApp} role="button" className="button-name">
//                         Enviar Pedido
//                     </button>
//                 </div>
//             </div>

//             <button onClick={handleBackToCardapio} role="button" className="button-name">
//                 Voltar para o Cardápio
//             </button>
//         </div>
//     );
// }

// export default Pirao;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pizza.css';
import './Pirao.css';
import './Button.css';
import Mussarela from '../assets/Mussarela.jpg';
import imgPizz from '../assets/imgPratos/download.jpeg';
import imagemTurb from '../assets/imgPratos/turbinado.png';
import imagemCasa from '../assets/imgPratos/aipimcasa.jpg';
import imagemComp from '../assets/imgPratos/aipimcompleto.jpg';
import imagemPGN from '../assets/imgPratos/pirao.jpg';
import imagemPfrngo from '../assets/imgPratos/aipimfrango.jpeg';



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
            ingredientes: ['Aipim','Carne do sol', 'Calabresa','Camarão','Fumeiro', 'Queijo Coalho']
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
            imagem: imgPizz,
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
            ingredientes: ['Aipim', 'Frango', 'Camarão', 'Carne do sol' ,'Calabresa', 'Salada']
        },
        {
            nome: 'Pirão de aipim com frango',
            valor: 45.0,
            imagem: imagemPGN,
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
            imagem: imagemPfrngo,
            ingredientes: [ 'Frango ou Carne']
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
            Pedido Sr pizza bar
-------------------------------------------------

Nome: ${clientData.nome}\n
Endereço: ${clientData.endereco}\n
Ponto de Referência: ${clientData.pontoReferencia}\n
Forma de Pagamento: ${clientData.formaPagamento}\n
-------------------------------------------------

Itens Selecionado - *Pirão*
-------------------------------------------------
                Itens: ${carrinho
                    .map((item) => `${item.nome} x ${item.quantidade}`)
                    .join(', ')}
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
                        <h4>Forma de Pagamento:</h4>
                        <select
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
                <div className="btn">
                    <button
                        onClick={enviarWhatsApp}
                        role="button"
                        className="button-name"
                    >
                        Enviar Pedido
                    </button>
                </div>
            </div>

            <button
                onClick={handleBackToCardapio}
                role="button"
                className="button-name"
            >
                Voltar para o Cardápio
            </button>
        </div>
    );
};

export default Pirao;
