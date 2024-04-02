import React from "react";
import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import Button from "../../../components/button/button";

import patientList from "../../../objects/patients";

import "./nutrievaluationpage.css";

function NutriEvaluationPage() {
  const patient = patientList[0];

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
          text="Plano"
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
              body={"Sim, vegetariano"}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Ingestão de bebidas alcóolicas"
              body={"Socialmente"}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Fumante"
              body={"Finais de semana"}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Refeições por delivery"
              body={"Almoço e janta de fins de semana"}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Hábitos de compras"
              body={"Feira e atacado"}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Moradia"
              body={"Dois amigos da faculdade"}
            />
          </div>
          <h2 className="subtitle">Histórico de Dieta</h2>
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Estratégias realizadas"
                body={"Keto diet e corte de açúcar"}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Acompanhamento profissional?"
                body={"Não"}
              />
            </div>
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Como foi o processo anterior"
              body={
                "Difícil pois foi uma mudança muito abrupta e não conseguiu manter a dieta, tendo muitas recaídas"
              }
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Houve perda de peso?"
              body={
                "Muita perda de peso no início mas com rápido ganho de peso"
              }
            />
          </div>
          <h2 className="subtitle">Hábitos de Sono</h2>
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Qualidade do sono"
                body={"Dorme mal"}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Horas de sono"
                body={"5h-6h"}
              />
            </div>
            <div className="col">
              <Textbox className="horizontal" title="Dorme às" body={"00h"} />
            </div>
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Observações"
              body={"Tem apneia do sono mas nunca tratou"}
            />
          </div>
          <h2 className="subtitle">Atividade Física</h2>
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Faz atividade física?"
                body={"Sim"}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Frequência de atividade"
                body={"30 minutos por dia"}
              />
            </div>
          </div>
          <div className="grid">
            <Textbox className="horizontal" title="Observações" body={"-"} />
          </div>
          <h2 className="subtitle">Avaliação Clínica</h2>
          <div className="grid">
            <div className="col">
              <Textbox
                className="horizontal"
                title="Apetite"
                body={"Aumentado"}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Mastigação"
                body={"Rápida"}
              />
            </div>
            <div className="col">
              <Textbox
                className="horizontal"
                title="Hábito intestinal"
                body={"Variado"}
              />
            </div>
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Informações sobre evacuação"
              body={"-"}
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Informações sobre hábito urinário"
              body={"-"}
            />
          </div>
          <h2 className="subtitle">Hábitos Alimentares</h2>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Suplementos alimentares"
              body={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Alergia alimentar"
              body={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Intolerâncias alimentares"
              body={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Aversão alimentares"
              body={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
          <div className="grid">
            <Textbox
              className="horizontal"
              title="Observações"
              body={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutriEvaluationPage;
