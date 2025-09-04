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
  const stringa = localStorage.getItem("informazioni");

  return (
    <>
      <Card className=" my-4 animation-start all-card">
        <Card.Body>
          <Card.Title className=" fs-4">Informazioni</Card.Title>

          <EditProfile
            style={{ bottom: 16, right: 25 }}
            ModaleComponent={ModaleInformazioni}
          />
          <Card.Text></Card.Text>
          <div>
            <Card.Text className={` m-0 ${mostraAltro}`}>{stringa}</Card.Text>
            {stringa.length > 70 && (
              <button
                className={`${nascondiBtn} border-0 bg-white text-nowrap text-primary `}
                onClick={() => {
                  setMostraAltro("");
                  setNascondiBtn("d-none");
                }}
              >
                vedi altro
              </button>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyInformazione;
