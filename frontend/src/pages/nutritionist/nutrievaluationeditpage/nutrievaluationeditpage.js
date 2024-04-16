import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/title/title";
import TextInput from "../../../components/textInput/textInput";
import Textbox from "../../../components/textbox/textbox";
import Dropdown from "../../../components/dropdown/dropdown";

import patientList from "../../../objects/patients";
import evaluationList from "../../../objects/evaluation";

import "./nutrievaluationeditpage.css";

function NutriEvaluationEditPage() {
  const [evaluation, setEvaluation] = useState(evaluationList[0]);
  const [editedEvaluation, setEditedEvaluation] = useState(evaluationList[0]);

  const navigate = useNavigate();

  const patient = patientList[0];

  // const restrictions = [
  //   { value: "N", label: "Não" },
  //   { value: "VA", label: "Vegetariano(a)" },
  //   { value: "VE", label: "Vegano(a)" },
  // ];

  // const alcohol = [
  //   { value: "N", label: "Não" },
  //   { value: "E", label: "Todos os dia" },
  //   { value: "S", label: "Socialmente" },
  // ];

  // const smoker = [
  //   { value: "N", label: "Não" },
  //   { value: "E", label: "Todos os dias" },
  //   { value: "W", label: "Fins de semana" },
  //   { value: "S", label: "Socialmente" },
  // ];

  // const appetite = [
  //   { value: "N", label: "Normal" },
  //   { value: "I", label: "Aumentado" },
  //   { value: "D", label: "Diminuido" },
  // ];

  // const chewing = [
  //   { value: "N", label: "Normal" },
  //   { value: "R", label: "Rápida" },
  //   { value: "S", label: "Lenta" },
  // ];

  // const intestine = [
  //   { value: "N", label: "Normal" },
  //   { value: "C", label: "Constipado" },
  //   { value: "D", label: "Diarréico" },
  //   { value: "V", label: "Variado" },
  // ];

  const handeInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvaluation({ ...editedEvaluation, [name]: value });
  };

  const handleSubmit = () => {
    setEvaluation(editedEvaluation);
    navigate("/nutritionist/evaluation");
  };

  return (
    <div className="evaluation-edit page">
      <div className="header">
        <Title head=" Editar Avaliação Nutricional" />
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
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
                <TextInput
                  className="horizontal"
                  title="Altura"
                  placeholder={evaluation.height}
                  handleTextInput={handeInputChange}
                  name="height"
                />
              </div>
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Peso"
                  placeholder={evaluation.weight}
                  handleTextInput={handeInputChange}
                  name="weight"
                />
              </div>
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Data da avaliação"
                  placeholder={evaluation.date}
                  handleTextInput={handeInputChange}
                  name="date"
                />
              </div>
            </div>
            <h2 className="subtitle">Hábitos de vida</h2>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Restrição alimentar"
                placeholder={evaluation.restrictions}
                handleTextInput={handeInputChange}
                name="restrictions"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Ingestão de bebidas alcóolicas"
                placeholder={evaluation.alcohol}
                handleTextInput={handeInputChange}
                name="alcohol"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Fumante"
                placeholder={evaluation.smoker}
                handleTextInput={handeInputChange}
                name="smoker"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Refeições por delivery"
                placeholder={evaluation.delivery}
                handleTextInput={handeInputChange}
                name="delivery"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Hábitos de compras"
                placeholder={evaluation.shopping}
                handleTextInput={handeInputChange}
                name="shopping"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Moradia"
                placeholder={evaluation.living}
                handleTextInput={handeInputChange}
                name="living"
              />
            </div>
            <h2 className="subtitle">Histórico de Dieta</h2>
            <div className="grid">
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Estratégias realizadas"
                  placeholder={evaluation.diets}
                  handleTextInput={handeInputChange}
                  name="diets"
                />
              </div>
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Acompanhamento profissional?"
                  placeholder={evaluation.previousprofessional}
                  handleTextInput={handeInputChange}
                  name="previousprofessional"
                />
              </div>
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Como foi o processo anterior"
                placeholder={evaluation.previousprocess}
                handleTextInput={handeInputChange}
                name="previousprocess"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Houve perda de peso?"
                placeholder={evaluation.previousweightloss}
                handleTextInput={handeInputChange}
                name="previousweightloss"
              />
            </div>
            <h2 className="subtitle">Hábitos de Sono</h2>
            <div className="grid">
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Qualidade do sono"
                  placeholder={evaluation.sleepquality}
                  handleTextInput={handeInputChange}
                  name="sleepquality"
                />
              </div>
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Horas de sono"
                  placeholder={evaluation.sleephours}
                  handleTextInput={handeInputChange}
                  name="sleephours"
                />
              </div>
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Dorme às"
                  placeholder={evaluation.sleeptime}
                  handleTextInput={handeInputChange}
                  name="sleeptime"
                />
              </div>
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Observações"
                placeholder={evaluation.sleepcomments}
                handleTextInput={handeInputChange}
                name="sleepcomments"
              />
            </div>
            <h2 className="subtitle">Atividade Física</h2>
            <div className="grid">
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Faz atividade física?"
                  placeholder={evaluation.activity}
                  handleTextInput={handeInputChange}
                  name="activity"
                />
              </div>
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Frequência de atividade"
                  placeholder={evaluation.activityfrequency}
                  handleTextInput={handeInputChange}
                  name="activityfrequency"
                />
              </div>
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Observações"
                placeholder={evaluation.activitycomment}
                handleTextInput={handeInputChange}
                name="activitycomment"
              />
            </div>
            <h2 className="subtitle">Avaliação Clínica</h2>
            <div className="grid">
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Apetite"
                  placeholder={evaluation.appetite}
                  handleTextInput={handeInputChange}
                  name="appetite"
                />
              </div>
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Mastigação"
                  placeholder={evaluation.chewing}
                  handleTextInput={handeInputChange}
                  name="chewing"
                />
              </div>
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Hábito intestinal"
                  placeholder={evaluation.intestine}
                  handleTextInput={handeInputChange}
                  name="intestine"
                />
              </div>
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Informações sobre evacuação"
                placeholder={evaluation.evacuation}
                handleTextInput={handeInputChange}
                name="evacuation"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Informações sobre hábito urinário"
                placeholder={evaluation.urination}
                handleTextInput={handeInputChange}
                name="urination"
              />
            </div>
            <h2 className="subtitle">Hábitos Alimentares</h2>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Suplementos alimentares"
                placeholder={evaluation.supplements}
                handleTextInput={handeInputChange}
                name="supplements"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Alergia alimentar"
                placeholder={evaluation.allergies}
                handleTextInput={handeInputChange}
                name="allergies"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Intolerâncias alimentares"
                placeholder={evaluation.intolerance}
                handleTextInput={handeInputChange}
                name="intolerance"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Aversão alimentares"
                placeholder={evaluation.aversions}
                handleTextInput={handeInputChange}
                name="aversions"
              />
            </div>
            <div className="grid">
              <TextInput
                className="horizontal"
                title="Observações"
                placeholder={evaluation.comments}
                handleTextInput={handeInputChange}
                name="comments"
              />
            </div>
            <div className="button">
              <button
                className="evaluation-button"
                text="Salvar"
                type="submit"
                onClick={handleSubmit}
              >
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NutriEvaluationEditPage;
