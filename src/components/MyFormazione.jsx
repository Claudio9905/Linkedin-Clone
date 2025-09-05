import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const MyFormazione = () => {
  const [valore, setValore] = useState("");
  return (
    <>
      <Container className=" p-0">
        <Card className=" animation-start all-card my-4">
          <Card.Body>
            <Row>
              <Card.Title className=" fs-4 mb-4">Formazione</Card.Title>

              <Col xs={12}>
                <Form
                  onSubmit={() => {
                    localStorage.setItem("formazione", valore);
                  }}
                  className=" d-flex "
                >
                  <Form.Group
                    className="mb-3 flex-grow-1"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Inserisci percorso di studi"
                      onChange={(e) => {
                        setValore(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Button type="submit">SALVA</Button>
                </Form>
              </Col>
            </Row>
            <h5>{localStorage.getItem("formazione") || ""}</h5>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default MyFormazione;
