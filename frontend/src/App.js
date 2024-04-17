import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { professional } from "./objects/profile";

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

import NutriDietEditPage from "./pages/nutritionist/nutridieteditpage/nutridieteditpage";
import NutriDietPage from "./pages/nutritionist/nutridietpage/nutridietpage";
import NutriEvaluationPage from "./pages/nutritionist/nutrievaluationpage/nutrievaluationpage";
import NutriEvolutionPage from "./pages/nutritionist/nutrievolutionpage/nutrievolutionpage";
import NutriAppointDetailPage from "./pages/nutritionist/nutriappointdetailpage/nutriappointdetailpage";

import HomePage from './pages/home/homepage';
import TestPage from './pages/testpage/testpage';
import LayoutPage from './pages/layoutpage/layoutpage';

import "./App.css";

function App() {
    const [ user, setUser ] = useState(professional);

    return (
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<HomePage />} />
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
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    );
}

export default App;
