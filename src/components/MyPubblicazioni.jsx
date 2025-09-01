import { Card } from "react-bootstrap";

const MyPubblicazioni = () => {
  return (
    <>
      <Card className=" my-4 animation-start all-card">
        <Card.Body>
          <Card.Title className=" fs-4">Licenze e certificazioni</Card.Title>

          <div className=" d-flex flex-column">
            <h6>"Corti si nasce: linguaggi e tecniche del videoclip"</h6>
            <p>
              Tesi di laurea triennale in Scienze e Tecnologie Multimediali
              presso l'Università degli Studi di Udine.
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyPubblicazioni;
