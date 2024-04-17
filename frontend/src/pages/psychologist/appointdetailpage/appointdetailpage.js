import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import Button from "../../../components/button/button";
import Popup from "../../../components/popup/popup";
import UserContext from "../../../contexts/UserContext";
import "./appointdetailpage.css";

function AppointDetailPage() {
    const { id } = useParams();
    const [appointment, setAppointment] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        async function fetchConsultationDetails() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/consultation/${id}`);
                setAppointment(response.data);
            } catch (error) {
                console.error("Erro ao buscar os detalhes da consulta:", error);
            }
        }

        fetchConsultationDetails();
    }, [id]);

    const handleStatusChange = async (newStatus) => {
        try {
            const response = await axios.patch(`http://127.0.0.1:8000/consultation/${id}/`, {
                status: newStatus
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log("Updated data:", response.data);
            setAppointment(response.data);
            setShowPopup(false);
        } catch (error) {
            console.error("Erro ao alterar o status da consulta:", error);
        }
    };


    if (!appointment) {
        return <div>Carregando detalhes da consulta...</div>;
    }

    const actionButton = appointment && (appointment.status === "Requested" ?
        { text: "Aceitar Consulta", action: () => handleStatusChange("Awaiting Payment") } :
        appointment.status === "Awaiting Payment" && appointment.payment_proof ?
            { text: "Confirmar Pagamento", action: () => handleStatusChange("Confirmed") } :
            null);

    return (
        <div className="appoint-detail page">
            <div className="header">
                <Title head="Detalhes da Consulta" />
            </div>

            <div className="content">
                <Textbox title="Status" body={appointment.status} />
                <Textbox title="Horário" body={new Date(appointment.scheduled_time).toLocaleString()} />
                {appointment.payment_proof && (
                    <Button
                        className="grad medium"
                        text="Baixar Comprovante de Pagamento"
                        to={appointment.payment_proof}
                        icon="download"
                        iconType="download"
                        newTab={true}
                    />
                )}
                {actionButton && (
                    <div className="appoint-but">
                        <Button
                            className="grad medium"
                            text={actionButton.text}
                            onClick={() => setShowPopup(true)}
                        />
                    </div>
                )}
            </div>

            {showPopup && (
                <Popup
                    isOpen={showPopup}
                    closePopup={() => setShowPopup(false)}
                    head="Confirmação"
                    body={`Você deseja ${actionButton.text.toLowerCase()} esta consulta?`}
                    buttons={["Cancelar", "Confirmar"]}
                    onConfirm={actionButton.action}
                />
            )}
        </div>
    );
}

export default AppointDetailPage;
