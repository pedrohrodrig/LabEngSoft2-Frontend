import React from "react";
import "./fileinput.css";

function FileInput({ title, placeholder, handleFileInput, name }) {

  return (
    <div className="fileinput horizontal">
      <h1 className="title">{title}</h1>
      <input
        className="input"
        placeholder={placeholder}
        onChange={handleFileInput}
        name={name}
        type="file"
      ></input>
    </div>
  );
}

export default FileInput;
