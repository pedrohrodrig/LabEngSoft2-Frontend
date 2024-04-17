import React from "react";

const diet = []

function DietPage() {
    return (

        <div className="diet page">
            <h1>Dietas</h1>
            {diet.length === 0 &&
                <>
                    <p>Você ainda não tem dietas cadastrados</p>
                </>
            }
        </div>
    );
}

export default DietPage;