import React, { useContext } from "react";

import "./doctoroverviewpage.css";
import BigNumber from "../../components/bignumber/bignumber";
import appointmentList from "../../objects/appointments";
import AppointmentList from "../../components/lists/appointmentlist/appointmentlist";
import UserContext from "../../contexts/UserContext";
import patientList from "../../objects/patients";
import paymentsList from "../../objects/payments";

function DoctorOverviewPage() {
  const { user } = useContext(UserContext);
  let amount = 0
  paymentsList.forEach((element) => element.status === "Pago" ? amount += element.value : amount += 0);
  const appointments = appointmentList.filter((appoint) => {
    return user.appointments.includes(appoint.id);
  });

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
        <AppointmentList appointments={appointments} />
      </div>
    </div>
  );
}

export default DoctorOverviewPage;