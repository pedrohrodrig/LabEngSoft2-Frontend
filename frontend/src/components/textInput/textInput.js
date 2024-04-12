import React from "react";
import "./textInput.css";

function TextInput({ className, title, placeholder, handleTextInput, name }) {

    const classes = `textinput ${className}`;

    return (
      <div className={classes}>
        <h1 className="title">{title}</h1>
        <input
          className="input"
          placeholder={placeholder}
          onChange={handleTextInput}
          name={name}
        ></input>
      </div>
    );
};

export default TextInput;