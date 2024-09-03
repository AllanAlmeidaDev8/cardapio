import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
import './pages/Button.css';






const Home = () => {
  return (
    <div>
        <div className='conteiner_top'>
            <h2>Faça o seu Pedido Aqui</h2>            
            <Link to='/cardapio' role="button" className="button-name">Cardapio</Link>
        </div>
        
    </div>
  )
}

export default Home
