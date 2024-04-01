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

import NutriAppointDetailPage from "./pages/nutritionist/nutriappointdetailpage.js/nutriappointdetailpage";
import NutriAppointmentsPage from "./pages/nutritionist/nutriappointmentspage/nutriappointmentspage";
import NutriDietEditPage from "./pages/nutritionist/nutridieteditpage/nutridieteditpage";
import NutriDietPage from "./pages/nutritionist/nutridietpage/nutridietpage";
import NutriEvaluationEditPage from "./pages/nutritionist/nutrievaluationeditpage/nutrievaluationeditpage";
import NutriEvaluationPage from "./pages/nutritionist/nutrievaluationpage/nutrievaluationpage";
import NutriEvolutionEditPage from "./pages/nutritionist/nutrievolutioneditpage/nutrievolutioneditpage";
import NutriEvolutionPage from "./pages/nutritionist/nutrievolutionpage/nutrievolutionpage";
import NutriOverviewPage from "./pages/nutritionist/nutrioverviewpage/nutrioverviewpage";
import NutriPatientProfilePage from "./pages/nutritionist/nutripatientprofilepage/nutripatientprofilepage";
import NutriPatientsPage from "./pages/nutritionist/nutripatientspage/nutripatientspage";
import NutriPaymentsPage from "./pages/nutritionist/nutripaymentspage/nutripaymentspage";
import NutriProfileEditPage from "./pages/nutritionist/nutriprofileeditpage/nutriprofileeditpage";
import NutriProfilePage from "./pages/nutritionist/nutriprofilepage.js/nutriprofilepage";
import NutriSchedulePage from "./pages/nutritionist/nutrischedulepage.js/nutrischedulepage";

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

                        <Route path="nutritionist/appoint" element={<NutriAppointDetailPage/>} />
                        <Route path="nutritionist/appointments" element={<NutriAppointmentsPage/>} />
                        <Route path="nutritionist/diet/edit" element={<NutriDietEditPage/>} />
                        <Route path="nutritionist/diet" element={<NutriDietPage/>} />
                        <Route path="nutritionist/evaluation/edit" element={<NutriEvaluationEditPage/>} />
                        <Route path="nutritionist/evaluation" element={<NutriEvaluationPage/>} />
                        <Route path="nutritionist/evolution/edit" element={<NutriEvolutionEditPage/>} />
                        <Route path="nutritionist/evolution" element={<NutriEvolutionPage/>} />
                        <Route path="nutritionist/" element={<NutriOverviewPage/>} />
                        <Route path="nutritionist/patient/profile" element={<NutriPatientProfilePage/>} />
                        <Route path="nutritionist/patients" element={<NutriPatientsPage/>} />
                        <Route path="nutritionist/payments" element={<NutriPaymentsPage/>} />
                        <Route path="nutritionist/profile/edit" element={<NutriProfileEditPage/>} />
                        <Route path="nutritionist/profile" element={<NutriProfilePage/>} />
                        <Route path="nutritionist/schedule" element={<NutriSchedulePage/>} />

                        <Route path="test" element={<TestPage />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
