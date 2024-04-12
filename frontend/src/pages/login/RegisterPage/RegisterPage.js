import React from "react";
import DateTimePicker from "react-datetime-picker";

import TextInput from "../../../components/textInput/textInput";
import Textbox from "../../../components/textbox/textbox";
import Title from "../../../components/title/title";
import Dropdown from "../../../components/dropdown/dropdown";

import './RegisterPage.css'
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function RegisterPage() {
    return (
      <div className="register page">
        <Title head="Cadastro" />
        <div className="register-content">
          <TextInput
            className="horizontal"
            title="Nome"
            placeholder="Insira seu nome"
            //   name="desc"
            //   handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Sobrenome"
            placeholder="Insira seu sobrenome"
            //   name="desc"
            //   handleTextInput={handleChange}
          />
          <div className="register-date">
            <Textbox title="Data de Nascimento" />
            <DateTimePicker
              // onChange={(date) =>
              //   handleChange({ target: { value: date, name: "start" } })
              // }
              name="start"
              // value={newEvent.start}
              disableClock={true}
            />
          </div>
          <TextInput
            className="horizontal"
            title="Email"
            placeholder="Insira seu email"
            type="email"
            //   name="desc"
            //   handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Celular"
            placeholder="Insira seu telefone"
            type="number"
            //   name="desc"
            //   handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="CPF"
            placeholder="Insira seu CPF"
            type="number"
            //   name="desc"
            //   handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Endereço"
            placeholder="Insira seu endereço"
            //   name="desc"
            //   handleTextInput={handleChange}
          />
          <Dropdown

          />
          <TextInput
            className="horizontal"
            title="Gênero"
            placeholder="Insira seu gênero (F, M ou O)"
            //   name="desc"
            //   handleTextInput={handleChange}
          />
        </div>
        <button className="register-button" type="submit">
          Cadastrar
        </button>
      </div>
    );
}

export default RegisterPage;
