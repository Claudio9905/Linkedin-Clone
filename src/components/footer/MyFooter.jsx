import { Container, Row, Col } from "react-bootstrap";
import "./MyFooter.css";
import { QuestionCircle, Shield, Gear } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";

export default function MyFooter() {
  return (
    <footer style={{ backgroundColor: "#f4f2ee" }}>
      <Container>
        <Row>
          <Col>
            <ul>
              <li>
                <a href="#">Informazioni</a>
              </li>
              <li>
                <a href="#">Informazioni sulla Community professionale</a>
              </li>
              <li>
                <a href="#">Privacy e condizioni</a>
              </li>
              <li>
                <a href="#">Salese Solutions</a>
              </li>
              <li>
                <a href="#">Centro sicurezza</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="#">Accessibilità</a>
              </li>
              <li>
                <a href="#">Carriera</a>
              </li>
              <li>
                <a href="#">Opzioni per gli annunci pubblicitari</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="#">Talent Solutions</a>
              </li>
              <li>
                <a href="#">Soluzioni di marketing</a>
              </li>
              <li>
                <a href="#">Pubblicità</a>
              </li>
              <li>
                <a href="#">Piccole imprese</a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>
                <QuestionCircle className="me-1 fs-6" />
                <a href="#">Domande?</a>
                <p>Visita il nostro Centro assistenza.</p>
              </li>
              <li>
                <Gear className="me-1 fs-6" />
                <a href="#">Gestisci il tuo account e la tua privacy</a>
                <p> Vai alle impostazioni</p>
              </li>

              <li>
                <Shield className="me-1 fs-6" />
                <a href="#">Trasparenza sui contenuti consigliati </a>
                <p>Scopri di più sui contenuti consigliati.</p>
              </li>
            </ul>
          </Col>
          <Col>
            <p className="pt-2">Seleziona lingua</p>
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="w-100"
                style={{ color: "#666664" }}
              >
                Italiano (italiano)
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Inglese</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Spagnolo</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Francese</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <p className="fs-6">
            Linkedin Corporation - © {new Date().getFullYear()}
          </p>
        </Row>
      </Container>
    </footer>
  );
}
