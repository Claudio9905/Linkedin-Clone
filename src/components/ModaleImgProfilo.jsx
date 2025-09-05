import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TrashFill, CameraFill, SaveFill } from "react-bootstrap-icons";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImageProfileAction } from "../redux/actions";

export default function ModaleImgProfilo({ show, onHide, src }) {
  const Profile = useSelector((state) => {
    return state.mainProfile.me_Profile;
  });
  const dispatch = useDispatch();
  const [imgProfilo, setImgProfilo] = useState(null);
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
          <div className=" d-flex flex-column ">
            <p
              variant="btn btn-outline-info"
              className="text-light  d-flex flex-column mx-auto daje"
            >
              {/* <CameraFill className=" text-light  mx-auto" /> */}
              Aggiorna foto
            </p>
            <Form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  if (imgProfilo) {
                    await dispatch(
                      addImageProfileAction(Profile?._id, imgProfilo)
                    );
                  }
                } catch (err) {
                  console.log("errore", err);
                }
              }}
            >
              <Form.Group controlId="formFileSm" className="mb-3 ">
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImgProfilo(file);
                    }
                  }}
                />
              </Form.Group>
              <Button
                type="submit"
                onClick={onHide}
                variant="btn btn-outline-info"
                className="text-light  d-flex daje mt-auto mx-auto"
              >
                {/* <SaveFill className="my-auto me-1 text-light " /> */}
                SALVA
              </Button>
            </Form>
          </div>
          <Button
            variant="btn btn-outline-info"
            className="text-light  d-flex daje mt-auto mx-auto"
          >
            {/* <TrashFill className="my-auto me-1 text-light " /> */}
            ELIMINA
          </Button>
        </Modal.Footer>
        {/* </Modal.Dialog> */}
      </div>
    </Modal>
  );
}
