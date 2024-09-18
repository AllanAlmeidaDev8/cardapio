import React, { useState, useEffect } from 'react';
import PizzaSelection from './pages/PizzaSelection';
import CartWithClientData from './components/CartWithClientData';
import ClientForm from './components/ClientForm';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [clientData, setClientData] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');

  // Carregar carrinho e dados do localStorage ao montar o componente
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedClient = JSON.parse(localStorage.getItem('clientData')) || {};
    const storedPayment = localStorage.getItem('paymentMethod') || '';

    setCartItems(storedCart);
    setClientData(storedClient);
    setPaymentMethod(storedPayment);
  }, []);

  // Salvar carrinho, dados do cliente e método de pagamento no localStorage quando houver alterações
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('clientData', JSON.stringify(clientData));
    localStorage.setItem('paymentMethod', paymentMethod);
  }, [cartItems, clientData, paymentMethod]);

  return (
    <div>
     <PizzaSelection setCartItems={setCartItems} cartItems={cartItems} />
      
      <CartWithClientData 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        clientData={clientData} 
        paymentMethod={paymentMethod} 
      />
    </div>
  );
};

export default App;
