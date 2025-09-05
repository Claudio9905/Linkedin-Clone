import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import { CaretDownFill } from "react-bootstrap-icons";
import ModaleCreaPost from "./ModaleCreaPost";

const CreatePost = ({ profile }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card>
      <div className="py-3 px-2 d-flex ">
        <img
          src={profile.image}
          alt="immagine di profilo"
          className="rounded-circle me-2 object-fit-cover"
          width={50}
          height={50}
        />
        <button
          className="w-100 ps-3 border border-1 border-secondary text-start rounded-pill fw-bold btn-post"
          onClick={handleShow}
        >
          Crea un post
        </button>
        <ModaleCreaPost
          show={show}
          onHide={() => {
            setShow(false);
          }}
          profile={profile}
          handleClose={handleClose}
        />
      </div>
    </Card>
  );
};

export default CreatePost;
