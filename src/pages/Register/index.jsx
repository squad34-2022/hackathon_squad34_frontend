import { Col, Container, Image, Row } from "react-bootstrap";
import background from "../../assets/background-register.png";
import FormRegister from "../../components/Form_register";
import "./styles.css";
export default function Register() {
  return (
    <Container fluid className="g-0 ">
      <Row>
        <Col className="col-lg-6 image-container">
          <Image
            src={background}
            className="image-background"
            alt="background-register"
          />
        </Col>
        <Col className="d-flex justify-content-center align-items-center col-lg-6 register-container">
          <FormRegister />
        </Col>
      </Row>
    </Container>
  );
}
