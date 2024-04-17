import React from "react";
import GeneralInfo from "../../../components/generalinfo/generalinfo";

import "./patientHomePage.css"
import Button from "../../../components/button/button";

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
                <Button className='grad medium' to={"/patient-diet"} text={'Dietas'}/>
                <Button className='grad medium' to={"/patient-training"} text={'Treinamentos'}/>
                <Button className='grad medium' to={"/patient-medical-registers"} text={'Registros médicos'}/>
            </div>

        </div>
    );
}

export default PatientHomePage;