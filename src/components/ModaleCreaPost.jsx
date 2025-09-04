import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { CaretDownFill, EmojiSmile } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import {
  createPostAction,
  SET_ERROR,
  uploadPostImageAction,
} from "../redux/actions";
import EmojiPicker from "emoji-picker-react";

const ModaleCreaPost = ({ show, onHide, profile, handleClose }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({ text: "" });
  const [image, setImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // se non viene inserito niente come testo non faccio pubblicare
    if (!input.text.trim()) return;

    dispatch({ type: SET_ERROR, payload: null });
    // Creo il post testuale
    const createAction = createPostAction(input);
    createAction(dispatch) // perché è una thunk quindi una funzione che torna una funzione
      .then((newPost) => {
        // Se c’è immagine, faccio upload
        if (image && newPost?._id) {
          const formData = new FormData();
          formData.append("post", image);

          const uploadAction = uploadPostImageAction(newPost._id, formData);
          return uploadAction(dispatch);
        }
      })
      .then(() => {
        console.log("immagine aggiornata");
        // Resetto e chiudo
        setInput({ text: "" });
        setImage(null);
        handleClose();
      })
      .catch((err) => {
        console.error("Errore nel flusso di creazione post:", err);
      });
  };

  return (
    <Modal show={show} onHide={onHide} animation={false}>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="d-flex align-items-center pointer modalheaderdiv p-2">
          <div className="me-2">
            <img
              src={profile.image}
              alt="User"
              width={60}
              height={60}
              className="rounded-circle"
            />
          </div>
          <div>
            <h4 className="mb-0 lh-1">
              {profile.name} {profile.surname}{" "}
              <CaretDownFill className="text-muted fs-6" />
            </h4>
            <p className="pfont">Pubblica: chiunque</p>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group
            className="mb-3 position-relative"
            controlId="createPostInput"
          >
            <Form.Control
              type="text"
              autoFocus
              required
              placeholder="Di cosa vorresti parlare?"
              className="border-0 input-post"
              value={input.text}
              onChange={(e) =>
                setInput({
                  ...input,
                  text: e.target.value,
                })
              }
            />

            <EmojiSmile
              className="position-absolute"
              style={{
                left: 10,
                top: "90%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 2,
              }}
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />

            {showEmojiPicker && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 1000,
                }}
              >
                <EmojiPicker
                  className="z-3"
                  onEmojiClick={(emojiObject) => {
                    setInput({
                      input,
                      text: input.text + emojiObject.emoji,
                    });
                    setShowEmojiPicker(false);
                  }}
                />
              </div>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="createPostImage">
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" className="rounded-pill" type="submit">
            Pubblica
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModaleCreaPost;
