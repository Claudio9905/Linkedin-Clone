// import { useState } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModaleInformazioni({ show, onHide }) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const [valoreInput, setValoreInput] = useState("");
  return (
    <Modal show={show} onHide={onHide} size="md">
      <Modal.Header closeButton>
        <Modal.Title>Modifica informazioni</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={() => {
            localStorage.setItem("informazioni", valoreInput);
          }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              onChange={(e) => {
                setValoreInput(e.target.value);
              }}
              placeholder="Scrivi qualcosa su di te..."
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={onHide}>
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
