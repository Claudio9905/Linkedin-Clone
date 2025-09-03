import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import YearMonthForm from "./YearMonthForm";
import { Row, Col } from "react-bootstrap";
import "./alfoCss/placeholder.css";

import ModalInput from "./ModalInput";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

export default function ModaleEsperienza({ show, onHide }) {
  const [oggettoEsperienza, setOggettoEsperienza] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  console.log(oggettoEsperienza);
  // const[ruolo,setRuolo]= useState('')
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Area*</p>
            <Form.Control
              type="text"
              autoFocus
              required
              placeholder="Esempio: Developer"
              className="custom-placeholder"
              onChange={(e) => {
                setOggettoEsperienza({
                  ...oggettoEsperienza,
                  area: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Ruolo*</p>
            <Form.Control
              type="text"
              autoFocus
              required
              placeholder="Esempio: Developer"
              className="custom-placeholder"
              onChange={(e) => {
                setOggettoEsperienza({
                  ...oggettoEsperienza,
                  role: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Azienda*</p>
            <Form.Control
              type="text"
              autoFocus
              required
              placeholder="Esempio: Microsoft"
              className="custom-placeholder"
              onChange={(e) => {
                setOggettoEsperienza({
                  ...oggettoEsperienza,
                  company: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Descrizione*</p>
            <Form.Control
              type="text"
              autoFocus
              required
              placeholder="Esempio: Ho svolto queste mansioni:"
              className="custom-placeholder"
              onChange={(e) => {
                setOggettoEsperienza({
                  ...oggettoEsperienza,
                  description: e.target.value,
                });
              }}
            />
          </Form.Group>

          {/* periodo lavorativo */}
          <Row>
            <Col xs={12} md={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <p>Data inizio*</p>
                <Form.Control
                  type="month"
                  onChange={(e) => {
                    setOggettoEsperienza({
                      ...oggettoEsperienza,
                      startDate: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <p>Data fine*</p>

                <Form.Control
                  type="month"
                  onChange={(e) => {
                    setOggettoEsperienza({
                      ...oggettoEsperienza,
                      endDate: e.target.value,
                    });
                  }}
                  required
                  max={2025}
                />
              </Form.Group>
            </Col>
          </Row>
          {/* <YearMonthForm /> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
