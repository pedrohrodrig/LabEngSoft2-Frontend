import React from "react";
import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import Button from "../../../components/button/button";
import EvolutionList from "../../../components/lists/evolutionlist/evolutionlist";

import patientList from "../../../objects/patients";
import evolutionList from "../../../objects/evolution";

import "./nutrievolutionpage.css";

function NutriEvolutionPage() {
  const patient = patientList[0];

  return (
    <div className="evolution page">
      <div className="header">
        <Title head="Evolução do Paciente" />
      </div>
      <div className="button">
        <Button
          className="grad outline small"
          text="Consulta"
          to="/nutritionist/appoint"
        />
        <Button
          className="grad outline small"
          text="Avaliação"
          to="/nutritionist/evaluation"
        />
        <Button
          className="grad outline small"
          text="Dieta"
          to="/nutritionist/diet"
        />
        <Button
          className="grad small"
          text="Editar"
          to="/nutritionist/evolution/edit"
        />
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
          <EvolutionList evolution={evolutionList}/>
        </div>
      </div>
    </div>
  );
}

export default NutriEvolutionPage;
