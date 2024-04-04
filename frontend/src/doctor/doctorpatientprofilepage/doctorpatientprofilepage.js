import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./doctorpatientprofilepage.css";
import UserContext from "../../contexts/UserContext";
import Profile from "../../components/profile/profile";
import Textbox from "../../components/textbox/textbox";
import DocumentList from "../../components/lists/documentlist/documentlist";
import documentList from "../../objects/documents";
import axios from "axios";

import { useLocation } from 'react-router-dom';
import Title from "../../components/title/title";


function DoctorPatientProfilePage() {
  const { user } = useContext(UserContext);
  const [patient, setPatient] = useState([]);
  const location = useLocation();
  const number = location.search.split('?')[1];

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
        phone: newData.patient.phone_number,
        age: 22,
        height: 170,
        weight: 65,
        email: newData.patient.email
    }
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/appointment_from_professional_id/${user.id}`)
        .then(response => {
          const newPatient = filterPatient(response.data.map(element => createPatient(element))).filter(element => number == element.id);
          console.log(newPatient);
          setPatient(newPatient);
        })
        .catch(error => {
            console.log(error)
        });
    }, []);


  return (
    <div className="patient-profile page">
      {
        patient.length > 0 ? (
          <div>
            <div className="header">
              <Profile name={patient[0].name} info={false} to="/doctor-patients" photo={patient[0].photo}/>
            </div>

            <div className="content">
              <div className="profile-text">
                <div className="grid">
                  <div className="col">
                    <Textbox
                      className="horizontal"
                      title="Idade"
                      body={patient[0].age}
                    />
                    <Textbox
                      className="horizontal"
                      title="Altura"
                      body={`${patient[0].height}cm`}
                    />
                  </div>
                  <div className="col">
                    <Textbox
                      className="horizontal"
                      title="BMI"
                      body={`${(patient[0].weight / (patient[0].height * patient[0].height / 10000)).toFixed(2)}%`}
                    />
                    <Textbox
                      className="horizontal"
                      title="Peso"
                      body={`${patient[0].weight}Kg`}
                    />
                  </div>
                </div>
                <Textbox
                  className="horizontal"
                  title="Telefone"
                  body={patient[0].phone}
                />
                <Textbox className="horizontal" title="Email" body={patient[0].email} />
                <Textbox title="Histórico Médico" body={patient[0].history} />
              </div>

              <div className="extra">
                <div className="doc-header">
                  <h1>Documentos</h1>
                  <Link to="/documents">Ver Todos</Link>
                </div>
                <DocumentList
                  className="patient-docs"
                  small={true}
                  documents={documentList}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Title head={'Ops'} body={'Não foi possível encontrar a consulta desejada'}/>
          </div>
        )
      }
    </div>
  );
}

export default DoctorPatientProfilePage;