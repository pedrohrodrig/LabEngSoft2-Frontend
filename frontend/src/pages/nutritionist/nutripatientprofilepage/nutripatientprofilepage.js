import {React, useState, useEffect}from "react";
import { Link } from "react-router-dom";
import Profile from "../../../components/profile/profile";
import Textbox from "../../../components/textbox/textbox";
import DocumentList from "../../../components/lists/documentlist/documentlist";

import documentList from "../../../objects/documents";
import patientList from "../../../objects/patients";

import axios from "axios";

import "./nutripatientprofilepage.css";

function NutriPatientProfilePage() {
  const patient = patientList[0];

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedEvaluations, setUploadedEvaluations] = useState([]);
  const [uploadedDiets, setUploadedDiets] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/evaluation/list/`)
      .then((response) => {
        setUploadedEvaluations(response.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://127.0.0.1:8000/diet/list/`)
      .then((response) => {
        setUploadedDiets(response.data);
      })
      .catch((err) => console.log(err));
    setUploadedFiles([...uploadedEvaluations, ...uploadedDiets]);
  }, [uploadedEvaluations, uploadedDiets]);

  return (
    <div className="patient-profile page">
      <div className="header">
        <Profile name={patient.name} info={false} to="/nutritionist/patients" />
      </div>

      <div className="content">
        <div className="profile-text">
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Idade"
                body={patient.age}
              />
              <Textbox
                className="horizontal"
                title="Altura"
                body={`${patient.height}cm`}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="BMI"
                body={`${patient.bmi}%`}
              />
              <Textbox
                className="horizontal"
                title="Peso"
                body={`${patient.weight}Kg`}
              />
            </div>
          </div>
          <Textbox
            className="horizontal"
            title="Telefone"
            body={patient.phone}
          />
          <Textbox className="horizontal" title="Email" body={patient.email} />
          <Textbox title="Histórico Médico" body={patient.history} />
        </div>

        <div className="extra">
          <div className="doc-header">
            <h1>Últimos documentos</h1>
            <Link to="/nutritionist/documents">Ver Todos</Link>
          </div>
          <DocumentList
            className="patient-docs"
            small={true}
            documents={uploadedFiles}
          />
        </div>
      </div>
    </div>
  );
}

export default NutriPatientProfilePage;
