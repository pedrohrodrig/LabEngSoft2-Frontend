import React from "react";

const training = []

function TrainingPage() {
    return (

        <div className="training page">
            <h1>Página de Treinamentos</h1>
            {training.length === 0 &&
                <>
                    <p>Você ainda não tem treinamentos cadastrados</p>
                </>
            }
        </div>
    );
}

export default TrainingPage;