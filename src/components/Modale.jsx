// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ModalInput from "./ModalInput";
import ModaleEsperienza from "./ModaleEsperienza";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Modale({ show, onHide }) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={onHide} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Modifica presentazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <p>Nome*</p>
              <Form.Control type="text" autoFocus required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <p>Cognome*</p>
              <Form.Control type="text" autoFocus required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <p>Sommario*</p>
              <Form.Control type="text" autoFocus required />
            </Form.Group>
            <h5>Località</h5>
            <p>Paese/Area geografica*</p>
            <ModalInput />
            <p>Città*</p>
            <ModalInput />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;
