import { Button, Form } from "react-bootstrap";
import "./styles.css";

function FormRegister() {
  return (
    <Form>
      <div className="title-container">
        <h1 className="title">Cadastro</h1>
      </div>
      <Form.Group className="mb-3" controlId="formBasicNome">
        <Form.Label hidden>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label hidden>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label hidden>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Button type="submit" variant="primary">
        Cadastrar
      </Button>
    </Form>
  );
}

export default FormRegister;
