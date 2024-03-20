import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

import UserContext from "../../contexts/UserContext";
import "../../App.css";

function LayoutPage() {
    const { user } = useContext(UserContext);

    return(
        <div className="app">
            <Navbar name={user.name}/>
            <div className="app-content">
                <Outlet />
            </div>
        </div>
    );
}

export default LayoutPage;
