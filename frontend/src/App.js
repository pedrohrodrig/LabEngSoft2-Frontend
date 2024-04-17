import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import PathContext from "./contexts/PathContext";
import { professional } from "./objects/profile";

import OverviewPage from './pages/psychologist/overviewpage/overviewpage';
import PatientsPage from './pages/psychologist/patientspage/patientspage';
import AppointmentsPage from './pages/psychologist/appointmentspage/appointmentspage';
import PaymentsPage from './pages/psychologist/paymentspage/paymentspage';
import PatientProfilePage from './pages/psychologist/patientprofilepage/patientprofilepage';
import ProfilePage from './pages/psychologist/profilepage/profilepage';
import DocumentsPage from "./pages/psychologist/documentspage/documentspage";
import DocDetailPage from "./pages/psychologist/docdetailpage/docdetailpage";
import AppointDetailPage from "./pages/psychologist/appointdetailpage/appointdetailpage";
import HistoryPage from './pages/psychologist/historypage/historypage';
import PsychologistPage from "./pages/psychologist/psychologistpage/psychologistpage";

import TestPage from './pages/testpage/testpage';

import "./App.css";

function App() {
    const [user, setUser] = useState(professional);
    const [path, setPath] = useState({
        front: "/psychologist",
        back: "http://127.0.0.1:8000"
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/psychologist" element={<PsychologistPage />}>

                        <Route index element={<OverviewPage />} />
                        <Route path="patients" element={<PatientsPage />} />
                        <Route path="appointments" element={<AppointmentsPage />} />
                        <Route path="payments" element={<PaymentsPage />} />
                        <Route path="patient/profile" element={<PatientProfilePage />} />
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="documents" element={<DocumentsPage />} />
                        <Route path="doc" element={<DocDetailPage />} />
                        <Route path="appoint/:id" element={<AppointDetailPage />} />
                        <Route path="history" element={<HistoryPage />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
