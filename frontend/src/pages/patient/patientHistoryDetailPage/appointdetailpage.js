import React, { useContext, useState, useEffect } from "react";
import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import HorizontalCard from "../../../components/horizontalcard/horizontalcard";
import DocumentList from "../../../components/lists/documentlist/documentlist";
import Button from "../../../components/button/button";
import Popup from "../../../components/popup/popup";

import documentList from "../../../objects/documents";
import UserContext from "../../../contexts/UserContext";
import "./appointdetailpage.css";
import { useLocation } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import axios from "axios";

function PatientHistoryDetailPage() {
  const { user } = useContext(UserContext);
  const [ avaliation, setAvaliation ] = useState(false);
  const [ cancelation, setCancelation ] = useState(false);
  const [ appointment, setAppointment ] = useState();
  const location = useLocation();
  const number = location.search.split('?')[1];

   const formatDate = (date) => {
        return format(parseISO(date), "dd MMM yyyy ' - ' HH:mm");
    }

    const appointmentStatus = (status) => {
        if (status === 1) return "Confirmada";
        else if (status === 2) return "Finalizada";
        else return "Cancelada"
    }

    const createAppointment = (newAppointment) => {
        return {
            id: newAppointment.id,
            patient: newAppointment.patient.first_name + " " + newAppointment.patient.last_name,
            patientid: newAppointment.patient.id_user,
            phone: newAppointment.patient.phone,
            photo: "/images/user.jpeg",
            professional: user.name,
            professionalid: newAppointment.id_user_professional,
            date: "",
            hour: "",
            start_timestamp: formatDate(newAppointment.start_datetime),
            end_timestamp: formatDate(newAppointment.end_datetime),
            status: appointmentStatus(newAppointment.status),
            type: "Presencial",
            address: user.address
        }
    }

    useEffect(() => {
        axios
          .get(`http://18.230.206.131/appointment/${number}`)
          .then((response) => {
            console.log(response.data);
            const newAppointment = createAppointment(response.data);
            setAppointment(newAppointment);
          })
          .catch((error) => {
            console.log(error);
          });
    }, []);


   return (
        <div className="appoint-detail page">
            { appointment ? (
                <div>
                <div className="header">
                <Title head="Detalhes da Consulta" />
            </div>

            <div className="content">
                <div className="profile-text">
                    <div className="grid">
                        <div className="col">
                            <div className="cardbox">
                                <Textbox title="Paciente" />
                                <HorizontalCard className="small" image={appointment.photo} title={appointment.patient} to={`/doctor-patient-profile`}  />
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
                        {appointment.status === 'Confirmada' &&
                            <Button className="black medium outline" text="Cancelar" icon="left" iconType="x" onClick={() => setCancelation(true)} />
                        }
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
                number={appointment.id}
            />
            </div>
            ) : (
            <div>
                <Title head={'Ops'} body={'Não foi possível encontrar a consulta desejada'}/>
            </div>
            ) }
        </div>
    );
}

export default PatientHistoryDetailPage;
