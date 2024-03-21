import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import { professional } from "./objects/profile";

import LayoutPage from './pages/layoutpage/layoutpage';
import HomePage from './pages/home/homepage';
import OverviewPage from './pages/personal/overviewpage/overviewpage';
import PatientsPage from './pages/personal/patientspage/patientspage';
import AppointmentsPage from './pages/personal/appointmentspage/appointmentspage';
import PaymentsPage from './pages/personal/paymentspage/paymentspage';
import PatientProfilePage from './pages/personal/patientprofilepage/patientprofilepage';
import ProfilePage from './pages/personal/profilepage/profilepage';
import DocumentsPage from "./pages/personal/documentspage/documentspage";
import DocDetailPage from "./pages/personal/docdetailpage/docdetailpage";
import AppointDetailPage from "./pages/personal/appointdetailpage/appointdetailpage";
import ServicesPage from "./pages/patient/servicesPage/servicesPage";
import ProfessionalListPage from "./pages/patient/professionalListPage/professionalListPage";
import PatientAppointmentsHistoryPage from "./pages/patient/appointmentsHistoryPage/appointmentsHistoryPage";
import SignUpPage from "./pages/signUpPage/signUpPage";

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

                        <Route path="services" element={<ServicesPage />} />
                        <Route path="professionals" element={<ProfessionalListPage />} />
                        <Route path="patient/history" element={<PatientAppointmentsHistoryPage />} />
                        <Route path="signup" element={<SignUpPage/>} />

                        <Route path="test" element={<TestPage />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
