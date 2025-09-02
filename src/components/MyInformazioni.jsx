import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import { useState } from "react";

import EditProfile from "./EditProfile";

import ModaleInformazioni from "./ModaleInformazioni";
import { Form } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
const MyInformazione = () => {
  const [mostraAltro, setMostraAltro] = useState("overflow-hidden ellipsis");
  const [nascondiBtn, setNascondiBtn] = useState("");
  const [nascondiInput, setNascondiInput] = useState("");
  const [valoreInputInfo, setValoreInputInfo] = useState("");
  const [testo, setTesto] = useState("");

  return (
    <>
      <Card className=" my-4 animation-start all-card">
        <Card.Body>
          <Card.Title className=" fs-4">Informazioni</Card.Title>

          <EditProfile
            style={{ bottom: 16, right: 25 }}
            ModaleComponent={ModaleInformazioni}
          />
          <Card.Text>
            <Form
              onSubmit={(e) => {
                setValoreInputInfo("");
                setNascondiInput("d-none");
                e.preventDefault();
              }}
              className={` d-flex ${nascondiInput}`}
            >
              <Form.Control
                value={valoreInputInfo}
                size="md"
                type="text"
                placeholder="Scrivi le tue informazioni"
                onChange={(e) => {
                  setValoreInputInfo(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setTesto(valoreInputInfo);
                  }
                }}
              />
              <Button type="submit">Invia</Button>
            </Form>

            <p>
              {testo}{" "}
              <PencilSquare
                onClick={() => {
                  setNascondiInput("");
                }}
              />
            </p>
          </Card.Text>
          <div className=" d-flex">
            <Card.Text className={` m-0 ${mostraAltro}`}>
              Sono un appassionato di tecnologia molto competente nel ramo
              informatico, mobile e multimediale, dotato di grandi capacità
              comunicative. Frontend & mobile apps developer, consulente
              informatico per passione.
            </Card.Text>
            <button
              className={`${nascondiBtn} border-0 bg-white text-nowrap text-primary `}
              onClick={() => {
                setMostraAltro("");
                setNascondiBtn("d-none");
              }}
            >
              vedi altro
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyInformazione;
