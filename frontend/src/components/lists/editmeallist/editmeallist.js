import React from "react";

import TextInput from "../../textInput/textInput";

function EditMealList({ meals }) {
  return (
    <div>
      {meals.map((obj) => {
        while (obj != null) {
          return (
            <div className="grid">
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Alimento"
                  placeholder={obj.food}
                />
              </div>
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Quantidade"
                  placeholder={obj.quantity}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default EditMealList;
