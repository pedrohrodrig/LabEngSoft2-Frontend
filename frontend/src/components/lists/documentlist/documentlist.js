import React from "react";
import HorizontalCard from "../../horizontalcard/horizontalcard";

import "../cardlist.css";

function DocumentList({ className, documents, small }) {
    const classes = small ? `small-card-list ${className}` : `card-list ${className}`;
    const n = small ? 3 : documents.length;

    return (
        <div className={classes}>
            {
                documents.map((obj, i) =>
                {
                    while (i < n) {
                        return (
                            <HorizontalCard className="doclist"
                                title={obj.name}
                                body={!small && obj.type}
                                col1={!small && obj.timestamp}
                                col2={!small && obj.professional}
                                iconType="file"
                                to="/doc"
                                key={i}
                            />
                        );
                    }
                })
            }
        </div>
    );
}

export default DocumentList;
