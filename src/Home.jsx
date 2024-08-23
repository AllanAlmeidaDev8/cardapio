import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';
import { FaArrowRight } from "react-icons/fa6";



const Home = () => {
  return (
    <div className='home'> 
    <h2 className='subTitle'>Veja nosso cardápio</h2>
        <div className='conteiner_top'>
            <Link to='/cardapio' className='btn_link btn_cardapio'>
            Cardapio <FaArrowRight />
            </Link>
        </div>
       
    </div>
  )
}

export default Home
