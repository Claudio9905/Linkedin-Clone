import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import YearMonthForm from "./YearMonthForm";
import { Row, Col } from "react-bootstrap";
import "./alfoCss/placeholder.css";

import ModalInput from "./ModalInput";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addImageExperiencesAction,
  addNewExperiencesAction,
  getExperiencesAction,
} from "../redux/actions";

export default function ModaleEsperienza({ show, onHide }) {
  const dispatch2 = useDispatch();
  const Profile = useSelector((state) => {
    return state.mainProfile.me_Profile;
  });

  const today = new Date();
  const currentMonth = today.toISOString().slice(0, 7);

  const [oggettoEsperienza, setOggettoEsperienza] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    current: false,
  });
  console.log(oggettoEsperienza);
  // const[ruolo,setRuolo]= useState('')
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const newExp = await dispatch2(
                addNewExperiencesAction(Profile._id, oggettoEsperienza)
              );

              if (fileSelezionato && newExp?._id) {
                console.log(newExp);
                await dispatch2(
                  addImageExperiencesAction(
                    Profile._id,
                    newExp._id,
                    fileSelezionato
                  )
                );
              }
              await dispatch2(getExperiencesAction(Profile._id));

              onHide();
            } catch (err) {
              console.error("Errore durante il salvataggio:", err);
            }
          }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <p>Area*</p>
            <Form.Control
              type="text"
              autoFocus
              required
              placeholder="Esempio: Roma"
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

          <Form.Check
            type="checkbox"
            label="Attualmente ricopro questo ruolo"
            className="my-4 text-secondary fst-italic fw-light"
            checked={oggettoEsperienza.current}
            onChange={(e) => {
              setOggettoEsperienza((dati) => ({
                ...dati,
                current: e.target.checked,
                endDate: e.target.checked ? "" : dati.endDate,
              }));
            }}
          />

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
                  max={currentMonth}
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
                  max={currentMonth}
                  disabled={oggettoEsperienza.current}
                  value={oggettoEsperienza.endDate}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Inserisci Immagine</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setFileSelezionato(file);
                }
              }}
            />
          </Form.Group>
          {/* <YearMonthForm /> */}
          <Modal.Footer>
            <Button type=" submit" variant="primary">
              Salva
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
