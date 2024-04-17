import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../../components/navbar/navbar";
import UserContext from "../../../contexts/UserContext";
import PathContext from "../../../contexts/PathContext";

function PsychologistPage() {
    const { user } = useContext(UserContext);
    const [path, setPath] = useState({
        front: "/psychologist",
        back: "http://127.0.0.1:8000"
    });

    return (
        <PathContext.Provider value={{ path, setPath }}>
            <div className="app">
                <Navbar name={user.full_name} />
                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </PathContext.Provider>
    );
}

export default PsychologistPage;