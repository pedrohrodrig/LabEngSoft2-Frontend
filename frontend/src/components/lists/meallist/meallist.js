import React from "react";

import Textbox from "../../textbox/textbox";

function MealList({meals}) {

    return (
      <div>
        {meals.map((obj) => {
            while(obj != null) {
                return (
                  <div className="grid">
                    <div className="col">
                      <Textbox
                        className="horizontal"
                        title="Alimento"
                        body={obj.food}
                      />
                    </div>
                    <div className="col">
                      <Textbox
                        className="horizontal"
                        title="Quantidade"
                        body={obj.quantity}
                      />
                    </div>
                  </div>
                );
            }
        })}
      </div>
    );
}

export default MealList;