import React from 'react'
import { Link } from 'react-router-dom'

const Cardapio = () => {
  return (
    <div>
     <div className="container">
        <h2>Cardápio</h2>
        <div className="list">
            <ul>
                <li><Link to="/pizzas">Pizzas</Link></li>
                <li><Link>Tira Gosto</Link></li>
                <li><Link>Pirão</Link></li>
                <li><Link>Petiscos</Link></li>
                <li><Link>Bebidas</Link></li>
            </ul>
        </div>
     </div>
    </div>
  )
}

export default Cardapio
