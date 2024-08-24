import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'



const Home = () => {
  return (
    <div>
        <div className='conteiner_top'>
            <h2>Bem vindo ao Sr. Pizza bar</h2>
            <Link to='/cardapio'>Cardapio</Link>
        </div>
    </div>
  )
}

export default Home
