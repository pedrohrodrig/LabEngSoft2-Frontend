import React from "react";
import UserImage from "../../assets/user.jpeg"

import "./generalinfo.css"

function GeneralInfo({ name, age, height, weight }) {
    return (
        <div className="GeneralInfo">
            <div className="block">
                <img src={UserImage} alt="Imagem do cartão" className="card-image" />
                <div className="column">
                    <p className="title">Nome: </p>
                    <p className="body">{name}</p>
                </div>
            </div>
            <div className="block">
                <div className="card-info">
                    <div className="column">
                        <p className="title">Idade: </p>
                        <p className="body">{age}</p>
                    </div>
                    <div className="column">
                        <p className="title">Altura: </p>
                        <p className="body">{height}</p>
                    </div>
                    <div className="column">
                        <p className="title">Peso: </p>
                        <p className="body">{weight}</p>
                    </div>
                    <div className="column">
                        <p className="title">Índice de massa corporal: </p>
                        <p className="body">{parseFloat((weight / (height / 100 * height / 100)).toFixed(1))}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralInfo;
