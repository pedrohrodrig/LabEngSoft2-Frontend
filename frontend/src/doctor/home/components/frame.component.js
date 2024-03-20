import React from "react";

export const HighlightedFrame = ({ children }) => {
    const frameStyle = {
        border: '2px solid #f0f0f0', // Bordas destacadas de 2 pixels sólidos
        padding: '2rem', // Preenchimento interno de 10 pixels
        borderRadius: '5px', // Borda arredondada com raio de 5 pixels
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Sombra para destacar o frame
    };

    return <div style={frameStyle}>{children}</div>
}