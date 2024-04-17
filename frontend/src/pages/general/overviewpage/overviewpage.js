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

    useEffect(() => {
        axios.get(`${paths.back}/appointment/list/${user.id}/`)
        .then(response => {
            setAppointments(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [user.id]);

    return (
        <div className="overview page">
            <div className="bignumbers">
                <BigNumber number="1k" text="Consultas" iconType="activity" to="" />
                <BigNumber number="40" text="Pacientes" iconType="user" to={`${paths.front}/patients`} />
                <BigNumber number="R$200" text="Renda Mensal" iconType="dollar" to={`${paths.front}/payments`} />
            </div>

            <div className="appoint">
                <h1 className="appoint-title">Consultas Hoje</h1>
                <AppointmentList appointments={appointments} />
            </div>
        </div>
    );
}

export default OverviewPage;
