import React from 'react';

const IngredientesList = ({ indices, ingredientes, tag }) => {
  const itens = indices.map(index => ingredientes[index]);
  return (
    <fieldset>
      <legend>
        <input type="checkbox" name={tag} id={tag} />
        <span className='nome_sabores'>{tag}</span>
      </legend>
      <label htmlFor={tag}>
        <div className="ingredientes">
          {itens.map((item, index) => (
            <li key={`${tag}-${index}`}>{item}</li>
          ))}
        </div>
      </label>
    </fieldset>
  );
};

export default IngredientesList;
