import React from 'react';
import { Link } from 'react-router-dom';


const Pizza = () => {
  

    return (
       <div className='container_button'>
        <ul>
            <li><Link to="pizzas_tardicionais">Pizzas Tradicionais</Link> </li>
            <li><Link to="pizzas_especiais">Pizzas Especiais</Link></li>
            <li><Link to="pizza_top">Pizzas Tops</Link></li>
        </ul>
        <Link to="/cardapio">Voltar</Link>
       </div>
            
    );
};

export default Pizza
