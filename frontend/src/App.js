import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="app-content">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
