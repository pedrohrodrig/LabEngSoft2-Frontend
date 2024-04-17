import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { professional } from "./objects/profile";
import "react-notifications/lib/notifications.css"
import { NotificationContainer } from "react-notifications";

import OverviewPage from './pages/general/overviewpage/overviewpage';
import PatientsPage from './pages/general/patientspage/patientspage';
import AppointmentsPage from './pages/general/appointmentspage/appointmentspage';
import PatientProfilePage from './pages/general/patientprofilepage/patientprofilepage';
import ProfilePage from './pages/general/profilepage/profilepage';
import ProfileEditPage from "./pages/general/profileeditpage/profileeditpage";
import DocumentsPage from "./pages/general/documentspage/documentspage";
import AppointDetailPage from "./pages/general/appointdetailpage/appointdetailpage";
import SchedulePage from "./pages/general/schedulepage/schedulepage";

import PersonalPage from "./pages/personal/personalpage/personalpage";
import NutriPage from "./pages/nutritionist/nutripage/nutripage";

import PatientPage from "./pages/patient/patientpage/patientpage";
import ServicesPage from "./pages/patient/servicesPage/servicesPage";
import ProfessionalListPage from "./pages/patient/professionalListPage/professionalListPage";
import PatientHistoryPage from "./pages/patient/patientHistoryPage/patientHistoryPage";
import SignUpPage from "./pages/signUpPage/signUpPage";
import PatientHistoryDetailPage from "./pages/patient/patientHistoryDetailPage/appointdetailpage";
import PatientSchedulePage from "./pages/patient/patientSchedulePage/patientSchedulePage";

import LoginPage from "./pages/login/LoginPage/LoginPage";
import RegisterPage from "./pages/login/RegisterPage/RegisterPage";

import NutriDietPage from "./pages/nutritionist/nutridietpage/nutridietpage";
import NutriEvaluationPage from "./pages/nutritionist/nutrievaluationpage/nutrievaluationpage";
import NutriEvolutionPage from "./pages/nutritionist/nutrievolutionpage/nutrievolutionpage";
import NutriAppointDetailPage from "./pages/nutritionist/nutriappointdetailpage/nutriappointdetailpage";

import HomePage from './pages/home/homepage';
import TestPage from './pages/testpage/testpage';
import LayoutPage from './pages/layoutpage/layoutpage';

import "./App.css";

import PatientHomePage from "./pages/patient/patientHomePage/patientHomePage";
import TrainingPage from "./pages/patient/patientTrainingPage/patientTrainingPage";
import DietPage from "./pages/patient/patientDietPage/patientDietPage";
import MedicalPage from "./pages/patient/patientMedicalRegistersPage/patientMedicalRegisterPage";
import { RentService } from "./pages/patient/rentServicePage/rentServicePage";

import "react-notifications/lib/notifications.css"

function App() {
    const [user, setUser] = useState(professional);

    return (
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<HomePage />} />
              <Route path="signup" element={<SignUpPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="test" element={<TestPage />} />
            </Route>

            <Route path="/personal" element={<PersonalPage />}>
              <Route index element={<OverviewPage />} />
              <Route path="patients" element={<PatientsPage />} />
              <Route path="patient" element={<PatientProfilePage />} />
              <Route path="appointments" element={<AppointmentsPage />} />
              <Route path="appointment" element={<AppointDetailPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="profile/edit" element={<ProfileEditPage />} />
              <Route path="documents" element={<DocumentsPage />} />
              <Route path="schedule" element={<SchedulePage />} />
            </Route>

            <Route path="/nutritionist" element={<NutriPage />}>
              <Route index element={<OverviewPage />} />
              <Route path="patients" element={<PatientsPage />} />
              <Route path="patient" element={<PatientProfilePage />} />
              <Route path="appointments" element={<AppointmentsPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="profile/edit" element={<ProfileEditPage />} />
              <Route path="documents" element={<DocumentsPage />} />
              <Route path="schedule" element={<SchedulePage />} />

              <Route path="diet" element={<NutriDietPage />} />
              <Route path="evaluation" element={<NutriEvaluationPage />} />
              <Route path="evolution" element={<NutriEvolutionPage />} />
              <Route path="appointment" element={<NutriAppointDetailPage />} />
            </Route>

            <Route path="/patient" element={<PatientPage/>}>
                <Route index element={<PatientHomePage />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="schedule" element={<PatientSchedulePage/>}/>
                <Route path="professionals" element={<ProfessionalListPage />} />
                <Route path="history" element={<PatientHistoryPage />} />
                <Route path="appointment" element={<PatientHistoryDetailPage />} />
                <Route path="training" element={<TrainingPage />} />
                <Route path="diet" element={<DietPage />} />
                <Route path="medical-registers" element={<MedicalPage />} />
                <Route path="rent-service" element={<RentService />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    );
}
export default App;
