import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
import { NotificationManager } from 'react-notifications';
import { useNavigate } from "react-router-dom";

import TextInput from "../../../components/textInput/textInput";
import Textbox from "../../../components/textbox/textbox";
import Title from "../../../components/title/title";
import Dropdown from "../../../components/dropdown/dropdown";

import { rolesValues } from "../../../utils/utils";
import urls from "../../../utils/urls";

import './RegisterPage.css'
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const genderOptions = [
  { value: 'M', label: 'Masculino' },
  { value: 'F', label: 'Feminino' },
  { value: 'O', label: 'Outros' }
];

const roleOptions = [
  { value: 1, label: 'Paciente' },
  { value: 2, label: 'Médico' },
  { value: 3, label: 'Nutricionista' },
  { value: 4, label: 'Psicólogo' },
  { value: 5, label: 'Personal Trainer' }
]

function RegisterPage() {
  const navigate = useNavigate();

  const [ registerData, setRegisterData ] = useState({role: rolesValues.patient});
  const [ isPatient, setIsPatient ] = useState(true)

  const handleChange = (e) => {
    const { value, name } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  const handleChangePatientExclusiveFields = (e) => {
    const { value, name } = e.target;

    if(registerData.role === rolesValues.patient) {
      setRegisterData({
        ...registerData,
        [name]: value
      });
    }
    else {
      const { weight, height, ...commonRegisterData } = registerData;

      setRegisterData({ ...commonRegisterData })
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(registerData);

    await axios.post(
      `${urls.baseURL}/register/`,
      registerData,
      {headers: {'Content-Type': 'application/json'}},
    )
    .then(() => {
        NotificationManager.success("Cadastro realizado");

        navigate("/login")
      })
    .catch((error) => {
      NotificationManager.error(error);
    });
  }

  return (
    <form className="register page" onSubmit={onSubmit}>
      <Title head="Cadastro" />
      <div className="register-content">
        <div className="dropdowns">
          <Dropdown
            options={roleOptions}
            selectedOption={roleOptions[0]}
            name="role"
            handleSelectedOptions={(selectedOption) => {
              selectedOption.value === rolesValues.patient ?
              setIsPatient(true) :
              setIsPatient(false);

              setRegisterData({
                ...registerData,
                role: selectedOption.value
              })
            }}
          />
          <Dropdown
            options={genderOptions}
            selectedOption={registerData.gender}
            placeholder="Gênero"
            name="gender"
            onChange={(selectedOption) => {
              setRegisterData({
                ...registerData,
                gender: selectedOption.value
              })
            }}
          />
        </div>
        <TextInput
          title="Nome"
          placeholder="Insira seu nome"
          name="first_name"
          value={registerData.first_name}
          handleTextInput={handleChange}
        />
        <TextInput
          title="Sobrenome"
          placeholder="Insira seu sobrenome"
          name="last_name"
          value={registerData.last_name}
          handleTextInput={handleChange}
        />
        <div className="register-date">
          <Textbox title="Data de Nascimento" />
          <DateTimePicker
            onChange={(date) =>
              handleChange({ target: { value: date, name: "birthDate" } })
            }
            name="birthDate"
            value={registerData.birthDate}
            disableClock={true}
          />
        </div>
        {isPatient && <TextInput
          title="Peso"
          placeholder="Insira seu peso em kg"
          type="number"
          name="weight"
          value={registerData.weight}
          handleTextInput={handleChangePatientExclusiveFields}
        />}
        {isPatient && <TextInput
          title="Altura"
          placeholder="Insira sua altura em m"
          type="number"
          name="height"
          value={registerData.height}
          handleTextInput={handleChangePatientExclusiveFields}
        />}
        <TextInput
          title="Celular"
          placeholder="Insira seu telefone"
          type="number"
          name="phone_number"
          value={registerData.phone_number}
          handleTextInput={handleChange}
        />
        <TextInput
          title="CPF"
          placeholder="Insira seu CPF"
          type="number"
          name="cpf"
          value={registerData.cpf}
          handleTextInput={handleChange}
        />
        <TextInput
          title="Endereço"
          placeholder="Insira seu endereço"
          name="address"
          value={registerData.address}
        />
        <TextInput
          title="Email"
          placeholder="Insira seu email"
          type="email"
          name="email"
          value={registerData.email}
          handleTextInput={handleChange}
        />
        <TextInput
          title="Senha"
          placeholder="Insira sua senha"
          type="password"
          name="password"
          value={registerData.password}
          handleTextInput={handleChange}
        />
        <TextInput
          title="Confirmação de senha"
          placeholder="Confirme sua senha"
          type="password"
          name="password_confirmation"
          value={registerData.password_confirmation}
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
