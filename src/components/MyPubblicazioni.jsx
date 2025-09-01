import { Card } from "react-bootstrap";

const MyPubblicazioni = () => {
  return (
    <>
      <Card className=" my-4">
        <Card.Body>
          <Card.Title>Licenze e certificazioni</Card.Title>

          <Card.Text className=" d-flex flex-column">
            <h6>"Corti si nasce: linguaggi e tecniche del videoclip"</h6>
            <p>
              Tesi di laurea triennale in Scienze e Tecnologie Multimediali
              presso l'Università degli Studi di Udine.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyPubblicazioni;
