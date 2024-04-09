import { React, useState } from "react";
import DateTimePicker from "react-datetime-picker";

import TextInput from "../../components/textInput/textInput";
import TextBox from "../../components/textbox/textbox";
import Button from "../../components/button/button";

import "./neweventmodal.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function NewEventModal({ onAdd, onClose }) {
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    desc: "",
    color: "#CCBAF7",
    type: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewEvent({...newEvent, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(newEvent.title && newEvent.start && newEvent.end) {

      onAdd(newEvent);
      setNewEvent({
        title: "",
        start: "",
        end: "",
        desc: "",
        color: "#CCBAF7",
        type: "",
      });
    }

    onClose();

  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit} className="modal-form">
          <h1>Adicionar Evento</h1>
          <TextInput
            className="horizontal"
            title="Evento"
            placeholder="Título do Evento"
            name="title"
            handleTextInput={handleChange}
          />
          <div className="modal-date">
            <TextBox title="Início" />
            <DateTimePicker
              onChange={(date) =>
                handleChange({ target: { value: date, name: "start" } })
              }
              name="start"
              value={newEvent.start}
              disableClock={true}
            />
          </div>
          <div className="modal-date">
            <TextBox title="Fim" />
            <DateTimePicker
              onChange={(date) =>
                handleChange({ target: { value: date, name: "end" } })
              }
              name="end"
              value={newEvent.end}
              disableClock={true}
            />
          </div>
          <TextInput
            className="horizontal"
            title="Descrição"
            placeholder="Insira uma descrição breve da consulta"
            name="desc"
            handleTextInput={handleChange}
          />
          <TextInput
            className="horizontal"
            title="Tipo"
            placeholder="Insira o tipo de consulta"
            name="type"
            handleTextInput={handleChange}
          />
          <div className="modal-button">
            <Button
              className="grad outline small"
              text="Cancelar"
              onClick={onClose}
            />
            {/* <Button
              className="grad small"
              text="Salvar"
              onClick={onAdd}
              type="submit"
            /> */}
            <button onClick={onAdd} type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewEventModal;
