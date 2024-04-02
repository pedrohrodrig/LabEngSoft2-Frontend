import React from "react";
import Title from "../../../components/title/title";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ptBR from "date-fns/locale/pt-BR";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./nutrischedulepage.css";

const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function NutriSchedulePage() {
  return (
    <div className="schedule page">
      <Title head="Agenda" body="Acompanhe seus horários e consultas" />
      <div className="content">
        <div className="calendar-back">
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 400 }}
          />
        </div>
      </div>
    </div>
  );
}

export default NutriSchedulePage;
