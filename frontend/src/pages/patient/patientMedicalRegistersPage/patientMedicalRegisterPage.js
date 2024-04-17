import React from "react";

const medical = []

function MedicalPage() {
    return (

        <div className="Medical page">
            <h1>Registros médicos</h1>
            {medical.length === 0 &&
                <>
                    <p>Você ainda não tem registros médicos</p>
                </>
            }
        </div>
    );
}

export default MedicalPage;