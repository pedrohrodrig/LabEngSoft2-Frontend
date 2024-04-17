import { React, useEffect, useState, useContext } from "react";
import Title from "../../../components/title/title";
import EventModal from "../../../components/eventmodal/eventmodal";
import UserContext from "../../../contexts/UserContext";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ptBR from "date-fns/locale/pt-BR";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import "./nutrischedulepage.css";

import axios from "axios";

const DragAndDropCalendar = withDragAndDrop(Calendar);

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
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { user } = useContext(UserContext);

  const eventStyle = (event) => ({
    style: {
      backgroundColor: event.color,
    },
  });

  const moveEvents = (data) => {
    const { start, end } = data;
    const updatedEvents = events.map((event) => {
      if (event.appointmentid === data.event.appointmentid) {
        const updated = createAppointmentFromEvent({
          ...event,
          start: new Date(start),
          end: new Date(end),
        });
        axios
          .put(
            `http://localhost:8000/appointment/${event.appointmentid}/edit/`,
            updated
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        return {
          ...event,
          start: new Date(start),
          end: new Date(end),
        };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleEventOpen = (event) => {
    setSelectedEvent(event);
  };

  const handleEventClose = () => {
    setSelectedEvent(null);
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    setSelectedEvent(null);
  };

  const handleEditEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) => {
      if (event.appointmentid === updatedEvent.appointmentid) {
        const updated = createAppointmentFromEvent(updatedEvent);
        axios
          .put(
            `http://localhost:8000/appointment/${event.appointmentid}/edit/`,
            updated
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        return updatedEvent;
      }
      return event;
    });

    setEvents(updatedEvents);
    setSelectedEvent(null);
  };

  const adjustDate = (date) => {
    return new Date(date);
  };

  const createAppointmentFromEvent = (event) => {
    return {
      id: event.appointmentid,
      id_user_professional: event.professionalId,
      patient: user.id,
      start_datetime: event.start,
      end_datetime: event.end,
      is_online: event.type === "Online",
      cancelled: false,
    };
  };

  const createEventFromAppointment = (appointment) => {
    return {
      id: events.length,
      title: "Consulta " + appointment.id,
      appointmentid: appointment.id,
      professionalId: appointment.id_user_professional,
      start: adjustDate(appointment.start_datetime),
      end: adjustDate(appointment.end_datetime),
      desc: "Consulta",
      color: "#CCBAF7",
      type: appointment.is_online ? "Online" : "Presencial",
    };
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/appointment`)
      .then((response) => {
        console.log(response.data);
        const newEvents = response.data.map((element) =>
          createEventFromAppointment(element)
        );
        setEvents(newEvents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="schedule page">
      <Title head="Agenda de Consultas" />
      <div className="content">
        <div className="calendar-back">
          <div className="calendar">
            <DragAndDropCalendar
              localizer={localizer}
              style={{ height: 400 }}
              events={events}
              eventPropGetter={eventStyle}
              onEventDrop={moveEvents}
              onEventResize={moveEvents}
              onSelectEvent={handleEventOpen}
            />
          </div>
        </div>
      </div>
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={handleEventClose}
          onDelete={handleDeleteEvent}
          onUpdate={handleEditEvent}
        />
      )}
    </div>
  );
}

export default NutriSchedulePage;
