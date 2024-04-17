import React, { useContext } from "react";
import Profile from "../../../components/profile/profile";
import TextInput from "../../../components/textInput/textInput";
import Button from "../../../components/button/button";

import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

import "./nutriprofileeditpage.css";

function NutriProfileEditPage() {
  const { user } = useContext(UserContext);
  const { paths } = useContext(PathContext);

  return (
    <div className="profile-edit page">
      <div className="header">
        <Profile
          name={user.name}
          info={`R$${user.price} p/ consulta`}
          edit={false}
          to="/nutritionist"
        />
        <Button
          className="grad outline small"
          text="Salvar"
          to={`${paths.front}/profile`}
        />
      </div>

      <div className="content">
        <div className="profile-edit-text">
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Idade"
                placeholder={user.age}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Telefone"
                placeholder={user.phone}
              />
            </div>
          </div>
          <TextInput
            className="horizontal"
            title="Modalidade"
            placeholder={user.appointment}
          />
          <TextInput title="Endereço" placeholder={user.address} />
          <TextInput title="Biografia" placeholder={user.bio} />
        </div>
      </div>
    </div>
  );
}

export default NutriProfileEditPage;
