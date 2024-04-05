import React, { useContext, useEffect, useState } from "react";
import BigNumber from "../../../components/bignumber/bignumber";
import AppointmentList from "../../../components/lists/appointmentlist/appointmentlist";
import UserContext from "../../../contexts/UserContext";
import "./overviewpage.css";

function OverviewPage() {
    const { user, token } = useContext(UserContext); // Assumindo que UserContext forneça o token
    const [consultationCount, setConsultationCount] = useState(0);
    const [patientCount, setPatientCount] = useState(0);
    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [todayAppointments, setTodayAppointments] = useState([]);

    useEffect(() => {
        // Função para buscar os dados gerais do psicólogo
        const fetchData = async () => {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Incluir token de autenticação
                };

                // Buscando dados gerais do psicólogo
                const psychologistDataRes = await fetch('/api/psychologist_data/', { headers });
                const psychologistData = await psychologistDataRes.json();
                setConsultationCount(psychologistData.consultations_count);
                setPatientCount(psychologistData.patients_count);
                setMonthlyIncome(psychologistData.monthly_income);

                // Buscando consultas do dia
                const todayConsultationsRes = await fetch('/api/consultations/today/', { headers });
                const todayConsultations = await todayConsultationsRes.json();
                setTodayAppointments(todayConsultations.appointments); // Assumindo que a resposta é um objeto com uma chave 'appointments'
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        if (token) { // Certifique-se de que o token esteja disponível
            fetchData();
        }
    }, [token]); // Dependência do useEffect para re-fetch caso o token mude

    return (
        <div className="overview page">
            <div className="bignumbers">
                <BigNumber number={consultationCount.toString()} text="Consultas" iconType="activity" to="" />
                <BigNumber number={patientCount.toString()} text="Pacientes" iconType="user" to="/patients" />
                <BigNumber number={`R$${monthlyIncome}`} text="Renda Mensal" iconType="dollar" to="/payments" />
            </div>

            <div className="appoint">
                <h1 className="appoint-title">Consultas Hoje</h1>
                <AppointmentList appointments={todayAppointments} small />
            </div>
        </div>
    );
}

export default OverviewPage;
