import React from "react";
import "./textInput.css";

const TextInput = ({ placeholder, handleTextInput }) => {
    return (
        <div>
            <input className="input" placeholder={placeholder} onChange={handleTextInput}></input>
        </div>
    );
};

export default TextInput;