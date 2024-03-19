import React from "react";
import BigNumber from "../../../components/bignumber/bignumber";
import AppointmentList from "../../../components/appointmentlist/appointmentlist";

import patientList from "../../../objects/patients";
import "./overviewpage.css";

function OverviewPage() {
    return (
        <div className="overview page">
            <div className="bignumbers">
                <BigNumber number="1k" text="Consultas" />
                <BigNumber number="40" text="Pacientes" />
                <BigNumber number="R$200" text="Renda Mensal" />
            </div>

            <div className="appointments">
                <h1>Consultas Hoje</h1>
                <AppointmentList patients={patientList} />
            </div>
        </div>
    );
}

export default OverviewPage;
