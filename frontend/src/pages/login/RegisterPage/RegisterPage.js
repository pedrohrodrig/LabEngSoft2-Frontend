import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from 'react-notifications';
import DateTimePicker from "react-datetime-picker";
import axios from "axios";

import TextInput from "../../../components/textInput/textInput";
import Textbox from "../../../components/textbox/textbox";
import Title from "../../../components/title/title";

import './RegisterPage.css'
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-clock/dist/Clock.css";
import urls from "../../../utils/urls";

function RegisterPage() {
  const navigate = useNavigate();
  const [ userInfo, setUserInfo ] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(userInfo);

    // await axios.post(
    //   `${urls.baseURL}/register/`,
    //   userInfo,
    //   {headers: {'Content-Type': 'application/json'}},
    // )
    // .then(() => {
    //   NotificationManager.success("Cadastro realizado");
    //   navigate("/login");
    // })
    // .catch((error) => {
    //   NotificationManager.error("Erro no cadastro", error);
    // });
  }

  return (
    <form className="register page" onSubmit={onSubmit}>
      <Title head="Cadastro" />
      <div className="register-content">
        <TextInput
          className="horizontal"
          title="Nome"
          placeholder="Insira seu nome"
          name="first_name"
          value={userInfo.first_name}
          handleTextInput={handleChange}
        />
        <TextInput
          className="horizontal"
          title="Sobrenome"
          placeholder="Insira seu sobrenome"
          name="last_name"
          value={userInfo.last_name}
          handleTextInput={handleChange}
        />
        {/* TODO: nao ta salvando por bug na props "name" */}
        <div className="register-date">
          <Textbox title="Data de Nascimento" />
          <DateTimePicker
            name="birth_date"
            value={userInfo.birth_date}
            onChange={handleChange}
            disableClock={true}
          />
        </div>
        <TextInput
          className="horizontal"
          title="Email"
          placeholder="Insira seu email"
          name="email"
          value={userInfo.email}
          handleTextInput={handleChange}
          type="email"
        />
        <TextInput
          className="horizontal"
          title="Celular"
          placeholder="Insira seu telefone"
          name="phone_number"
          value={userInfo.phone_number}
          handleTextInput={handleChange}
          type="tel"
        />
        <TextInput
          className="horizontal"
          title="CPF"
          placeholder="Insira seu CPF"
          name="cpf"
          value={userInfo.cpf}
          handleTextInput={handleChange}
          type="number"
        />
        <TextInput
          className="horizontal"
          title="Endereço"
          placeholder="Insira seu endereço"
          name="address"
          value={userInfo.address}
          handleTextInput={handleChange}
        />
        {/* TODO: alterar para dropdown */}
        <TextInput
          className="horizontal"
          title="Gênero"
          placeholder="Insira seu gênero (F, M ou O)"
          name="gender"
          value={userInfo.gender}
          handleTextInput={handleChange}
        />
        {/* TODO: alterar para dropdown */}
        <TextInput
          className="horizontal"
          title="Profissão"
          placeholder="Escolha como quer ser visto"
          name="role"
          value={userInfo.role}
          handleTextInput={handleChange}
        />
      </div>
      <button className="register-button" type="submit">
        Cadastrar
      </button>
    </form>
  );
}

export default RegisterPage;
