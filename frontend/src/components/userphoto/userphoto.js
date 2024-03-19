import React from "react";
import { Link } from "react-router-dom";
import UserImage from "../../assets/user.jpeg"

import "./userphoto.css";

function UserPhoto({ className, name }) {
    const classes = name ? `user name ${className}` : `user ${className}`;

    return (
        <div className={classes}>
            <Link>
                <img src={UserImage} alt="user" />
                <h1>Lucas Garieri</h1>
            </Link>
        </div>
    );
}

export default UserPhoto;
