import { React, useState } from "react";
import Title from "../../../components/title/title";
import Button from "../../../components/button/button";
import MealList from "../../../components/lists/meallist/meallist";

import mealList from "../../../objects/meals";

import "./nutridietpage.css";

function NutriDietPage() {
  const [weekday, setWeekday] = useState("monday");

  function handleClick(weekday) {
    setWeekday(weekday);
  }

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
          className="grad outline small"
          text="Evolução"
          to="/nutritionist/evolution"
        />
        <Button
          className="grad small"
          text="Editar"
          to="/nutritionist/diet/edit"
        />
      </div>
      <div className="separation">
        <div className="days">
          <Button
            className="grad small"
            text="Segunda"
            onClick={() => handleClick("monday")}
          />
          <Button
            className="grad small"
            text="Terça"
            onClick={() => handleClick("tuesday")}
          />
          <Button
            className="grad small"
            text="Quarta"
            onClick={() => handleClick("wednesday")}
          />
          <Button
            className="grad small"
            text="Quinta"
            onClick={() => handleClick("thursday")}
          />
          <Button
            className="grad small"
            text="Sexta"
            onClick={() => handleClick("friday")}
          />
          <Button
            className="grad small"
            text="Sábado"
            onClick={() => handleClick("saturday")}
          />
          <Button
            className="grad small"
            text="Domingo"
            onClick={() => handleClick("sunday")}
          />
        </div>
        <div className="diet-content">
          <div className="diet-text">
            {weekday === "monday" && <MealList meals={mealList[0].monday} />}
            {weekday === "tuesday" && <MealList meals={mealList[0].tuesday} />}
            {weekday === "wednesday" && <MealList meals={mealList[0].wednesday} />}
            {weekday === "thursday" && <MealList meals={mealList[0].thursday} />}
            {weekday === "friday" && <MealList meals={mealList[0].friday} />}
            {weekday === "saturday" && <MealList meals={mealList[0].saturday} />}
            {weekday === "sunday" && <MealList meals={mealList[0].sunday} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutriDietPage;
