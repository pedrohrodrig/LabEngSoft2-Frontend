import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import Button from "../button/button";
import Icon from "../icon/icon";

import "./card.css";

function Card({ className, clickable, title, body1, image, path }) {
    const classes = clickable ? `card clickable ${className}` : `card ${className}`;

    return (
        <Link className={classes} to={path}>
            <div className="image">
                <img src={image} alt="card"/>
            </div>

            <div className="content">
                <div className="text">
                        <h1 className="title">{title}</h1>
                        <p className="body">{body1}</p>
                </div>
                
                <div className="buttons">
                    <Button className="black outline very-small" text="Button" />
                    <Logo className="black" />
                </div>
            </div>

            <div className="iconbox">
                <Icon iconType="chevron-right" />
            </div>
        </Link>
    );
}

export default Card;
