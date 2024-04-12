import React from "react";

import Textbox from "../../textbox/textbox";

function EvolutionList({ evolution }) {
  return (
    <div>
      {evolution.map((obj) => {
        while (obj != null) {
          return (
            <div>
              <h2 className="subtitle">Evolução {obj.date}</h2>
              <div className="grid">
                <Textbox
                  className="horizontal"
                  title="Peso"
                  body={obj.weight}
                />
              </div>
              <div className="grid">
                <Textbox className="horizontal" title="IMC" body={obj.imc} />
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
                  title="Apetite / Mastigação / Hábito Intestinal"
                  body={
                    obj.appetite + " / " + obj.chewing + " / " + obj.intestine
                  }
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
  );
}

export default EvolutionList;
