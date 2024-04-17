import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ApolloLogo from "../../../assets/apollo-logo.svg"
import { Link } from "react-router-dom";

import './serviceCard.css'

function ServiceCard({ title, description }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Img variant="top" src={ApolloLogo} style={{ width: "30%", margin: '0.2rem' }} className="mb-3" />
        <Card.Title style={{ fontWeight: 'bold', margin: '0.2rem' }}>{title}</Card.Title>
        <hr className="divider" />
        <p className="description">
          {description}
        </p>
        <Link to="../professionals" state={{ title }} className="d-flex justify-content-end mt-3 text-decoration-none">
          <Button variant="secondary" className="select">Buscar!</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
