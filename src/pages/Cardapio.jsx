import React from 'react'
import { Link } from 'react-router-dom';
import './Cardapio.css';
import './Button.css';
import StatusFuncionamento from '../StatusFuncionamento';




const Cardapio = () => {
    return (
        <div className='container'>
            <div>
                <h2 className='subTitle'>Cardápio</h2>
                <StatusFuncionamento/>
            </div>
            <div className="itens_list btn">
                <ul className="list_link ">
                    <li><Link to="/cardapio/listas_itens" role="button" className="button-name">Pizzas</Link></li>
                    <li><Link to="/cardapio/tira_gostos" role="button" className="button-name">Tira Gosto e petiscos</Link></li>
                    <li><Link to="/cardapio/pirao" role="button" className="button-name">Pirão</Link></li>  
                    <li><Link to="/cardapio/bebidas" role="button" className="button-name">Bebidas</Link></li>
                    <li><Link to="/cardapio/promocoes" role="button" className="button-name">Pormoções</Link></li>
                </ul>
            </div>
            <div className='horarioFunc'>
                <h3>Horário de funcionamento:</h3>
                <p>Terça a Quinta: 17:00 ás 23:00</p>
                <p>Sex, Sab e Domigo das 17:00 ás 00:00</p>
                <div className="status">

                </div>

            </div>
        </div>
    )
}

export default Cardapio
