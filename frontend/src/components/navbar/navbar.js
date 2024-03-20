import React from "react";
import Logo from "../logo/logo";
import UserPhoto from "../userphoto/userphoto";
import Button from "../button/button";
import Tabs from "../tabs/tabs";

import "./navbar.css";

function Navbar({ className }) {
    const classes = `navbar ${className}`;

    return (
        <div className={classes}>
            <div className="header">
                <Logo className="black" />
            </div>

            <div className="content">
                <UserPhoto name="Cecília Marques" />
                <Tabs
                    labels={["Overview", "Pacientes", "Agenda", "Histórico"]}
                    to={["/overview", "/patients", "/schedule", "/appointments"]}
                />
            </div>


            <div className="footer">
                <Button
                    className="black small outline"
                    text="Logout"
                    icon="left"
                    iconType="logout"
                    to=""
                />
            </div>
        </div>
    );
}

export default Navbar;
