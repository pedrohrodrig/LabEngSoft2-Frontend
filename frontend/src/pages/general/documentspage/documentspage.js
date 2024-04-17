import React from "react";
import Title from "../../../components/title/title";
import DocumentList from "../../../components/lists/documentlist/documentlist";

import documentList from "../../../objects/documents";
import "./documentspage.css";

function DocumentsPage() {
    // const { user } = useContext(UserContext);
    // const patients = patientList.filter((patient) => {
    //     return user.patients.includes(patient.id)
    // });

    return (
        <div className="documents page">
            <Title
                head="Documentos"
                body="Veja os documentos gerados em cada consutla"
            />

            <DocumentList documents={documentList} />
        </div>
    );
}

export default DocumentsPage;
