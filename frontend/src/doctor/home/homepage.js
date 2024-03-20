import React from 'react';

import "./homepage.css";
import { HorizontalCardList } from '../../components/horizontal-cardlist/horizontal-cardlist';
import { HighlightedFrame } from './components/frame.component';
import patientList from '../../objects/patients';
import AppointmentList from '../../components/appointmentlist/appointmentlist';

const cards = [
    {
        className: 'card',
        clickable: true,
        title: 'Consultas',
        body1: '',
        path: ''
    },
    {
        className: 'card',
        clickable: true,
        title: 'Pacientes',
        body1: '',
        path: ''
    },
    {
        className: 'card',
        clickable: true,
        title: 'Eventos próximos',
        body1: '',
        path: ''
    }
]

function HomePage() {
    return (
        <div className="home page" >
            <HorizontalCardList cards={cards} />
            <HighlightedFrame
                children={
                    <div className="appointments">
                        <p className="appointments-title">Consultas de Hoje</p>
                        <AppointmentList patients={patientList} />
                    </div>
                }
            />
        </div>
    );
}

export default HomePage;