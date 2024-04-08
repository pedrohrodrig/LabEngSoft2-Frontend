import React from "react";
import Title from "../../../components/title/title";
import Button from "../../../components/button/button";
import EditMealList from "../../../components/lists/editmeallist/editmeallist";

import mealList from "../../../objects/meals";

import "./nutridieteditpage.css";

function NutriDietEditPage() {
  return (
    <div className="diet page">
      <div className="header">
        <Title head="Editar Plano Alimentar" />
      </div>
      <div className="button">
        <Button className="grad small" text="Salvar" to="/nutritionist/diet" />
      </div>
      <div className="separation">
        <div className="days">
          <Button className="grad small" text="Segunda" />
          <Button className="grad small" text="Terça" />
          <Button className="grad small" text="Quarta" />
          <Button className="grad small" text="Quinta" />
          <Button className="grad small" text="Sexta" />
          <Button className="grad small" text="Sábado" />
          <Button className="grad small" text="Domingo" />
        </div>
        <div className="diet-content">
          <div className="diet-text">
            <div className="meal">
              <h2>Desjejum</h2>
              <Button className="grad outline small" text="Adicionar" />
            </div>
            <EditMealList meals={mealList} />
            <div className="meal">
              <h2>Lanche da manhã</h2>
              <Button className="grad outline small" text="Adicionar" />
            </div>
            <EditMealList meals={mealList} />
            <div className="meal">
              <h2>Almoço</h2>
              <Button className="grad outline small" text="Adicionar" />
            </div>
            <EditMealList meals={mealList} />
            <div className="meal">
              <h2>Lanche da Tarde</h2>
              <Button className="grad outline small" text="Adicionar" />
            </div>
            <EditMealList meals={mealList} />
            <div className="meal">
              <h2>Jantar</h2>
              <Button className="grad outline small" text="Adicionar" />
            </div>
            <EditMealList meals={mealList} />
            <div className="meal">
              <h2>Ceia</h2>
              <Button className="grad outline small" text="Adicionar" />
            </div>
            <EditMealList meals={mealList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutriDietEditPage;
