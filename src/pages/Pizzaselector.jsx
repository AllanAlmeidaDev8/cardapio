import React, { useState, useEffect } from 'react';
import './Pizza.css';

const Pizzaselector = ({ tipo, onSelect }) => {
    const [selecionados, setSelecionados] = useState([]);

    const saboresPizzas = {
        PizzaTradicional: [
            { nome: "Mussarela", ingredientes: ["Mussarela", "Orégano","Tomate"],imagem: "./assets/mussarela.jpg" },
            { nome: "Presunto", ingredientes: ["Presunto", "Mussarela", "Orégano","Cebola"] },
            { nome: "Bacon", ingredientes: ["Bacon", "Mussarela", "Orégano", "Cebola"] },
            { nome: "Marguerita", ingredientes: ["Mussarela","Manjericão","Tomate", "Oregano" ] },
            { nome: "Caipira", ingredientes: ["Frango", "Milho", "Mussarela", "Ervilha"] },
            { nome: "Havaiana", ingredientes: ["Abacaxi", "Presunto", "Mussarela"] },
            { nome: "Milho Verde", ingredientes: ["Milho", "Mussarela", "Orégano"] },
            { nome: "Romeu e Julieta", ingredientes: ["Goiabada", "Queijo"] },
            { nome: "Frango", ingredientes: ["Frango", "Catupiry", "Orégano"] },
            { nome: "Brasileira", ingredientes: ["Calabresa", "Cebola", "Mussarela"] },
            { nome: "Quatro Queijos", ingredientes: ["Mussarela", "Gorgonzola", "Parmesão", "Catupiry"] },
            { nome: "Portuguesa", ingredientes: ["Presunto", "Ovo", "Cebola", "Azeitona"] },
            { nome: "Baiana", ingredientes: ["Calabresa", "Pimenta", "Cebola"] },
            { nome: "Vegetariana", ingredientes: ["Legumes", "Mussarela", "Orégano"] },
            { nome: "Americana", ingredientes: ["Hambúrguer", "Cheddar", "Bacon"] },
        ],
        PizzaEspecial: [
            { nome: "5 Queijos", ingredientes: ["Mussarela", "Gorgonzola", "Parmesão", "Catupiry", "Provolone"] },
            { nome: "Sr", ingredientes: ["Pepperoni", "Tomate", "Mussarela"] },
            { nome: "Pizza Robust", ingredientes: ["Presunto", "Bacon", "Calabresa"] },
            { nome: "Atum", ingredientes: ["Atum", "Cebola", "Orégano"] },
            { nome: "Frango", ingredientes: ["Frango", "Catupiry", "Orégano"] },
            { nome: "Peito de Peru", ingredientes: ["Peito de Peru", "Catupiry", "Mussarela"] },
            { nome: "Lombinho", ingredientes: ["Lombo", "Mussarela", "Orégano"] },
            { nome: "Bolonhesa", ingredientes: ["Carne Moída", "Molho de Tomate", "Mussarela"] },
            { nome: "Palmito", ingredientes: ["Palmito", "Mussarela", "Orégano"] },
            { nome: "FT", ingredientes: ["Frango", "Tomate", "Orégano"] },
            { nome: "Carne Seca", ingredientes: ["Carne Seca", "Cebola", "Catupiry"] },
        ],
        PizzaTop: [
            { nome: "Camarão", ingredientes: ["Camarão", "Mussarela", "Orégano"] },
            { nome: "Picanha", ingredientes: ["Picanha", "Cebola", "Mussarela"] },
            { nome: "Bacalhau", ingredientes: ["Bacalhau", "Cebola", "Azeitona"] },
            { nome: "Salame", ingredientes: ["Salame", "Mussarela", "Orégano"] },
            { nome: "Camarão com Palmito", ingredientes: ["Camarão", "Palmito", "Mussarela"] },
            { nome: "Thaiti", ingredientes: ["Frutas Tropicais", "Mussarela"] },
            { nome: "6 Queijos", ingredientes: ["Mussarela", "Gorgonzola", "Parmesão", "Catupiry", "Provolone", "Cheddar"] },
        ]
    };

    const handleCheckboxChange = (nome) => {
        const isSelected = selecionados.includes(nome);

        if (isSelected) {
            setSelecionados(selecionados.filter(sabor => sabor !== nome));
        } else {
            if (selecionados.length < 4) {
                setSelecionados([...selecionados, nome]);
            } else {
                alert('Você pode selecionar no máximo 4 sabores.');
            }
        }
    };

    useEffect(() => {
        onSelect(selecionados);
    }, [selecionados, onSelect]);

    const sabores = saboresPizzas[tipo] || [];

    return (
        <form>
            {sabores.map((sabor, index) => (
                <fieldset key={index}>
                    <legend>{sabor.nome}</legend>
                    <input
                        className='checkbox'
                        type="checkbox"
                        id={sabor.nome}
                        name={sabor.nome}
                        checked={selecionados.includes(sabor.nome)}
                        onChange={() => handleCheckboxChange(sabor.nome)}
                    />
                    <label htmlFor={sabor.nome}>
                        <div className="sabor-container">
                            <img src={sabor.imagem} alt={`Pizza de ${sabor.nome}`} className="pizza-imagem" />
                            <div className="ingrediente_list">
                                {sabor.ingredientes.map((ingrediente, idx) => (
                                    <React.Fragment key={idx}>
                                        <p>{ingrediente}</p>
                                        {idx < sabor.ingredientes.length - 1 && <p>-</p>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </label>
                </fieldset>
            ))}
        </form>
    );
};

export default Pizzaselector;
