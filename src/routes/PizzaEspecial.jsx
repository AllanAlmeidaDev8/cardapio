import React from 'react';
import PizzaSelector from './PizzaSelector';

const PizzaEspecial = () => {
  const ingredientes = [
   'Muçarela', 'Tomate', 'orégano', 'presunto', 'cebola', 'bacon', 'Manjericão', 'frango', 'milho', 'abacaxi', 'goiabada', 'queijo', 'molho', 'Calabresa', 'queijo lanche', 'azeitona', 'pimenta calabresa', 'Azeitona', 'Azeite doce', 'cheddar', 'Ovo', 'leite condenssado', 'MMS', 'lombinho', 'peito de peru', 'champignon', 'Gorgonzola', 'salame', 'parmesão', 'catupiry', 'mollho de tomate', 'atum', 'carne moida', 'palmito', 'leite condensado', 'toscana', 'carne seca', 'parmesão'
    // Adicione mais ingredientes específicos
  ];

  const indicesPorTag = {
    '5 Queijos': [0, 27, 14,37],
    'SR': [0, 5, 3, 20, 28, 19, 2],
    'Intaliana': [0, 20, 30, 29, 31, 2],
    'Rogusta': [0, 29, 13, 25, 29, 4, 15],
    'Frango-Sp': [0, 7, 19, 29, 2],
    'Peito de peru': [0, 24, 29, 2],
    'Lobinho': [0, 23, 29, 2],
    'Bolonhesa': [0, 32, 8, 2],
    'Palmito': [0, 30, 33, 29],
    'MMs': [0, 22, 34],
    'Ft': [0, 7, 35, 29, 2],
    'Carne seca': [0, 36, 29, 4, 17],
    // Adicione outros tags conforme necessário
  };

  return (
    <PizzaSelector
      ingredientes={ingredientes}
      indicesPorTag={indicesPorTag}
      title="Pizzas Especiais"
    />
  );
};

export default PizzaEspecial;
