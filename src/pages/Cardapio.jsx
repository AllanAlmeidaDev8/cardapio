import React from 'react'
import { Link } from 'react-router-dom';
import './Cardapio.css'




const Cardapio = () => {
    return (
        <div className=''>
            <h2>Cardaipio page</h2>
            <div className="container_cardapio">
                <ul className="list_link">
                    <li><Link to="/pizzas">Pizzas</Link></li>
                    <li><Link>Tira Gosto</Link></li>
                    <li><Link>Pirão</Link></li>
                    <li><Link>Petiscos</Link></li>
                    <li><Link>Bebidas</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Cardapio
