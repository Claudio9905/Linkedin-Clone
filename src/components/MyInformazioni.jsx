import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import { useState } from "react";
import EditProfile from "./EditProfile";
const MyInformazione = () => {
  const [mostraAltro, setMostraAltro] = useState("overflow-hidden ellipsis");
  const [nascondiBtn, setNascondiBtn] = useState("");
  return (
    <>
      <Card className=" my-4 animation-start all-card">
        <Card.Body>
          <Card.Title className=" fs-4">Informazioni</Card.Title>
          <EditProfile style={{ bottom: 16, right: 40 }} />
          <Card.Text>
            Technology enthusiast and computer science expert with effective
            communication abilities. Frontend and mobile apps developer,
            passionate computer consultant.
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
