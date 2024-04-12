import React from "react";

import Textbox from "../../textbox/textbox";

function MealList({ meals }) {

  const breakfast = meals[0].breakfast;
  const morningsnack = meals[1].morningsnack;
  const lunch = meals[2].lunch;
  const eveningsnack = meals[3].eveningsnack;
  const dinner = meals[4].dinner;
  const supper = meals[5].supper;

  return (
    <div>
      <h2>Desjejum</h2>
      {breakfast.map((obj) => {
        while (obj != null) {
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
      <h2>Lanche da manhã</h2>
      {morningsnack.map((obj) => {
        while (obj != null) {
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
      <h2>Almoço</h2>
      {lunch.map((obj) => {
        while (obj != null) {
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
      <h2>Lanche da tarde</h2>
      {eveningsnack.map((obj) => {
        while (obj != null) {
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
      <h2>Janta</h2>
      {dinner.map((obj) => {
        while (obj != null) {
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
      <h2>Ceia</h2>
      {supper.map((obj) => {
        while (obj != null) {
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
