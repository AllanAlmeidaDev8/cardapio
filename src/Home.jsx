import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
import './pages/Button.css';





const Home = () => {
  return (
    <div>
        <div className='conteiner_top'>
            <h2>Como eu posso te ajudar</h2>            
            <Link to='/cardapio' role="button" className="button-name">Cardapio</Link>
        </div>
    </div>
  )
}

export default Home
