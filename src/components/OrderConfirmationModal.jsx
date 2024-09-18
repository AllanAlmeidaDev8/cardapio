import React from 'react';

const OrderConfirmationModal = ({ cartItems, clientData, paymentMethod, closeModal, setCartItems }) => {
  const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Função para enviar o pedido pelo WhatsApp
  const sendToWhatsApp = () => {
    const message = `
    *SR Pizza Bar*
    ---------------------------------
      *Pedido de Pizza*
      *Cliente:* ${clientData.name}
      *Endereço:* ${clientData.address}
      *Telefone:* ${clientData.phone}
      *Ponto de Referência:* ${clientData.reference}
      *Método de Pagamento:* ${paymentMethod}
      ---------------------------------
      
      *Itens:*
      ${cartItems.map(item => {
        // Se for uma pizza, exibe o tipo, tamanho e nome
        if (item.type && item.size) {
          return `${item.type} (${item.size}, ${item.nome}) - ${item.quantity} x R$${item.price}`;
        }
        // Caso contrário, exibe apenas o nome (para bebidas e tira-gostos)
        return `${item.nome} - ${item.quantity} x R$${item.price}`;
      }).join('\n')}
       ---------------------------------
      *Total:* R$ ${total}
    `;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+5571987136715?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirmar Pedido</h2>
        <h3>Itens Selecionados:</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.type && item.size 
                ? `${item.type} (${item.size}, ${item.nome}) - R$ ${item.price} x ${item.quantity}`
                : `${item.nome} - R$ ${item.price} x ${item.quantity}`}
            </li>
          ))}
        </ul>
        
        <h3>Total:</h3>
        <p><strong>R$ {total}</strong></p>

        <h3>Dados do Cliente:</h3>
        <p><strong>Nome:</strong> {clientData.name}</p>
        <p><strong>Endereço:</strong> {clientData.address}</p>
        <p><strong>Telefone:</strong> {clientData.phone}</p>
        <p><strong>Ponto de Referência:</strong> {clientData.reference}</p>

        <h3>Método de Pagamento:</h3>
        <p>{paymentMethod}</p>

        <div className="modal-actions" style={{display:'flex', gap:'10px'}}>
          <button className='button' onClick={closeModal}>Alterar Pedido</button>
          <button className='button' onClick={sendToWhatsApp}>Enviar Pedido para WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
