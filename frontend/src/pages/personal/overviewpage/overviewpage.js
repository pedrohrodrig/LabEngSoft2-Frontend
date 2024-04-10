import React, { useEffect, useState } from "react";
import BigNumber from "../../../components/bignumber/bignumber";
import AppointmentList from "../../../components/lists/appointmentlist/appointmentlist";
import consultations from "../../../objects/consultations";
import psychologists from "../../../objects/psychologists";
import "./overviewpage.css";

function OverviewPage() {
    const [todayAppointments, setTodayAppointments] = useState([]);

    useEffect(() => {
        // Simulação da lógica para definir a contagem de consultas e pacientes, além da renda mensal
        const consultationCount = consultations.length;
        const patientIds = new Set(consultations.map(cons => cons.id_patient));
        const patientCount = patientIds.size;
        const psychologist = psychologists[0]; // Assumindo que temos apenas um psicólogo

        // Calcular a renda mensal com base no preço da consulta * número de consultas deste mês
        // Simulação simples sem considerar a data exata
        const monthlyIncome = consultationCount * psychologist.consultation_price;

        // Filtrar consultas de hoje
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const todayCons = consultations.filter(cons => cons.scheduled_time.startsWith(today));
        setTodayAppointments(todayCons);
    }, []); // Vazio para rodar apenas na montagem do componente

    return (
        <div className="overview page">
            <div className="bignumbers">
                <BigNumber number={consultations.length.toString()} text="Consultas" iconType="activity" to="" />
                <BigNumber number={new Set(consultations.map(cons => cons.id_patient)).size.toString()} text="Pacientes" iconType="user" to="/patients" />
                <BigNumber number={`R$${psychologists[0].consultation_price * consultations.length}`} text="Renda Mensal" iconType="dollar" to="/payments" />
            </div>

            <div className="appoint">
                <h1 className="appoint-title">Consultas Hoje</h1>
                <AppointmentList appointments={todayAppointments} small />
            </div>
        </div>
    );
}

export default OverviewPage;
