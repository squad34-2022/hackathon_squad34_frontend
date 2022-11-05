import { Container, Navbar, Nav, CardGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import "./styles.css";

function Home() {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Row className="apresentation">
        <Col className="logoOrange">
          <img
            src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1639661491/$s20z34nynz"
            alt="Logo Orange"
          />
        </Col>
        <Col className="textApresentation">
          <h1>A comunidade tech mais vitaminada!</h1>
          <h3>
            Conecte-se com pessoas com os mesmos interesses que você enquanto
            aprende sobre as maiores tendências do mundo da tecnologia 🍊
          </h3>
        </Col>
      </Row>
      <CardGroup>
        <Card className="examplesTrails">
          <Card.Img
            variant="top"
            src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$mip3cw6frz9"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>
        <Card className="examplesTrails">
          <Card.Img
            variant="top"
            src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$orvl84rg8a"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>
        <Card className="examplesTrails">
          <Card.Img
            variant="top"
            src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1662729347/$4nai9gbaeha"
          />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
      <Footer />
    </>
  );
}

export default Home;

{
  /* <div className="navBar">
        <img
          src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1654526197/$g74vm2w5o56"
          alt=""
        />
        <li>
          <ul>Home</ul>
          <ul>Trilhas</ul>
          <ul>Login</ul>
        </li>
      </div> */
}

{
  /* <div className="apresentation">
        <div className="logoOrange">
          <img
            src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1639661491/$s20z34nynz"
            alt=""
          />
        </div>
        <div className="textApresentation">
          <h1>A comunidade tech mais vitaminada!</h1>
          <h3>
            Conecte-se com pessoas com os mesmos interesses que você enquanto
            aprende sobre as maiores tendências do mundo da tecnologia 🍊
          </h3>
        </div>
      </div> */
}

{
  /* <div className="examplesTrails">Exemplo de Trilhas</div> */
}
