import React from 'react'
import { Link } from 'react-router-dom';
import './Cardapio.css';
import './Button.css';




const Cardapio = () => {
    return (
        <div className='container'>
            <div>
                <h2 className='subTitle'>Cardápio</h2>
            </div>
            <div className="itens_list">
                <ul className="list_link">
                    <li><Link to="/cardapio/pizzas" role="button" className="button-name">Pizzas</Link></li>
                    <li><Link role="button" className="button-name">Tira Gosto</Link></li>
                    <li><Link role="button" className="button-name">Pirão</Link></li>
                    <li><Link role="button" className="button-name">Petiscos</Link></li>
                    <li><Link role="button" className="button-name">Bebidas</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Cardapio
