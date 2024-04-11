import { React, useState } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from "axios";

import urls from "../../../utils/urls";
import TextInput from "../../../components/textInput/textInput";
import Title from "../../../components/title/title";

import './LoginPage.css'

function LoginPage() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const onSubmit = async (e) => {
      e.preventDefault();

      const credentials = {
        email: email,
        password: password
      };

      await axios.post(
        `${urls.baseURL}/login/`,
        credentials,
        {headers: {'Content-Type': 'application/json'}},
      )
      .then((data) => {
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);

        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;

        NotificationManager.success("YASSSSSS");
      })
      .catch((error) => {
        NotificationManager.error(error);
      });


    }

    return (
      <>
        <form className="login page" onSubmit={onSubmit}>
          <Title head="Login" />
          <TextInput
            className="horizontal"
            title="Email"
            placeholder="Insira seu e-mail"
            handleTextInput={e => setEmail(e.target.value)}
          />
          <TextInput
            className="horizontal"
            title="Senha"
            placeholder="Insira sua senha"
            handleTextInput={e => setPassword(e.target.value)}
          />
          <button className="login-button" type="submit">
            Entrar
          </button>
        </form>
        <NotificationContainer />
      </>
    );
}

export default LoginPage;
