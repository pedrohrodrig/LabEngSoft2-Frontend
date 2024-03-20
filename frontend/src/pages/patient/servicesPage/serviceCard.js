import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ApolloLogo from "../../../assets/apollo-logo.svg"
import { Link } from "react-router-dom";

function ServiceCard({title, description}) {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body>
        <Card.Img variant="top" src={ApolloLogo} style={{width: "30%"}} className="mb-3"/>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted fs-6">
          {description}
        </Card.Text>
        <Link to="../professionals" state={{ title }}  className="d-flex justify-content-end mt-3 text-decoration-none">
          <Button variant="secondary">Busque aqui!</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
