import React from "react";
import Button from "../../components/button/button";

function HomePage() {
    return(
        <div style={{gap: "30px"}} className="home page">
            <h1>Oi Gente ^^</h1>
            <p>Eu sou o Lucas</p>
            <p style={{marginBottom: "10px"}}>Bem vindo ao Apollo</p>

            <Button
                className="grad medium"
                text="Test Page"
                icon="right"
                iconType="arrow-right"
                to="/test"
            />
        </div>
    );
}

export default HomePage;
