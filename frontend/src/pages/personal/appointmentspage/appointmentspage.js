import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import UserContext from "../../../contexts/UserContext";
import Title from "../../../components/title/title";
import AppointmentsList from "../../../components/lists/appointmentlist/appointmentlist";
import "./appointmentspage.css";

function AppointmentsPage() {
    const { user } = useContext(UserContext);
    const [path, setPath] = useState("http://127.0.0.1:8000");
    const [consultations, setConsultations] = useState([]);
    const [futureConsultations, setFutureConsultations] = useState([]);

    useEffect(() => {
        axios.get(`${path}/consultation/list/${user.id}/`)
            .then(response => {
                setConsultations(response.data);
            })
            .catch(error => {
                console.error("Error fetching consultations:", error);
            });
    }, [user.id, path]);

    useEffect(() => {
        const today = new Date();
        const filteredFutureConsultations = consultations.filter(consultation => {
            const consultationDateTime = new Date(consultation.scheduled_time);
            return consultationDateTime > today;
        });

        setFutureConsultations(filteredFutureConsultations);
    }, [consultations]);

    return (
        <div className="appointments page">
            <Title
                head="Consultas Futuras"
                body="Veja a lista de todas as suas consultas agendadas para o futuro."
            />

            <AppointmentsList appointments={futureConsultations} />
        </div>
    );
}

export default AppointmentsPage;
