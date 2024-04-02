import React, { useContext, useEffect, useState } from "react";

import "./doctoroverviewpage.css";
import BigNumber from "../../components/bignumber/bignumber";
import AppointmentList from "../../components/lists/appointmentlist/appointmentlist";
import UserContext from "../../contexts/UserContext";
import paymentsList from "../../objects/payments";
import axios from "axios";
import { format, parseISO } from 'date-fns';

function DoctorOverviewPage() {
  const { user } = useContext(UserContext);
  let amount = 0
  paymentsList.forEach((element) => element.status === "Pago" ? amount += element.value : amount += 0);
  const [appointments, setAppointments] = useState([])
  const [patients, setPatients] = useState([]);

  const filterPatient = (patients) => {
    const conjunto = new Set(patients.map(JSON.stringify));
    const vetorSemDuplicatas = Array.from(conjunto).map(JSON.parse);
    return vetorSemDuplicatas;
  }

  const createPatient = (newData) => {
    return {
      id: newData.patient.id_user,
      name: newData.patient.first_name + " " + newData.patient.last_name,
      photo: "/images/user.jpeg",
      phone: newData.patient.phone,
      age: 22,
      height: 170,
      weight: 65,
      email: newData.patient.email
    }
  }

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
              const patientList = response.data.map(element => createPatient(element));
              const patientFilter = filterPatient(patientList);
              setPatients(patientFilter);
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
        <BigNumber number={appointments.length} text="Consultas" iconType="activity" to="/doctor-appointments" />
        <BigNumber number="1k" text="Consultas" iconType="activity" to="" />
        <BigNumber
          number="40"
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