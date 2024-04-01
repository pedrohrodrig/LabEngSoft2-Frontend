import React from "react";
import HorizontalCard from "../../horizontalcard/horizontalcard";

import "../cardlist.css";

function PatientList({ className, patients, small }) {
    const classes = small ? `small-card-list ${className}` : `card-list ${className}`;
    const n = small ? 3 : patients.length;

    return (
        <div className={classes}>
            {
                patients.map((obj, i) =>
                {
                    while (i < n) {
                        return (
                          <HorizontalCard
                            title={`${obj.name}`}
                            body={!small && `Idade ${obj.age}`}
                            image={obj.photo}
                            col1={!small && obj.phone}
                            col2={!small && obj.email}
                            to="/nutritionist/patient/profile"
                            key={i}
                          />
                        );
                    }
                })
            }
        </div>
    );
}

export default PatientList;
