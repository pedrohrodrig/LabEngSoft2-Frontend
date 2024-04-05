import React from "react";
import { Link } from "react-router-dom";
import Icon from "../icon/icon";

import "./button.css";

function Button({ className, to, text, icon, iconType, onClick, newTab }) {
    const classes = icon ? `but ${icon} ${className}` : `but text ${className}`;

    // Se `to` é fornecido, renderiza como um link externo que pode abrir em uma nova aba
    if (to) {
        return (
            <a
                className={`${classes} but-link`}
                href={to}
                onClick={onClick}
                target={newTab ? "_blank" : "_self"}
                rel="noopener noreferrer"
            >
                {icon && <Icon iconType={iconType} />}
                {text}
            </a>
        );
    }

    // Caso contrário, renderiza como um botão interno do aplicativo
    return (
        <div className={classes} onClick={onClick}>
            <Link className="but-link" to={to || '#'}>
                {icon && <Icon iconType={iconType} />}
                {text}
            </Link>
        </div>
    );
}

export default Button;
