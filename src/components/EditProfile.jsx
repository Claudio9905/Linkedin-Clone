import { Pencil } from "react-bootstrap-icons";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./alfoCss/Camera.css";

import Modale from "./Modale";
import ModaleEsperienza from "./ModaleEsperienza";
import "./alfoCss/Pencil.css";

export default function EditProfile({ style = {}, ModaleComponent }) {
  const [show, setShow] = useState(false);

  const renderModale = () => {
    if (ModaleComponent) {
      return <ModaleComponent show={show} onHide={() => setShow(false)} />;
    } else if (Modale) {
      return <Modale show={show} onHide={() => setShow(false)} />;
    } else if (ModaleEsperienza) {
      <ModaleEsperienza show={show} onHide={() => setShow(false)} />;
    }
  };

  return (
    <div>
      <div className="position-relative ">
        <Pencil
          size={18}
          className="position-absolute pencil"
          style={{ cursor: "pointer", ...style }}
          onClick={() => {
            setShow(true);
          }}
        />
      </div>
      {renderModale()}
      {/* <Modal show={show} onHide={() => setShow(false)} size="xl">
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modifica presentazione</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Nome*</p>
            <ModalInput />
            <p>Cognome*</p>
            <ModalInput />
            <p>Sommario*</p>
            <ModalInput />
          </Modal.Body>

          <Modal.Footer>
           
            <Button variant="primary">Salva</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal> */}
    </div>
  );
}
