import { React, useContext, useEffect, useState } from "react";


import axios from "axios";

import "./doctordocumentuploadpage.css";
import Title from "../../components/title/title";
import Button from "../../components/button/button";
import TextInput from "../../components/textInput/textInput";
import FileInput from "../../components/fileinput/fileinput";
import UserContext from "../../contexts/UserContext";

function DoctorDocumentUploadPage() {
  const { user } = useContext(UserContext)
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [definedName, setDefinedName] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const createEndpoint = "http://18.230.206.131/evaluation/create/";

  useEffect(() => {
    axios
      .get(`http://18.230.206.131/evaluation/list/`)
      .then((response) => {
        setUploadedFiles(response.data);
      })
      .catch((err) => console.log(err));
  }, [selectedFile, uploadedFiles]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file === undefined) {
      setSelectedFile(null);
      setSelectedFileName(null);
    } else {
      setSelectedFile(file);
      setSelectedFileName(file.name);
    }
  };

  const handleTextInput = (e) => {
    const name = e.target;
    setDefinedName(name.value);
    console.log(definedName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = createEndpoint;
    const formData = new FormData();
    formData.append("patientId", 1);
    formData.append("patient", 1);
    formData.append("name", definedName);
    formData.append("file", selectedFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleFileDelete = (id) => {
    axios
      .delete(`http://18.230.206.131/evaluation/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const forceDownload = (response, title) => {
    console.log(response);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title + ".pdf");
    document.body.appendChild(link);
    link.click();
  };

  const dowloadWithAxios = (url, title) => {
    axios({
      method: "get",
      url,
      responseType: "arraybuffer",
    })
      .then((response) => {
        forceDownload(response, title);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="evaluation page">
      <div className="header">
        <Title head="Enviar Receita" />
      </div>
      { user.service !== 'doctor' &&
        <div className="button">
        <Button
          className="grad outline small"
          text="Consulta"
          to="/nutritionist/appoint"
        />
        <Button
          className="grad outline small"
          text="Evolução"
          to="/nutritionist/evolution"
        />
        <Button
          className="grad outline small"
          text="Dieta"
          to="/nutritionist/diet"
        />
      </div>}
      <div className="separation">
        <div className="evaluation-content">
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <div className="col">
                <TextInput
                  className="horizontal"
                  title="Nome"
                  placeholder="Nome Arquivo"
                  name="name"
                  handleTextInput={handleTextInput}
                />
                <FileInput
                  handleFileInput={handleFileChange}
                  name="file"
                  placeholder={selectedFileName}
                />
                <button className="evaluation-button" type="submit">
                  Upload
                </button>
              </div>
              <div className="col">
                <h2>Arquivos Enviados</h2>
                {uploadedFiles.map((file) => {
                  return (
                    <div className="uploaded-files">
                      <Button
                        className="grad very-small"
                        text={file.name}
                        onClick={() =>
                          dowloadWithAxios(
                            `http://18.230.206.131${file.file}`,
                            file.id
                          )
                        }
                      />
                      <Button
                        className="black outline very-small"
                        text="Deletar"
                        onClick={() => handleFileDelete(file.id)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorDocumentUploadPage;