import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import UserContext from "../../../contexts/UserContext";
import Title from "../../../components/title/title";
import AppointmentsList from "../../../components/lists/appointmentlist/appointmentlist";
import "./historypage.css";

function HistoryPage() {
    const { user } = useContext(UserContext);
    const [path, setPath] = useState("http://127.0.0.1:8000");
    const [consultations, setConsultations] = useState([]);
    const [pastConsultations, setPastConsultations] = useState([]);

    // Fetch consultations
    useEffect(() => {
        axios.get(`${path}/consultation/list/${user.id}/`)
            .then(response => {
                setConsultations(response.data);
            })
            .catch(error => {
                console.error("Error fetching consultations:", error);
            });
    }, [user.id, path]);

    // Filter past consultations after consultations are updated
    useEffect(() => {
        const today = new Date();
        const filteredPastConsultations = consultations.filter(consultation => {
            const consultationDateTime = new Date(consultation.scheduled_time);
            return consultationDateTime < today;
        });

        setPastConsultations(filteredPastConsultations);
    }, [consultations]);

    return (
        <div className="history page">
            <Title
                head="Histórico de Consultas"
                body="Veja a lista de todas as suas consultas passadas."
            />

            <AppointmentsList appointments={pastConsultations} />
        </div>
    );
}

export default HistoryPage;
