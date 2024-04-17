import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../../components/navbar/navbar";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

function DoctorPage() {
    const { user } = useContext(UserContext);
    const [paths, setPaths] = useState({
      front: "/doctor",
      back: "http://18.230.206.131/",
    });

    return(

        <PathContext.Provider value={{ paths, setPaths }}>
            <div className="app">
                <Navbar
                    name={user.name}
                    labels={["Overview", "Pacientes", "Agenda", "Histórico"]}
                    to={[
                        paths.front,
                        `${paths.front}/patients`,
                        `${paths.front}/schedule`,
                        `${paths.front}/appointments`
                    ]}
                />

                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </PathContext.Provider>
    );
}

export default DoctorPage;
