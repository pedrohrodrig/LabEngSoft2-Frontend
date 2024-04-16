import React from "react";
import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import EditEvolutionList from "../../../components/lists/editevolutionlist/editevolutionlist";

import patientList from "../../../objects/patients";
import evolutionList from "../../../objects/evolution";

import "./nutrievolutioneditpage.css";

function NutriEvolutionEditPage() {
  const patient = patientList[0];

  return (
    <div className="evolution-edit page">
      <div className="header">
        <Title head="Editar Evolução do Paciente" />
      </div>
      <div className="content">
        <div className="evolution-text">
          <h2 className="subtitle">Dados do perfil</h2>
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Nome"
                body={patient.name}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Idade"
                body={patient.age}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Altura"
                body={patient.height}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Peso"
                body={patient.weight}
              />
            </div>
          </div>
          <EditEvolutionList evolutionList={evolutionList} />
        </div>
      </div>
    </div>
  );
}

export default NutriEvolutionEditPage;
