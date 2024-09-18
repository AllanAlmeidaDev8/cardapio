import React, { useState } from 'react';
import ClientForm from './ClientForm';
import OrderConfirmationModal from './OrderConfirmationModal';

const CartWithClientData = ({ cartItems, setCartItems }) => {
  const [clientData, setClientData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showClientForm, setShowClientForm] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Função para ajustar a quantidade de itens (incrementar ou decrementar)
  const adjustQuantity = (itemNome, itemSize, itemType, change) => {
    const updatedCart = cartItems
      .map(item =>
        item.nome === itemNome && item.size === itemSize && item.type === itemType
          ? { ...item, quantity: item.quantity + change }
          : item
      )
      .filter(item => item.quantity > 0); // Remove itens com quantidade 0
    setCartItems(updatedCart);
  };

  // Função para abrir o modal de conferência do pedido
  const abrirModalConferencia = () => {
    setShowConfirmationModal(true);
  };

  // Função para processar o envio dos dados do cliente
  const handleClientSubmit = (client, payment) => {
    setClientData(client);
    setPaymentMethod(payment);
    setShowClientForm(false); // Oculta o formulário após o envio
    abrirModalConferencia();
  };

  return (
    <div className='iten_selection'>
      <h2>Resumo do Pedido</h2>

      <h3>Itens Selecionados:</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.type} ({item.size}, {item.nome}) - R$ {item.price} x {item.quantity}
            <div>
              <button className='buttonAdd' onClick={() => adjustQuantity(item.nome, item.size, item.type, 1)}>+</button>/
              <button className='buttonAdd Remove' onClick={() => adjustQuantity(item.nome, item.size, item.type, -1)}>-</button>
            </div>
          </li>
        ))}
      </ul>

      <h3>Total:</h3>
      <p><strong>R$ {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</strong></p>

      {!clientData && cartItems.length > 0 && (
        <button className='button' onClick={() => setShowClientForm(true)}>Inserir Dados do Cliente</button>
      )}

      {showClientForm && !clientData && (
        <ClientForm onSubmit={handleClientSubmit} />
      )}

      {showConfirmationModal && clientData && (
        <OrderConfirmationModal
          cartItems={cartItems}
          clientData={clientData}
          paymentMethod={paymentMethod}
          closeModal={() => setShowConfirmationModal(false)}
          setCartItems={setCartItems}
        />
      )}
    </div>
  );
};

export default CartWithClientData;
