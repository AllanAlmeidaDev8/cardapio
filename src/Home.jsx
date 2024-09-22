import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
import './pages/Button.css';
import StatusFuncionamento from './StatusFuncionamento';






const Home = () => {
  return (
    <div>
      <div className='horarioFunc'>
        <h3>Horário de funcionamento:</h3>
        <p>Terça a Quinta: 17:00 ás 23:00</p>
        <p>Sex, Sab e Domigo das 17:00 ás 00:00</p>
        <div className="status">
        <StatusFuncionamento/>
        </div>

      </div>
      <div className='conteiner_top'>
        <h2>Faça o seu Pedido Aqui</h2>
        <h1>Site em manutenção porfavor retorne ao Whatsapp</h1>
        {/* <Link to='/cardapio' role="button" className="button-name">Cardapio</Link> */}
      </div>

    </div>
  )
}

export default Home
