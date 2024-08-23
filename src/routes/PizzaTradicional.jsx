import React from 'react';
import PizzaSelector from './PizzaSelector';

const PizzaTradicional = () => {
  const ingredientes = [
   'Mussarela', 'Tomate', 'orégano', 'presunto', 'cebola', 'bacon', 'Manjericão', 'frango', 'milho', 'abacaxi', 'goiabada', 'queijo', 'molho', 'Calabresa', 'queijo lanche', 'azeitona', 'pimenta calabresa', 'Azeitona', 'Azeite doce', 'cheddar', 'ovo', 'leite condenssado', 'MMS', 'lombinho', 'peito de peru', 'champignon', 'Gorgonzola', 'salame', 'parmesão', 'catupiry', 'mollho de tomate', 'atum', 'carne moida', 'palmito', 'leite condensado', 'toscana', 'carne seca', 'parmesão','camarão','picanha','bacalhao','ervilha','alho porro'
  ];

  const indicesPorTag = {
    'Mussarela': [0,1,2],
    'Persunto': [0,3,4,2],
    'Calabresa': [0,13,2,4],
    'Bacon': [0,5,4,2],
    'Paulista': [0,3,4,2],
    'Marguerita': [0,6,1,2],
    'Caipira': [0,7,41,8,2],
    'Havaiana': [0,3,8,2,9],
    'Milho verde': [0,8,29,2],
    'Romeu e Julieta': [0,11,29,2],
    'Cubana': [0,9,29,2],
    'Frango': [0,7,16,29,2],
    'Brasileira': [0,13,29,8,17,2],
    '4 Queijo': [0,29,20,14,2],
    'Portuguesa': [0,3,16,20,1,4,17,2],
    'Baiana': [0,3,16,17,2],
    'Vegeteriana': [0,8,41,12,2,4,17],
    'Americana': [0,5,4,42,17,16,18],
  
    // Adicione outros tags conforme necessário
  };

  return (
   <div>
     <PizzaSelector 
      ingredientes={ingredientes} 
      indicesPorTag={indicesPorTag} 
      title="Pizzas Tradicionais" 
    />

    
   </div>


  );
};

export default PizzaTradicional;
