import React from 'react'
import { Link } from 'react-router-dom'
import './Cardapio.css'



const Cardapio = () => {
    return (
        <div className='conteiner_cardapio home'>
            <h2 className='subTitle'>Cardaipio page</h2>
            <fieldset>
            <div className="container_cardapio">
                <ul className="list_link">
                    <li><Link to="/pizzas" className='btn_link'>Pizzas</Link></li>
                    <li><Link to='/cardapio/tira_gosto' className='btn_link'>Tira Gosto</Link></li>
                    <li><Link className='btn_link'>Pirão</Link></li>
                    <li><Link className='btn_link'>Petiscos</Link></li>
                    <li><Link className='btn_link'>Bebidas</Link></li>
                </ul>
            </div>
            </fieldset>
        </div>
    )
}

export default Cardapio
