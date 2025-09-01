import { Container, Row, Col } from "react-bootstrap";
import "./MyFooter.css";
import {
  QuestionCircle,
  Shield,
  Gear,
  CaretDownFill,
} from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";

export default function MyFooter() {
  return (
    <footer style={{ backgroundColor: "#f4f2ee" }} className="pe-5">
      <Container>
        <Row>
          <Col>
            <ul>
              <li>
                <a href="#" target="_blank">
                  Informazioni
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Informativa sulla Community professionale
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Privacy e condizioni <CaretDownFill size={10} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Sales Solutions
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Centro sicurezza
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="#" target="_blank">
                  Accessibilità
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Carriera
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Mobile
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <a href="#" target="_blank">
                  Talent Solutions
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Soluzioni di marketing
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Pubblicità
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Piccole imprese
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>
                <QuestionCircle className="me-1 fs-6" />
                <a href="#" target="_blank">
                  Domande?
                </a>
                <p>Visita il nostro Centro assistenza.</p>
              </li>
              <li>
                <Gear className="me-1 fs-6" />
                <a href="#" target="_blank">
                  Gestisci il tuo account e la tua privacy
                </a>
                <p> Vai alle impostazioni</p>
              </li>

              <li>
                <Shield className="me-1 fs-6" />
                <a href="#" target="_blank">
                  Trasparenza sui contenuti consigliati{" "}
                </a>
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
            LinkedIn Corporation © {new Date().getFullYear()}
          </p>
        </Row>
      </Container>
    </footer>
  );
}
