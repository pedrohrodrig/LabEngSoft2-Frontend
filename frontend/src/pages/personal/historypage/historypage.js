import React, { useEffect, useState } from "react";
import Title from "../../../components/title/title";
import AppointmentsList from "../../../components/lists/appointmentlist/appointmentlist";
import consultations from "../../../objects/consultations"; // Assegure-se de que este é o caminho correto
import "./historypage.css";

function HistoryPage() {
    const [pastAppointments, setPastAppointments] = useState([]);

    useEffect(() => {
        // Filtrar as consultas passadas
        const today = new Date();
        const filteredPastAppointments = consultations.filter(appointment => {
            const appointmentDateTime = new Date(appointment.scheduled_time);
            return appointmentDateTime < today;
        });

        setPastAppointments(filteredPastAppointments);
    }, []); // Vazio para rodar apenas na montagem do componente

    return (
        <div className="history page">
            <Title
                head="Histórico de Consultas"
                body="Veja a lista de todas as suas consultas passadas."
            />

            <AppointmentsList appointments={pastAppointments} />
        </div>
    );
}

export default HistoryPage;
