import "./styles.css";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Row className="justify-content-md-center footer-container">
        <Col xs lg="5">
          <div>
            <img
              src="https://d335luupugsy2.cloudfront.net/cms/files/107693/1654865437/$khtwl6dbna"
              alt=""
            />
          </div>
        </Col>
        <Col lg="5">
          <div className="items-footer">
            <li>
              <ul>Home</ul>
              <ul>Trilhas</ul>
              <ul>Comunidade</ul>
              <ul>Contato</ul>
            </li>
          </div>
        </Col>
        <Col xs lg="5">
          <div className="localizations">
            <li>
              <ul>
                <p>Onde Estamos</p>
              </ul>
              <ul>
                <div>
                  <p>São Paulo</p>
                  <p>MATRIZ</p>
                </div>
              </ul>
              <ul>
                <p>
                  Rua Bela Cintra, 986 - 2º andar Consolação, São Paulo - SP
                </p>
              </ul>
              <ul>
                <div>
                  <p>Santos</p>
                  <p>FILIAL</p>
                </div>
              </ul>
              <ul>
                <p>
                  Praça dos Expedicionários, 19 Sala 22 Gonzaga, Santos - SP
                </p>
              </ul>
            </li>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
