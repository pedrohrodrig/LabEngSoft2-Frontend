import Button from "../button/button";
import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Logo from "../logo/logo";
import UserPhoto from "../userphoto/userphoto";
import Tabs from "../tabs/tabs";

import "./navbar.css";

function Navbar({ className }) {
    const classes = `navbar ${className}`;
    const { user } = useContext(UserContext);

    return (
        <div className={classes}>
            <div className="header">
                <Logo className="black" />
            </div>

            <div className="content">
                <UserPhoto name={user.full_name} to="/profile" />
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
