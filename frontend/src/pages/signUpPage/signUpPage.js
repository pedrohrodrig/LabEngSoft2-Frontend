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
        <Form className="pl-3 pr-3" style={{width: "100%", "overflow-y": "scroll", "overflow-x": "hidden"}}>
          <Row>
              <Form.Group as={Col} className="mb-3" controlId="formName">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control placeholder="Digite seu nome" />
              </Form.Group>
          </Row>
          <Row>
              <Form.Group as={Col} className="mb-3" controlId="formMobilePhone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="number" placeholder="11999999999" />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formBirthDate">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
          </Row>
          <Row>
              <Form.Group as={Col} className="mb-3" controlId="formCPF">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="number" placeholder="Apenas números" />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formRG">
                <Form.Label>RG</Form.Label>
                <Form.Control type="number" placeholder="Apenas números" />
              </Form.Group>
          </Row>
          <Row>
              <Form.Group as={Col} className="mb-3" controlId="formHeight">
                <Form.Label>Altura</Form.Label>
                <Form.Control type="number" placeholder="Em metros" />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formWeight">
                <Form.Label>Peso</Form.Label>
                <Form.Control type="number" placeholder="Em kg" />
              </Form.Group>
          </Row>
          <Row>
              <Form.Group as={Col} className="mb-3" controlId="formEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>
          </Row>
          <Row>
              <Form.Group as={Col} className="mb-3" controlId="formPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control type="password" placeholder="Confirme sua senha" />
              </Form.Group>
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
