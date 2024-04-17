import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../../components/navbar/navbar";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

function PatientPage() {
  const { user } = useContext(UserContext);
  const [paths, setPaths] = useState({
    front: "/patient",
    back: "http://18.230.206.131/",
  });

  return (
    <PathContext.Provider value={{ paths, setPaths }}>
      <div className="app">
        <Navbar
          name={user.name}
          labels={["Overview", "Serviços", "Agenda", "Histórico"]}
          to={[
            paths.front,
            `${paths.front}/services`,
            `${paths.front}/schedule`,
            `${paths.front}/history`,
          ]}
        />

        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </PathContext.Provider>
  );
}

export default PatientPage;
