import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

import Title from "../../../components/title/title";
import PatientList from "../../../components/lists/patientlist/patientlist";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

import "./patientspage.css";

function PatientsPage() {
    const { user } = useContext(UserContext);
    const { paths } = useContext(PathContext);
    const [ patients, setPatients ] = useState([]);

    useEffect(() => {
        axios.get(`${paths.back}/patient/list/${user.id}/`)
        .then(response => {
            setPatients(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [user.id]);

    return (
        <div className="patients page">
            <Title
                head="Pacientes"
                body="Confira os pacientes que se consultam com você"
            />

            <PatientList patients={patients} />
        </div>
    );
}

export default PatientsPage;
