import React, { useState } from 'react';
// Import do ícone de carrinho de compras
import { FaShoppingCart } from 'react-icons/fa';
import { IoSearch } from "react-icons/io5";
import '../App.css';


//import de imagens
import imgPirCa from '../assets/img/pratos/aipimcasa.jpg';
import imgInd from '../assets/img/pratos/individual.jpg';
import imgAguaSg from '../assets/img/bebidas/agua-mineral.webp';
import imgRosEsp from '../assets/img/bebidas/caipirinha-morango-kiwi.jpg';
import imgAguaCg from '../assets/img/bebidas/aguaCgas.webp';
import imgH2o from '../assets/img/bebidas/h2o.webp';
import imgGuarana from '../assets/img/bebidas/pepsi2l.webp';
import imgAguaT from '../assets/img/bebidas/tonica.webp';
import imgDietRef from '../assets/img/bebidas/dietRef.webp';
import imgRefri1L from '../assets/img/bebidas/refri1L.webp';
import imgRefriLat from '../assets/img/bebidas/refriLat.webp';
import imgRedLat from '../assets/img/bebidas/redbull.webp';
import imgSuc from '../assets/img/bebidas/sucos.jpg';
import imgHeinLog from '../assets/img/bebidas/heineken.webp';
import imgSkink from '../assets/img/bebidas/skinka.jpeg';
import imgCervSet from '../assets/img/bebidas/stella-artois.jpeg';
import imgMalzBier from '../assets/img/bebidas/malzebier.webp';
import imgCerImp from '../assets/img/bebidas/imperio.jpg';
import imgCervBud from '../assets/img/bebidas/budweiser.jpg';
import imgCervCor from '../assets/img/bebidas/corona-long.jpg';
import imgCervBrah from '../assets/img/bebidas/cerveja-brahma-350ml-puro-malte_80752.webp';
import imgDeva from '../assets/img/bebidas/6571c2fd558925a4e88991d5.webp';
import imgAmis from '../assets/img/bebidas/cerveja-amstel-lata-350ml_1.webp';
import imgIta from '../assets/img/bebidas/ita10.png';
import imgSchi from '../assets/img/bebidas/images.jpeg';
import imgIce from '../assets/img/bebidas/00018090_61456696-1e3d-4cfe-b0cc-d4b2b4226ed5.avif';
import imgVinh from '../assets/img/bebidas/28.jpg';
import imgCaip from '../assets/img/bebidas/b003cb6a8c5828399d548e534fa42cc6_XL.jpg';
import imgRosca from '../assets/img/bebidas/1caipirinhas.png';

//img do pratos
import imgCarmis from '../assets/img/pratos/Carne-do-sol-mista.jpg';
import imgArru from '../assets/img/pratos/arrumadinho2.jpg';
import imgCarnSol from '../assets/img/pratos/carnesol.webp';
import imgFranPass from '../assets/img/pratos/frango-a-passarinha.jpg';
import imgCamAl from '../assets/img/pratos/Camarão-Alho-e-oleo.webp';
import imgCarnFrl from '../assets/img/pratos/carne-do-sol-fritas.webp.jpg';
import imgCodFrl from '../assets/img/pratos/codorna.webp.jpg';
import imgCamFri from '../assets/img/pratos/camarao-com-fritas.webp';
import imgIscFranFri from '../assets/img/pratos/isca_de_frango.webp';
import imgQueiMe from '../assets/img/pratos/queijo-melaco.jpg';
import imgQueiPic from '../assets/img/pratos/picanhacomqueijo.webp';
import imgQPicFri from '../assets/img/pratos/picanha-com-fritas.webp.jpg';
import imgQPicAc from '../assets/img/pratos/picanha-acebolada.png';
import imgCupiAc from '../assets/img/pratos/Como-fazer-bife-de-cupim.jpg';
import imgFilFri from '../assets/img/pratos/file-com-fritas.webp.jpg';
import imgFilQuei from '../assets/img/pratos/fileCoquejo.webp';
import imgBat from '../assets/img/pratos/batata1.webp';
import imgBatSr from '../assets/img/pratos/batataSr.png';
import imgTabFri from '../assets/img/pratos/Tabua_queijos_frios.webp';
import imgKitSal from '../assets/img/pratos/kitSalgados.webp';
import imgEspCam from '../assets/img/pratos/espetinhCam.jpeg';
import imgEspCar from '../assets/img/pratos/espetinhCar.jpeg';
import imgCalSur from '../assets/img/pratos/sururu.jpeg';
import imgCalCar from '../assets/img/pratos/calsoCarne.jpeg';
import imgFeiTro from '../assets/img/pratos/feijaoTropeiro.jpg';
import imgFrad from '../assets/img/pratos/fradinho.jpg';
import imgPaoFat from '../assets/img/pratos/paofatiado.jpg';
import imgSald from '../assets/img/pratos/vinagrete.jpg';
import imgFarof from '../assets/img/pratos/farofa.jpg';




const PizzaSelection = ({ setCartItems, cartItems }) => {
  const [selectedType, setSelectedType] = useState('PizzaTradicional');
  const [selectedSize, setSelectedSize] = useState('Média');
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [selectedSnacks, setSelectedSnacks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const prices = {
    PizzaTradicional: { Media: 28, Grande: 38, Familia: 55 },
    PizzaEspecial: { Media: 32, Grande: 42, Familia: 58 },
    PizzaTop: { Media: 38, Grande: 48, Familia: 68 }
  };

  const saboresPizzas = {
    PizzaTradicional: [
      { nome: "Mussarela", ingredientes: ["Mussarela", "Orégano", "Tomate"], },
      { nome: "Presunto", ingredientes: ["Presunto", "Mussarela", "Orégano", "Cebola"] },
      { nome: "Bacon", ingredientes: ["Bacon", "Mussarela", "Orégano", "Cebola"] },
      { nome: "Marguerita", ingredientes: ["Mussarela", "Manjericão", "Tomate", "Oregano"] },
      { nome: "Caipira", ingredientes: ["Frango", "Milho", "Mussarela", "Ervilha"] },
      { nome: "Havaiana", ingredientes: ["Abacaxi", "Presunto", "Mussarela", "Oregano"] },
      { nome: "Milho Verde", ingredientes: ["Milho", "Mussarela", "Orégano"] },
      { nome: "Romeu e Julieta", ingredientes: ["Mussarela", "Goiabada", "Queijo"] },
      { nome: "Frango", ingredientes: ["Mussarela", "Frango", "Catupiry", "Orégano"] },
      { nome: "Brasileira", ingredientes: ["Mussarela", "Calabresa", "Catupiry", "Milho", "Oregano"] },
      { nome: "Quatro Queijos", ingredientes: ["Mussarela", "Cheddar", "Parmesão", "Catupiry"] },
      { nome: "Portuguesa", ingredientes: ["Mussarela", "Tomate", "Presunto", "Ovo", "Cebola", "Azeitona", "Oregano"] },
      { nome: "Baiana", ingredientes: ["Mussarela", "Oregano", "Presunto", "Pimenta calabresa", "Milho", "Ervilha"] },
      { nome: "Vegetariana", ingredientes: ["Mussarela", "Orégano", "Milho", "Evilha", "Tomate", "Cebola", "Azeitona"] },
      { nome: "Paulista", ingredientes: ["Mussarela", "Presunto", "Tomate", "Cebola", "Azeitona", "Evilha", "Orégano"] },
      { nome: "Cubana", ingredientes: ["Mussarela", "Bacon", "Milho", "Pimenta calabresa", "Oregano"] },
      { nome: "Americana", ingredientes: ["Mussarela", "Bacon", "Cebola", "Alho frito", "Tomate", "Pimenta calabresa", "Azeite doce", "Orégano"] },
    ],
    PizzaEspecial: [
      { nome: "5 Queijos", ingredientes: ["Mussarela", "Lanche", "Parmesão", "Catupiry", "Cheddar"] },
      { nome: "Sr", ingredientes: ["Mussarela", "Bacon", "Presunto", "Ovo", "Milho", "Ervilha", "Azeitona"] },
      { nome: "Pizza Rogusta", ingredientes: ["Mussarela", "Champignon", "Catupiry", "Oragano"] },
      { nome: "Atum", ingredientes: ["Mussarela", "Atum", "Cebola", "Orégano"] },
      { nome: "Frango Especial", ingredientes: ["Mussarela", "Frango", "Cheddar", "Catupiry", "Orégano"] },
      { nome: "Peito de Peru", ingredientes: ["Mussarela", "Orégano", "Peito de Peru", "Catupiry"] },
      { nome: "Italiana", ingredientes: ["Mussarela", "Atum", "Ovo", "Cebola", "Azeitona", "Oregano"] },
      { nome: "Lombinho", ingredientes: ["Mussarela", "Lombinho", "Celoba", "Orégano"] },
      { nome: "Calabresa SP", ingredientes: ["Mussarela", "Calabresa", "Catupiry", "Orégano"] },
      { nome: "Palmito", ingredientes: ["Mussarela", "Palmito", "Catupiry", "Orégano"] },
      { nome: "MM's", ingredientes: ["Mussarela", "mm's", "Leite condensado", "Orégano"] },
      { nome: "FT", ingredientes: ["Mussarela", "Toscana", "Frango", "Orégano"] },
      { nome: "Carne Seca", ingredientes: ["Mussarela", "Carne Seca", "Orégano", "Catupiry"] },
    ],
    PizzaTop: [
      { nome: "Camarão", ingredientes: ["Mussarela", "Camarão", "Catupiry", "Orégano"] },
      { nome: "Picanha", ingredientes: ["Mussarela", "Picanha", "Cebola", "Orégano"] },
      { nome: "Bacalhau", ingredientes: ["Mussarela", "Bacalhau", "Cebola", "Orégano"] },
      { nome: "Salame", ingredientes: ["Mussarela", "Salame", "Orégano", "Cebola"] },
      { nome: "Camarão com Palmito", ingredientes: ["Mussarela", "Camarão", "Palmito", "Orégano"] },
      { nome: "6 Queijos", ingredientes: ["Mussarela", "Gorgonzola", "Parmesão", "Catupiry", "Lanche", "Cheddar"] },
    ]
  };

  const tiraGostoOptions = [
    { nome: 'Batata Frita', preco: 22.0, imagem: imgBat, ingredientes: [], },
    { nome: 'Batata Sr', preco: 45.0, imagem: imgBatSr, ingredientes: ['Batata', 'Queijo', 'Bacon'], },
    { nome: 'Tabua de frios', preco: 25.0, imagem: imgTabFri, ingredientes: ['Queijo Reino', 'Salames', 'Azeitonas', 'Gorgonzola', 'Peito de peru', 'Queijo prato'], },
    { nome: 'Kit Salgados', preco: 28.0, imagem: imgKitSal, ingredientes: ['Coxinhas', 'Kibes', 'Pasteis'], },
    { nome: 'Espetinho de camarão', preco: 12.0, imagem: imgEspCam, ingredientes: [], },
    { nome: 'Espetinho carne', preco: 10.0, imagem: imgEspCar, ingredientes: [], },
    { nome: 'Caldo de sururu', preco: 14.0, imagem: imgCalSur, ingredientes: ['Sururu', 'Coentro', 'Alho'], },
    { nome: 'Caldo de carne seca', preco: 12.0, imagem: imgCalCar, ingredientes: ['Carne seca', 'Batata', 'Coentro'], },
    { nome: 'Farofa', preco: 4.0, imagem: imgFarof, ingredientes: [] },
    { nome: 'Salada Vinagrete', preco: 6.0, imagem: imgSald, ingredientes: [] },
    { nome: 'Pão fatiado', preco: 2.5, imagem: imgPaoFat, ingredientes: [] },
    { nome: 'Feijão fradinho', preco: 6.0, imagem: imgFrad, ingredientes: [] },
    { nome: 'Feijão Tropeiro', preco: 8.0, imagem: imgFeiTro, ingredientes: ['Feijão', 'Farofa', 'Linguiça', 'Ovos'], },
    { nome: 'Carne do Sol mista', preco: 50.0, imagem: imgCarmis, ingredientes: [], },
    { nome: 'Carne com Fritas', preco: 50.0, imagem: imgCarnFrl, ingredientes: [] },
    { nome: 'Carne do Sol', preco: 45.0, imagem: imgCarnSol, ingredientes: [], },
    { nome: 'Frango a passarinha', preco: 45.0, imagem: imgFranPass, ingredientes: [], },
    { nome: 'Arrumadinho', preco: 45.0, imagem: imgArru, ingredientes: ['Carne', 'Farofa', 'Vinagrete', 'Feijão '], },
    { nome: 'Camarão ao alho e óleo', preco: 46.0, imagem: imgCamAl, ingredientes: ['Camarão', 'Alho'], },
    { nome: 'Isca de frango com fritas', preco: 44.0, imagem: imgIscFranFri, ingredientes: [], },
    { nome: 'Camarão com fritas', preco: 55.0, imagem: imgCamFri, ingredientes: ['Camarão', 'Batata frita'], },
    { nome: 'Codorna Frita', preco: 45.0, imagem: imgCodFrl, ingredientes: [], },
    { nome: 'Queijo coalho ', preco: 25.0, imagem: imgQueiMe, ingredientes: ['Queijo coalho', 'Melaço', 'Molho de pizza'], },
    { nome: 'Picanha c/ queijo coalho', preco: 57.0, imagem: imgQueiPic, ingredientes: ['Picanha', 'Queijo coalho'], },
    { nome: 'Picanha acebolada', preco: 57.0, imagem: imgQPicAc, ingredientes: ['Picanha', 'Cebola'], },
    { nome: 'Picanha c/ fritas', preco: 58.0, imagem: imgQPicFri, ingredientes: ['Picanha', 'Batata frita'], },
    { nome: 'Cupim acebolado', preco: 47.0, imagem: imgCupiAc, ingredientes: ['Cupim', 'Cebola'], },
    { nome: 'Filé c/ fritas', preco: 52.0, imagem: imgFilFri, ingredientes: ['Filé', 'Batata frita'], },
    { nome: 'Filé c/ queijo coalho', preco: 52.0, imagem: imgFilQuei, ingredientes: ['Filé', 'Queijo coalho'], },
  ];

  const drinkOptions = [
    { nome: 'Agua s/ gás', preco: 2.5, imagem: imgAguaSg },
    { nome: 'Água c/ gás', preco: 4.0, imagem: imgAguaCg },
    { nome: 'H2O', preco: 4.0, imagem: imgH2o },
    { nome: 'Agua Tónica', preco: 5.0, imagem: imgAguaT },
    { nome: 'Suco skinka', preco: 5.0, imagem: imgSkink },
    { nome: 'Refri Lata', preco: 5.0, imagem: imgRefriLat },
    { nome: 'Refri 1L', preco: 7.0, imagem: imgRefri1L },
    { nome: 'Refri diet lata', preco: 6.0, imagem: imgDietRef },
    { nome: 'Suco de Poupa', preco: 6.0, imagem: imgSuc },
    { nome: 'Refri Pepsic 2L', preco: 12.0, imagem: imgGuarana },
    { nome: 'Red bull lata', preco: 14.0, imagem: imgRedLat },
    { nome: 'Cerveja heineken long neck', preco: 9.0, imagem: imgHeinLog },
    { nome: 'Cerveja stella artois', preco: 8.0, imagem: imgCervSet },
    { nome: 'Malzebier Lata', preco: 6.0, imagem: imgMalzBier },
    { nome: 'Imperio Long Neck', preco: 8.0, imagem: imgCerImp },
    { nome: 'Corona Long Neck', preco: 9.0, imagem: imgCervCor },
    { nome: 'Budwiser Long Neck', preco: 8.0, imagem: imgCervBud },
    { nome: 'Brahma duplo malte lata', preco: 5.0, imagem: imgCervBrah },
    { nome: 'Devassa lata', preco: 5.0, imagem: imgDeva },
    { nome: 'Amstel lata', preco: 5.0, imagem: imgAmis },
    { nome: 'Itaipava lata', preco: 4.0, imagem: imgIta },
    { nome: 'Schin lata', preco: 3.0, imagem: imgSchi },
    { nome: 'Ice ', preco: 9.0, imagem: imgIce },
    { nome: 'Vinho Tinto', preco: 38.0, imagem: imgVinh },
  ];

  const addFlavor = (flavor, type) => {
    setSelectedFlavors(prevFlavors => [...prevFlavors, { flavor, type }]);
  };

  const addSnack = (snack) => {
    setSelectedSnacks(prevSnacks => [...prevSnacks, snack]);
  };

  const addDrink = (drink) => {
    setSelectedDrinks(prevDrinks => [...prevDrinks, drink]);
  };

  const addToCart = () => {
    if (selectedFlavors.length === 0 && selectedSnacks.length === 0 && selectedDrinks.length === 0) return;

    let maxType = selectedFlavors.reduce((max, item) => {
      const currentPrice = prices[item.type][selectedSize];
      const maxPrice = prices[max][selectedSize];
      return currentPrice > maxPrice ? item.type : max;
    }, selectedFlavors.length ? selectedFlavors[0].type : null);

    const pizzaPrice = maxType ? prices[maxType][selectedSize] : 0;

    const pizza = selectedFlavors.length
      ? {
        nome: selectedFlavors.map(f => f.flavor).join(", "),
        size: selectedSize,
        type: maxType,
        price: pizzaPrice,
        quantity: 1
      }
      : null;

    const tiraGostos = selectedSnacks.map(snack => ({
      nome: snack.nome,
      price: snack.preco,
      quantity: 1
    }));

    const bebidas = selectedDrinks.map(drink => ({
      nome: drink.nome,
      price: drink.preco,
      quantity: 1
    }));

    setCartItems([...cartItems, pizza, ...tiraGostos, ...bebidas].filter(Boolean));
    setSelectedFlavors([]);
    setSelectedSnacks([]);
    setSelectedDrinks([]);
  };

  // Mapeamento para exibir títulos com espaços
  const categoryLabels = {
    PizzaTradicional: 'Pizza Tradicional',
    PizzaEspecial: 'Pizza Especial',
    PizzaTop: 'Pizza Top'
  };

  // Função de filtro para a barra de pesquisa
  const filteredPizzas = Object.keys(saboresPizzas).reduce((result, category) => {
    const filtered = saboresPizzas[category].filter(pizza =>
      pizza.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      result[category] = filtered;
    }
    return result;
  }, {});

  const filteredSnacks = tiraGostoOptions.filter(snack =>
    snack.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDrinks = drinkOptions.filter(drink =>
    drink.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Cálculo da quantidade total de itens no carrinho
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <div>
      <div className='container_menu'>
        <nav className='navBar'>
          <ul>
            <li><a href="#Pizzas">Pizza</a></li>
            <li><a href="#TiraGosto">Tira-Gosto</a></li>
            <li><a href="#Bebidas">Bebidas</a></li>
            <li><a href="#Bebidas">Promoções</a></li>
          </ul>
        </nav>
        <div className='car' >
          {/* Barra de pesquisa */}
          <div className='lupa-conteiner'>
            <label htmlFor="search"><IoSearch className='lupaIco' /></label><input id='search' type="text" placeholder='Pequise pelo item ou nome' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          {/* Ícone do carrinho e número de itens */}

          <a href="#itensSelections" className='icoCar'>
            <div> <FaShoppingCart size={24} />
              <span>{totalCartItems}</span>
            </div>
          </a>
        </div>

      </div>

      <div className="main">
        <div id='Pizzas'>
          <h2>Escolha o Tamanho de sua pizza</h2>
          <div
            style={{
              display: 'flex',
              gap: '10px'
            }}
          >
            <label>Tamanho:</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}
              style={{
                padding: '10px'
              }}
            >
              <option value="Média">Média</option>
              <option value="Grande">Grande</option>
              <option value="Família">Família</option>
            </select>
          </div>
        </div>

        <div className='conteiner_pizza'>
          {Object.keys(filteredPizzas).map((category) => (
            <div key={category}>
              <h2 className='subTitle'>{categoryLabels[category]}</h2> {/* Exibir títulos com espaços */}
              <ul>
                {filteredPizzas[category].map((pizza) => (
                  <li key={pizza.nome} className='item_list'>
                    {pizza.nome} - ({categoryLabels[category]})
                    <p>{pizza.ingredientes.join(", ")}</p>
                    <button className='button' onClick={() => addFlavor(pizza.nome, category)}>Adicionar <span>+1</span></button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="TiraGosto" className='conteiner_pizza pirao'>
          <h2>tira gosto e pirão</h2>
          <ul >
            {filteredSnacks.map((snack) => (

              <li key={snack.nome} className='item_list' >
                <div>
                  <img src={snack.imagem} alt={snack.nome} style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
                  <h3>{snack.nome}</h3>
                  <div>
                    <p>{snack.ingredientes.join(", ")}</p>
                  </div>
                  <p className='preco'>R$ {snack.preco},00</p>
                </div>
                <button className='button' onClick={() => addSnack(snack)}>Adicionar</button>
              </li>

            ))}
          </ul>
        </div>

        <div id="Bebidas" className='conteiner_pizza' >
          <h2>Selecione sua Bebida</h2>
          <ul>
            {filteredDrinks.map((drink) => (

              <div>
                <li key={drink.nome} className='item_list'>
                  <img src={drink.imagem} alt={drink.nome} style={{ width: '100px', height: '100px' }} />
                  <h3>{drink.nome}</h3>
                  <p className='preco'>R$ {drink.preco},00</p>
                  <button className='button' onClick={() => addDrink(drink)}>Adicionar</button>
                </li>
              </div>

            ))}
          </ul>
        </div>

        <div className="iten_selection">
          <div>
            <h3 id='itensSelections'>Itens Selecionados</h3>
            <ul>
              {selectedFlavors.map((item, index) => (
                <li key={index}>
                  {item.flavor} - ({item.type})
                </li>
              ))}
            </ul>

            <ul>
              {selectedSnacks.map((item, index) => (
                <li key={index}>
                  {item.nome} - R$ {item.preco}
                </li>
              ))}



              {selectedDrinks.map((item, index) => (
                <li key={index}>
                  {item.nome} - R$ {item.preco}
                </li>
              ))}
            </ul>
          </div>

          <button className='button' onClick={addToCart} style={{ padding: '10px' }}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaSelection;
