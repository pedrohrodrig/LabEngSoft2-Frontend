import React, { useContext } from "react";
import PathContext from "../../contexts/PathContext";

import Logo from "../logo/logo";
import UserPhoto from "../userphoto/userphoto";
import Button from "../button/button";
import Tabs from "../tabs/tabs";

import "./navbar.css";

function Navbar({ className, labels, to }) {
    const { paths } = useContext(PathContext);
    const classes = `navbar ${className}`;

    return (
        <div className={classes}>
            <div className="header">
                <Logo className="black" />
            </div>

            <div className="content">
                <UserPhoto name="Lucas Garieri" to={`${paths.front}/profile`} />
                <Tabs
                    labels={labels}
                    to={to}
                />
            </div>


            <div className="footer">
                <Button
                    className="black small outline"
                    text="Logout"
                    icon="left"
                    iconType="logout"
                    to="/"
                />
            </div>
        </div>
    );
}

export default Navbar;
