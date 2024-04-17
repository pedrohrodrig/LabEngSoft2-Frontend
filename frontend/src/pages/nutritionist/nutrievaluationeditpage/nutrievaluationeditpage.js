import React from "react";
import Title from "../../../components/title/title";
import TextInput from "../../../components/textInput/textInput";
import Button from "../../../components/button/button";

import patientList from "../../../objects/patients";
import evaluationList from "../../../objects/evaluation";

import "./nutrievaluationeditpage.css";

function NutriEvaluationEditPage() {
  const patient = patientList[0];
  const evaluation = evaluationList[0];

  return (
    <div className="evaluation-edit page">
      <div className="header">
        <Title head=" Editar Avaliação Nutricional" />
      </div>
      <div className="button">
        <Button
          className="grad small"
          text="Salvar"
          to="/nutritionist/evaluation"
        />
      </div>
      <div className="content">
        <div className="evaluation-text">
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
          </div>
          <div className="grid">
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
            <div className="col">
              <TextInput
                className="horizontal"
                title="Data da avaliação"
                placeholder={"27/03"}
              />
            </div>
          </div>
          <h2 className="subtitle">Hábitos de vida</h2>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Restrição alimentar"
              placeholder={evaluation.restrictions}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Ingestão de bebidas alcóolicas"
              placeholder={evaluation.alcohol}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Fumante"
              placeholder={evaluation.smoker}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Refeições por delivery"
              placeholder={evaluation.delivery}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Hábitos de compras"
              placeholder={evaluation.shopping}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Moradia"
              placeholder={evaluation.living}
            />
          </div>
          <h2 className="subtitle">Histórico de Dieta</h2>
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Estratégias realizadas"
                placeholder={evaluation.diets}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Acompanhamento profissional?"
                placeholder={evaluation.previousprofessional}
              />
            </div>
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Como foi o processo anterior"
              placeholder={evaluation.previousprocess}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Houve perda de peso?"
              placeholder={evaluation.previousweightloss}
            />
          </div>
          <h2 className="subtitle">Hábitos de Sono</h2>
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Qualidade do sono"
                placeholder={evaluation.sleepquality}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Horas de sono"
                placeholder={evaluation.sleephours}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Dorme às"
                placeholder={evaluation.sleeptime}
              />
            </div>
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Observações"
              placeholder={evaluation.sleepcomments}
            />
          </div>
          <h2 className="subtitle">Atividade Física</h2>
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Faz atividade física?"
                placeholder={evaluation.activity}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Frequência de atividade"
                placeholder={evaluation.activityfrequency}
              />
            </div>
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Observações"
              placeholder={evaluation.activitycomment}
            />
          </div>
          <h2 className="subtitle">Avaliação Clínica</h2>
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Apetite"
                placeholder={evaluation.appetite}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Mastigação"
                placeholder={evaluation.chewing}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Hábito intestinal"
                placeholder={evaluation.intestine}
              />
            </div>
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Informações sobre evacuação"
              placeholder={evaluation.evacuation}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Informações sobre hábito urinário"
              placeholder={evaluation.urination}
            />
          </div>
          <h2 className="subtitle">Hábitos Alimentares</h2>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Suplementos alimentares"
              placeholder={evaluation.supplements}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Alergia alimentar"
              placeholder={evaluation.allergies}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Intolerâncias alimentares"
              placeholder={evaluation.intolerance}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Aversão alimentares"
              placeholder={evaluation.aversions}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Observações"
              placeholder={evaluation.comments}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutriEvaluationEditPage;
