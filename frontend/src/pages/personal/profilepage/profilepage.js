import React, { useContext } from "react";
import Profile from "../../../components/profile/profile";
import Textbox from "../../../components/textbox/textbox";
import UserContext from "../../../contexts/UserContext";
import "./profilepage.css";

function ProfilePage() {
    const { user } = useContext(UserContext); // 'user' agora representa o objeto 'professional'

    return (
        <div className="profile page">
            <div className="header">
                {/* Atualizar para usar os novos atributos */}
                <Profile name={user.full_name} info={`R$${user.consultation_price} p/ consulta`} edit={true} to="/overview" profilePicture={user.profile_picture} />
            </div>

            <div className="content">
                <div className="profile-text">
                    <div className="grid">
                        <div className="col">
                            {/* Converter 'date_of_birth' para 'idade' */}
                            <Textbox className="horizontal" title="Idade" body={new Date(new Date() - new Date(user.date_of_birth)).getUTCFullYear() - 1970} />
                        </div>
                        <div className="col">
                            <Textbox className="horizontal" title="Telefone" body={user.phone_number} />
                        </div>
                    </div>
                    <Textbox className="horizontal" title="Email" body={user.email} />
                    <Textbox title="Documento" body={user.document} />
                    <Textbox title="Horário de Atendimento" body={`Manhã: ${user.start_time_morning} - ${user.end_time_morning} | Tarde: ${user.start_time_afternoon} - ${user.end_time_afternoon}`} />
                    {/* Removido 'Modalidade' e 'Biografia', adicione de volta se necessário */}
                </div>

                {/* Outras seções podem ser adicionadas conforme necessário */}
            </div>
        </div>
    );
}

export default ProfilePage;
