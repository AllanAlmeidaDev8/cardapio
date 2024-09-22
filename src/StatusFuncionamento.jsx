import React, { useState, useEffect } from 'react';

const StatusFuncionamento = () => {
    const [status, setStatus] = useState('Fechado');

    useEffect(() => {
        const verificarHorario = () => {
            const data = new Date();
            const diaSemana = data.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
            const horas = data.getHours();
            const minutos = data.getMinutes();

            // Função para verificar se está no intervalo de funcionamento
            const estaAberto = (horaInicio, minutoInicio, horaFim, minutoFim) => {
                const horaAtual = horas * 60 + minutos; // Convertendo horário atual em minutos
                const inicio = horaInicio * 60 + minutoInicio;
                const fim = horaFim * 60 + minutoFim;
                return horaAtual >= inicio && horaAtual <= fim;
            };

            // Terça a Quinta: 17:00 às 23:00
            if (diaSemana >= 2 && diaSemana <= 4) {
                if (estaAberto(17, 0, 23, 0)) {
                    setStatus('Aberto');
                    return;
                }
            }
            // Sexta, Sábado e Domingo: 17:00 às 00:00
            if (diaSemana === 5 || diaSemana === 6 || diaSemana === 0) {
                if (estaAberto(17, 0, 24, 0)) {
                    setStatus('Aberto');
                    return;
                }
            }
            // Caso contrário, Fechado
            setStatus('Fechado');
        };

        verificarHorario();
        const intervalo = setInterval(verificarHorario, 60000); // Atualiza a cada minuto

        return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <div className="status_funcionamento">
            <h2>Status: <span>{status}</span></h2>
        </div>
    );
};

export default StatusFuncionamento;
