import React, { useContext } from "react";

import "./doctorappointmentspage.css";
import UserContext from "../../contexts/UserContext";
import appointmentList from "../../objects/appointments";
import Title from "../../components/title/title";
import AppointmentList from "../../components/lists/appointmentlist/appointmentlist";

function DoctorAppointmentsPage() {
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

            <AppointmentList appointments={appointments} />
        </div>
    );
}

export default DoctorAppointmentsPage;
