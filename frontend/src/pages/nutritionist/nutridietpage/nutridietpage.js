import { React, useEffect, useState } from "react";
import Title from "../../../components/title/title";
import Button from "../../../components/button/button";
import TextInput from "../../../components/textInput/textInput";
import FileInput from "../../../components/fileinput/fileinput";

import axios from "axios";

import "./nutridietpage.css";

function NutriDietPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [definedName, setDefinedName] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const createEndpoint = 'http://127.0.0.1:8000/diet/create/';

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/diet/list/`)
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
      .delete(`http://127.0.0.1:8000/diet/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  const forceDownload = (response, title) => {
    console.log(response)
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', title+'.pdf')
    document.body.appendChild(link)
    link.click()
  }

  const dowloadWithAxios = (url, title) => {
    axios({
      method: 'get',
      url,
      responseType: 'arraybuffer'
    }).then((response)=>{
      forceDownload(response, title)
    }).catch((err) => console.log(err));
  }

  return (
    <div className="diet page">
      <div className="header">
        <Title head="Plano Alimentar" />
      </div>
      <div className="button">
        <Button
          className="grad outline small"
          text="Consulta"
          to="/nutritionist/appointment"
        />
        <Button
          className="grad outline small"
          text="Avaliação"
          to="/nutritionist/evaluation"
        />
        <Button
          className="grad outline small"
          text="Evolução"
          to="/nutritionist/evolution"
        />
      </div>
      <div className="separation">
        <div className="diet-content">
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
                <button className="diet-button" type="submit">
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
                            `http://127.0.0.1:8000${file.file}`,
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

export default NutriDietPage;
