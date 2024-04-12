import React, { useContext } from "react";
import Title from "../../../components/title/title";
import PatientList from "../../../components/lists/patientlist/patientlist";

import UserContext from "../../../contexts/UserContext";
import patientList from "../../../objects/patients";
import "./nutripatientspage.css";

function NutriPatientsPage() {
  const { user } = useContext(UserContext);
  const patients = patientList.filter((patient) => {
    return user.patients.includes(patient.id);
  });

  return (
    <div className="patients page">
      <Title
        head="Pacientes"
        body="Confira os pacientes que se consultam com você"
      />

      <PatientList patients={patients} to={"/nutritionist/patient/profile"} />
    </div>
  );
}

export default NutriPatientsPage;
