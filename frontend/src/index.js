import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutPage from './pages/layoutpage/layoutpage';
import OverviewPage from './pages/professional/overviewpage/overviewpage';

import PatientsPage from './pages/patientspage/patientspage';
import AppointmentsPage from './pages/appointmentspage/appointmentspage';
import PaymentsPage from './pages/paymentspage/paymentspage';
import TestPage from './pages/testpage/testpage';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>

                    <Route index element={<LayoutPage />} />
                    <Route path="overview" element={<OverviewPage />} />

                    <Route path="patients" element={<PatientsPage />} />
                    <Route path="appointments" element={<AppointmentsPage />} />
                    <Route path="payments" element={<PaymentsPage />} />

                    <Route path="test" element={<TestPage />} />
                
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
