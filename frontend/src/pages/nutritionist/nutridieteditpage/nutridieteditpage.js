import { React, useState } from "react";
import Title from "../../../components/title/title";
import Button from "../../../components/button/button";
import EditMealList from "../../../components/lists/editmeallist/editmeallist";

import mealList from "../../../objects/meals";

import "./nutridieteditpage.css";

function NutriDietEditPage() {
  const [weekday, setWeekday] = useState("monday");

  function handleClick(weekday) {
    setWeekday(weekday);
  }

  return (
    <div className="diet page">
      <div className="header">
        <Title head="Editar Plano Alimentar" />
      </div>
      <div className="button">
        <Button
          className="grad small"
          text="Salvar"
          to="/nutritionist/diet"
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
            {weekday === "monday" && (
              <EditMealList meals={mealList[0].monday} />
            )}
            {weekday === "tuesday" && (
              <EditMealList meals={mealList[0].tuesday} />
            )}
            {weekday === "wednesday" && (
              <EditMealList meals={mealList[0].wednesday} />
            )}
            {weekday === "thursday" && (
              <EditMealList meals={mealList[0].thursday} />
            )}
            {weekday === "friday" && (
              <EditMealList meals={mealList[0].friday} />
            )}
            {weekday === "saturday" && (
              <EditMealList meals={mealList[0].saturday} />
            )}
            {weekday === "sunday" && (
              <EditMealList meals={mealList[0].sunday} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NutriDietEditPage;
