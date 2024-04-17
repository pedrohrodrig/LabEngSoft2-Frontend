import React from "react";
import Title from "../../../components/title/title";
import PatientHistoryList from "../../../components/lists/patientHistoryList/patientHistoryList";

import appointmentsList from "./appointments";

import "./patientHistoryPage.css";

function PatientHistoryPage() {
  return (
    <div className="patient-history page">
      <Title
        head="Histórico de Consultas"
        body="Confira seus agendamentos passados"
      />

      <PatientHistoryList appointments={appointmentsList} />
    </div>
  );
}

export default PatientHistoryPage;
