import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/cardapio')
        
    }
  return (
    <div>
        <h1>Bem-vindo ao Sr. Pizza Bar</h1>    
        <button onClick={handleClick}>Faça o seu pedido</button>
    </div>
  )
}

export default Home
