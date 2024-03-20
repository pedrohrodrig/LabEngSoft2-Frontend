import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ApolloLogo from "../../../assets/apollo-logo.svg"


function ServiceCard({title, description}) {
  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={ApolloLogo} style={{width: "30%"}} className="mb-3"/>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted fs-6">
          {description}
        </Card.Text>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="secondary">Butao</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;
