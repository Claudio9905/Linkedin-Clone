import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TrashFill, CameraFill } from "react-bootstrap-icons";

export default function ModaleImgProfilo({ show, onHide, src }) {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <div className="bg-dark">
        {/* <Modal.Dialog className="w-75"> */}
        <Modal.Header closeButton closeVariant="white" className="bg-dark">
          <Modal.Title className="text-light">Foto profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark d-flex justify-content-center">
          <img
            src={src}
            alt="immagine profilo"
            className=" rounded-circle"
            style={{ width: "18em" }}
          />
        </Modal.Body>

        <Modal.Footer className="bg-dark d-flex justify-content-between">
          <Button
            variant="btn btn-outline-info"
            className="text-light  d-flex flex-column daje"
          >
            <CameraFill
              className=" text-light justify-content-center"
              style={{ marginLeft: "2.5em" }}
            />
            Aggiorna foto
          </Button>
          <Button
            variant="btn btn-outline-info"
            className="text-light  d-flex flex-column daje"
          >
            <TrashFill className="ms-3 text-light" />
            Elimina
          </Button>
        </Modal.Footer>
        {/* </Modal.Dialog> */}
      </div>
    </Modal>
  );
}
