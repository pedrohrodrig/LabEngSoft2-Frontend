import React from "react";
import Icon from "../../components/icon/icon";

import "./bignumber.css"

function BigNumber({ className, number, text }) {
    const classes = `bignumber ${className}`;

    return (
        <div className={classes}>
            <Icon iconType="chevron-left" />

            <div className="content">
                <h1>{number}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default BigNumber;
