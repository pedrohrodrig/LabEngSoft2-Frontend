import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

import Title from "../../../components/title/title";
import AppointmentsList from "../../../components/lists/appointmentlist/appointmentlist";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

import "./appointmentspage.css";

function AppointmentsPage() {
    const { user } = useContext(UserContext);
    const { paths } = useContext(PathContext);
    const [ appointments, setAppointments ] = useState([]);

    useEffect(() => {
        axios
          .get(`http://18.230.206.131/appointment/list/${user.id}/`)
          .then((response) => {
            setAppointments(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, [user.id]);

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
