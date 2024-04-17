import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import { professional } from "./objects/profile";
import "react-notifications/lib/notifications.css"
import { NotificationContainer } from "react-notifications";

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
import PatientHistoryPage from "./pages/patient/patientHistoryPage/patientHistoryPage";
import SignUpPage from "./pages/signUpPage/signUpPage";
import PatientHistoryDetailPage from "./pages/patient/patientHistoryDetailPage/appointdetailpage";
import SchedulePage from "./pages/schedulepage/schedulepage";

import LoginPage from "./pages/login/LoginPage/LoginPage";
import RegisterPage from "./pages/login/RegisterPage/RegisterPage";

import NutriAppointDetailPage from "./pages/nutritionist/nutriappointdetailpage/nutriappointdetailpage";
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
import PatientHomePage from "./pages/patient/patientHomePage/patientHomePage";
import TrainingPage from "./pages/patient/patientTrainingPage/patientTrainingPage";
import DietPage from "./pages/patient/patientDietPage/patientDietPage";
import MedicalPage from "./pages/patient/patientMedicalRegistersPage/patientMedicalRegisterPage";
import { RentService } from "./pages/patient/rentServicePage/rentServicePage";


import "react-notifications/lib/notifications.css"
import LoginPage from "./pages/login/LoginPage/LoginPage";
import { NotificationContainer } from "react-notifications";
import RegisterPage from "./pages/login/RegisterPage/RegisterPage";

function App() {
    const [user, setUser] = useState(professional);

    return (
      <>
        <NotificationContainer />
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
                        <Route path="schedule" element={<SchedulePage />} />

                        {/* Patient URLs */}
                        <Route path="services" element={<ServicesPage />} />
                        <Route path="professionals" element={<ProfessionalListPage />} />
                        <Route path="history" element={<PatientHistoryPage />} />
                        <Route path="patient-appointment" element={<PatientHistoryDetailPage />} />
                        <Route path="patient-home" element={<PatientHomePage />} />
                        <Route path="patient-training" element={<TrainingPage />} />
                        <Route path="patient-diet" element={<DietPage />} />
                        <Route path="patient-medical-registers" element={<MedicalPage />} />
                        <Route path="rent-service" element={<RentService />} />

                        <Route path="signup" element={<SignUpPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />

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
      </>
    );
}
export default App;
