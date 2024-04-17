import React from "react";
import "./textInput.css";

function TextInput({ className, title, placeholder, handleTextInput, name, text }) {

    const classes = `textinput ${className}`;

    return (
      <div className={classes}>
        <h1 className="title">{title}</h1>
        <input
          className="input"
          placeholder={placeholder}
          onChange={handleTextInput}
          name={name}
          text={text}
        ></input>
      </div>
    );
};

export default TextInput;