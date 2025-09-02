import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import YearMonthForm from "./YearMonthForm";
import { Row, Col } from "react-bootstrap";

import ModalInput from "./ModalInput";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function ModaleEsperienza({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Qualifica*</p>
            <Form.Control
              type="text"
              autoFocus
              required
              placeholder="Esempio: Developer"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Azienda*</p>
            <Form.Control
              type="text"
              autoFocus
              required
              placeholder="Esempio: Microsoft"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Settore*</p>
            <Form.Control
              type="text"
              autoFocus
              required
              placeholder="Esempio: Informatica"
            />
          </Form.Group>

          {/* periodo lavorativo */}

          <YearMonthForm />
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
