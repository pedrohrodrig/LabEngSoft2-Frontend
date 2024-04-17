import { React, useState, useEffect } from "react";
import Title from "../../../components/title/title";
import DocumentList from "../../../components/lists/documentlist/documentlist";

import axios from "axios";

import "./documentspage.css";

function DocumentsPage() {
  // const { user } = useContext(UserContext);
  // const patients = patientList.filter((patient) => {
  //     return user.patients.includes(patient.id)
  // });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedEvaluations, setUploadedEvaluations] = useState([]);
  const [uploadedDiets, setUploadedDiets] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/evaluation/list/`)
      .then((response) => {
        setUploadedEvaluations(response.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`http://127.0.0.1:8000/diet/list/`)
      .then((response) => {
        setUploadedDiets(response.data);
      })
      .catch((err) => console.log(err));
    setUploadedFiles([...uploadedEvaluations, ...uploadedDiets]);
  }, [uploadedEvaluations, uploadedDiets]);

  return (
    <div className="documents page">
      <Title head="Documentos" body="Veja os documentos do paciente" />
      <DocumentList documents={uploadedFiles} />
    </div>
  );
}

export default DocumentsPage;
