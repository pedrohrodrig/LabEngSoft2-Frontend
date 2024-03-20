import React from "react";
import HorizontalCard from "../../horizontalcard/horizontalcard";

import "../cardlist.css";

function AppointmentList({ className, appointments, small }) {
    const classes = small ? `small-card-list ${className}` : `card-list ${className}`;
    const n = small ? 3 : appointments.length;

    return (
        <div className={classes}>
            {
                appointments.map((obj, i) =>
                {
                    while (i < n) {
                        return (
                            <HorizontalCard
                                title={obj.patient}
                                image={obj.photo}
                                col1={!small && obj.timestamp}
                                col2={!small && obj.status}
                                to="/appoint"
                                key={i}
                            />
                        );
                    }
                })
            }
        </div>
    );
}

export default AppointmentList;
