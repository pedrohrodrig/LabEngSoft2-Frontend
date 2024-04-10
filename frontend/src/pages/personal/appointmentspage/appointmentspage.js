import React, { useEffect, useState } from "react";
import Title from "../../../components/title/title";
import AppointmentsList from "../../../components/lists/appointmentlist/appointmentlist";
import consultations from "../../../objects/consultations"; // Garanta que este seja o caminho correto para o arquivo
import "./appointmentspage.css";

function AppointmentsPage() {
    const [futureAppointments, setFutureAppointments] = useState([]);

    useEffect(() => {
        // Filtrar as consultas futuras
        const today = new Date();
        const filteredFutureAppointments = consultations.filter(appointment => {
            const appointmentDateTime = new Date(appointment.scheduled_time);
            return appointmentDateTime > today;
        });

        setFutureAppointments(filteredFutureAppointments);
    }, []); // O array vazio como segundo argumento garante que este efeito roda apenas uma vez após o primeiro render

    return (
        <div className="appointments page">
            <Title
                head="Consultas Futuras"
                body="Veja a lista de todas as suas consultas agendadas para o futuro."
            />

            <AppointmentsList appointments={futureAppointments} />
        </div>
    );
}

export default AppointmentsPage;
