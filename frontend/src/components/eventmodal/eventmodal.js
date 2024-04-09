import React from "react";

import Textbox from "../../components/textbox/textbox";
import Button from "../../components/button/button";

import './eventmodal.css';

function EventModal({ event, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>{event.title}</h1>
        <Textbox
          className="horizontal"
          title="Início"
          body={event.start.toString()}
        />
        <Textbox
          className="horizontal"
          title="Fim"
          body={event.end.toString()}
        />
        <Textbox className="horizontal" title="Descrição" body={event.desc} />
        <Textbox className="horizontal" title="Tipo" body={event.type} />
        <div className="modal-button">
          <Button
            className="grad outline small"
            text="Ver Consulta"
            onClick={onClose}
          />
          <Button
            className="grad small"
            text="Fechar"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}

export default EventModal;
