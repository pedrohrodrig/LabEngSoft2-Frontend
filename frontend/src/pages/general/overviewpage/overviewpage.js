import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

import BigNumber from "../../../components/bignumber/bignumber";
import AppointmentList from "../../../components/lists/appointmentlist/appointmentlist";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

import "./overviewpage.css";

function OverviewPage() {
    const { user } = useContext(UserContext);
    const { paths } = useContext(PathContext);

    const [ appointments, setAppointments ] = useState([]);
    const [ patients, setPatients ] = useState([]);
    const [ income, setIncome ] = useState(0);

    useEffect(() => {
        axios.get(`${paths.back}/appointment/list/${user.id}/`)
        .then(response => {
            setAppointments(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [user.id]);

    useEffect(() => {
        axios.get(`${paths.back}/patient/list/${user.id}/`)
        .then(response => {
            setPatients(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [user.id]);

    useEffect(() => {
        var appointDone = appointments.length;
        setIncome(appointDone * user.price);
    }, [appointments]);

    return (
        <div className="overview page">
            <div className="bignumbers">
                <BigNumber number={appointments.length} text="Consultas" iconType="activity" to={`${paths.front}/appointments`} />
                <BigNumber number={patients.length} text="Pacientes" iconType="user" to={`${paths.front}/patients`} />
                <BigNumber number={income} text="Renda Mensal" iconType="dollar" />
            </div>

            <div className="appoint">
                <h1 className="appoint-title">Próximas Consultas</h1>
                <AppointmentList appointments={appointments} />
            </div>
        </div>
    );
}

export default OverviewPage;
