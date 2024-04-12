import { React, useState } from "react";

import TextInput from "../../../components/textInput/textInput";
import Title from "../../../components/title/title";

import './nutriloginpage.css'

function NutriLoginPage() {
    return (
      <div className="login page">
        <Title head="Login" />
        <TextInput
          className="horizontal"
          title="Nome"
          placeholder="Insira seu nome"
          //   name="desc"
          //   handleTextInput={handleChange}
        />
        <TextInput
          className="horizontal"
          title="Senha"
          placeholder="Insira sua senha"
          //   name="desc"
          //   handleTextInput={handleChange}
        />
        <button className="login-button" type="submit">
          Entrar
        </button>
      </div>
    );
}

export default NutriLoginPage;
