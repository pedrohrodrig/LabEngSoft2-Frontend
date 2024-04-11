import React, { useContext, useEffect, useState } from "react";
import { format, parseISO } from 'date-fns';

import "./doctorappointmentspage.css";
import UserContext from "../../contexts/UserContext";
import Title from "../../components/title/title";
import AppointmentList from "../../components/lists/appointmentlist/appointmentlist";
import axios from "axios";


function DoctorAppointmentsPage() {
    const { user } = useContext(UserContext);
    const [appointments, setAppointments] = useState([])

    const formatDate = (date) => {
        return format(parseISO(date), "dd MMM yyyy ' - ' HH:mm");
    }

    const appointmentStatus = (status) => {
        if (status === 1) return "Confirmada";
        else if (status === 2) return "Finalizada";
        else return "Cancelada"
    }

    const verifyAppointment = (newAppointment) => {
        for (const element of appointments) {
            if (element.patientid !== newAppointment.patientid) return true
            if (element.timestamp !== newAppointment.timestamp) return true
        }
        return false;
    }

    const createAppointment = (newAppointment) => {
        return {
            id: newAppointment.id,
            patient: newAppointment.patient.first_name + " " + newAppointment.patient.last_name,
            patientid: newAppointment.patient.id_user,
            phone: newAppointment.patient.phone,
            photo: "/images/user.jpeg",
            professional: user.name,
            professionalid: newAppointment.id_user_professional,
            date: "",
            hour: "",
            timestamp: formatDate(newAppointment.datetime),
            status: appointmentStatus(newAppointment.status),
            type: "Presencial",
            address: user.address
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/appointment/`)
            .then(response => {
                for (const element of response.data) {
                    const newAppointment = createAppointment(element);
                    if (appointments.length === 0) setAppointments([newAppointment])
                    if (verifyAppointment(newAppointment)) {
                        setAppointments(prev => [...prev, newAppointment]);
                    }
                }
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    return (
        <div className="appointments page">
            <Title
                head="Histórico de Consultas"
                body="Veja o histórico de todas as suas consultas marcadas"
            />

            <AppointmentList appointments={appointments} to={"/doctor-appointments-detail?"} />
        </div>
    );
}

export default DoctorAppointmentsPage;
