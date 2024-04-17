import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../../components/navbar/navbar";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

function NutriPage() {
    const { user } = useContext(UserContext);
    const [ paths, setPaths ] = useState({
        front: "/nutri",
        back: "http://127.0.0.1:8000"
    });

    return(
        <PathContext.Provider value={{ paths, setPaths }}>
            <div className="app">
                <Navbar
                    name={user.name}
                    labels={["Overview", "Pacientes", "Agenda", "Histórico"]}
                    to={["/nutri", "/nutri/patients", "/nutri/schedule", "/nutri/appointments"]}
                />

                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </PathContext.Provider>
    );
}

export default NutriPage;
