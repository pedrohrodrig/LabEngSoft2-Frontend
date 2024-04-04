import React, { useContext, useState } from "react";

import "./doctorappointmentdetailpage.css";
import UserContext from "../../contexts/UserContext";
import appointmentList from "../../objects/appointments";
import Title from "../../components/title/title";
import Textbox from "../../components/textbox/textbox";
import HorizontalCard from "../../components/horizontalcard/horizontalcard";
import Button from "../../components/button/button";
import DocumentList from "../../components/lists/documentlist/documentlist";
import documentList from "../../objects/documents";
import Popup from "../../components/popup/popup";

import { useLocation } from 'react-router-dom';
import patientList from "../../objects/patients";

function DoctorAppointDetailPage() {
    const { user } = useContext(UserContext);
    const [ avaliation, setAvaliation ] = useState(false);
    const [ cancelation, setCancelation ] = useState(false);
    const location = useLocation();
    const number = location.search[1];
    const patient = patientList[number];
    const appointment = appointmentList[number];

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
                                <HorizontalCard className="small" image={patient.photo} title={patient.name} to={`/doctor-patient-profile`}  />
                            </div>

                            <Textbox className="horizontal" title="Status" body={appointment.status} />
                        </div>
                        <div className="col">
                            <div className="cardbox">
                                <Textbox title="Profissional" />
                                <HorizontalCard className="small" image={user.photo} title={user.name} to="/doctor-profile" />
                            </div>

                            <Textbox className="horizontal" title="Tipo" body={appointment.type} />
                        </div>
                    </div>

                    <Textbox className="horizontal" title="Horário" body={appointment.timestamp} />
                    <Textbox className="horizontal" title="Endereço" body={appointment.address} />

                    <div className="appoint-but">
                        <Button className="grad medium" text="Avaliar" icon="left" iconType="clipboard" onClick={() => setAvaliation(true)} />
                        <Button className="black medium outline" text="Cancelar" icon="left" iconType="x" onClick={() => setCancelation(true)} />
                    </div>

                </div>

                <div className="extra">
                    <div className="doc-header">
                        <h1>Documentos</h1>
                    </div>
                    <DocumentList className="patient-docs" small={true} documents={documentList} />
                </div>
            </div>

            <Popup
                isOpen={avaliation}
                closePopup={() => setAvaliation(false)}
                head="Avaliação"
                body="Selecione o tipo de documento:"
                buttons={["Avaliação", "Treinamento"]}
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

export default DoctorAppointDetailPage;