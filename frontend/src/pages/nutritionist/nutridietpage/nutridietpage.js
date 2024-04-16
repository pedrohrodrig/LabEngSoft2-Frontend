import { React, useState } from "react";
import Title from "../../../components/title/title";
import Button from "../../../components/button/button";
import TextInput from "../../../components/textInput/textInput";
import FileInput from "../../../components/fileinput/fileinput";

import "./nutridietpage.css";

function NutriDietPage() {
  return (
    <div className="diet page">
      <div className="header">
        <Title head="Plano Alimentar" />
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
          text="Evolução"
          to="/nutritionist/evolution"
        />
      </div>
      <div className="separation">
        <div className="diet-content">
          <form>
            <div className="grid">
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Nome"
                  placeholder="Nome Arquivo"
                  name="name"
                />
                <FileInput
                  title="Arquivo"
                  placeholder="Escolher Arquivo"
                  name="file"
                />
              </div>

              <button className="diet-button">Upload</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NutriDietPage;
