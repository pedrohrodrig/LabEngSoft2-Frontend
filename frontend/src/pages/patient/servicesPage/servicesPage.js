import React from "react";
import Title from "../../../components/title/title";
import ServiceCard from "./serviceCard";

import "./servicesPage.css"

function ServicesPage() {

  return (
    <div className="services page">
      <Title head={'Serviços'} />
      <div className="content">
        <div className="column">
          <ServiceCard
            className="card"
            title={"Médico"}
            description="Agende consultas com os melhores médicos do conforto da sua casa"
          />
          <ServiceCard
            className="card"
            title={"Psicólogo"}
            description="Tenha acesso a tratamento psicológico com os melhores profissionais"
          />
        </div>
        <div className="column">
          <ServiceCard
            className="card"
            title={"Nutricionista"}
            description="Acompanhe e melhora sua dieta com refeições personalizadas"
          />
          <ServiceCard
            className="card"
            title={"Personal Trainer"}
            description="Monte um treino específico para você e para os seus objetivos"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
