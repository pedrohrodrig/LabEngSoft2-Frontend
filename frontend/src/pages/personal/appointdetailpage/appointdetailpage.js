import React, { useContext, useEffect, useState } from "react";
import Title from "../../../components/title/title";
import Textbox from "../../../components/textbox/textbox";
import Button from "../../../components/button/button";
import Popup from "../../../components/popup/popup";
import { useParams } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";
import "./appointdetailpage.css";

function AppointDetailPage({ match }) { // Assume que você está usando react-router-dom para obter o ID da consulta da URL
    const { user } = useContext(UserContext);
    const { id } = useParams(); // Isso captura o 'id' da URL
    const [appointment, setAppointment] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const consultationId = match.params.id; // Obtém o ID da consulta da URL

    useEffect(() => {
        const fetchConsultationDetails = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/consultations/${id}`);
                const data = await response.json();
                setAppointment(data);
            } catch (error) {
                console.error("Erro ao buscar os detalhes da consulta:", error);
            }
        };


        if (id) {
            fetchConsultationDetails();
        }

    }, [id]); // Dependência para re-fetch caso o 'id' mude

    // Verifica se o appointment foi carregado antes de tentar acessar suas propriedades
    if (!appointment) {
        return <div>Carregando detalhes da consulta...</div>;
    }

    // Lógica para lidar com a ação do botão com base no status da consulta
    const handleActionButtonClick = () => {
        // Implemente a lógica para alterar o status da consulta no backend
        console.log("Ação do botão executada");
    };

    // Função para determinar o texto do botão com base no status da consulta
    const getActionButtonText = (status) => {
        switch (status) {
            case "Requested":
                return "Aceitar Consulta";
            case "Awaiting Payment":
                return "Confirmar Pagamento";
            default:
                return "Ação";
        }
    };

    if (!appointment) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="appoint-detail page">
            <div className="header">
                <Title head="Detalhes da Consulta" />
            </div>

            <div className="content">
                <Textbox title="Status" body={appointment.status} />
                <Textbox title="Horário" body={new Date(appointment.scheduled_time).toLocaleString()} />
                {/* Adicione mais campos conforme necessário */}

                <div className="appoint-but">
                    <Button
                        className="grad medium"
                        text={getActionButtonText(appointment.status)}
                        onClick={() => setShowPopup(true)}
                    />
                </div>
            </div>

            {/* Popup de ação */}
            <Popup
                isOpen={showPopup}
                closePopup={() => setShowPopup(false)}
                head={getActionButtonText(appointment.status)}
                body={`Você deseja ${getActionButtonText(appointment.status).toLowerCase()} esta consulta?`}
                buttons={["Cancelar", "Confirmar"]}
                onConfirm={handleActionButtonClick}
            />
        </div>
    );
}

export default AppointDetailPage;
