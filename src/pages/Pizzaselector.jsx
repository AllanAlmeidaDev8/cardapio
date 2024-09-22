
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
import imgFeiTro from '../assets/imgPratos/feijaoTropeiro.jpg';
import imgFrad from '../assets/imgPratos/fradinho.jpg';
import imgPaoFat from '../assets/imgPratos/paofatiado.jpg';
import imgSald from '../assets/imgPratos/vinagrete.jpg';
import imgFarof from '../assets/imgPratos/farofa.jpg';


import React, { useState, useEffect } from 'react';
import './Pizza.css';

const Pizzaselector = ({ tipo, tamanho, onSelect }) => {
    const [selecionados, setSelecionados] = useState([]);
    const [selecionadosBebidas, setSelecionadosBebidas] = useState([]);
    const [selecionadosTiragosto, setSelecionadosTiragosto] = useState([]);
    const [erroTamanho, setErroTamanho] = useState(false);

     // Definição da variável bebidasCerveja antes de ser utilizada
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
        { nome: 'Vinho Tinto', valor: 38.0, imagem: imgVinh},
    ];


    const tiraGostoList = [
        { nome: 'Carne do Sol mista', valor: 50.0, imagem: imgCarmis, ingredientes: [], },
        { nome: 'Carne com Fritas', valor: 50.0, imagem: imgCarnFrl, ingredientes: [] },
        { nome: 'Carne do Sol', valor: 45.0, imagem: imgCarnSol, ingredientes: [], },
        { nome: 'Frango a passarinha', valor: 45.0, imagem: imgFranPass, ingredientes: [], },
        { nome: 'Arrumadinho', valor: 45.0, imagem: imgArru, ingredientes: ['Carne', 'Farofa', 'Vinagrete', 'Feijão '], },
        { nome: 'Camarão ao alho e óleo', valor: 46.0, imagem: imgCamAl, ingredientes: ['Camarão', 'Alho'], },
        { nome: 'Isca de frango com fritas', valor: 44.0, imagem: imgIscFranFri, ingredientes: [], },
        { nome: 'Camarão com fritas', valor: 55.0, imagem: imgCamFri, ingredientes: ['Camarão', 'Batata frita'], },
        { nome: 'Codorna Frita', valor: 45.0, imagem: imgCodFrl, ingredientes: [], },
        { nome: 'Queijo coalho ', valor: 25.0, imagem: imgQueiMe, ingredientes: ['Queijo coalho', 'Melaço', 'Molho de pizza'], }, 
        { nome: 'Picanha c/ queijo coalho', valor: 57.0, imagem: imgQueiPic, ingredientes: ['Picanha', 'Queijo coalho'], }, 
        { nome: 'Picanha acebolada', valor: 57.0, imagem: imgQPicAc, ingredientes: ['Picanha', 'Cebola'], }, 
        { nome: 'Picanha c/ fritas', valor: 58.0, imagem: imgQPicFri, ingredientes: ['Picanha', 'Batata frita'], }, 
        { nome: 'Cupim acebolado', valor: 47.0, imagem: imgCupiAc, ingredientes: ['Cupim', 'Cebola'], }, 
        { nome: 'Filé c/ fritas', valor: 52.0, imagem: imgFilFri, ingredientes: ['Filé', 'Batata frita'], }, 
        { nome: 'Filé c/ queijo coalho', valor: 52.0, imagem: imgFilQuei, ingredientes: ['Filé', 'Queijo coalho'], },
        { nome: 'Batata Frita', valor: 22.0, imagem: imgBat, ingredientes: [], }, 
        { nome: 'Batata Sr', valor: 45.0, imagem: imgBatSr, ingredientes: ['Batata', 'Queijo', 'Bacon'], }, 
        { nome: 'Tabua de frios', valor: 25.0, imagem: imgTabFri, ingredientes: ['Queijo Reino', 'Salames', 'Azeitonas', 'Gorgonzola', 'Peito de peru', 'Queijo prato'], }, 
        { nome: 'Kit Salgados', valor: 28.0, imagem: imgKitSal, ingredientes: ['Coxinhas', 'Kibes', 'Pasteis'], }, { nome: 'Espetinho de camarão', valor: 12.0, imagem: imgEspCam, ingredientes: [], }, 
        { nome: 'Espetinho carne', valor: 10.0, imagem: imgEspCar, ingredientes: [], }, 
        { nome: 'Caldo de sururu', valor: 14.0, imagem: imgCalSur, ingredientes: ['Sururu', 'Coentro', 'Alho'], }, 
        { nome: 'Caldo de carne seca', valor: 12.0, imagem: imgCalCar, ingredientes: ['Carne seca', 'Batata', 'Coentro'], },
        
        // ... outros tira-gostos
    ];

    const handleCheckboxChange = (nome) => {
        if (!tamanho) {
            setErroTamanho(true);
        } else {
            setErroTamanho(false);
        }

        const isSelected = selecionados.includes(nome);
        const maxSabores = tipo === 'PizzaTradicional' ? 3 : 4;

        if (isSelected) {
            setSelecionados(selecionados.filter(sabor => sabor !== nome));
        } else {
            if (selecionados.length < maxSabores) {
                setSelecionados([...selecionados, nome]);
            } else {
                alert(`Você pode selecionar no máximo ${maxSabores} sabores.`);
            }
        }
    };

    const handleBebidaChange = (nome) => {
        const isSelected = selecionadosBebidas.includes(nome);

        if (isSelected) {
            setSelecionadosBebidas(selecionadosBebidas.filter(bebida => bebida !== nome));
        } else {
            setSelecionadosBebidas([...selecionadosBebidas, nome]);
        }
    };

    const handleTiragostoChange = (nome) => {
        const isSelected = selecionadosTiragosto.includes(nome);

        if (isSelected) {
            setSelecionadosTiragosto(selecionadosTiragosto.filter(tiragosto => tiragosto !== nome));
        } else {
            setSelecionadosTiragosto([...selecionadosTiragosto, nome]);
        }
    };

    useEffect(() => {
        onSelect([...selecionados, ...selecionadosBebidas, ...selecionadosTiragosto]);
    }, [selecionados, selecionadosBebidas, selecionadosTiragosto, onSelect]);

    const saboresPizzas = {
        PizzaTradicional: [
            { nome: "Mussarela", ingredientes: ["Mussarela", "Orégano","Tomate"], },
            { nome: "Presunto", ingredientes: ["Presunto", "Mussarela", "Orégano","Cebola"] },
            { nome: "Bacon", ingredientes: ["Bacon", "Mussarela", "Orégano", "Cebola"] },
            { nome: "Marguerita", ingredientes: ["Mussarela","Manjericão","Tomate", "Oregano" ] },
            { nome: "Caipira", ingredientes: ["Frango", "Milho", "Mussarela", "Ervilha"] },
            { nome: "Havaiana", ingredientes: ["Abacaxi", "Presunto", "Mussarela","Oregano"] },
            { nome: "Milho Verde", ingredientes: ["Milho", "Mussarela", "Orégano"] },
            { nome: "Romeu e Julieta", ingredientes: ["Mussarela","Goiabada", "Queijo"] },
            { nome: "Frango", ingredientes: ["Mussarela","Frango", "Catupiry", "Orégano"] },
            { nome: "Brasileira", ingredientes: ["Mussarela","Calabresa", "Catupiry","Milho","Oregano"] },
            { nome: "Quatro Queijos", ingredientes: ["Mussarela", "Cheddar", "Parmesão", "Catupiry"] },
            { nome: "Portuguesa", ingredientes: ["Mussarela","Tomate","Presunto", "Ovo", "Cebola", "Azeitona","Oregano"] },
            { nome: "Baiana", ingredientes: ["Mussarela","Oregano","Presunto", "Pimenta calabresa", "Milho","Ervilha"] },
            { nome: "Vegetariana", ingredientes: ["Mussarela", "Orégano","Milho","Evilha","Tomate","Cebola","Azeitona"] },
            { nome: "Paulista", ingredientes: ["Mussarela","Presunto","Tomate","Cebola","Azeitona","Evilha","Orégano"] },
            { nome: "Cubana", ingredientes: ["Mussarela", "Bacon","Milho","Pimenta calabresa","Oregano"] },
            { nome: "Americana", ingredientes: ["Mussarela", "Bacon", "Cebola", "Alho frito","Tomate","Pimenta calabresa","Azeite doce","Orégano"] },
        ],
        PizzaEspecial: [
            { nome: "5 Queijos", ingredientes: ["Mussarela", "Lanche", "Parmesão", "Catupiry", "Cheddar"] },
            { nome: "Sr", ingredientes: ["Mussarela","Bacon","Presunto","Ovo","Milho","Ervilha","Azeitona"] },
            { nome: "Pizza Rogusta", ingredientes: ["Mussarela","Champignon", "Catupiry","Oragano"] },
            { nome: "Atum", ingredientes: ["Mussarela","Atum", "Cebola", "Orégano"] },
            { nome: "Frango Especial", ingredientes: ["Mussarela","Frango","Cheddar", "Catupiry", "Orégano"] },
            { nome: "Peito de Peru", ingredientes: ["Mussarela","Orégano","Peito de Peru", "Catupiry"] },
            { nome: "Italiana", ingredientes: ["Mussarela","Atum","Ovo", "Cebola" ,"Azeitona" ,"Oregano"] },
            { nome: "Lombinho", ingredientes: ["Mussarela","Lombinho", "Celoba","Orégano"] },
            { nome: "Calabresa SP", ingredientes: ["Mussarela","Calabresa","Catupiry","Orégano"] },
            { nome: "Palmito", ingredientes: ["Mussarela","Palmito","Catupiry","Orégano"] },
            { nome: "MM's", ingredientes: ["Mussarela","mm's","Leite condensado","Orégano"] },
            { nome: "FT", ingredientes: ["Mussarela","Toscana","Frango", "Orégano"] },
            { nome: "Carne Seca", ingredientes: ["Mussarela","Carne Seca", "Orégano","Catupiry"] },
        ],
        PizzaTop: [
            { nome: "Camarão", ingredientes: ["Mussarela","Camarão", "Catupiry", "Orégano"] },
            { nome: "Picanha", ingredientes: ["Mussarela","Picanha", "Cebola", "Orégano"] },
            { nome: "Bacalhau", ingredientes: ["Mussarela","Bacalhau", "Cebola", "Orégano"] },
            { nome: "Salame", ingredientes: ["Mussarela","Salame", "Orégano","Cebola"] },
            { nome: "Camarão com Palmito", ingredientes: ["Mussarela","Camarão", "Palmito", "Orégano"] },
            { nome: "6 Queijos", ingredientes: ["Mussarela", "Gorgonzola", "Parmesão", "Catupiry", "Lanche", "Cheddar"] },
        ]
    };


    const sabores = saboresPizzas[tipo] || [];

    return (
        <>
            <form>
                {erroTamanho && <p className="error-message">Por favor, selecione o tamanho da pizza.</p>}
                {sabores.map((sabor, index) => (
                    <fieldset key={index}>
                        <legend>{sabor.nome}</legend>
                        <label htmlFor={sabor.nome}>
                            <input
                                className='checkbox'
                                type="checkbox"
                                id={sabor.nome}
                                name={sabor.nome}
                                checked={selecionados.includes(sabor.nome)}
                                onChange={() => handleCheckboxChange(sabor.nome)}
                            />
                            <div className="sabor-container">
                                <div className="ingrediente_list">
                                    {sabor.ingredientes.map((ingrediente, idx) => (
                                        <React.Fragment key={idx}>
                                            <p>{ingrediente}</p>
                                            {idx < sabor.ingredientes.length - 1 && <p> - </p>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </label>
                    </fieldset>
                ))}
            </form>

            {/* Div de bebidas */}
            <div className="bebidas-section" id='2'>
                <h2 style={{ padding: '20px' }}>Bebidas Cerveja</h2>
                {bebidasCerveja.map((bebida, index) => (
                    <fieldset key={index} className='fieldset-box'>
                        <legend>{bebida.nome}</legend>
                        <label htmlFor={bebida.nome} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <input className='checkbox' type="checkbox" id={bebida.nome} name={bebida.nome} checked={selecionadosBebidas.includes(bebida.nome)} onChange={() => handleBebidaChange(bebida.nome)} />
                            <div className="bebida-container">
                                <p style={{ fontSize: '12px' }}>{bebida.nome} - R$ {bebida.valor.toFixed(2)}</p>
                            </div>
                            <img src={bebida.imagem} alt={bebida.nome} className="bebida-imagem" width={50} />
                        </label>
                    </fieldset>
                ))}
            </div>

            {/* Div de tira-gostos */}
            <div className="tiragosto-section" id='3'>
                <h2 style={{ padding: '20px' }}>Tira-Gosto</h2>
                {tiraGostoList.map((tiragosto, index) => (
                    <fieldset key={index} className='fieldset-box'>
                        <legend>{tiragosto.nome}</legend>
                        <label htmlFor={tiragosto.nome} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <input className='checkbox' type="checkbox" id={tiragosto.nome} name={tiragosto.nome} checked={selecionadosTiragosto.includes(tiragosto.nome)} onChange={() => handleTiragostoChange(tiragosto.nome)} />
                            <div className="tiragosto-container">
                                <p style={{ fontSize: '12px' }}>{tiragosto.nome} - R$ {tiragosto.valor.toFixed(2)}</p>
                            </div>
                            <img src={tiragosto.imagem} alt={tiragosto.nome} className="tiragosto-imagem" width={50} />
                        </label>
                    </fieldset>
                ))}
            </div>
        </>
    );
};

export default Pizzaselector;
