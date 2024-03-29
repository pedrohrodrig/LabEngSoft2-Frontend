import React from "react";
import GeneralInfo from "../../../components/generalinfo/generalinfo";
import Card from "../../../components/card/card";
import Dieta from "../../../assets/dieta.png"
import Workout from "../../../assets/workout.png"
import Document from "../../../assets/document.png"

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
                    title={'Dietas'}
                />
                <Card
                    title={'Treinamentos'}
                />
                <Card
                    title={'Registros médicos'}
                />
            </div>

        </div>
    );
}

export default PatientHomePage;