import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

import UserContext from "../../contexts/UserContext";
import PathContext from "../../contexts/PathContext";
import "../../App.css";

function LayoutPage() {
    const { user } = useContext(UserContext);
    //const { path } = useContext(PathContext);
    const [path, setPath] = useState({
        front: "/personal",
        back: "http://127.0.0.1:8000"
    });

    return (
        <div className="app">
            <Navbar name={user.full_name} />
            <div className="app-content">
                <Outlet />
            </div>
        </div>
    );
}

export default LayoutPage;
