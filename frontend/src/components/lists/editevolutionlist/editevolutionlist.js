import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../textInput/textInput";
import Button from "../../button/button";

import "./editevolutionlist.css";

function EditEvolutionList({ evolutionList }) {

  const [evolution, setEvolution] = useState(evolutionList);
  const [editedEvolution, setEditedEvolution] = useState(evolutionList);
  const navigate = useNavigate();

  useEffect(() => {}, [editedEvolution, evolution]);

  const newEvolution = {
    patientid: evolution[0].patientid,
    date: "-",
    weight: "-",
    imc: "-",
    activity: "-",
    appetite: "-",
    chewing: "-",
    intestine: "-",
    sleep: "-",
    comments: "-",
  };

  const addNewEvolution = () => {
    setEditedEvolution([
      ...editedEvolution,
      { ...newEvolution, id: editedEvolution.length + 1 },
    ]);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;

    const updatedEvolution = editedEvolution.map((evolution) => {
      if (evolution.id === id) {
        return {
          ...evolution,
          [name]: value,
        };
      }
      return evolution;
    });

    setEditedEvolution(updatedEvolution);
  };

  const handleSubmit = () => {
    setEvolution(editedEvolution);
    navigate("/nutritionist/evolution");
  };

  return (
    <form onSubmit={handleSubmit}>
      {editedEvolution.map((obj) => {
        while (obj != null) {
          return (
            <div>
              <h2 className="subtitle">Evolução {obj.date}</h2>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Data"
                  placeholder={obj.date}
                  handleTextInput={(e) => handleChange(e, obj.id)}
                  name="date"
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Peso"
                  placeholder={obj.weight}
                  handleTextInput={(e) => handleChange(e, obj.id)}
                  name="weight"
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="IMC"
                  placeholder={obj.imc}
                  handleTextInput={(e) => handleChange(e, obj.id)}
                  name="imc"
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Frequência de Atividade"
                  placeholder={obj.activity}
                  handleTextInput={(e) => handleChange(e, obj.id)}
                  name="activity"
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Apetite"
                  placeholder={obj.appetite}
                  handleTextInput={(e) => handleChange(e, obj.id)}
                  name="appetite"
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Mastigação"
                  placeholder={obj.chewing}
                  handleTextInput={(e) => handleChange(e, obj.id)}
                  name="chewing"
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Hábito Intestinal"
                  placeholder={obj.intestine}
                  handleTextInput={(e) => handleChange(e, obj.id)}
                  name="intestine"
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Qualidade do sono"
                  placeholder={obj.sleep}
                  handleTextInput={(e) => handleChange(e, obj.id)}
                  name="sleep"
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Comentários"
                  placeholder={obj.comments}
                  handleTextInput={(e) => handleChange(e, obj.id)}
                  name="comments"
                />
              </div>
            </div>
          );
        }
      })}
      <div className="evolution-buttons">
        <Button
          className="grad small"
          text="Adicionar"
          onClick={addNewEvolution}
        />
        <button
          className="evolution-button"
          type="submit"
          onClick={handleSubmit}
        >
          Salvar
        </button>
      </div>
    </form>
  );
}

export default EditEvolutionList;
