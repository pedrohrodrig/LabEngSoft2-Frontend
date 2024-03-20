import React from "react";
import Title from "../../components/title/title";

import { Form, Button, Row, Col } from "react-bootstrap";

function SignUpPage() {

    return (
      <div className="page">
        <Title
          head="Cadastro"
          body="Todos os serviços de saúde em um só lugar"
        />
        {/* TODO: adicionar validação do Forms via Formik (?)*/}
        <Form style={{width: "100%"}}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control placeholder="Digite seu nome" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formMobilePhone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="number" placeholder="11999999999" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBirthDate">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formHeight">
                <Form.Label>Altura</Form.Label>
                <Form.Control type="number" placeholder="Em metros" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formWeight">
                <Form.Label>Peso</Form.Label>
                <Form.Control type="number" placeholder="Em kg" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control type="password" placeholder="Confirme sua senha" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formCheckbox">
            <Form.Check type="checkbox" label="Concordo com os termos e condições" />
          </Form.Group>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="submit" size="lg">
              Finalizar
            </Button>
          </div>
        </Form>
      </div>
    );
}

export default SignUpPage;
