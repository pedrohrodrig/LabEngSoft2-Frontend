import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Logo from "../logo/logo";
import UserPhoto from "../userphoto/userphoto";
import Button from "../button/button";
import Tabs from "../tabs/tabs";
import axios from "axios";
import { NotificationManager } from 'react-notifications';

import "./navbar.css";
import urls from "../../utils/urls";

function Navbar({ className }) {
    const classes = `navbar ${className}`;
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      if(Cookies.get('access_token'))
        setIsAuthenticated(true);
    }, [isAuthenticated])

    const onLogout = async () => {
      await axios.get(
        `${urls.baseURL}/logout/`,
      )
      .then(() => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        setIsAuthenticated(false);
        //NotificationManager.info("Logout realizado");
      })
      .catch((error) => {
        NotificationManager.error("Erro ao deslogar", error)
      })
    }

    return (
        <div className={classes}>
          {isAuthenticated ? (
            <>
              <div className="header">
                <Logo className="black" />
              </div>
              <div className="content">
                  <UserPhoto name="Lucas Garieri" to="/profile" />
                  <Tabs
                    labels={["Overview", "Pacientes", "Agenda", "Histórico"]}
                    to={["/overview", "/patients", "", "/appointments"]} />
              </div>
              <div className="footer">
                  <Button
                    className="black small outline"
                    text="Logout"
                    icon="left"
                    iconType="logout"
                    to=""
                    onClick={onLogout}
                  />
              </div>
            </>
          ) : (
            <div className="notLogged">
              <Logo className="black" />
              <Tabs
                labels={["Login", "Cadastro"]}
                to={["/login", "/register"]}
              />
            </div>
          )}
        </div>
    );
}

export default Navbar;
