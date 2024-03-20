import React, { useContext } from "react";
import Title from "../../../components/title/title";
import AppointmentsList from "../../../components/lists/appointmentlist/appointmentlist";

import UserContext from "../../../contexts/UserContext";
import appointmentList from "../../../objects/appointments";
import "./appointmentspage.css";

function AppointmentsPage() {
    const { user } = useContext(UserContext);
    const appointments = appointmentList.filter((appoint) => {
        return user.appointments.includes(appoint.id)
    });

    return (
        <div className="appointments page">
            <Title
                head="Histórico de Consultas"
                body="Veja o histórico de todas as susas consultas marcadas"
            />

            <AppointmentsList appointments={appointments} />
        </div>
    );
}

export default AppointmentsPage;
