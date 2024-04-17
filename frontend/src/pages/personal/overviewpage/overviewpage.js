import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import BigNumber from "../../../components/bignumber/bignumber";
import AppointmentList from "../../../components/lists/appointmentlist/appointmentlist";
//import consultations from "../../../objects/consultations";
import psychologists from "../../../objects/psychologists";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";
import "./overviewpage.css";
import { professional } from "../../../objects/profile";

function OverviewPage() {
    const { user } = useContext(UserContext); //professional;
    //const { path } = useContext(PathContext);
    const [path, setPath] = useState({
        front: "/personal",
        back: "http://127.0.0.1:8000"
    });
    const [consultations, setConsultations] = useState([]);
    const [todayConsultations, setTodayConsultations] = useState([]);
    //const [todayAppointments, setTodayAppointments] = useState([]);

    useEffect(() => {
        const apiUrl = `${path.back}/consultation/list/${user.id}/`;
        console.log("Making API call to:", apiUrl);
        axios.get(apiUrl)
            .then(response => {
                console.log("Data received:", response.data);
                setConsultations(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [user.id, path.back]);


    // Calculate statistics after consultations are updated
    useEffect(() => {
        if (consultations.length > 0) {
            const consultationCount = consultations.length;
            const patientIds = new Set(consultations.map(cons => cons.id_patient));
            const patientCount = patientIds.size;
            const psychologist = psychologists[0];
            const monthlyIncome = consultationCount * psychologist.consultation_price;

            const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
            const todayCons = consultations.filter(cons => cons.scheduled_time.startsWith(today));
            setTodayConsultations(todayCons);

            console.log(`Renda mensal calculada: R$${monthlyIncome}`);
        }
    }, [consultations]);

    return (
        <div className="overview page">
            <div className="bignumbers">
                <BigNumber number={consultations.length.toString()} text="Consultas" iconType="activity" to="" />
                <BigNumber number={new Set(consultations.map(cons => cons.id_patient)).size.toString()} text="Pacientes" iconType="user" to="/patients" />
                <BigNumber number={`R$${psychologists[0].consultation_price * consultations.length}`} text="Renda Mensal" iconType="dollar" to="/payments" />
            </div>

            <div className="appoint">
                <h1 className="appoint-title">Consultas Hoje</h1>
                <AppointmentList appointments={todayConsultations} />
            </div>
        </div>
    );
}

export default OverviewPage;
