import React, { useState, useEffect } from 'react';
import Logo from '../assets/img/logo-icons/logo.png';
import moment from 'moment';
import { Link } from 'react-router-dom';
// Css
import '../pages/Pagina01.css';

const Pagina01 = () => {
  const [dataAtual, setDataAtual] = useState(moment());
  const [estaAberto, setEstaAberto] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataAtual(moment());
      const diaSemana = dataAtual.day(); 
      const horaAtual = dataAtual.hour();

      // 0 = domingo, 1 = segunda, ...
      
      if (diaSemana === 5 || diaSemana === 6 || diaSemana === 0) { // Sexta a domingo
        if (horaAtual >= 17 || horaAtual === 0) { // Funciona até meia-noite
          setEstaAberto(true);
        } else {
          setEstaAberto(false);
        }
      } else if (diaSemana >= 2 && diaSemana <= 4) { // Terça a quinta
        if (horaAtual >= 17 && horaAtual <= 23) { // Funciona até 23h
          setEstaAberto(true);
        } else {
          setEstaAberto(false);
        }
      } else {
        setEstaAberto(false); // Fechado segunda-feira
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#840000',
        color: '#ffff',
        gap: '10px'
      }}>
        <img src={Logo} alt="" width={50} />
        <h1>Sr Pizzaria & Bar</h1>
      </div>
      <div className="hora" style={{
        position:'absolute',
        padding:'10px',
        color:'#666',
        fontSize:'12px'
      }}>
        {estaAberto ? (
          <>
            <p>Aberto</p>
            <h4>{dataAtual.format('HH:mm')}</h4>
          </>
        ) : (
          <p>Fechado - Funcionamos até as 23h nos dias de semana, sexta sabado e domingo até as 00:00</p>
        )}
      </div>
      <div className="link-btn">
        <Link to='cardapio' className='Button'>CARDÁPIO</Link>
      </div>
    </div>
  );
};

export default Pagina01;
