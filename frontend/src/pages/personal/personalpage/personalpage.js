import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../../components/navbar/navbar";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

function PersonalPage() {
    const { user } = useContext(UserContext);
    const [ paths, setPaths ] = useState({
        front: "/personal",
        back: "http://127.0.0.1:8000"
    });

    return (
        <PathContext.Provider value={{ paths, setPaths }}>
            <div className="app">
                <Navbar
                    name={user.name}
                    labels={["Overview", "Pacientes", "Agenda", "Histórico"]}
                    to={["/personal", "/personal/patients", "/personal/schedule", "/personal/appointments"]}
                />

                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </PathContext.Provider>
    );
}

export default PersonalPage;
