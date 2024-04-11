import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Logo from "../logo/logo";
import UserPhoto from "../userphoto/userphoto";
import Button from "../button/button";
import Tabs from "../tabs/tabs";

import "./navbar.css";

function Navbar({ className }) {
    const classes = `navbar ${className}`;
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      if(Cookies.get('access_token'))
        setIsAuthenticated(true);
    }, [])

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
                    to="" />
              </div>
            </>
          ) : (
            <div className="content">
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
