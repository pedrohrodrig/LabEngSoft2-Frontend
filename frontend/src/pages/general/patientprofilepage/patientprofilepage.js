import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

import { Link } from "react-router-dom";
import Profile from "../../../components/profile/profile";
import Textbox from "../../../components/textbox/textbox";
import DocumentList from "../../../components/lists/documentlist/documentlist";

import documentList from "../../../objects/documents";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

import "./patientprofilepage.css";

function PatientProfilePage() {
    const { user } = useContext(UserContext);
    const { paths } = useContext(PathContext);
    const [ patient, setPatient ] = useState({});

    const location = useLocation();
    const patientId = new URLSearchParams(location.search).get('id');

    useEffect(() => {
        axios.get(`${paths.back}/patient/${patientId}/`)
        .then(response => {
            setPatient(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [user.id]);

    function setAge(dob) {
        const date = new Date(dob);
        const diff_ms = Date.now() - date.getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    return (
        <div className="patient-profile page">
            <div className="header">
                <Profile name={patient.name} info={false} to={`${paths.front}/patients`} />
            </div>

            <div className="content">
                <div className="profile-text">
                <div className="grid">
                    <div className="col">
                        <Textbox className="horizontal" title="Idade" body={setAge(patient.date_of_birth)} />
                        <Textbox className="horizontal" title="Altura" body={`${patient.height}cm`} />
                    </div>
                    <div className="col">
                        <Textbox className="horizontal" title="BMI" body={`${patient.bmi}%`} />
                        <Textbox className="horizontal" title="Peso" body={`${patient.weight}Kg`} />
                    </div>
                </div>
                    <Textbox className="horizontal" title="Telefone" body={patient.phone_number} />
                    <Textbox className="horizontal" title="Email" body={patient.email} />
                    <Textbox
                        title="Histórico Médico"
                        body={patient.history}
                    />
                </div>

                <div className="extra">
                    <div className="doc-header">
                        <h1>Documentos</h1>
                        <Link to={`${paths.front}/documents`} >Ver Todos</Link>
                    </div>
                    <DocumentList className="patient-docs" small={true} documents={documentList} />
                </div>
            </div>
        </div>
    );
}

export default PatientProfilePage;
