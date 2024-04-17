import React, { useContext, useState } from "react";
import Profile from "../../../components/profile/profile";
import TextInput from "../../../components/textInput/textInput";
import Button from "../../../components/button/button";
import Dropdown from "../../../components/dropdown/dropdown";

import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

import "./profileeditpage.css";

function ProfileEditPage() {
  const { user } = useContext(UserContext);
  const { paths } = useContext(PathContext);
  const [ profile, setProfile ] = useState({...user});

  const options = [
    { value: "Online", label: "Online" },
    { value: "Presencial", label: "Presencial" }
  ];

  function updateAge(event) {
    setProfile({...profile, phone: event.target.value});
  }

  function updatePhone(event) {
    setProfile({...profile, age: event.target.value});
  }

  function updateOnline(event) {
    setProfile({...profile, appointment: event.value});
  }

  function updateAddress(event) {
    setProfile({...profile, address: event.target.value});
  }

  function updateBio(event) {
    setProfile({...profile, bio: event.target.value});
  }

  function editProfile() {
    console.log(profile);
  }

  return (
    <div className="profile-edit page">
      <div className="header">
        <Profile
          name={user.name}
          info={`R$${user.price} p/ consulta`}
          edit={false}
          to={`${paths.front}`}
        />
        <Button
          className="grad outline small"
          text="Salvar"
          // to={`${paths.front}/profile`}
          onClick={editProfile}
        />
      </div>

      <div className="content">
        <div className="profile-edit-text">
          <div className="grid">
            <div className="col">
              <TextInput
                className="horizontal"
                title="Nascimento"
                placeholder={user.age}
                handleTextInput={updateAge}
              />
            </div>
            <div className="col">
              <TextInput
                className="horizontal"
                title="Telefone"
                placeholder={user.phone}
                handleTextInput={updatePhone}
              />
            </div>
          </div>
          <Dropdown
            className="horizontal"
            title="Modalidade"
            options={options}
            placeholder={user.appointment}
            handleSelectedOptions={updateOnline}
          />

          <TextInput
            className="horizontal"
            title="Endereço"
            placeholder={user.address}
            handleTextInput={updateAddress}
          />
          <TextInput
            className="horizontal"
            title="Biografia"
            placeholder={user.bio}
            handleTextInput={updateBio}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileEditPage;
