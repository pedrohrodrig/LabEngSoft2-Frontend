import React from "react";
import professionals from "../professionalListPage/professionals";
import Title from "../../../components/title/title";
import { useLocation } from 'react-router-dom';


import Textbox from "../../../components/textbox/textbox";

export const RentService = () => {
    const location = useLocation();
    const numero = location.search[1];

    return (
        <div className="rent-service page">
            <Title head={'Contratar Serviço'} body={'Aqui você pode conferir os dados do profissional e contratar seus serviços'} />
            <div className="content">
                <div className="profile-text">
                    <div className="grid">
                        <div className="col">
                            <Textbox className="horizontal" title="Nome" body={professionals[numero].title} />
                            <Textbox className="horizontal" title="Especialidade" body={professionals[numero].specialty} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}