// import React, { useState, useEffect } from 'react';
// import './Pizza.css';

// const Pizzaselector = ({ tipo, onSelect }) => {
//     const [selecionados, setSelecionados] = useState([]);
    
//     const saboresPizzas = {
//         PizzaTradicional: [
//             { nome: "Mussarela", ingredientes: ["Mussarela", "Orégano","Tomate"], imagem: "./assets/mussarela.jpg" },
//             { nome: "Presunto", ingredientes: ["Presunto", "Mussarela", "Orégano","Cebola"] },
//             { nome: "Bacon", ingredientes: ["Bacon", "Mussarela", "Orégano", "Cebola"] },
//             { nome: "Marguerita", ingredientes: ["Mussarela","Manjericão","Tomate", "Oregano" ] },
//             { nome: "Caipira", ingredientes: ["Frango", "Milho", "Mussarela", "Ervilha"] },
//             { nome: "Havaiana", ingredientes: ["Abacaxi", "Presunto", "Mussarela","Oregano"] },
//             { nome: "Milho Verde", ingredientes: ["Milho", "Mussarela", "Orégano"] },
//             { nome: "Romeu e Julieta", ingredientes: ["Mussarela","Goiabada", "Queijo"] },
//             { nome: "Frango", ingredientes: ["Mussarela","Frango", "Catupiry", "Orégano"] },
//             { nome: "Brasileira", ingredientes: ["Calabresa", "Catupiry", "Mussarela","Milho","Oregano"] },
//             { nome: "Quatro Queijos", ingredientes: ["Mussarela", "Cheddar", "Parmesão", "Catupiry"] },
//             { nome: "Portuguesa", ingredientes: ["Mussarela","Tomate","Presunto", "Ovo", "Cebola", "Azeitona","Oregano"] },
//             { nome: "Baiana", ingredientes: ["Mussarela","Oregano","Presunto", "Pimenta calabresa", "Milho","Ervilha"] },
//             { nome: "Vegetariana", ingredientes: ["Mussarela", "Orégano","Milho","Evilha","Tomate","Cebola","Azeitona"] },
//             { nome: "Cubana", ingredientes: ["Mussarela", "Orégano","Milho","Pimenta calabresa","Oregano"] },
//             { nome: "Americana", ingredientes: ["Mussarela", "Bacon", "Cebola", "Alho frito","Tomate","Pimenta calabresa","Azeite doce","Orégano"] },
//         ],
//         PizzaEspecial: [
//             { nome: "5 Queijos", ingredientes: ["Mussarela", "Lanche", "Parmesão", "Catupiry", "Cheddar"] },
//             { nome: "Sr", ingredientes: ["Mussarela","Bacon","Presunto","Ovo","Milho","Ervilha","Azeitona"] },
//             { nome: "Pizza Rogusta", ingredientes: ["Mussarela","Champignon", "Catupiry", "Azeitona","Oragano"] },
//             { nome: "Atum", ingredientes: ["Mussarela","Atum", "Cebola", "Orégano"] },
//             { nome: "Frango Especial", ingredientes: ["Mussarela","Frango","Cheddar", "Catupiry", "Orégano"] },
//             { nome: "Peito de Peru", ingredientes: ["Mussarela","Orégano","Peito de Peru", "Catupiry"] },
//             { nome: "Lombinho", ingredientes: ["Mussarela","Lombinho", "Celoba","Orégano"] },
//             { nome: "Calabresa SP", ingredientes: ["Mussarela","Calabresa","Catupiry","Orégano"] },
//             { nome: "Palmito", ingredientes: ["Mussarela","Palmito","Catupiry","Orégano"] },
//             { nome: "FT", ingredientes: ["Mussarela","Toscana","Frango", "Orégano"] },
//             { nome: "Carne Seca", ingredientes: ["Mussarela","Carne Seca", "Orégano","Catupiry"] },
//         ],
//         PizzaTop: [
//             { nome: "Camarão", ingredientes: ["Mussarela","Camarão", "Catupiry", "Orégano"] },
//             { nome: "Picanha", ingredientes: ["Mussarela","Picanha", "Cebola", "Orégano"] },
//             { nome: "Bacalhau", ingredientes: ["Mussarela","Bacalhau", "Cebola", "Orégano"] },
//             { nome: "Salame", ingredientes: ["Mussarela","Salame", "Orégano","Cebola"] },
//             { nome: "Camarão com Palmito", ingredientes: ["Mussarela","Camarão", "Palmito", "Orégano"] },
//             { nome: "6 Queijos", ingredientes: ["Mussarela", "Gorgonzola", "Parmesão", "Catupiry", "Lanche", "Cheddar"] },
//         ]
//     };

//     const handleCheckboxChange = (nome) => {
//         const isSelected = selecionados.includes(nome);
//         const maxSabores = tipo === 'PizzaTradicional' ? 3 : 4;

//         if (isSelected) {
//             setSelecionados(selecionados.filter(sabor => sabor !== nome));
//         } else {
//             if (selecionados.length < maxSabores) {
//                 setSelecionados([...selecionados, nome]);
//             } else {
//                 alert(`Você pode selecionar no máximo ${maxSabores} sabores.`);
//             }
//         }
//     };

//     useEffect(() => {
//         onSelect(selecionados);
//     }, [selecionados, onSelect]);

//     const sabores = saboresPizzas[tipo] || [];

//     return (
//         <form>
//             {sabores.map((sabor, index) => (
//                 <fieldset key={index}>
//                     <legend>{sabor.nome}</legend>
//                     <input
//                         className='checkbox'
//                         type="checkbox"
//                         id={sabor.nome}
//                         name={sabor.nome}
//                         checked={selecionados.includes(sabor.nome)}
//                         onChange={() => handleCheckboxChange(sabor.nome)}
//                     />
//                     <label htmlFor={sabor.nome}>
//                         <div className="sabor-container">
//                             <img src={sabor.imagem} alt={`Pizza de ${sabor.nome}`} className="pizza-imagem" />
//                             <div className="ingrediente_list">
//                                 {sabor.ingredientes.map((ingrediente, idx) => (
//                                     <React.Fragment key={idx}>
//                                         <p>{ingrediente}</p>
//                                         {idx < sabor.ingredientes.length - 1 && <p>-</p>}
//                                     </React.Fragment>
//                                 ))}
//                             </div>
//                         </div>
//                     </label>
//                 </fieldset>
//             ))}
//         </form>
//     );
// };

// export default Pizzaselector;


import React, { useState, useEffect } from 'react';
import './Pizza.css';

const Pizzaselector = ({ tipo, tamanho, onSelect }) => {
    const [selecionados, setSelecionados] = useState([]);
    const [erroTamanho, setErroTamanho] = useState(false);

   const saboresPizzas = {
        PizzaTradicional: [
            { nome: "Mussarela", ingredientes: ["Mussarela", "Orégano","Tomate"], },
            { nome: "Presunto", ingredientes: ["Presunto", "Mussarela", "Orégano","Cebola"] },
            { nome: "Bacon", ingredientes: ["Bacon", "Mussarela", "Orégano", "Cebola"] },
            { nome: "Marguerita", ingredientes: ["Mussarela","Manjericão","Tomate", "Oregano" ] },
            { nome: "Caipira", ingredientes: ["Frango", "Milho", "Mussarela", "Ervilha"] },
            { nome: "Havaiana", ingredientes: ["Abacaxi", "Presunto", "Mussarela","Oregano"] },
            { nome: "Milho Verde", ingredientes: ["Milho", "Mussarela", "Orégano"] },
            { nome: "Romeu e Julieta", ingredientes: ["Mussarela","Goiabada", "Queijo"] },
            { nome: "Frango", ingredientes: ["Mussarela","Frango", "Catupiry", "Orégano"] },
            { nome: "Brasileira", ingredientes: ["Mussarela","Calabresa", "Catupiry","Milho","Oregano"] },
            { nome: "Quatro Queijos", ingredientes: ["Mussarela", "Cheddar", "Parmesão", "Catupiry"] },
            { nome: "Portuguesa", ingredientes: ["Mussarela","Tomate","Presunto", "Ovo", "Cebola", "Azeitona","Oregano"] },
            { nome: "Baiana", ingredientes: ["Mussarela","Oregano","Presunto", "Pimenta calabresa", "Milho","Ervilha"] },
            { nome: "Vegetariana", ingredientes: ["Mussarela", "Orégano","Milho","Evilha","Tomate","Cebola","Azeitona"] },
            { nome: "Paulista", ingredientes: ["Mussarela","Presunto","Tomate","Cebola","Azeitona","Evilha","Orégano"] },
            { nome: "Cubana", ingredientes: ["Mussarela", "Bacon","Milho","Pimenta calabresa","Oregano"] },
            { nome: "Americana", ingredientes: ["Mussarela", "Bacon", "Cebola", "Alho frito","Tomate","Pimenta calabresa","Azeite doce","Orégano"] },
        ],
        PizzaEspecial: [
            { nome: "5 Queijos", ingredientes: ["Mussarela", "Lanche", "Parmesão", "Catupiry", "Cheddar"] },
            { nome: "Sr", ingredientes: ["Mussarela","Bacon","Presunto","Ovo","Milho","Ervilha","Azeitona"] },
            { nome: "Pizza Rogusta", ingredientes: ["Mussarela","Champignon", "Catupiry","Oragano"] },
            { nome: "Atum", ingredientes: ["Mussarela","Atum", "Cebola", "Orégano"] },
            { nome: "Frango Especial", ingredientes: ["Mussarela","Frango","Cheddar", "Catupiry", "Orégano"] },
            { nome: "Peito de Peru", ingredientes: ["Mussarela","Orégano","Peito de Peru", "Catupiry"] },
            { nome: "Italiana", ingredientes: ["Mussarela","Atum","Ovo", "Cebola" ,"Azeitona" ,"Oregano"] },
            { nome: "Lombinho", ingredientes: ["Mussarela","Lombinho", "Celoba","Orégano"] },
            { nome: "Calabresa SP", ingredientes: ["Mussarela","Calabresa","Catupiry","Orégano"] },
            { nome: "Palmito", ingredientes: ["Mussarela","Palmito","Catupiry","Orégano"] },
            { nome: "MM's", ingredientes: ["Mussarela","mm's","Leite condensado","Orégano"] },
            { nome: "FT", ingredientes: ["Mussarela","Toscana","Frango", "Orégano"] },
            { nome: "Carne Seca", ingredientes: ["Mussarela","Carne Seca", "Orégano","Catupiry"] },
        ],
        PizzaTop: [
            { nome: "Camarão", ingredientes: ["Mussarela","Camarão", "Catupiry", "Orégano"] },
            { nome: "Picanha", ingredientes: ["Mussarela","Picanha", "Cebola", "Orégano"] },
            { nome: "Bacalhau", ingredientes: ["Mussarela","Bacalhau", "Cebola", "Orégano"] },
            { nome: "Salame", ingredientes: ["Mussarela","Salame", "Orégano","Cebola"] },
            { nome: "Camarão com Palmito", ingredientes: ["Mussarela","Camarão", "Palmito", "Orégano"] },
            { nome: "6 Queijos", ingredientes: ["Mussarela", "Gorgonzola", "Parmesão", "Catupiry", "Lanche", "Cheddar"] },
        ]
    };

    const handleCheckboxChange = (nome) => {
        // Exibe mensagem de erro se o tamanho não estiver selecionado, mas permite selecionar sabores
        if (!tamanho) {
            setErroTamanho(true);
        } else {
            setErroTamanho(false);
        }

        const isSelected = selecionados.includes(nome);
        const maxSabores = tipo === 'PizzaTradicional' ? 3 : 4;

        if (isSelected) {
            setSelecionados(selecionados.filter(sabor => sabor !== nome));
        } else {
            if (selecionados.length < maxSabores) {
                setSelecionados([...selecionados, nome]);
            } else {
                alert(`Você pode selecionar no máximo ${maxSabores} sabores.`);
            }
        }
    };

    useEffect(() => {
        onSelect(selecionados);
    }, [selecionados, onSelect]);

    const sabores = saboresPizzas[tipo] || [];

    return (
        <form>
            {erroTamanho && <p className="error-message">Por favor, selecione o tamanho da pizza.</p>}
            {sabores.map((sabor, index) => (
                <fieldset key={index}>
                    
                    
                    <legend>{sabor.nome}</legend> 
                    <label htmlFor={sabor.nome}>
                    <input
                        className='checkbox'
                        type="checkbox"
                        id={sabor.nome}
                        name={sabor.nome}
                        checked={selecionados.includes(sabor.nome)}
                        onChange={() => handleCheckboxChange(sabor.nome)}
                    />
                   
                        <div className="sabor-container">
                            <div className="ingrediente_list">
                                {sabor.ingredientes.map((ingrediente, idx) => (
                                    <React.Fragment key={idx}>
                                        <p>{ingrediente} </p>
                                        {idx < sabor.ingredientes.length - 1 && <p> - </p>}
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
