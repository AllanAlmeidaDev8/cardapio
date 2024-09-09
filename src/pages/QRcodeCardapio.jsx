import React from 'react'
import logo from './img/logo.png';
import './QRcodeCardapio.css';
const QRcodeCardapio = () => {
    return (
        <div>
            <header>
                <img src={logo} alt="" width={200} />
            </header>
            <main className='main-cardapio'>
                <div>
                    <div className="title_box">
                         <h2>PÍZZAS Tradicionais </h2>
                         <p><span>M</span> R$27.00, <span>G</span> R$36.00, <span>F </span>R$51.00</p>
                    </div>
                   
                   
                    <p className='text_box'>
                        MUSSARELA-(MUSSARELA, TOMATE E ORÉGANO) <br />
                        PRESUNTO-(MUSSARELA, PRESUNTO, CEBOLA E ORÉGANO) <br />
                        CALABRESA -(MUSSARELA, CALABRESA, CEBOLA E ORÉGANO ) <br />
                        BACON. (MUSSARELA, BACON, CEBOLA E ORÉGANO ) <br />
                        PAULISTA -(MUSSARELA, PRESUNTO, CEBOLA E ORÉGANO) <br />
                        MARGUERITA -( MUSSARELA, MANJERICÃO, TOMATE E ORÉGANO ) <br />
                        CAIPIRA-( MUSSARELA, FRANGO, ERVILHA, MILHO E ORÉGANO ) <br />
                        HAVAIANA - ( MUSSARELA, MOLHO, PRESUNTO, ABACAXI E ORÉGANO) <br />
                        MILHO VERDE ( MUSSARELA, MILHO, CATUPIRY E ORÉGANO ) <br />
                        ROMEU E JULIETA - (QUEIJO, GOIABADA E ORÉGANO) <br />
                        CUBANA-( MUSSARELA, MILHO, PIMENTA, CALABRESA E ORÉGANO) <br />
                        FRANGO -( MUSSARELA, MOLHO, FRANGO, CATUPIRY E ORÉGANO ) <br />
                        BRASILEIRA-( MUSSARELA, CALABRESA, CATUPIRY, MILHO, AZEITONA E ORÉGANO ) <br />
                        QUATRO QUEIJO -( MUSSARELA, CATUPIRY, CHEDDAR, QUEIJO LANCHE, E ORÉGANO) <br />
                        PORTUGUESA -( MUSSARELA, PRESUNTO, OVO, TOMATE, CEBOLA, AZEITONA E ORÉGANO ) <br />
                        BAIANA-(MUSSARELA, PRESUNTO, PIMENTA CALABRESA, AZEITONA E ORÉGANO) <br />
                        VEGETARIANA -(MUSSARELA, MILHO, ERVILHA, TOMATE, CEBOLA, AZEITONA E ORÉGANO ) <br />
                        AMERICANA - (MUSSARELA, BACON, CEBOLA, ALHO PORÓ, TOMATE, AZEITONA, PIMENTA CALABRI)<br />
                    </p>
                </div>

                <div>
                    <h2 className="title_box">PIZZAS ESPECIAIS  Média R$30,00 Grande R$41,00 Familía R$55,00</h2>
                    <p className='text_box'>
                        5 QUEIJOS - ( MUSSARELA, PARMESÃO, LANCHE, CATUPIRY, CHEDDAR E ORÉGANO )<br />
                        SR-( MUSSARELA, BACON, PRESUNTO, OVO, MILHO, ERVILHA, AZEITONA E ORÉGANO )<br />
                        ITALIANA -( MUSSARELA, MOLHO DE TOMATE, OVO, CEBOLA, AZEITONA, ATUM E ORÉGANO )<br />
                        PIZZA ROGUSTA -( MUSSARELA, MOLHO DE TOMATE, CALABRESA, CHAMPIGNON, CATUPIRY, CEBOLA, E OREGANO)<br />
                        ATUM-( MUSSARELA, ATUM, CEBOLA, E ORÉGANO)<br />
                        FRANGO-SP-( MUSSARELA, FRANGO, CHEDDAR, CATUPIRY E ORÉGANO )<br />
                        PEITO DE PERU -(MUSSARELA, PEITO DE PERU, CATUPIRY E ORÉGANO )<br />
                        LOMBINHO -( MUSSARELA, LOMBINHO, CATUPIRY E ORÉGANO)<br />
                        BOLONHESA-(MUSSARELA, CARNE MOÍDA, MILHO E ORÉGANO)<br />
                        PALMITO -(MUSSARELA, MOLHO DE TOMATE, PALMITO E CATUPIRY )<br />
                        MM'S -( MUSSARELA, MM'S , E LEITE CONDENSADO )<br />
                        FT - ( FRANGO, TOSCANA, CHEDDAR E ORÉGANO )<br />
                        CARNE SECA -( MUSSARELA, CARNE SECA, CATUPIRY, CEBOLA E AZEITONA)<br />
                    </p>
                </div>

                <div>
                    <h2 className="title_box">PIZZAS TOPS  Média R$36,00 Grande R$45,00 Familía R$60,00</h2>
                    <p className='text_box'>
                        CAMARÃO -  ( MUSSARELA, CAMARÃO, MOLHO DE TOMATE, AZEITONA E ORÉGANO )<br/>
                        PICANHA-( MUSSARELA, PICANHA, CEBOLA E ORÉGANO )<br/>
                        BACALHAU -( MUSSARELA, BACALHAU, AZEITONA, CEBOLA E ORÉGANO)<br/>
                        SALAME -(MUSSARELA, SALAME, TOMATE, AZEITONA E OREGANO )<br/>
                        CAMARÃO COM PALMITO -(MUSSARELA, MOLHO, CAMARÃO, PALMITO E CATUPIRY )<br/>
                        THAITI - ( MUSSARELA, MOLHO, PEPERONE, CHEDDAR E AZEITONA)<br/>
                        6 QUEIJOS - ( MUSSARELA, PARMESÃO, LANCHE, GORGONZOLA, CATUPIRY, CHEDDAR, AZEITONA)<br/>
                    </p>
                </div>



            </main>
        </div>
    )
}

export default QRcodeCardapio