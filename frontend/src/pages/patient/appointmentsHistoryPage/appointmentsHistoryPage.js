import React from "react";
import Title from "../../../components/title/title";

import { Table, Button } from "react-bootstrap";

import appointmentsList from "./appointments";

function PatientAppointmentsHistoryPage() {
    return (
        <div className="page">
            <Title
                head="Histórico de Consultas"
                body="Veja o histórico de todas as suas consultas marcadas"
            />
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th style={{width: "35%"}}>Nome</th>
                  <th style={{width: "25%"}}>Serviço</th>
                  <th style={{width: "25%"}}>Data</th>
                  <th style={{width: "15%"}}></th>
                </tr>
              </thead>
              <tbody>
                {appointmentsList.map((appointment, idx) => {
                  return (
                    <tr>
                      <td>{appointment.professionalName}</td>
                      <td>{appointment.professionalService}</td>
                      <td>{appointment.date}</td>
                      <td className="d-flex justify-content-center">
                        <Button variant="primary" size="sm">Detalhes</Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
        </div>
    );
}

export default PatientAppointmentsHistoryPage;
