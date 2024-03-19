import React from "react";
import Title from "../../components/title/title";
import CardList from "../../components/cardlist/cardlist";

import patientList from "./patients";
import "./patientspage.css";

function PatientsPage() {
    return (
        <div className="patient-list page">
            <Title 
                head="Pacientes"
                body="Confira os pacientes que se consultam com você" 
            />

            <CardList objects={patientList} />
        </div>
    );
}

export default PatientsPage;
