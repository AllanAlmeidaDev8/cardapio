import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
import './pages/Button.css';
import { BsInstagram } from "react-icons/bs";




const Home = () => {
  return (
    <div>
        <div className='conteiner_top'>
            <h2>Bem vindo Sr. Pizza & Bar</h2>
            <Link to='https://www.instagram.com/sr_pizza_bar/'><BsInstagram /> Instagram</Link>
            <Link to='/cardapio' role="button" className="button-name">Cardapio</Link>
        </div>
    </div>
  )
}

export default Home
