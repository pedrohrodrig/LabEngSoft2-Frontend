import React, { useContext, useEffect, useState } from "react";
import Title from "../../../components/title/title";
import AppointmentsList from "../../../components/lists/appointmentlist/appointmentlist";

import UserContext from "../../../contexts/UserContext";
import "./historypage.css";

function HistoryPage() {
    const { user } = useContext(UserContext);
    const [pastAppointments, setPastAppointments] = useState([]);

    useEffect(() => {
        const fetchPastAppointments = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/consultations/');
                const data = await response.json();

                const today = new Date();
                const filteredPastAppointments = data.filter(appointment => {
                    const appointmentDateTime = new Date(appointment.scheduled_time);
                    return appointmentDateTime < today && user.appointments.includes(appointment.id);
                });

                setPastAppointments(filteredPastAppointments);
            } catch (error) {
                console.error("Falha ao buscar as consultas passadas:", error);
            }
        };

        fetchPastAppointments();
    }, [user.appointments]); // Dependência do useEffect para reagir a mudanças nos appointments do usuário

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
