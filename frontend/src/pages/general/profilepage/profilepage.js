import React, { useContext } from "react";
import Profile from "../../../components/profile/profile";
import Textbox from "../../../components/textbox/textbox";

import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

import "./profilepage.css";

function ProfilePage() {
    const { user } = useContext(UserContext);
    const { paths } = useContext(PathContext);

    return (
        <div className="profile page">
            <div className="header">
                <Profile name={user.name} info={`R$${user.price} p/ consulta`} edit={true} to={`${paths.front}`} />
            </div>

            <div className="content">
                <div className="profile-text">
                <div className="grid">
                    <div className="col">
                        <Textbox className="horizontal" title="Idade" body={user.age} />
                    </div>
                    <div className="col">
                        <Textbox className="horizontal" title="Telefone" body={user.phone} />

                    </div>
                </div>
                    <Textbox className="horizontal" title="Modalidade" body={user.appointment} />
                    <Textbox title="Endereço" body={user.address} />
                    <Textbox title="Biografia" body={user.bio} />
                </div>

                <div className="extra">
                    <div className="doc-header">
                        <h1>Atendimento</h1>
                        {/* <Link to="/documents" >Ver Todos</Link> */}
                    </div>

                    <div className="calendar"></div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
