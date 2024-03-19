import React from "react";
import BigNumber from "../../components/bignumber/bignumber";
import AppointmentList from "../../components/appointmentlist/appointmentlist";

import patientList from "../../objects/patients";
import "./testpage.css";

function TestPage() {
    return (
        <div className="test page">
            <BigNumber number="1k" text="Consultas" />
        </div>
    );
}

export default TestPage;
