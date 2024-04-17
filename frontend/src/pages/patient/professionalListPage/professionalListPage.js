import React, { useEffect, useState } from "react";
import Title from "../../../components/title/title";

import { useLocation } from "react-router-dom";
import ProfessionalList from "../../../components/lists/professionallist/professionallist";
import axios from 'axios';


function ProfessionalListPage() {
    const { state } = useLocation();
    const [professionalList, setProfessionalList] = useState([]);
    const setProfessionalURL = () => {
        if (state.title === 'Médico') return 'Doctor';
        if (state.title === 'Nutricionista') return 'Nutritionist';
        if (state.title === 'Psicólogo') return 'Psciologist';
        if (state.title === 'Personal Trainer') return 'Personal';
        return 'Erro';
    }
    const professional = setProfessionalURL();

    const createProfessional = (professional) => {
        return {
            title: professional.first_name + " " + professional.last_name,
            photo: "/images/user.jpeg",
            price: professional.price,
            specialty: "Cardiologia",
            id: professional.id_user
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/${professional}`)
            .then(response => {
                const professional = response.data.map(element => createProfessional(element));
                setProfessionalList(professional);
            })
            .catch(error => {
                console.log(error)
            });
    }, [])

    return (
        <div className="professional-list page">
            <Title
                head={state.title}
                body={"Encontre e contrate profissionais na sua área"}
            />
            <ProfessionalList professionals={professionalList} />

        </div>
    );
}

export default ProfessionalListPage;
