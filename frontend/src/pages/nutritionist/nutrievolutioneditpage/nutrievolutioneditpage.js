import React from "react";
import Title from "../../../components/title/title";
import TextInput from "../../../components/textInput/textInput";
import Button from "../../../components/button/button";
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
      <div className="button">
        <Button
          className="grad small"
          text="Adicionar"
          to="/nutritionist/evolution/edit"
        />
        <Button
          className="grad small"
          text="Salvar"
          to="/nutritionist/evolution"
        />
      </div>
      <div className="content">
        <div className="evolution-text">
          <h2 className="subtitle">Dados do perfil</h2>
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Nome"
                placeholder={patient.name}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Idade"
                placeholder={patient.age}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Altura"
                placeholder={patient.height}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Peso"
                placeholder={patient.weight}
              />
            </div>
          </div>
          <EditEvolutionList evolution={evolutionList} />
        </div>
      </div>
    </div>
  );
}

export default NutriEvolutionEditPage;
