import React from 'react';
import PizzaSelector from './PizzaSelector';

const PizzaTop = () => {
  const ingredientes = [
    'Muçarela', 'Tomate', 'orégano', 'presunto', 'cebola', 'bacon', 'Manjericão', 'frango', 'milho', 'abacaxi', 'goiabada', 'queijo', 'molho', 'Calabresa', 'queijo lanche', 'azeitona', 'pimenta calabresa', 'Azeitona', 'Azeite doce', 'cheddar', 'Ovo', 'leite condenssado', 'MMS', 'lombinho', 'peito de peru', 'champignon', 'Gorgonzola', 'salame', 'parmesão', 'catupiry', 'mollho de tomate', 'atum', 'carne moida', 'palmito', 'leite condensado', 'toscana', 'carne seca', 'parmesão','camarão','picanha','bacalhao'
  ];

  const indicesPorTag = {
    'camarão': [0,38, 17, 2,30],
    'picanha': [0,39,30,17,2],
    'bacalhao': [0, 40, 17,4,2],
    'salame': [0, 27,1, 2, 4],
    'thaiti': [0, 5, 2, 4],
    '6 queijos': [0,37,14,26,29,19,17,2],
  };

  return ( 
    <PizzaSelector 
      ingredientes={ingredientes} 
      indicesPorTag={indicesPorTag} 
      title="Pizzas Top" 
    />
  );
};

export default PizzaTop;

