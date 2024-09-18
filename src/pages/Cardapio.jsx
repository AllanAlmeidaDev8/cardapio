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
            <div className="itens_list btn">
                <ul className="list_link ">
                    <li><Link to="/cardapio/pizzas" role="button" className="button-name">Pizzas</Link></li>
                    <li><Link to="/cardapio/tira_gostos" role="button" className="button-name">Tira Gosto e petiscos</Link></li>
                    <li><Link to="/cardapio/pirao" role="button" className="button-name">Pirão</Link></li>  
                    <li><Link to="/cardapio/bebidas" role="button" className="button-name">Bebidas</Link></li>
                    <li><Link to="/cardapio/promocoes" role="button" className="button-name">Pormoções</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Cardapio
