import { Pencil } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function EditProfile({ style = {} }) {
  const [show, setShow] = useState(false);
  return (
    <div className="position-relative">
      <Pencil
        size={18}
        className="position-absolute cursor-pointer"
        style={{ cursor: "pointer", ...style }}
        onClick={() => {
          setShow(true);
        }}
      />
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}
