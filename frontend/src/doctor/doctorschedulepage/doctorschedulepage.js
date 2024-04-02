import React from "react";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import { parse } from "date-fns";
import { startOfWeek } from "date-fns";
import getDay from "date-fns/getDay";
import ptBR from "date-fns/locale/pt-BR";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./doctorschedulepage.css";
import Title from "../../components/title/title";

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

function DoctorSchedulePage() {
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

export default DoctorSchedulePage;