import React, { useContext, useEffect, useState } from "react";

import "./doctoroverviewpage.css";
import BigNumber from "../../components/bignumber/bignumber";
import appointmentList from "../../objects/appointments";
import AppointmentList from "../../components/lists/appointmentlist/appointmentlist";
import UserContext from "../../contexts/UserContext";
import patientList from "../../objects/patients";
import paymentsList from "../../objects/payments";
import axios from "axios";
import { format, parseISO } from 'date-fns';

function DoctorOverviewPage() {
  const { user } = useContext(UserContext);
  let amount = 0
  paymentsList.forEach((element) => element.status === "Pago" ? amount += element.value : amount += 0);
  const [appointments, setAppointments] = useState([])

    const formatDate = (date) => {
        return format(parseISO(date), "dd MMM yyyy ' - ' HH:mm");
    }

    const appointmentStatus = (status) => {
        if (status === 1) return "Confirmada";
        else if (status === 2) return "Finalizada";
        else return "Cancelada"
    }

    const verifyToday = (date) => {
      const today = new Date();
      const dateToVerify = new Date(date);
      return today.getFullYear() === dateToVerify.getFullYear() &&
             today.getMonth() === dateToVerify.getMonth() &&
             today.getDate() === dateToVerify.getDate();
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
        axios.get(`http://localhost:8000/appointment_from_professional_id/${user.id}`)
            .then(response => {
              for (const element of response.data) {
                  const newAppointment = createAppointment(element);
                  if (verifyToday(element.datetime) && newAppointment.status === "Confirmada") {
                    if (appointments.length === 0) setAppointments([newAppointment])
                    if (verifyAppointment(newAppointment)) {
                        setAppointments(prev => [...prev, newAppointment]);
                    }
                }
              }
            })
            .catch(error => {
                console.log(error)
            });
    }, []);


  return (
    <div className="overview page">
      <div className="bignumbers">
        <BigNumber number={appointmentList.length} text="Consultas" iconType="activity" to="/doctor-appointments" />
        <BigNumber
          number={patientList.length}
          text="Pacientes"
          iconType="user"
          to="/doctor-patients"
        />
        <BigNumber
          number={`R$ ${amount}`}
          text="Renda Mensal"
          iconType="dollar"
          to="/doctor-payments"
        />
      </div>

      <div className="appoint">
        <h1 className="appoint-title">Consultas Hoje</h1>
        <AppointmentList appointments={appointments} to={"/doctor-appointments-detail?"} />
      </div>
    </div>
  );
}

export default DoctorOverviewPage;