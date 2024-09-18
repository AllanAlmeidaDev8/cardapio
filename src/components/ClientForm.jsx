import React, { useState } from 'react';
import './ClientForm.css'

const ClientForm = ({ setClientData, setPaymentMethod, onSubmit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [reference, setReference] = useState('');
  const [payment, setPayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = { name, address, phone, reference };
    onSubmit(client, payment);

    // Limpar os campos após o envio
    setName('');
    setAddress('');
    setPhone('');
    setReference('');
    setPayment('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h2>Dados do Cliente</h2>
      <div className="form" style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>
          Endereço:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        
        <label>
          Telefone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        
        <label>
          Ponto de Referência:</label>
          <input type="text" value={reference} onChange={(e) => setReference(e.target.value)} />
        
        <label>
          Método de Pagamento:</label>
          <select value={payment} onChange={(e) => setPayment(e.target.value)} required>
            <option value="">Selecione</option>
            <option value="credito">Cartão de Crédito</option>
            <option value="debito">Cartão de Débito</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
          </select>
        
      </div>
      <button type="submit">Inserir Dados</button>
    </form>
  );
};

export default ClientForm;
