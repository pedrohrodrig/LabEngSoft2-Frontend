import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import HorizontalCard from "../../../components/horizontalcard/horizontalcard";
import DocumentList from "../../../components/lists/documentlist/documentlist";
import Button from "../../../components/button/button";
import Popup from "../../../components/popup/popup";

import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

import "./personalappointdetailpage.css";

function PersonalAppointDetailPage() {
  const { user } = useContext(UserContext);
  const { paths } = useContext(PathContext);

  const [ avaliation, setAvaliation ] = useState(false);
  const [ cancelation, setCancelation ] = useState(false);
  const [ appointment, setAppointment ] = useState({});
  const [ uploadedFiles, setUploadedFiles ] = useState([]);
  const [ uploadedEvaluations, setUploadedEvaluations ] = useState([]);
  const [ uploadedDiets, setUploadedDiets ] = useState([]);

  const location = useLocation();
  const appointmentId = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    axios.get(`${paths.back}/appointment/${appointmentId}/`)
    .then(response => {
        setAppointment(response.data);
    })
    .catch(error => {
        console.log(error);
    });
  }, [user.id]);

  useEffect(() => {
    axios.get(`${paths.back}/evaluation_from_patient/${appointment.patient}/`)
      .then((response) => {
        setUploadedEvaluations(response.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`${paths.back}/training/list/`)
      .then((response) => {
        setUploadedDiets(response.data);
      })
      .catch((err) => console.log(err));
    setUploadedFiles([...uploadedEvaluations, ...uploadedDiets]);
  }, []);

    const type = appointment.is_online ? "Online" : "Presencial";
    const date = new Date(appointment.datetime);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }

  return (
    <div className="appoint-detail page">
      <div className="header">
        <Title head="Detalhes da Consulta" />
      </div>

      <div className="content">
        <div className="profile-text">
          <div className="grid">
            <div className="col">
              <div className="cardbox">
                <Textbox title="Paciente" />
                <HorizontalCard
                  className="small"
                  image="/images/user.jpeg"
                  title={appointment.patient_name}
                  to={`${paths.front}/patient?id=${appointment.patient}`}
                />
              </div>

              <Textbox
                className="horizontal"
                title="Status"
                body={appointment.status}
              />
            </div>
            <div className="col">
              <div className="cardbox">
                <Textbox title="Profissional" />
                <HorizontalCard
                  className="small"
                  image="/images/user.jpeg"
                  title={appointment.professional_name}
                  to={`${paths.front}/profile`}
                />
              </div>

              <Textbox
                className="horizontal"
                title="Tipo"
                body={type}
              />
            </div>
          </div>

          <Textbox
            className="horizontal"
            title="Horário"
            body={date.toLocaleString("en-GB", options)}
          />
          <Textbox
            className="horizontal"
            title="Endereço"
            body={appointment.address}
          />

          <div className="appoint-but">
            <Button
              className="grad medium"
              text="Avaliar"
              icon="left"
              iconType="clipboard"
              onClick={() => setAvaliation(true)}
            />
            <Button
              className="black medium outline"
              text="Cancelar"
              icon="left"
              iconType="x"
              onClick={() => setCancelation(true)}
            />
          </div>
        </div>

        <div className="extra">
          <div className="doc-header">
            <h1>Últimos documentos</h1>
          </div>
          <DocumentList
            className="patient-docs"
            small={true}
            documents={uploadedFiles}
          />
        </div>
      </div>

      <Popup
        isOpen={avaliation}
        closePopup={() => setAvaliation(false)}
        head="Avaliação"
        body="Selecione o tipo de documento:"
        buttons={["Avaliação", "Treinamento"]}
        paths={[
          `${paths.front}/evaluation`,
          `${paths.front}/training`,
        ]}
        iconType="clipboard"
      />

      <Popup
        isOpen={cancelation}
        closePopup={() => setCancelation(false)}
        head="Cancelamento"
        body="Deseja mesmo cancelar essa consulta?"
        buttons={["Manter", "Cancelar"]}
        iconType="x"
      />
    </div>
  );
}

export default PersonalAppointDetailPage;
