import { React, useState } from "react";
import Title from "../../../components/title/title";
import EventModal from "../../../components/eventmodal/eventmodal";
import NewEventModal from "../../../components/neweventmodal/neweventmodal";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import ptBR from "date-fns/locale/pt-BR";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import eventsList from "../../../objects/events";
import Button from "../../../components/button/button";

import "./schedulepage.css";

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

function SchedulePage() {
  const [events, setEvents] = useState(eventsList);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [addNewEvent, setAddNewEvent] = useState(false);

  const eventStyle = (event) => ({
    style: {
      backgroundColor: event.color,
    },
  });

  const moveEvents = (data) => {
    const { start, end } = data;
    const updatedEvents = events.map((event) => {
      if (event.id === data.event.id) {
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

  const handleAddEventOpen = () => {
    setAddNewEvent(true);
  }

  const handleAddEventClose = () => {
    setAddNewEvent(false);
  }

  const handleAddEvent = (newEvent) => {
    setEvents([...events,{...newEvent, id:events.length + 1, appointmentid: events.length + 1}]);
  }

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    setSelectedEvent(null);
  }

  const handleEditEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) => {
      if(event.id === updatedEvent.id) {
        return updatedEvent;
      }
      return event;
    });

    setEvents(updatedEvents);
    setSelectedEvent(null);
  }

  return (
    <div className="schedule page">
      <Title head="Agenda de Consultas" />
      <div className="content">
        <Button
          className="grad outline small"
          text="Nova consulta"
          onClick={handleAddEventOpen}
        />
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
      {addNewEvent && (
        <NewEventModal onAdd={handleAddEvent} onClose={handleAddEventClose} />
      )}
    </div>
  );
}

export default SchedulePage;
