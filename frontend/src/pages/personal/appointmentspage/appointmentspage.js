import React, { useContext, useEffect, useState } from "react";
import Title from "../../../components/title/title";
import AppointmentsList from "../../../components/lists/appointmentlist/appointmentlist";

import UserContext from "../../../contexts/UserContext";
import "./appointmentspage.css";

function AppointmentsPage() {
    const { user } = useContext(UserContext);
    const [futureAppointments, setFutureAppointments] = useState([]);

    useEffect(() => {
        const fetchFutureAppointments = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/consultations/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const today = new Date();
                const filteredFutureAppointments = data.filter(appointment => {
                    const appointmentDateTime = new Date(appointment.scheduled_time);
                    return appointmentDateTime > today;
                });

                setFutureAppointments(filteredFutureAppointments);
            } catch (error) {
                console.error("Falha ao buscar as consultas futuras:", error);
            }
        };

        fetchFutureAppointments();
    }, []); // O array vazio como segundo argumento significa que este efeito só roda uma vez após o primeiro render.

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
