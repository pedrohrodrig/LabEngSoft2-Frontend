import React from "react";
import Title from "../../../components/title/title";
import { Card, Container, Row, Col } from "react-bootstrap";
import professionals from "./professionals";

import { useLocation } from "react-router-dom";


function ProfessionalListPage() {
    const { state } = useLocation();

    return (
        <div className="professional-list page">
            <Title
                head={state.title}
                body={"Encontre e contrate profissionais na sua área"}
            />
            {/* TODO: adicionar filtragem e busca por nome */}
            <Row xs={1} md={2} className="overflow-auto">
              {professionals.map((professional, i) => {
                  return (
                    <Col className="d-flex justify-content-center">
                      <Card className="mb-4">
                        <Card.Img variant="top" src={professional.photo} />
                        <Card.Body>
                          <Card.Title>{professional.title}</Card.Title>
                          <Card.Subtitle>{professional.specialty}</Card.Subtitle>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              }
            </Row>
        </div>
    );
}

export default ProfessionalListPage;
