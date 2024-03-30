import React from "react";
import Title from "../../../components/title/title";
import professionals from "./professionals";

import { useLocation } from "react-router-dom";
import ProfessionalList from "../../../components/lists/professionallist/professionallist";


function ProfessionalListPage() {
    const { state } = useLocation();

    return (
        <div className="professional-list page">
            <Title
                head={state.title}
                body={"Encontre e contrate profissionais na sua área"}
            />
            <ProfessionalList professionals={professionals} />

        </div>
    );
}

export default ProfessionalListPage;
