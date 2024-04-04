import Button from "../button/button";
import React from "react";
import Logo from "../logo/logo";
import UserPhoto from "../userphoto/userphoto";
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
                <UserPhoto name="Lucas Garieri" to="/profile" />
                <Tabs
                    labels={["Overview", "Agenda", "Histórico"]} // Atualizado
                    to={["/overview", "/appointments", "/history"]} // Atualizado
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
