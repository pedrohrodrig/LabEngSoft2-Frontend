import React from "react";

import TextInput from "../../textInput/textInput";

function EditEvolutionList({ evolution }) {
  return (
    <div>
      {evolution.map((obj) => {
        while (obj != null) {
          return (
            <div>
              <h2 className="subtitle">Evolução {obj.date}</h2>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Peso"
                  placeholder={obj.weight}
                />
              </div>
              <div className="grid">
                <TextInput className="horizontal" title="IMC" placeholder={obj.imc} />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Frequência de Atividade"
                  placeholder={obj.activity}
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Apetite / Mastigação / Hábito Intestinal"
                  placeholder={
                    obj.appetite + " / " + obj.chewing + " / " + obj.intestine
                  }
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Qualidade do sono"
                  placeholder={obj.sleep}
                />
              </div>
              <div className="grid">
                <TextInput
                  className="horizontal"
                  title="Comentários"
                  placeholder={obj.comments}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default EditEvolutionList;
