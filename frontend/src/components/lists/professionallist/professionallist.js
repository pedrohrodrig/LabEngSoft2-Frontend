import React from "react";
import HorizontalCard from "../../horizontalcard/horizontalcard";

import "../cardlist.css";

function ProfessionalList({ className, professionals, small }) {
    const classes = small ? `small-card-list ${className}` : `card-list ${className}`;
    const n = small ? 3 : professionals.length;

    return (
        <div className={classes}>
            {
                professionals.map((obj, i) =>
                {
                    while (i < n) {
                        return (
                            <HorizontalCard
                                title={`${obj.title}`}
                                body={!small && `R$${obj.price}`}
                                image={obj.photo}
                                col1={!small && obj.specialty}
                                to={`/rent-service?${i}`}
                                key={i}
                            />
                        );
                    }
                })
            }
        </div>
    );
}

export default ProfessionalList;
