import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import "../../App.css";

function LayoutPage() {
    return(
        <div className="home-app">
            <div className="home-content">
                <Outlet />
            </div>
        </div>
    );
}

export default LayoutPage;
