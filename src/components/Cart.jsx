import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const removeFromCart = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
  };

  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - R$ {item.price}
            <button onClick={() => removeFromCart(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
