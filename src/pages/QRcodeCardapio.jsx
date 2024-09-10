import React from 'react'
import logo from './img/logo.png';
import './QRcodeCardapio.css';
const QRcodeCardapio = () => {
    return (
        <div>
            <header>
                <img src={logo} alt="" width={200} className='lg' />
            </header>
            <main className='main-cardapio'>
                <div>
                    <div className="title_box">
                        <h2>PÍZZAS Tradicionais </h2>
                        <p><span>M</span> R$27.00, <span>G</span> R$36.00, <span>F </span>R$51.00</p>
                    </div>


                    <div className='text_box'>
                        <ul>
                            <li>MUSSARELA
                                <p>(MUSSARELA, TOMATE E ORÉGANO)</p></li>
                            <li>PRESUNTO
                                <p>(MUSSARELA, PRESUNTO, CEBOLA E ORÉGANO)</p>
                            </li>
                            <li> CALABRESA
                                <p>(MUSSARELA, CALABRESA, CEBOLA E ORÉGANO)</p>
                            </li>
                            <li> BACON. 
                                <p>(MUSSARELA, BACON, CEBOLA E ORÉGANO)</p>
                            </li>
                            <li> PAULISTA 
                                <p>(MUSSARELA, PRESUNTO, CEBOLA E ORÉGANO)</p>
                            </li>
                            <li> MARGUERITA
                                <p>(MUSSARELA, MANJERICÃO, TOMATE E ORÉGANO)</p>
                            </li>
                            <li>CAIPIRA
                                <p>(MUSSARELA, FRANGO, ERVILHA, MILHO E ORÉGANO)</p>
                            </li>
                            <li> HAVAIANA
                                <p>(MUSSARELA, MOLHO, PRESUNTO, ABACAXI E ORÉGANO)</p>
                            </li>
                            <li>MILHO VERDE
                                <p>(MUSSARELA, MILHO, CATUPIRY E ORÉGANO)</p>
                            </li>
                            <li>ROMEU E JULIETA 
                                <p>(QUEIJO, GOIABADA E ORÉGANO)</p>
                            </li>
                            <li>CUBANA
                                <p>(MUSSARELA, MILHO, PIMENTA, CALABRESA E ORÉGANO)</p>
                            </li>
                            <li>FRANGO 
                                <p>(MUSSARELA, MOLHO, FRANGO, CATUPIRY E ORÉGANO)</p>
                            </li>
                            <li>BRASILEIRA 
                                <p>(MUSSARELA, CALABRESA, CATUPIRY, MILHO, AZEITONA E ORÉGANO )</p>
                            </li>
                            <li>QUATRO QUEIJO 
                                <p>(MUSSARELA, CATUPIRY, CHEDDAR, QUEIJO LANCHE, E ORÉGANO)</p>
                            </li>
                            <li>PORTUGUESA
                                <p>(MUSSARELA, PRESUNTO, OVO, TOMATE, CEBOLA, AZEITONA E ORÉGANO)</p>
                            </li>
                            <li>BAIANA 
                                <p>(MUSSARELA, PRESUNTO, PIMENTA CALABRESA, AZEITONA E ORÉGANO)</p>
                            </li>
                            <li> VEGETARIANA 
                                <p>(MUSSARELA, MILHO, ERVILHA, TOMATE, CEBOLA, AZEITONA E ORÉGANO)</p>
                            </li>
                            <li>AMERICANA 
                                <p>(MUSSARELA, BACON, CEBOLA, ALHO PORÓ, TOMATE, AZEITONA, PIMENTA CALABRI)</p>
                            </li>
                        </ul>
                       
                       <br />
                    </div>
                </div>

                <div>
                    <div className="title_box">
                        <h2>PIZZAS ESPECIAIS</h2>
                        <p><span>M</span> R$30.00, <span>G</span> R$41.00, <span>F </span>R$55.00</p>
                    </div>

                    <div className='text_box'>
                        <ul>
                            <li>5 QUEIJOS
                                <p>(MUSSARELA, PARMESÃO, LANCHE, CATUPIRY, CHEDDAR E ORÉGANO )</p>
                            </li>
                            <li>SR
                                <p>(MUSSARELA, BACON, PRESUNTO, OVO, MILHO, ERVILHA, AZEITONA E ORÉGANO)</p>
                            </li>
                            <li>ITALIANA
                                <p>(MUSSARELA, MOLHO DE TOMATE, OVO, CEBOLA, AZEITONA, ATUM E ORÉGANO )</p>
                            </li>
                            <li>PIZZA ROGUSTA 
                                <p>(MUSSARELA, MOLHO DE TOMATE, CALABRESA, CHAMPIGNON, CATUPIRY, CEBOLA, E OREGANO)</p>
                            </li>
                            <li>ATUM 
                                <p>(MUSSARELA, ATUM, CEBOLA, E ORÉGANO)</p>
                            </li>
                            <li>FRANGO ESPECIAL 
                                <p>(MUSSARELA, FRANGO, CHEDDAR, CATUPIRY E ORÉGANO)</p>
                            </li>
                            <li>PEITO DE PERU 
                                <p>(MUSSARELA, PEITO DE PERU, CATUPIRY E ORÉGANO )</p>
                            </li>
                            <li>LOMBINHO
                                <p>(MUSSARELA, LOMBINHO, CATUPIRY E ORÉGANO)</p>
                            </li>
                            <li>BOLONHESA
                                <p>(MUSSARELA, CARNE MOÍDA, MILHO E ORÉGANO)</p>
                            </li>
                            <li>PALMITO
                                <p>(MUSSARELA, MOLHO DE TOMATE, PALMITO E CATUPIRY)</p>
                            </li>
                            <li> MM'S
                                <p>(MUSSARELA, MM'S , E LEITE CONDENSADO)</p>
                            </li>
                            <li>FT
                                <p>(FRANGO, TOSCANA, CHEDDAR E ORÉGANO)</p>
                            </li>
                            <li>CARNE SECA
                                <p>(MUSSARELA, CARNE SECA, CATUPIRY, CEBOLA E AZEITONA)</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                <div className="title_box">
                        <h2>PIZZAS TOP</h2>
                        <p><span>M</span> R$36.00, <span>G</span> R$45.00, <span>F</span> R$60.00</p>
                    </div>
                        <div className='text_box'>
                            <ul>
                                <li>CAMARÃO 
                                    <p>(MUSSARELA, CAMARÃO, MOLHO DE TOMATE, AZEITONA E ORÉGANO)</p>
                                </li>
                                <li>PICANHA 
                                    <p>(MUSSARELA, PICANHA, CEBOLA E ORÉGANO)</p>
                                </li>
                                <li>BACALHAU 
                                    <p>(MUSSARELA, BACALHAU, AZEITONA, CEBOLA E ORÉGANO)</p>
                                </li>
                                <li>SALAME 
                                    <p>(MUSSARELA, SALAME, TOMATE, AZEITONA E OREGANO )</p>
                                </li>
                                <li>CAMARÃO COM PALMITO 
                                    <p>(MUSSARELA, MOLHO, CAMARÃO, PALMITO E CATUPIRY)</p>
                                </li>
                                <li>THAITI
                                    <p>(MUSSARELA, MOLHO, PEPERONE, CHEDDAR E AZEITONA)</p>
                                </li>
                                <li>6 QUEIJOS
                                    <p>(MUSSARELA, PARMESÃO, LANCHE, GORGONZOLA, CATUPIRY, CHEDDAR, AZEITONA)</p>
                                </li>
                            </ul>
                    </div>
                </div>



            </main>
        </div>
    )
}

export default QRcodeCardapio