import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import { professional } from "./objects/profile";

import LayoutPage from './pages/layoutpage/layoutpage';
import HomePage from './pages/home/homepage';
import OverviewPage from './pages/professional/overviewpage/overviewpage';
import PatientsPage from './pages/professional/patientspage/patientspage';
import AppointmentsPage from './pages/professional/appointmentspage/appointmentspage';
import PaymentsPage from './pages/professional/paymentspage/paymentspage';
import PatientProfilePage from './pages/professional/patientprofilepage/patientprofilepage';
import ProfilePage from './pages/professional/profilepage/profilepage';
import DocumentsPage from "./pages/professional/documentspage/documentspage";
import DocDetailPage from "./pages/professional/docdetailpage/docdetailpage";
import AppointDetailPage from "./pages/professional/appointdetailpage/appointdetailpage";

import TestPage from './pages/testpage/testpage';

import "./App.css";

function App() {
    const [ user, setUser ] = useState(professional);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutPage />}>

                        <Route index element={<HomePage />} />
                        <Route path="overview" element={<OverviewPage />} />
                        <Route path="patients" element={<PatientsPage />} />
                        <Route path="appointments" element={<AppointmentsPage />} />
                        <Route path="payments" element={<PaymentsPage />} />
                        <Route path="patient/profile" element={<PatientProfilePage />} />
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="documents" element={<DocumentsPage />} />
                        <Route path="doc" element={<DocDetailPage />} />
                        <Route path="appoint" element={<AppointDetailPage />} />


                        <Route path="test" element={<TestPage />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
