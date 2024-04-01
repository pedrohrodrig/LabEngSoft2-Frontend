import React, { useContext } from "react";
import BigNumber from "../../../components/bignumber/bignumber";
import AppointmentList from "../../../components/lists/appointmentlist/appointmentlist";

import appointmentList from "../../../objects/appointments";
import UserContext from "../../../contexts/UserContext";
import "./nutrioverviewpage.css";

function NutriOverviewPage() {
  const { user } = useContext(UserContext);
  const appointments = appointmentList.filter((appoint) => {
    return user.appointments.includes(appoint.id);
  });

  return (
    <div className="overview page">
      <div className="bignumbers">
        <BigNumber number="1k" text="Consultas" iconType="activity" to="" />
        <BigNumber
          number="40"
          text="Pacientes"
          iconType="user"
          to="/patients"
        />
        <BigNumber
          number="R$200"
          text="Renda Mensal"
          iconType="dollar"
          to="/payments"
        />
      </div>

      <div className="appoint">
        <h1 className="appoint-title">Consultas Hoje</h1>
        <AppointmentList appointments={appointments} />
      </div>
    </div>
  );
}

export default NutriOverviewPage;
