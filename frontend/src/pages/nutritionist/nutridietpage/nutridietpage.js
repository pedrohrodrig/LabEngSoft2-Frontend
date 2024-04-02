import React from "react";
import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import Button from "../../../components/button/button";
import MealList from "../../../components/lists/meallist/meallist";

import mealList from "../../../objects/meals";

import "./nutridietpage.css";

function NutriDietPage() {
  return (
    <div className="diet page">
      <div className="header">
        <Title head="Plano Alimentar" />
      </div>
      <div className="button">
        <Button
          className="grad outline small"
          text="Consulta"
          to="/nutritionist/appoint"
        />
        <Button
          className="grad outline small"
          text="Avaliação"
          to="/nutritionist/evaluation"
        />
        <Button
          className="grad small"
          text="Editar"
          to="/nutritionist/diet/edit"
        />
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
            <h2>Desjejum</h2>
            <MealList meals={mealList} />
            <h2>Lanche da Manhã</h2>
            <MealList meals={mealList} />
            <h2>Almoço</h2>
            <MealList meals={mealList} />
            <h2>Lanche da Tarde</h2>
            <MealList meals={mealList} />
            <h2>Jantar</h2>
            <MealList meals={mealList} />
            <h2>Ceia</h2>
            <MealList meals={mealList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutriDietPage;
