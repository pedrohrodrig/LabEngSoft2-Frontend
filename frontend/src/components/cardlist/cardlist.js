import React from "react";
import Card from "../../components/card/card";

import "./cardlist.css";

function CardList({ objects }) {
    return (
        <div className="card-list">
            {
                objects.map((obj, i) =>
                {
                    return (
                        <Card
                            className="horizontal"
                            clickable={true}
                            title={obj.title}
                            body={obj.body}
                            image={obj.photo}
                            key={i}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
