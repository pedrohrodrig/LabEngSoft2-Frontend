import React from "react";
import { Link } from "react-router-dom";

import "./userphoto.css";

function UserPhoto({ className, name, to, photo }) {
    const classes = name ? `user name ${className}` : `user ${className}`;

    return (
        <div className={classes}>
            <Link className={!to && "disabled-link"} to={to}>
                <img src={photo} alt="user" />
                <h1>{name}</h1>
            </Link>
        </div>
    );
}

export default UserPhoto;
