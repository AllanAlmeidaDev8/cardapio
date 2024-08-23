// import React, { useState } from 'react';

// const PizzaSelector = ({ ingredientes, indicesPorTag, title }) => {
//   const [selectedFlavors, setSelectedFlavors] = useState([]);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [cart, setCart] = useState([]);
//   const [customerInfo, setCustomerInfo] = useState({
//     name: '',
//     address: '',
//     referencePoint: '',
//     paymentMethod: '',
//   });

//   const prices = {
//     'PizzaTop': {
//       'Média': 20,
//       'Grande': 50,
//       'Família': 68,
//     },
//     'PizzaTradicional': {
//       'Média': 30,
//       'Grande': 39,
//       'Família': 46,
//     },
//     'PizzaEspecial': {
//       'Média': 34,
//       'Grande': 40,
//       'Família': 59,
//     },
//   };

//   const getPizzaPrice = (size) => {
//     if (size) {
//       const pizzaTypes = Object.keys(prices);
//       return pizzaTypes.map(type => prices[type][size] || 'N/A');
//     }
//     return 'N/A';
//   };

//   const handleFlavorChange = (tag) => {
//     setSelectedFlavors((prevSelected) => {
//       if (prevSelected.includes(tag)) {
//         return prevSelected.filter(flavor => flavor !== tag);
//       } else if (prevSelected.length < 4) {
//         return [...prevSelected, tag];
//       }
//       return prevSelected;
//     });
//   };

//   const handleSizeChange = (event) => {
//     setSelectedSize(event.target.value);
//   };

//   const handleCustomerInfoChange = (e) => {
//     const { name, value } = e.target;
//     setCustomerInfo((prevInfo) => ({
//       ...prevInfo,
//       [name]: value,
//     }));
//   };

//   const addToCart = () => {
//     if (selectedSize) {
//       const pizzaPrice = getPizzaPrice(selectedSize)[0];
//       const newItem = {
//         size: selectedSize,
//         flavors: selectedFlavors,
//         price: pizzaPrice,
//       };

//       setCart([...cart, newItem]);
//       setSelectedFlavors([]);
//       setSelectedSize('');
//     } else {
//       alert('Por favor, selecione um tamanho e ao menos um sabor.');
//     }
//   };

//   const handleCheckout = () => {
//     if (cart.length > 0 && customerInfo.name && customerInfo.address && customerInfo.paymentMethod) {
//       alert('Compra finalizada com sucesso!');
//       console.log('Pedido:', {
//         cart,
//         customerInfo,
//       });
//       setCart([]);
//       setCustomerInfo({
//         name: '',
//         address: '',
//         referencePoint: '',
//         paymentMethod: '',
//       });
//     } else {
//       alert('Por favor, preencha todos os dados do cliente e adicione ao menos uma pizza ao carrinho.');
//     }
//   };

//   return (
//     <div>
//       <div className="title">
//         <h1>{title}</h1>
//       </div>
//       <fieldset>
//         <div className='select_size'>
//           <h2>Escolha o tamanho da pizza</h2>
//           <div className='size'>
//             <input
//               type="radio"
//               id="tamanho_m"
//               name="psize"
//               value="Média"
//               onChange={handleSizeChange}
//             />
//             <label htmlFor="tamanho_m">Média</label>
           
//             <input
//               type="radio"
//               id="tamanho_g"
//               name="psize"
//               value="Grande"
//               onChange={handleSizeChange}
//             />
//             <label htmlFor="tamanho_g">Grande</label>
           
//             <input
//               type="radio"
//               id="tamanho_f"
//               name="psize"
//               value="Família"
//               onChange={handleSizeChange}
//             />
//             <label htmlFor="tamanho_f">Família</label>
//           </div>
//         </div>
//       </fieldset>

//       <fieldset>
//         <h2>Escolha os sabores</h2>
//         {Object.entries(indicesPorTag).map(([tag, indices]) => (
//           <fieldset key={tag}>
//             <legend>
//               <input
//                 type="checkbox"
//                 name={tag}
//                 id={tag}
//                 checked={selectedFlavors.includes(tag)}
//                 onChange={() => handleFlavorChange(tag)}
//                 disabled={!selectedFlavors.includes(tag) && selectedFlavors.length >= 4}
//               />
//               <span className='nome_sabores'>{tag}</span>
//             </legend>
//             <label htmlFor={tag}>
//               <div className="ingredientes_mussarela">
//                 {indices.map(index => (
//                   <li key={`${tag}-${index}`}>{ingredientes[index]}</li>
//                 ))}
//               </div>
//             </label>
//           </fieldset>
//         ))}
//       </fieldset>

//       <p>
//         Tamanho escolhido: {selectedSize || 'Nenhum'}<br />
//         Sabores selecionados: {selectedFlavors.length > 0 ? selectedFlavors.join(', ') : 'Nenhum'}<br />
//         Preço: {selectedSize ? `R$ ${getPizzaPrice(selectedSize)[0] || 'N/A'}` : 'N/A'}
//       </p>

//       <button onClick={addToCart}>Adicionar ao Carrinho</button>

//       <div className="cart">
//         <h2>Carrinho</h2>
//         {cart.length > 0 ? (
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 Tamanho: {item.size}, Sabores: {item.flavors.join(', ')}, Preço: R$ {item.price}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>O carrinho está vazio.</p>
//         )}
//       </div>

//       <h2>Informações do Cliente</h2>
//       <form>
//         <label>
//           Nome Completo:
//           <input type="text" name="name" value={customerInfo.name} onChange={handleCustomerInfoChange} required />
//         </label>
//         <br />
//         <label>
//           Endereço:
//           <input type="text" name="address" value={customerInfo.address} onChange={handleCustomerInfoChange} required />
//         </label>
//         <br />
//         <label>
//           Ponto de Referência:
//           <input type="text" name="referencePoint" value={customerInfo.referencePoint} onChange={handleCustomerInfoChange} />
//         </label>
//         <br />
//         <label>
//           Forma de Pagamento:
//           <select name="paymentMethod" value={customerInfo.paymentMethod} onChange={handleCustomerInfoChange} required>
//             <option value="">Selecione</option>
//             <option value="Dinheiro">Dinheiro</option>
//             <option value="Cartão">Cartão</option>
//             <option value="Pix">Pix</option>
//           </select>
//         </label>
//       </form>

//       <button onClick={handleCheckout}>Finalizar Compra</button>
//     </div>
//   );
// };

// export default PizzaSelector;



import React, { useState } from 'react';

const PizzaSelector = ({ ingredientes, indicesPorTag, title }) => {
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    referencePoint: '',
    paymentMethod: '',
  });
  const [isReviewingOrder, setIsReviewingOrder] = useState(false);

  const prices = {
    'PizzaTop': {
      'Média': 40,
      'Grande': 50,
      'Família': 68,
    },
    'PizzaTradicional': {
      'Média': 30,
      'Grande': 39,
      'Família': 46,
    },
    'PizzaEspacial': {
      'Média': 34,
      'Grande': 40,
      'Família': 59,
    },
  };

  const getPizzaPrice = () => {
    if (selectedSize && selectedType) {
      return prices[selectedType][selectedSize] || 'N/A';
    }
    return 'N/A';
  };

  const handleFlavorChange = (tag) => {
    setSelectedFlavors((prevSelected) => {
      if (prevSelected.includes(tag)) {
        return prevSelected.filter(flavor => flavor !== tag);
      } else if (prevSelected.length < 4) {
        return [...prevSelected, tag];
      }
      return prevSelected;
    });
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const addToCart = () => {
    if (selectedSize && selectedType) {
      const pizzaPrice = getPizzaPrice();
      const newItem = {
        size: selectedSize,
        type: selectedType,
        flavors: selectedFlavors,
        price: pizzaPrice,
      };

      setCart([...cart, newItem]);
      setSelectedFlavors([]);
      setSelectedSize('');
      setSelectedType('');
    } else {
      alert('Por favor, selecione um tamanho, tipo e ao menos um sabor.');
    }
  };

  const handleCheckout = () => {
    if (cart.length > 0 && customerInfo.name && customerInfo.address && customerInfo.paymentMethod) {
      setIsReviewingOrder(true);
    } else {
      alert('Por favor, preencha todos os dados do cliente e adicione ao menos uma pizza ao carrinho.');
    }
  };

  const confirmOrder = () => {
    alert('Compra finalizada com sucesso!');
    console.log('Pedido:', {
      cart,
      customerInfo,
    });
    setCart([]);
    setCustomerInfo({
      name: '',
      address: '',
      referencePoint: '',
      paymentMethod: '',
    });
    setIsReviewingOrder(false);
  };

  const cancelReview = () => {
    setIsReviewingOrder(false);
  };

  return (
    <div>
      <div className="title">
        <h1>{title}</h1>
      </div>
      
      {isReviewingOrder ? (
        <div className="order-review">
          <h2>Revisar Pedido</h2>
          <h3>Informações do Pedido</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                Tipo: {item.type}, Tamanho: {item.size}, Sabores: {item.flavors.join(', ')}, Preço: R$ {item.price}
              </li>
            ))}
          </ul>
          <h3>Informações do Cliente</h3>
          <p>
            Nome: {customerInfo.name} <br />
            Endereço: {customerInfo.address} <br />
            Ponto de Referência: {customerInfo.referencePoint} <br />
            Forma de Pagamento: {customerInfo.paymentMethod}
          </p>
          <button onClick={confirmOrder}>Confirmar Pedido</button>
          <button onClick={cancelReview}>Cancelar</button>
        </div>
      ) : (
        <>
          <fieldset>
            <div className='select_type'>
              <h2>Escolha o tipo de pizza</h2>
              <div className='type'>
                <input
                  type="radio"
                  id="tipo_top"
                  name="ptype"
                  value="PizzaTop"
                  onChange={handleTypeChange}
                />
                <label htmlFor="tipo_top">Pizza Top</label>
               
                <input
                  type="radio"
                  id="tipo_tradicional"
                  name="ptype"
                  value="PizzaTradicional"
                  onChange={handleTypeChange}
                />
                <label htmlFor="tipo_tradicional">Pizza Tradicional</label>
               
                <input
                  type="radio"
                  id="tipo_espacial"
                  name="ptype"
                  value="PizzaEspacial"
                  onChange={handleTypeChange}
                />
                <label htmlFor="tipo_espacial">Pizza Espacial</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div className='select_size'>
              <h2>Escolha o tamanho da pizza</h2>
              <div className='size'>
                <input
                  type="radio"
                  id="tamanho_m"
                  name="psize"
                  value="Média"
                  onChange={handleSizeChange}
                />
                <label htmlFor="tamanho_m">Média</label>
               
                <input
                  type="radio"
                  id="tamanho_g"
                  name="psize"
                  value="Grande"
                  onChange={handleSizeChange}
                />
                <label htmlFor="tamanho_g">Grande</label>
               
                <input
                  type="radio"
                  id="tamanho_f"
                  name="psize"
                  value="Família"
                  onChange={handleSizeChange}
                />
                <label htmlFor="tamanho_f">Família</label>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <h2>Escolha os sabores</h2>
            {Object.entries(indicesPorTag).map(([tag, indices]) => (
              <fieldset key={tag}>
                <legend>
                  <input
                    type="checkbox"
                    name={tag}
                    id={tag}
                    checked={selectedFlavors.includes(tag)}
                    onChange={() => handleFlavorChange(tag)}
                    disabled={!selectedFlavors.includes(tag) && selectedFlavors.length >= 4}
                  />
                  <span className='nome_sabores'>{tag}</span>
                </legend>
                <label htmlFor={tag}>
                  <div className="ingredientes_mussarela">
                    {indices.map(index => (
                      <li key={`${tag}-${index}`}>{ingredientes[index]}</li>
                    ))}
                  </div>
                </label>
              </fieldset>
            ))}
          </fieldset>

          <p>
            Tipo escolhido: {selectedType || 'Nenhum'} <br />
            Tamanho escolhido: {selectedSize || 'Nenhum'} <br />
            Sabores selecionados: {selectedFlavors.length > 0 ? selectedFlavors.join(', ') : 'Nenhum'} <br />
            Preço: {selectedSize && selectedType ? `R$ ${getPizzaPrice() || 'N/A'}` : 'N/A'}
          </p>

          <button onClick={addToCart}>Adicionar ao Carrinho</button>

          <div className="cart">
            <h2>Carrinho</h2>
            {cart.length > 0 ? (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    Tipo: {item.type}, Tamanho: {item.size}, Sabores: {item.flavors.join(', ')}, Preço: R$ {item.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>O carrinho está vazio.</p>
            )}
          </div>

          <h2>Informações do Cliente</h2>
          <form>
            <label>
              Nome Completo:
              <input type="text" name="name" value={customerInfo.name} onChange={handleCustomerInfoChange} required />
            </label>
            <br />
            <label>
              Endereço:
              <input type="text" name="address" value={customerInfo.address} onChange={handleCustomerInfoChange} required />
            </label>
            <br />
            <label>
              Ponto de Referência:
              <input type="text" name="referencePoint" value={customerInfo.referencePoint} onChange={handleCustomerInfoChange} />
            </label>
            <br />
            <label>
              Forma de Pagamento:
              <select name="paymentMethod" value={customerInfo.paymentMethod} onChange={handleCustomerInfoChange} required>
                <option value="">Selecione</option>
                <option value="Dinheiro">Dinheiro</option>
                <option value="Cartão">Cartão</option>
                <option value="Pix">Pix</option>
              </select>
            </label>
          </form>

          <button onClick={handleCheckout}>Finalizar Compra</button>
        </>
      )}
    </div>
  );
};

export default PizzaSelector;
