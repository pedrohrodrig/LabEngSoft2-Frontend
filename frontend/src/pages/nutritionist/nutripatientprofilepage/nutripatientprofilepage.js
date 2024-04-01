import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../../components/profile/profile";
import Textbox from "../../../components/textbox/textbox";
import DocumentList from "../../../components/lists/documentlist/documentlist";

import documentList from "../../../objects/documents";
import patientList from "../../../objects/patients";
import "./nutripatientprofilepage.css";

function NutriPatientProfilePage() {
  const patient = patientList[0];

  return (
    <div className="patient-profile page">
      <div className="header">
        <Profile name={patient.name} info={false} to="/patients" />
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
  );
}

export default NutriPatientProfilePage;
