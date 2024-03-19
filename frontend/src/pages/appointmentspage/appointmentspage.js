import React from "react";
import Title from "../../components/title/title";
import CardList from "../../components/cardlist/cardlist";

import appointmentsList from "./appointments";
import "./appointmentspage.css";

function AppointmentsPage() {
    return (
        <div className="appointment-list page">
            <Title 
                head="Histórico de Consultas"
                body="Veja o histórico de todas as susas consultas marcadas" 
            />

            <CardList objects={appointmentsList} />
        </div>
    );
}

export default AppointmentsPage;
