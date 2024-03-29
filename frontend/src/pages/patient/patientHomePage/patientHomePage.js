import React from "react";
import GeneralInfo from "../../../components/generalinfo/generalinfo";
import Card from "../../../components/card/card";

import "./patientHomePage.css"

function PatientHomePage() {
    return (
        <div className="home page">
            <div className="first-row">
                <GeneralInfo
                    age={29}
                    name={'João Romaia'}
                    height={182}
                    weight={75.4}
                />
            </div>
            <div className="second-row">
                <Card
                    clickable={true}
                    title={'Dietas'}
                    to={"/patient-diet"}
                />
                <Card
                    clickable={true}
                    title={'Treinamentos'}
                    to={"/patient-training"}
                />
                <Card
                    clickable={true}
                    title={'Registros médicos'}
                    to={"/patient-medical-registers"}
                />
            </div>

        </div>
    );
}

export default PatientHomePage;