import React from "react";

import TextInput from "../../textInput/textInput";
import Button from "../../button/button";

import "./editmeallist.css";

function EditMealList({ meals }) {
  const breakfast = meals[0].breakfast;
  const morningsnack = meals[1].morningsnack;
  const lunch = meals[2].lunch;
  const eveningsnack = meals[3].eveningsnack;
  const dinner = meals[4].dinner;
  const supper = meals[5].supper;

  return (
    <div>
      <div className="add-button">
        <h2>Desjejum</h2>
        <Button className="grad outline small" text="Adicionar" />
      </div>
      {breakfast.map((obj) => {
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
      <div className="add-button">
        <h2>Lanche da manhã</h2>
        <Button className="grad outline small" text="Adicionar" />
      </div>
      {morningsnack.map((obj) => {
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
      <div className="add-button">
        <h2>Almoço</h2>
        <Button className="grad outline small" text="Adicionar" />
      </div>
      {lunch.map((obj) => {
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
      <div className="add-button">
        <h2>Lanche da Tarde</h2>
        <Button className="grad outline small" text="Adicionar" />
      </div>
      {eveningsnack.map((obj) => {
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
      <div className="add-button">
        <h2>Janta</h2>
        <Button className="grad outline small" text="Adicionar" />
      </div>
      {dinner.map((obj) => {
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
      <div className="add-button">
        <h2>Ceia</h2>
        <Button className="grad outline small" text="Adicionar" />
      </div>
      {supper.map((obj) => {
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
