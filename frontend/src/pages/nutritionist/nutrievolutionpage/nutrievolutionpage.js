import { React, useEffect, useState } from "react";
import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import Button from "../../../components/button/button";

import NewEvolutionModal from "../../../components/newevolutionmodal/newevolutionmodal";
import EditEvolutionModal from "../../../components/editevolutionmodal/editevolutionmodal";

import patientList from "../../../objects/patients";
import evolutionList from "../../../objects/evolution";

import axios from "axios";

import "./nutrievolutionpage.css";

function NutriEvolutionPage() {
  const patient = patientList[0];

  const [addEvolution, setAddEvolution] = useState(false);
  const [editEvolution, setEditEvolution] = useState(false);
  const [editedEvolution, setEditedEvolution] = useState(null);
  const [evolutions, setEvolutions] = useState(evolutionList);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/evolution_from_patient/${1}/`)
      .then((response) => {
        setEvolutions(response.data);
      })
      .catch((err) => console.log(err));
  }, [evolutions]);

  const handleAddClick = () => {
    setAddEvolution(true);
  };

  const handleAddEvolutionClose = () => {
    setAddEvolution(false);
  };

  const handleEditClick = (obj) => {
    setEditedEvolution(obj);
    console.log(editedEvolution);
    setEditEvolution(true);
  };

  const handleEditEvolutionClose = () => {
    setEditEvolution(false);
  };

  const handleAddEvolution = (newEvent) => {
    axios
      .post(`http://127.0.0.1:8000/evolution/create/`, newEvent)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/evolution/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleEditEvolution = (editedEvent) => {
    axios
      .put(`http://127.0.0.1:8000/evolution/${editedEvent.id}/`, editedEvent)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    handleEditEvolutionClose();
  }

  return (
    <div className="evolution page">
      <div className="header">
        <Title head="Evolução do Paciente" />
      </div>
      <div className="button">
        <Button
          className="grad outline small"
          text="Consulta"
          to="/nutritionist/appointment"
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
          text="Adicionar"
          onClick={handleAddClick}
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
          {evolutions.map((obj) => {
            while (obj != null) {
              return (
                <div>
                  <div className="evolution-header">
                    <h2 className="subtitle">Evolução {obj.date}</h2>
                    <Button
                      className="grad outline very-small"
                      text="Editar"
                      onClick={() => handleEditClick(obj)}
                    />
                    <Button
                      className="black outline very-small"
                      text="Excluir"
                      onClick={() => handleDeleteClick(obj.id)}
                    />
                  </div>
                  <div className="grid">
                    <Textbox
                      className="horizontal"
                      title="Peso"
                      body={obj.weight}
                    />
                  </div>
                  <div className="grid">
                    <Textbox
                      className="horizontal"
                      title="IMC"
                      body={obj.imc}
                    />
                  </div>
                  <div className="grid">
                    <Textbox
                      className="horizontal"
                      title="Frequência de Atividade"
                      body={obj.activity}
                    />
                  </div>
                  <div className="grid">
                    <Textbox
                      className="horizontal"
                      title="Apetite"
                      body={obj.appetite}
                    />
                  </div>
                  <div className="grid">
                    <Textbox
                      className="horizontal"
                      title="Mastigação"
                      body={obj.chewing}
                    />
                  </div>
                  <div className="grid">
                    <Textbox
                      className="horizontal"
                      title="Hábito Intestinal"
                      body={obj.intestine}
                    />
                  </div>
                  <div className="grid">
                    <Textbox
                      className="horizontal"
                      title="Qualidade do sono"
                      body={obj.sleep}
                    />
                  </div>
                  <div className="grid">
                    <Textbox
                      className="horizontal"
                      title="Comentários"
                      body={obj.comments}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      {editEvolution && (
        <EditEvolutionModal
          evolution={editedEvolution}
          onUpdate={handleEditEvolution}
          onClose={handleEditEvolutionClose}
        />
      )}
      {addEvolution && (
        <NewEvolutionModal
          onAdd={handleAddEvolution}
          onClose={handleAddEvolutionClose}
        />
      )}
    </div>
  );
}

export default NutriEvolutionPage;
