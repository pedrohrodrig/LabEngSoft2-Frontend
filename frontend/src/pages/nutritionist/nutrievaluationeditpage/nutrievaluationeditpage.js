import React from "react";
import Title from "../../../components/title/title";
import TextInput from "../../../components/textInput/textInput";
import Button from "../../../components/button/button";

import patientList from "../../../objects/patients";

import "./nutrievaluationeditpage.css";

function NutriEvaluationEditPage() {
  const patient = patientList[0];

  return (
    <div className="evaluation page">
      <div className="header">
        <Title head="Editar Avaliação Nutricional" />
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
              placeholder={"Sim, vegetariano"}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Ingestão de bebidas alcóolicas"
              placeholder={"Socialmente"}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Fumante"
              placeholder={"Finais de semana"}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Refeições por delivery"
              placeholder={"Almoço e janta de fins de semana"}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Hábitos de compras"
              placeholder={"Feira e atacado"}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Moradia"
              placeholder={"Dois amigos da faculdade"}
            />
          </div>
          <h2 className="subtitle">Histórico de Dieta</h2>
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Estratégias realizadas"
                placeholder={"Keto diet e corte de açúcar"}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Acompanhamento profissional?"
                placeholder={"Não"}
              />
            </div>
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Como foi o processo anterior"
              placeholder={
                "Difícil pois foi uma mudança muito abrupta e não conseguiu manter a dieta, tendo muitas recaídas"
              }
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Houve perda de peso?"
              placeholder={
                "Muita perda de peso no início mas com rápido ganho de peso"
              }
            />
          </div>
          <h2 className="subtitle">Hábitos de Sono</h2>
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Qualidade do sono"
                placeholder={"Dorme mal"}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Horas de sono"
                placeholder={"5h-6h"}
              />
            </div>
            <div className="col">
              <TextInput className="horizontal" title="Dorme às" placeholder={"00h"} />
            </div>
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Observações"
              placeholder={"Tem apneia do sono mas nunca tratou"}
            />
          </div>
          <h2 className="subtitle">Atividade Física</h2>
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Faz atividade física?"
                placeholder={"Sim"}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Frequência de atividade"
                placeholder={"30 minutos por dia"}
              />
            </div>
          </div>
          <div className="grid">
            <TextInput className="horizontal" title="Observações" placeholder={"-"} />
          </div>
          <h2 className="subtitle">Avaliação Clínica</h2>
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Apetite"
                placeholder={"Aumentado"}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Mastigação"
                placeholder={"Rápida"}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Hábito intestinal"
                placeholder={"Variado"}
              />
            </div>
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Informações sobre evacuação"
              placeholder={"-"}
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Informações sobre hábito urinário"
              placeholder={"-"}
            />
          </div>
          <h2 className="subtitle">Hábitos Alimentares</h2>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Suplementos alimentares"
              placeholder={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Alergia alimentar"
              placeholder={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Intolerâncias alimentares"
              placeholder={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Aversão alimentares"
              placeholder={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <div className="grid">
            <TextInput
              className="horizontal"
              title="Observações"
              placeholder={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutriEvaluationEditPage;
