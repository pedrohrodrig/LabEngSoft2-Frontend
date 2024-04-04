import React, { useContext, useEffect, useState } from "react";

import "./doctorpatientlistpage.css";
import UserContext from "../../contexts/UserContext";
import Title from "../../components/title/title";
import PatientList from "../../components/lists/patientlist/patientlist";
import axios from "axios";

function DoctorPatientListPage() {
  const { user } = useContext(UserContext);
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

  useEffect(() => {
    axios.get(`http://localhost:8000/appointment_from_professional_id/${user.id}`)
        .then(response => {
          const patientList = response.data.map(element => createPatient(element));
          const patientFilter = filterPatient(patientList);
          setPatients(patientFilter);
        })
        .catch(error => {
            console.log(error)
        });
    }, []);

  return (
    <div className="patients page">
      <Title
        head="Pacientes"
        body="Confira os pacientes que se consultam com você"
      />
      <PatientList patients={patients} to={"/doctor-patient-profile?"}/>
      <PatientList patients={patients} to={"/doctor-patient-profile?"}/>

    </div>
  );
}

export default DoctorPatientListPage;