import React from "react";
import HorizontalCard from "../../horizontalcard/horizontalcard";

import "../cardlist.css";

function AppointmentList({ className, appointments, small }) {
    const classes = small ? `small-card-list ${className}` : `card-list ${className}`;
    const displayCount = small ? 3 : appointments.length;

    return (
        <div className={classes}>
            {appointments.slice(0, displayCount).map((appointment, i) => {
                // Formata a data e hora da consulta
                const scheduledDateTime = new Date(appointment.scheduled_time).toLocaleString();

                // Mockup: Substitua estas variáveis pelas informações reais do paciente obtidas via API
                const patientName = `Paciente ${appointment.id_patient}`; // Mockup: Nome do paciente
                const patientPhoto = ''; // Mockup: URL da foto do paciente

                return (
                    <HorizontalCard
                        title={`Consulta: ${patientName}`} // Utiliza o nome do paciente
                        image={patientPhoto} // Utiliza a foto do paciente
                        col1={!small && scheduledDateTime} // Mostra a data e hora agendadas se não for a versão 'small'
                        col2={!small && appointment.status} // Mostra o status da consulta se não for a versão 'small'
                        to={`/psychologist/appoint/${appointment.id}`} // Assume que cada consulta tem um 'id' único para detalhes
                        key={appointment.id} // Utiliza o 'id' da consulta como chave única
                    />
                );
            })}
        </div>
    );
}

export default AppointmentList;
