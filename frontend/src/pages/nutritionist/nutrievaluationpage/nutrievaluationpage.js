import React from "react";
import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import Button from "../../../components/button/button";

import patientList from "../../../objects/patients";
import evaluationList from "../../../objects/evaluation";

import "./nutrievaluationpage.css";

function NutriEvaluationPage() {

  const patient = patientList[0];
  const evaluation = evaluationList[0];

  return (
    <div className="evaluation page">
      <div className="header">
        <Title head="Avaliação Nutricional" />
      </div>
      <div className="button">
        <Button
          className="grad outline small"
          text="Consulta"
          to="/nutritionist/appoint"
        />
        <Button
          className="grad outline small"
          text="Evolução"
          to="/nutritionist/evolution"
        />
        <Button
          className="grad outline small"
          text="Dieta"
          to="/nutritionist/diet"
        />
        <Button
          className="grad small"
          text="Editar"
          to="/nutritionist/evaluation/edit"
        />
      </div>
      <div className="content">
        <div className="evaluation-text">
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
          </div>
          <div className="grid">
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
            <div className="col">
              <Textbox
                className="horizontal"
                title="Data da avaliação"
                body={"27/03"}
              />
            </div>
          </div>
          <h2 className="subtitle">Hábitos de vida</h2>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Restrição alimentar"
              body={evaluation.restrictions}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Ingestão de bebidas alcóolicas"
              body={evaluation.alcohol}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Fumante"
              body={evaluation.smoker}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Refeições por delivery"
              body={evaluation.delivery}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Hábitos de compras"
              body={evaluation.shopping}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Moradia"
              body={evaluation.living}
            />
          </div>
          <h2 className="subtitle">Histórico de Dieta</h2>
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Estratégias realizadas"
                body={evaluation.diets}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Acompanhamento profissional?"
                body={evaluation.previousprofessional}
              />
            </div>
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Como foi o processo anterior"
              body={evaluation.previousprocess}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Houve perda de peso?"
              body={evaluation.previousweightloss}
            />
          </div>
          <h2 className="subtitle">Hábitos de Sono</h2>
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Qualidade do sono"
                body={evaluation.sleepquality}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Horas de sono"
                body={evaluation.sleephours}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Dorme às"
                body={evaluation.sleeptime}
              />
            </div>
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Observações"
              body={evaluation.sleepcomments}
            />
          </div>
          <h2 className="subtitle">Atividade Física</h2>
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Faz atividade física?"
                body={evaluation.activity}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Frequência de atividade"
                body={evaluation.activityfrequency}
              />
            </div>
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Observações"
              body={evaluation.activitycomment}
            />
          </div>
          <h2 className="subtitle">Avaliação Clínica</h2>
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Apetite"
                body={evaluation.appetite}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Mastigação"
                body={evaluation.chewing}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Hábito intestinal"
                body={evaluation.intestine}
              />
            </div>
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Informações sobre evacuação"
              body={evaluation.evacuation}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Informações sobre hábito urinário"
              body={evaluation.urination}
            />
          </div>
          <h2 className="subtitle">Hábitos Alimentares</h2>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Suplementos alimentares"
              body={evaluation.supplements}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Alergia alimentar"
              body={evaluation.allergies}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Intolerâncias alimentares"
              body={evaluation.intolerance}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Aversão alimentares"
              body={evaluation.aversions}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Observações"
              body={evaluation.comments}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutriEvaluationPage;
