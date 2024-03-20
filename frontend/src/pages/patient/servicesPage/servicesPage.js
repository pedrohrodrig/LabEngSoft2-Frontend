import React from "react";
import Title from "../../../components/title/title";
import ServiceCard from "./serviceCard";

import { Row, Col } from "react-bootstrap";

import "./servicesPage.css"

function ServicesPage() {

    return (
      <div className="services page">
        <Title
          head="Serviços"
          body="Escolha o serviço que deseja utilizar"
        />
        <Row xs={1} md={2} className="g-4">
          <Col className="d-flex justify-content-center">
            <ServiceCard
              title="Médicos"
              description="Agende consultas com os melhores médicos do conforto da sua casa"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <ServiceCard
              title="Psicólogos"
              description="Tenha acesso a tratamento psicológico com os melhores profissionais"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <ServiceCard
              title="Nutricionistas"
              description="Acompanhe e melhora sua dieta com refeições personalizadas"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <ServiceCard
              title="Personal Trainer"
              description="Monte um treino específico para você e para os seus objetivos"
            />
          </Col>
        </Row>
      </div>
    );
}

export default ServicesPage;
