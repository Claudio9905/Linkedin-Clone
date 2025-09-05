import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const MyLicenze = () => {
  const [valore, setValore] = useState("");
  return (
    <>
      <Container className=" p-0">
        <Card className=" animation-start all-card my-4">
          <Card.Body>
            <Row>
              <Card.Title className=" fs-4 mb-4">
                Licenze e Certificazioni
              </Card.Title>

              <Col xs={12}>
                <Form
                  onSubmit={() => {
                    localStorage.setItem("licenze", valore);
                  }}
                  className=" d-flex "
                >
                  <Form.Group
                    className="mb-3 flex-grow-1"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Inserisci licenze o certificazioni"
                      onChange={(e) => {
                        setValore(e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className=" h-100 ms-1 rounded-5"
                    variant="outline-primary"
                  >
                    SALVA
                  </Button>
                </Form>
              </Col>
            </Row>
            <h5>{localStorage.getItem("licenze") || ""}</h5>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default MyLicenze;
