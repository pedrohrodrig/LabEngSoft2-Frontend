import React, {useContext, useEffect, useState} from "react";

import Title from "../../../components/title/title";
import Button from "../../../components/button/button"
import Textbox from "../../../components/textbox/textbox";
import { useLocation } from 'react-router-dom';
import UserContext from "../../../contexts/UserContext";
import axios from 'axios';

import './rentServicePage.css'
import NewEventModal from "../../../components/neweventmodal/neweventmodal";


export const RentService = () => {
    const { user } = useContext(UserContext);
    const location = useLocation();
    const [professional, setProfessional] = useState([]);
    const [addNewEvent, setAddNewEvent] = useState(false);
    const [createdAppointment, setCreatedAppointment] = useState(false);
    const [professionalId, setProfessionalId] = useState();
    const number = location.search.split('?')[1];

    const createAppointment = (newEvent) => {
        return {
            id_user_professional: professionalId,
            patient: user.id,
            start_datetime: newEvent.start,
            end_datetime: newEvent.end,
            is_online: newEvent.type === "Online",
            cancelled: false
        }
    }

    const handleAddEventOpen = () => {
        setAddNewEvent(true);
    }

    const handleAddEventClose = () => {
        setAddNewEvent(false);
    }

    const handleAddEvent = (newEvent) => {
        const appointment = createAppointment(newEvent);
        axios.post('http://localhost:8000/appointment/', appointment)
            .then(response => {
                console.log(response);
                setCreatedAppointment(true);
            })
            .catch(error => {
                console.log(error)
            });
    }

    const createProfessional = (professional) => {
        return {
            title: professional.first_name + " " + professional.last_name,
            photo: "/images/user.jpeg",
            price: professional.price,
            specialty: "Cardiologia",
            email: professional.email,
            id: professional.id_user,
            bio: professional.bio,
            phone: professional.phone,
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/Doctor_from_id/${number}/`)
            .then(response => {
                const createdProfessional = response.data.map(element => createProfessional(element));
                setProfessional(createdProfessional);
                setProfessionalId(number);
            })
            .catch(error => {
                console.log(error)
            });
    }, [])

    return (
        <div className="rent-service page">
            <Title head={'Contratar Serviço'} body={'Aqui você pode conferir os dados do profissional e contratar seus serviços'} />
            <div className="content">
                <div className="profile-text">
                    <div className="grid">
                        <div className="col">
                            {professional.length > 0 ?
                                <div className="professional-info">
                                    <Textbox className="horizontal" title="Nome" body={professional[0].title} />
                                    <Textbox className="horizontal" title="Especialidade" body={professional[0].specialty} />
                                    <Textbox className="horizontal" title="Preço da consulta" body={'R$ ' + professional[0].price} />
                                    <Textbox className="horizontal" title="Email" body={professional[0].email} />
                                    <Button className='grad medium' text='Agendar Consulta' onClick={handleAddEventOpen}/>
                                </div>
                                :
                                <>
                                    <Textbox className="horizontal" title="Ops" body={'Não foi possível encontrar o profissional selecionado'} />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {addNewEvent && (
                <NewEventModal onAdd={handleAddEvent} onClose={handleAddEventClose} />
            )}
        </div>
    )
}